import { Package, Smartphone, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Choose Your Kit",
    description: "Select the perfect security bundle for your apartment size and needs.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "5-Minute Setup",
    description: "Use adhesive strips and wireless tech to install without tools or damage.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Stay Protected",
    description: "Monitor your home from anywhere with smart alerts and live viewing.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">Security in Three Simple Steps</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            From unboxing to protection in less time than it takes to make coffee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="space-y-4">
                  <div className="font-display text-6xl font-bold opacity-20">{step.number}</div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/90 flex items-center justify-center glow-green">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{step.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-6 w-12 h-0.5 bg-primary/30" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
