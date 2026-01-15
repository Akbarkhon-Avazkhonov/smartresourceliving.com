import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1B4332]/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center glow-green">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Smart<span className="text-primary">Resource</span>Living
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#why-renters" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Why Renters
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
