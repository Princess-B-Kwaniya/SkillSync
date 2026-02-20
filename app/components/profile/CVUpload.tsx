"use client"

import React, { useState } from 'react'

type Extracted = {
  name?: string
  email?: string
  skills?: string[]
}

export default function CVUpload({ onApply }: { onApply: (data: Extracted) => void }){
  const [fileName, setFileName] = useState<string | null>(null)
  const [previewText, setPreviewText] = useState<string | null>(null)
  const [extracted, setExtracted] = useState<Extracted>({})
  const [parsing, setParsing] = useState(false)
  const [pagesParsed, setPagesParsed] = useState<number | null>(null)

  const popularSkills = ['JavaScript','TypeScript','React','Node.js','HTML','CSS','Python','SQL','AWS','Docker','Git']

  function tryExtract(text: string){
    const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
    const email = emailMatch ? emailMatch[0] : undefined

    // Heuristic for name: look for first line or two with capitalized words (short)
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
    let name: string | undefined
    if (lines.length) {
      const candidate = lines[0]
      if (/^[A-Z][a-z]+(?: [A-Z][a-z]+){0,2}$/.test(candidate)) {
        name = candidate
      } else if (lines.length > 1 && /^[A-Z][a-z]+(?: [A-Z][a-z]+){0,2}$/.test(lines[1])) {
        name = lines[1]
      }
    }

    // skills: find occurrences of popular skills
    const found = new Set<string>()
    const low = text.toLowerCase()
    popularSkills.forEach(s => { if (low.includes(s.toLowerCase())) found.add(s) })

    setExtracted({ name, email, skills: Array.from(found) })
  }

  function handleFile(f?: File){
    if (!f) return
    setFileName(f.name)
    // If PDF, use pdfjs to extract text pages; if DOCX use mammoth; otherwise fall back to readAsText
    const name = f.name.toLowerCase()
    const isPdf = f.type === 'application/pdf' || name.endsWith('.pdf')
    const isDocx = name.endsWith('.docx') || name.endsWith('.doc')
    if (isPdf) {
      setParsing(true)
      setPagesParsed(null)
      const reader = new FileReader()
      reader.onload = async () => {
        try {
          const arrayBuffer = reader.result as ArrayBuffer
          // dynamic import to keep bundle size small
          const pdfjs = await import('pdfjs-dist/legacy/build/pdf')
          // try setting a CDN worker as a fallback (non-blocking)
          try {
            ;(pdfjs as any).GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${(pdfjs as any).version}/pdf.worker.min.js`
          } catch {}
          const loadingTask = (pdfjs as any).getDocument({ data: arrayBuffer })
          const pdf = await loadingTask.promise
          const pageCount = pdf.numPages || 0
          let fullText = ''
          for (let i = 1; i <= pageCount; i++) {
            const page = await pdf.getPage(i)
            const content = await page.getTextContent()
            const strings = content.items.map((it: any) => typeof it.str === 'string' ? it.str : '')
            fullText += '\n' + strings.join(' ')
            setPagesParsed(i)
          }
          setPreviewText(fullText.slice(0, 2000))
          tryExtract(fullText)
        } catch (err) {
          // fallback: try reading as text
          const fallback = new FileReader()
          fallback.onload = () => {
            const txt = String(fallback.result || '')
            setPreviewText(txt.slice(0, 2000))
            tryExtract(txt)
          }
          fallback.readAsText(f)
        } finally {
          setParsing(false)
        }
      }
      reader.readAsArrayBuffer(f)
    } else if (isDocx) {
      setParsing(true)
      try {
        const reader = new FileReader()
        reader.onload = async () => {
          try {
            const arrayBuffer = reader.result as ArrayBuffer
            const mammoth = await import('mammoth')
            // mammoth.extractRawText returns { value: string }
            const result = await (mammoth as any).extractRawText({ arrayBuffer })
            const txt = result && result.value ? String(result.value) : ''
            setPreviewText(txt.slice(0, 2000))
            tryExtract(txt)
          } catch (err) {
            // fallback: try reading as text
            const fallback = new FileReader()
            fallback.onload = () => {
              const txt = String(fallback.result || '')
              setPreviewText(txt.slice(0, 2000))
              tryExtract(txt)
            }
            fallback.readAsText(f)
          } finally {
            setParsing(false)
          }
        }
        reader.readAsArrayBuffer(f)
      } catch (err) {
        setParsing(false)
      }
    } else {
      const reader = new FileReader()
      reader.onload = () => {
        const txt = String(reader.result || '')
        setPreviewText(txt.slice(0, 2000))
        tryExtract(txt)
      }
      // attempt to read as text; for PDFs this may still contain extractable text fragments
      reader.readAsText(f)
    }
  }

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium">Upload CV / Resume</label>
      <input type="file" accept=".pdf,.txt,.doc,.docx" className="input mt-1 w-full" onChange={e => handleFile(e.target.files?.[0])} />
      {fileName && <div className="mt-2 text-sm">Selected: <strong>{fileName}</strong></div>}

      {previewText && (
        <div className="mt-3 p-3 bg-gray-50 border rounded text-sm max-h-52 overflow-auto">
          <div className="font-medium">Preview (first 2KB)</div>
          <pre className="whitespace-pre-wrap text-xs mt-2">{previewText}</pre>
        </div>
      )}

      {parsing && (
        <div className="mt-2 text-sm text-slate-600">Parsing file... {pagesParsed ? `${pagesParsed} page(s) parsed` : ''}</div>
      )}

      <div className="mt-3">
        <div className="text-sm font-medium">Detected</div>
        <div className="mt-2 text-sm">
          <div><strong>Name:</strong> {extracted.name || '—'}</div>
          <div><strong>Email:</strong> {extracted.email || '—'}</div>
          <div><strong>Skills:</strong> {(extracted.skills || []).join(', ') || '—'}</div>
        </div>
        <div className="mt-3 grid grid-cols-1 sm:auto-cols-min sm:grid-flow-col gap-2">
          <button type="button" className="btn-primary w-full sm:w-auto" onClick={() => onApply(extracted)}>Autofill Profile</button>
          <button type="button" className="btn-secondary w-full sm:w-auto" onClick={() => { setFileName(null); setPreviewText(null); setExtracted({}) }}>Clear</button>
        </div>
        <div className="mt-2 text-xs text-slate-500">Note: Text extraction is best-effort. For best results upload a text or copy-paste friendly resume.</div>
      </div>
    </div>
  )
}
