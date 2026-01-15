import { ShieldCheck, Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center glow-green">
                <ShieldCheck className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">SmartResourceLiving</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed max-w-md">
              Empowering renters with non-permanent, eco-friendly smart security solutions. Protect your space, respect
              your lease.
            </p>
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-background/20 hover:bg-primary hover:border-primary bg-transparent"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-background/20 hover:bg-primary hover:border-primary bg-transparent"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-background/20 hover:bg-primary hover:border-primary bg-transparent"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Security Cameras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Motion Sensors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Smart Locks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Complete Kits
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>&copy; 2026 SmartResourceLiving. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
