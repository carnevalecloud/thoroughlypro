import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { z } from "zod";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { siteInfo } from "@/data/siteInfo";
import { services } from "@/data/services";
import { apiRequest } from "@/lib/queryClient";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  facilityType: z.string().min(1, "Please select a facility type"),
  serviceInterest: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const facilityTypes = [
  "Manufacturing Plant",
  "Warehouse/Distribution Center",
  "Commercial Office",
  "Medical Facility",
  "Food Processing",
  "Retail Space",
  "Other",
];

export default function Quote() {
  const { toast } = useToast();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      facilityType: "",
      serviceInterest: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: QuoteFormValues) => {
      const response = await apiRequest("POST", "/api/quotes", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-quote">
      <Navbar />
      <main>
        <section className="py-16 lg:py-24 bg-slate-50" data-testid="section-quote-form">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" data-testid="text-quote-title">
                Request a Free Quote
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Tell us about your facility and we'll create a customized maintenance 
                plan tailored to your specific needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <Card className="p-8 bg-white" data-testid="card-quote-form">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Smith" 
                                  {...field}
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your Company" 
                                  {...field}
                                  data-testid="input-company"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="john@company.com" 
                                  {...field}
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="(603) 555-1234" 
                                  {...field}
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="facilityType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Facility Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-facility-type">
                                    <SelectValue placeholder="Select facility type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {facilityTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="serviceInterest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Interest *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-service-interest">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service.id} value={service.title}>
                                      {service.title}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your facility and specific needs..."
                                className="min-h-[120px]"
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        disabled={mutation.isPending}
                        data-testid="button-submit-quote"
                      >
                        {mutation.isPending ? "Submitting..." : "Request Free Consultation"}
                      </Button>
                    </form>
                  </Form>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-slate-900 text-white" data-testid="card-contact-info">
                  <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href={siteInfo.contact.phoneUrl}
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                      data-testid="link-quote-phone"
                    >
                      <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Call Us</p>
                        <p className="font-medium">{siteInfo.contact.phone}</p>
                      </div>
                    </a>

                    <a 
                      href={`mailto:${siteInfo.contact.email}`}
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                      data-testid="link-quote-email"
                    >
                      <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email Us</p>
                        <p className="font-medium text-sm">{siteInfo.contact.email}</p>
                      </div>
                    </a>

                    <a 
                      href={siteInfo.contact.address.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                      data-testid="link-quote-address"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Location</p>
                        <p className="font-medium text-sm">
                          {siteInfo.contact.address.line1}<br />
                          {siteInfo.contact.address.line2}
                        </p>
                      </div>
                    </a>
                  </div>
                </Card>

                <Card className="p-6 bg-green-50 border-green-200" data-testid="card-response-time">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Quick Response</h4>
                      <p className="text-sm text-slate-600">
                        We respond to all inquiries within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6" data-testid="card-what-to-expect">
                  <h4 className="font-semibold text-slate-900 mb-4">What to Expect</h4>
                  <ul className="space-y-3">
                    {[
                      "Initial phone consultation",
                      "Free on-site walk-through",
                      "Customized maintenance proposal",
                      "Flexible scheduling options",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
