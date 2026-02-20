import Hero from './components/home/Hero'
import HowItWorks from './components/home/HowItWorks'
import CTASection from './components/home/CTASection'

export default function Home(){
  return (
    <div className="space-y-8">
      <div className="px-4">
        <Hero />
      </div>

      {/* banner removed to avoid empty placeholder */}

      <div className="px-4">
        <HowItWorks />
        <CTASection />
      </div>
    </div>
  )
}
