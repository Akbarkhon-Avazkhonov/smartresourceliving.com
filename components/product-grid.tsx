import { Card } from "@/components/ui/card"
import { Sun, Radio, Lock, Camera, Shield, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    icon: Sun,
    name: "Sun-Powered Eye",
    description: "Solar-charged window cameras with motion detection",
    price: "$89",
    features: ["No wiring", "180° view", "Night vision"],
    color: "primary",
  },
  {
    icon: Radio,
    name: "Tape-and-Go Guard",
    description: "Motion sensors with eco-friendly adhesive strips",
    price: "$49",
    features: ["Pet-friendly", "Instant alerts", "Removable"],
    color: "secondary",
  },
  {
    icon: Lock,
    name: "Smart Entry Shield",
    description: "Bluetooth door locks that fit over existing hardware",
    price: "$129",
    features: ["No drilling", "App control", "Auto-lock"],
    color: "primary",
  },
  {
    icon: Camera,
    name: "Cloud Vision",
    description: "HD cameras with 30-day cloud storage",
    price: "$69",
    features: ["1080p HD", "Cloud backup", "Easy mount"],
    color: "secondary",
  },
  {
    icon: Shield,
    name: "Full Apartment Kit",
    description: "Complete security bundle for 1-2 bedroom apartments",
    price: "$299",
    features: ["4 sensors", "2 cameras", "1 smart lock"],
    color: "primary",
    featured: true,
  },
  {
    icon: Wifi,
    name: "Smart Hub",
    description: "Central control hub for all your security devices",
    price: "$59",
    features: ["WiFi 6", "Voice control", "Compact"],
    color: "secondary",
  },
]

export function ProductGrid() {
  return (
    <section id="products" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-balance">
            The Renters' Shield
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Non-invasive security solutions designed specifically for apartment living. Protect your space without
            losing your deposit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={index}
                className={`p-6 glass-card hover:scale-105 transition-transform duration-300 ${
                  product.featured ? "lg:col-span-1 border-2 border-primary glow-green" : ""
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      product.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${product.color === "primary" ? "text-primary" : "text-secondary"}`} />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-muted text-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    
                    <Button
                      size="sm"
                      className={
                        product.color === "primary"
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      }
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
