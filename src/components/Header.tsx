import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SaaS Pro</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4">
                <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                  Features
                </a>
                <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
                  Testimonials
                </a>
                <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
                  Pricing
                </a>
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button size="sm" className="justify-start">
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}