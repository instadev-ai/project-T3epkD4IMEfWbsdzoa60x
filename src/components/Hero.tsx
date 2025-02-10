import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400 text-4xl font-bold tracking-tight sm:text-6xl">
            Transform Your Business with Our SaaS Solution
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Streamline your workflow, boost productivity, and scale your business with our powerful platform. Join thousands of satisfied customers who have already revolutionized their operations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="rounded-full">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Learn More
            </Button>
          </div>
          <div className="mt-16 flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">10k+</span>
              <span className="text-sm text-muted-foreground">Active Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">98%</span>
              <span className="text-sm text-muted-foreground">Satisfaction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">24/7</span>
              <span className="text-sm text-muted-foreground">Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}