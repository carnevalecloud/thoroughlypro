import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from facility managers who 
            trust Thoroughly Pro with their maintenance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="p-8 bg-slate-100 border-0 rounded-xl"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <Quote className="w-10 h-10 text-sky-200 mb-4" />
              <blockquote className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-600">{testimonial.company}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
