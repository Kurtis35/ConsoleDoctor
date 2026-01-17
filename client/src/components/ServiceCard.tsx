import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  delay?: number;
}

export function ServiceCard({ title, icon: Icon, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="glass-card h-full border-t-2 border-t-transparent hover:border-t-primary transition-all duration-300 hover:-translate-y-1 group">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
          </div>
          <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors font-display uppercase tracking-wide">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
