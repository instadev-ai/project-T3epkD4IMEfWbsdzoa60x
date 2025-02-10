import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content: "This platform has completely transformed how we operate. The efficiency gains are remarkable, and our team loves using it.",
    image: "https://i.pravatar.cc/150?img=1",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "The best SaaS solution we've used. It's intuitive, powerful, and the customer support is outstanding.",
    image: "https://i.pravatar.cc/150?img=2",
    initials: "MC"
  },
  {
    name: "Emma Davis",
    role: "Operations Director",
    content: "We've seen a 40% increase in productivity since implementing this solution. It's been a game-changer for our business.",
    image: "https://i.pravatar.cc/150?img=3",
    initials: "ED"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}