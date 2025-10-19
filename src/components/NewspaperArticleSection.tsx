import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Shield, CheckCircle, Users, List, Calendar, Award } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const NewspaperArticleSection = () => {
  const { t, isRTL } = useI18n();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqItems = [
    {
      id: "1",
      question: t('newspaper.faq1_q'),
      answer: t('newspaper.faq1_a'),
      icon: Shield
    },
    {
      id: "2",
      question: t('newspaper.faq2_q'),
      answer: t('newspaper.faq2_a'),
      icon: CheckCircle
    },
    {
      id: "3",
      question: t('newspaper.faq3_q'),
      answer: t('newspaper.faq3_a'),
      icon: Users
    },
    {
      id: "4",
      question: t('newspaper.faq4_q'),
      answer: t('newspaper.faq4_a'),
      icon: List
    },
    {
      id: "5",
      question: t('newspaper.faq5_q'),
      answer: t('newspaper.faq5_a'),
      icon: Calendar
    },
    {
      id: "6",
      question: t('newspaper.faq6_q'),
      answer: t('newspaper.faq6_a'),
      icon: Award
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-muted/20 to-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#D4AF37]">
              {t('newspaper.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('newspaper.subtitle')}
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>
          
          {/* FAQ Accordion */}
          <div ref={faqRef}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AccordionItem 
                    key={item.id} 
                    value={item.id}
                    className={`bg-card border border-border/40 rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-700 hover:border-[#D4AF37]/30 ${
                      faqVisible ? 'opacity-100 animate-staggered-fade' : 'opacity-0 translate-y-5'
                    }`}
                    style={{
                      animationDelay: faqVisible ? `${index * 100}ms` : '0ms',
                      transitionDelay: faqVisible ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <AccordionTrigger className="text-right hover:no-underline py-5 group">
                      <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                          <Icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <span className="text-lg md:text-xl font-semibold text-foreground flex-1">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-right pb-6 pt-2">
                      <div className="mr-14 text-base md:text-lg leading-relaxed text-muted-foreground">
                        {item.answer.split('|').map((part, i) => (
                          <p key={i} className={i > 0 ? 'mt-3' : ''}>
                            {part.trim()}
                          </p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* CTA Footer */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#0D1B2A] via-[#1b4965] to-[#0D1B2A] rounded-xl p-8 shadow-lg border border-[#D4AF37]/20">
              <p className="text-xl md:text-2xl font-semibold text-[#D4AF37] mb-2">
                {t('newspaper.cta_title')}
              </p>
              <p className="text-base md:text-lg text-white/90">
                {t('newspaper.cta_subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewspaperArticleSection;