import { Home, Wrench, Recycle, DollarSign } from "lucide-react"

const reasons = [
  {
    icon: Home,
    title: "Protect Your Space",
    description: "Feel secure in your rental without permanent installations that violate your lease.",
  },
  {
    icon: Wrench,
    title: "Zero Installation",
    description: "No drilling, no wiring, no damage. Setup takes minutes with adhesive mounting.",
  },
  {
    icon: Recycle,
    title: "Eco-Conscious Design",
    description: "Solar-powered options and sustainable materials reduce your carbon footprint.",
  },
  {
    icon: DollarSign,
    title: "Take It With You",
    description: "Moving? Simply remove and reinstall in your new place. Your security travels with you.",
  },
]

export function WhyRenters() {
  return (
    <section id="why-renters" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-balance">
            Designed for Modern Renters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Traditional security systems weren't built for apartment living. We created something better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto glow-green">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
