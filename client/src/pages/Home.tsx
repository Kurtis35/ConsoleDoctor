import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { 
  Activity, 
  Cable, 
  Zap, 
  Fan, 
  Disc, 
  Cpu, 
  Gamepad, 
  Timer, 
  Tag, 
  Gamepad2, 
  Wrench, 
  MapPin,
  CheckCircle2
} from "lucide-react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

export default function Home() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      consoleType: "",
      issueDescription: "",
      contactInfo: "",
    },
  });

  async function onSubmit(data: any) {
    setIsPending(true);
    // Simulate API call for frontend-only demo
    setTimeout(() => {
      setIsPending(false);
      toast({
        title: "Quote Requested!",
        description: "We'll get back to you shortly.",
      });
      form.reset();
    }, 1000);
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 font-display">
              Your Console’s Health, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">
                Fixed by the Pros.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Fast, affordable repairs for PlayStation, Xbox & Nintendo consoles. 
              Get back in the game today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] text-lg px-8 py-6 rounded-full transition-all duration-300 font-bold tracking-wide"
              >
                Get a Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToPricing}
                className="border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-full transition-all hover:border-secondary hover:text-secondary duration-300"
              >
                View Prices
              </Button>
            </div>
          </motion.div>

          {/* Supported Consoles */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 flex justify-center gap-12 text-muted-foreground items-center flex-wrap"
          >
            <div className="flex flex-col items-center gap-2 hover:text-[#003791] transition-colors duration-300 group">
              <FaPlaystation className="w-12 h-12 group-hover:drop-shadow-[0_0_10px_rgba(0,55,145,0.5)]" />
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">PlayStation</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-[#107C10] transition-colors duration-300 group">
              <FaXbox className="w-10 h-10 group-hover:drop-shadow-[0_0_10px_rgba(16,124,16,0.5)]" />
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Xbox</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-[#e60012] transition-colors duration-300 group">
              <BsNintendoSwitch className="w-10 h-10 group-hover:drop-shadow-[0_0_10px_rgba(230,0,18,0.5)]" />
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Switch</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Our Services</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_var(--primary)]" />
            <p className="mt-4 text-muted-foreground">Expert diagnostics and repairs for all major issues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Console Diagnostics" 
              icon={Activity} 
              description="Complete system checkup to pinpoint hardware and software faults accurately."
              delay={0.1}
            />
            <ServiceCard 
              title="HDMI Port Repair" 
              icon={Cable} 
              description="Fix no signal issues, loose ports, and display artifacts quickly."
              delay={0.2}
            />
            <ServiceCard 
              title="Power Supply Repair" 
              icon={Zap} 
              description="Console won't turn on? We repair and replace faulty power supply units."
              delay={0.3}
            />
            <ServiceCard 
              title="Overheating & Cleaning" 
              icon={Fan} 
              description="Deep cleaning and thermal paste replacement to keep your system cool and quiet."
              delay={0.4}
            />
            <ServiceCard 
              title="Disc Drive Repair" 
              icon={Disc} 
              description="Laser lens replacement and drive mechanism repairs for reading errors."
              delay={0.5}
            />
            <ServiceCard 
              title="Software & Updates" 
              icon={Cpu} 
              description="Fixing boot loops, error codes, and hard drive corruption issues."
              delay={0.6}
            />
            <ServiceCard 
              title="Controller Repairs" 
              icon={Gamepad} 
              description="Stick drift fixes, button replacements, and battery upgrades."
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Transparent Pricing</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full shadow-[0_0_10px_var(--secondary)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Basic Diagnostic", price: "R250", suffix: "flat fee" },
              { title: "HDMI Repair", price: "R900", suffix: "from" },
              { title: "Overheating Service", price: "R450", suffix: "from" },
              { title: "Power Issues", price: "R650", suffix: "from" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center hover:border-secondary/50 transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-muted-foreground mb-4 uppercase tracking-wider font-display">{item.title}</h3>
                <div className="text-4xl font-bold text-white mb-2 neon-text-blue font-display">{item.price}</div>
                <div className="text-sm text-muted-foreground">{item.suffix}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-8 bg-card/50 inline-block px-6 py-2 rounded-full border border-white/5 text-sm">
              *Final pricing may vary depending on the fault. Quotes confirmed after inspection.
            </p>
            <div className="flex justify-center">
              <Button onClick={scrollToContact} variant="secondary" className="font-bold text-secondary-foreground">
                Request a Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Timer, title: "Fast Turnaround", text: "Most repairs completed within 24-48 hours so you don't miss the action." },
              { icon: Tag, title: "Honest Pricing", text: "No hidden fees. You approve the quote before we start any work." },
              { icon: Gamepad2, title: "Gamer Focused", text: "We understand gaming hardware because we are gamers too." },
              { icon: Wrench, title: "Quality Parts", text: "We use premium replacement parts to ensure longevity." },
              { icon: MapPin, title: "Trusted Local", text: "Convenient drop-off points and reliable local service." },
              { icon: CheckCircle2, title: "Warranty", text: "All repairs come with a warranty on parts and labor." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Get Your Free Quote</h2>
              <p className="text-muted-foreground">Fill out the form below and we'll diagnose the issue.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone / Email</FormLabel>
                        <FormControl>
                          <Input placeholder="082 123 4567" className="bg-background/50 border-white/10 focus:border-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="consoleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Console Model</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-white/10 focus:border-primary/50">
                            <SelectValue placeholder="Select your console" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ps5">PlayStation 5</SelectItem>
                          <SelectItem value="ps4">PlayStation 4</SelectItem>
                          <SelectItem value="xbox-series">Xbox Series X/S</SelectItem>
                          <SelectItem value="xbox-one">Xbox One</SelectItem>
                          <SelectItem value="switch">Nintendo Switch</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="issueDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's wrong?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe the issue (e.g., won't turn on, loud fan, no signal)..." 
                          className="bg-background/50 border-white/10 min-h-[120px] focus:border-primary/50" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 text-lg shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Console Doctor Logo" 
              className="w-80 h-80 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <h2 className="text-2xl font-bold tracking-tighter mb-4 font-display">
            <span className="text-primary neon-text">CONSOLE</span>
            <span className="text-white">DOCTOR</span>
          </h2>
          <p className="text-muted-foreground mb-8">Fixing consoles. Saving game nights.</p>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Console Doctor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
