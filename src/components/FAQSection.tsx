import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, items }) => {
  const { isRTL } = useI18n();

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-secondary/20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {title}
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border/50 rounded-xl bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 px-6"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
