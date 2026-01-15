import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Brooklyn, NY",
    text: "Finally, a security system that doesn't require my landlord's approval! Setup was incredibly easy.",
    rating: 5,
    image: "/professional-woman-smiling.png",
  },
  {
    name: "Marcus Rodriguez",
    location: "Austin, TX",
    text: "Love that it's solar-powered. Moved apartments twice and took it with me both times.",
    rating: 5,
    image: "/professional-man-smiling.png",
  },
  {
    name: "Emma Thompson",
    location: "Seattle, WA",
    text: "The smart alerts give me peace of mind when I'm traveling. Worth every penny!",
    rating: 5,
    image: "/young-woman-smiling-outdoors.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-balance">
            Loved by Renters Everywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of renters who've upgraded their security without sacrificing their deposit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 glass-card space-y-4 hover:scale-105 transition-transform">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
