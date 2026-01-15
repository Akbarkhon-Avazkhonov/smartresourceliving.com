import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { WhyRenters } from "@/components/why-renters"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url(/images/hero-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ProductGrid />
        <WhyRenters />
        <HowItWorks />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}
