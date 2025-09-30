import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Shield, CheckCircle, Users, List, Calendar, Award } from 'lucide-react';

const faqItems = [
  {
    id: "1",
    question: "מה החזון של פאי אקספרטיס?",
    answer: "הפילוסופיה של פאי אקספרטיס נובעת משמו של המספר היווני \"π\" (פאי) – המסמל שלמות שמורכבת מאינספור פרטים קטנים. כל פרט, קטן ככל שיהיה, חיוני להגנה מיטבית. כך, כל שירות שהחברה מציעה – החל מתכנון אבטחה לאירועים המוניים, דרך ייעוץ אישי למנהלים, ועד להדרכות בתחום הירי והלחימה – מתוכנן עד לפרטים הקטנים ביותר.",
    icon: Shield
  },
  {
    id: "2",
    question: "למה לבחור בפאי אקספרטיס?",
    answer: "סטיב בלחסן, המייסד והמנהיג המקצועי, מביא עימו לא רק ניסיון שטח עשיר, אלא גם ידע אקדמי רחב, עם תארים מתקדמים בניהול משברים, ביטחון והגנת העורף. שילוב זה מאפשר לחברה להציע פתרונות חדשניים ומדויקים, שמתאימים לצרכים המשתנים של לקוחותיה. בישראל, שבה מתקיימים אירועים גדולים ומגוונים לאורך השנה, השירות של פאי אקספרטיס הופך לבלתי ניתן להחלפה.",
    icon: CheckCircle
  },
  {
    id: "3",
    question: "מי הצוות שמוביל את פאי אקספרטיס?",
    answer: "הצוות המוביל של פאי אקספרטיס כולל אנשי מקצוע בעלי רקע מוסדי מרשים וניסיון מוכח במגזר הביטחוני. החברה הוקמה בשנת 2016 על ידי סטיב בלחסן, סא\"ל במילואים ובעל ותק של מעל 20 שנה בתחום הביטחון. הצוות מקפיד להתעדכן בהתפתחויות הגלובליות, ומספק מענה מהיר ומותאם אישית לאיומים עכשוויים.",
    icon: Users
  },
  {
    id: "4",
    question: "אילו שירותים מספקת החברה?",
    answer: "פאי אקספרטיס מציעה מגוון רחב של שירותים: ייעוץ ביטחוני מותאם אישית לעסקים, מוסדות ולקוחות פרטיים | ניהול אירועים המוניים – תכנון וביצוע פתרונות בטיחות לאירועים תחת כיפת השמיים | תכנון מערכי חירום והגנת עורף למוסדות ציבוריים ולחברות פרטיות | הדרכות מתקדמות בתחום הירי, הלחימה והאבטחה המונעת | פתרונות ייחודיים לארגונים רגישים – כולל טיפול בנושאי ריגול תעשייתי.",
    icon: List
  },
  {
    id: "5",
    question: "איך החברה מנהלת אירועים המוניים?",
    answer: "בישראל, שבה מתקיימים אירועים גדולים ומגוונים לאורך השנה, השירות של פאי אקספרטיס לניהול אירועים המוניים הופך לבלתי ניתן להחלפה. החברה פועלת לפי תקן ת\"י 5688 ומציעה פתרונות בטיחות מותאמים אישית, החל מתכנון מערכות האבטחה ועד לפיקוח בזמן אמת. כל פרט מתוכנן עד הסוף להבטחת בטיחות מקסימלית.",
    icon: Calendar
  },
  {
    id: "6",
    question: "מה מבטיח השירות של פאי אקספרטיס?",
    answer: "פאי אקספרטיס פועלת מתוך מחויבות בלתי מתפשרת לאתיקה מקצועית ודיסקרטיות. החברה מעניקה שירותים בארץ ובעולם, תוך שמירה על התאמה לתנאים ולתקנות בכל יעד שבו היא פועלת. במציאות שבה איומים חדשים מופיעים בכל יום, פאי אקספרטיס מציעה את השקט הנפשי הנדרש, עם צוות מקצועי ופתרונות שלא משאירים מקום לטעויות.",
    icon: Award
  }
];

const NewspaperArticleSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-muted/20 to-background" dir="rtl" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#D4AF37]">
              שאלות נפוצות
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              כל מה שרציתם לדעת על פאי אקספרטיס – המומחים שלכם בביטחון
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>
          
          {/* FAQ Accordion */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'}`}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AccordionItem 
                    key={item.id} 
                    value={item.id}
                    className="bg-card border border-border/40 rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#D4AF37]/30"
                    style={{
                      animationDelay: `${index * 100}ms`
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
          <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-[#0D1B2A] via-[#1b4965] to-[#0D1B2A] rounded-xl p-8 shadow-lg border border-[#D4AF37]/20">
              <p className="text-xl md:text-2xl font-semibold text-[#D4AF37] mb-2">
                מעוניינים להבטיח את הביטחון שלכם?
              </p>
              <p className="text-base md:text-lg text-white/90">
                צרו קשר עם פאי אקספרטיס – כי על ביטחון לא מתפשרים
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewspaperArticleSection;