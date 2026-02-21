const steps = [
  {
    number: "1",
    title: "Skill Mapping",
    description:
      "Analyze your degree and identify critical industry gaps.",
    isLast: false,
  },
  {
    number: "2",
    title: "Custom Path",
    description:
      "Generate a personalized learning roadmap in minutes.",
    isLast: false,
  },
  {
    number: "3",
    title: "Active Build",
    description:
      "Develop real features for actual open-source projects.",
    isLast: false,
  },
  {
    number: "4",
    title: "Validation",
    description:
      "Pass technical gatekeepers via peer-reviewed output.",
    isLast: false,
  },
  {
    number: "5",
    title: "Deployment",
    description:
      "Automatic placement in our network of high-growth tech firms.",
    isLast: true,
  },
];

export default function TransitionSteps() {
  return (
    <section className="py-24 bg-background-light overflow-hidden" id="path">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Your 5-Step Transition
          </h2>
          <p className="text-slate-500">
            From academic theory to professional excellence.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-10 left-0 w-full h-0.5 border-t border-dashed border-slate-300 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div
                  className={`size-20 rounded-full ${
                    step.isLast
                      ? "bg-primary border-4 border-white shadow-glow"
                      : "bg-white border-4 border-background-light shadow-sm"
                  } flex items-center justify-center mb-6 relative z-10`}
                >
                  <span
                    className={`text-2xl font-black ${
                      step.isLast ? "text-white" : "text-primary"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2 px-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
