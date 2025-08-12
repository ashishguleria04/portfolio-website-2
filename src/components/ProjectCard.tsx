import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard = ({ image, title, description, tags }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border-0 shadow-elevated hover:shadow-glow transition-shadow">
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={image}
            alt={`${title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover"/>
        </div>
        <CardContent className="space-y-3 py-5">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
