import { Button } from "@/components/ui/button"
import { ShieldCheck, Leaf, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Zero Footprint Security</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
              Smart Security. <span className="text-primary glow-green inline-block">Zero Footprint.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Non-permanent, energy-saving security kits curated for the modern renter. Setup in minutes, leave no
              trace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green text-lg px-8"
              >
                <ShieldCheck className="w-5 h-5 mr-2" />
                Explore Kits
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8 bg-transparent"
              >
                See How It Works
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">5-min setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Eco-friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Lease-safe</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 glow-green">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative">
                <img
                  src="/modern-apartment-living-room-with-indoor-plants-an.jpg"
                  alt="Smart apartment with eco security"
                  className="w-full h-full object-cover"
                />
                {/* Floating status indicators */}
                <div className="absolute top-4 right-4 glass-card rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium text-foreground">All Secure</span>
                </div>

                <div className="absolute bottom-4 left-4 glass-card rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">3 sensors active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">Solar powered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
