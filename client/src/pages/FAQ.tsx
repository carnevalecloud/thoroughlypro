import { Link } from "wouter";
import { Phone, ArrowRight, HelpCircle } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteInfo } from "@/data/siteInfo";
import { trackPhoneClick } from "@/utils/analytics";

const faqs = [
  {
    question: "What types of facilities do you service?",
    answer: "We specialize in industrial manufacturing facilities across Southern New Hampshire. We work with manufacturing plants, warehouses, distribution centers, and other industrial environments. We focus on clients who need consistent, daily cleaning to keep operations running smoothly."
  },
  {
    question: "What geographic areas do you serve?",
    answer: "We serve seven key communities in Southern New Hampshire: Chesterfield, Keene, Swanzey, Concord, Lebanon, Newport, and New London. We have particularly strong presences in the Keene and Concord regions."
  },
  {
    question: "What is your minimum service schedule?",
    answer: "We work best with facilities that need regular, ongoing cleaning services. This allows us to provide consistent, reliable service and maintain the high standards your facility requires."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured for your peace of mind and compliance requirements. We carry comprehensive liability coverage."
  },
  {
    question: "How long have you been in business?",
    answer: "Thoroughly Pro has been a trusted commercial cleaning partner in Southern New Hampshire since 1983. That's over 40 years of experience serving industrial manufacturing facilities."
  },
  {
    question: "What makes you different from other cleaning companies?",
    answer: "We listen first. Every building has unique challenges, and you're the expert on what hardships you experience day to day. We start by listening to understand your specific needs, then bring our experience to develop tailored solutions. We're not a one-size-fits-all vendor - we're a facility partner."
  },
  {
    question: "What services do you offer?",
    answer: "Our core services include commercial and industrial cleaning, facility and warehouse cleanouts, carpet cleaning and extraction, and floor stripping and rewaxing. All services are customized to your facility's specific needs."
  },
  {
    question: "How do I get started?",
    answer: "The best way to get started is to give us a call. We'll schedule a walk-through of your facility to understand your challenges and discuss how we can help. From there, we'll develop a tailored proposal for your specific needs."
  },
  {
    question: "Do you handle multiple facilities?",
    answer: "Yes, we have experience managing multiple facilities for clients across several communities. Our multi-site expertise allows us to provide consistent service quality across all your locations."
  },
  {
    question: "What are your business hours?",
    answer: "Our office hours are Monday through Friday, 9:00 AM to 5:00 PM. However, cleaning services are scheduled around your facility's operations to minimize disruption."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-faq">
      <PageHead
        title="FAQ"
        description="Frequently asked questions about Thoroughly Pro's commercial cleaning services, service areas, and how we work with industrial manufacturing facilities in Southern New Hampshire."
      />
      <Navbar />
      <main>
        <section className="py-16 lg:py-20 bg-slate-900" data-testid="section-faq-hero">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-sky-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-faq-hero-title">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Find answers to common questions about our services, coverage areas, 
              and how we work with clients.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900" data-testid="section-faq-list">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-6 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-16 bg-slate-50 dark:bg-slate-800" data-testid="section-faq-contact">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="p-8 lg:p-12 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                We're happy to answer any questions you have. Give us a call 
                to discuss your facility's needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={siteInfo.contact.phoneUrl}
                  onClick={() =>
                    trackPhoneClick(siteInfo.contact.phone, "FAQ Page - CTA")
                  }
                >
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    data-testid="button-faq-call"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call {siteInfo.contact.phone}
                  </Button>
                </a>
                <Link href="/quote">
                  <Button 
                    size="lg" 
                    variant="outline"
                    data-testid="button-faq-quote"
                  >
                    Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
