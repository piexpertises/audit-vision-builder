import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const NewspaperArticleSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="relative py-20 bg-[#F5F5F5]" dir="rtl" ref={ref}>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#D4AF37]">
              כתבה בעיתון כלכלי
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <Card className={`bg-card border border-border/20 shadow-lg hover-lift transition-all duration-1000 delay-200 ${isVisible ? 'animate-zoom-in opacity-100' : 'opacity-0 scale-90'}`}>
            <CardContent className="p-8 md:p-12">
              <div className={`space-y-8 text-foreground leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-5'}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#D4AF37]">
                  "פאי אקספרטיס – המומחים שלכם בביטחון"
                </h3>
                
                <p className="text-lg">
                  בשוק הביטחון המתפתח, שבו הדרישות הולכות וגוברות, יש שחקן אחד שמביא סטנדרט חדש של מקצועיות, התאמה אישית ושירות דיסקרטי ללקוחות – פאי אקספרטיס. החברה, שהוקמה בשנת 2016 על ידי סטיב בלחסן, סא"ל במילואים ובעל ותק של מעל 20 שנה בתחום הביטחון, מבססת את מעמדה כמובילה בתחום ייעוץ האבטחה, הגנת העורף וניהול אירועים המוניים.
                </p>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#D4AF37]">
                    החזון שמאחורי פאי אקספרטיס
                  </h4>
                  <p>
                    הפילוסופיה של פאי אקספרטיס נובעת משמו של המספר היווני "π" (פאי) – המסמל שלמות שמורכבת מאינספור פרטים קטנים. כל פרט, קטן ככל שיהיה, חיוני להגנה מיטבית. כך, כל שירות שהחברה מציעה – החל מתכנון אבטחה לאירועים המוניים, דרך ייעוץ אישי למנהלים, ועד להדרכות בתחום הירי והלחימה – מתוכנן עד לפרטים הקטנים ביותר.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#D4AF37]">
                    מה הופך את פאי אקספרטיס לבחירה המובילה?
                  </h4>
                  <p>
                    סטיב בלחסן, המייסד והמנהיג המקצועי, מביא עימו לא רק ניסיון שטח עשיר, אלא גם ידע אקדמי רחב, עם תארים מתקדמים בניהול משברים, ביטחון והגנת העורף. שילוב זה מאפשר לחברה להציע פתרונות חדשניים ומדויקים, שמתאימים לצרכים המשתנים של לקוחותיה.
                  </p>
                  <p>
                    הצוות המוביל של פאי אקספרטיס כולל אנשי מקצוע בעלי רקע מוסדי מרשים וניסיון מוכח במגזר הביטחוני. הצוות מקפיד להתעדכן בהתפתחויות הגלובליות, ומספק מענה מהיר ומותאם אישית לאיומים עכשוויים.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#D4AF37]">
                    שירותים שמספקים שקט נפשי
                  </h4>
                  <p>פאי אקספרטיס מציעה מגוון רחב של שירותים, הכוללים:</p>
                  <ul className="list-disc list-inside space-y-2 mr-6 mt-4">
                    <li>ייעוץ ביטחוני מותאם אישית לעסקים, מוסדות ולקוחות פרטיים.</li>
                    <li>ניהול אירועים המוניים – תכנון וביצוע פתרונות בטיחות לאירועים תחת כיפת השמיים.</li>
                    <li>תכנון מערכי חירום והגנת עורף למוסדות ציבוריים ולחברות פרטיות.</li>
                    <li>הדרכות מתקדמות בתחום הירי, הלחימה והאבטחה המונעת.</li>
                    <li>פתרונות ייחודיים לארגונים רגישים – כולל טיפול בנושאי ריגול תעשייתי.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#D4AF37]">
                    ניהול אירועים המוניים – מנגישים בטיחות ברמה הגבוהה ביותר
                  </h4>
                  <p>
                    בישראל, שבה מתקיימים אירועים גדולים ומגוונים לאורך השנה, השירות של פאי אקספרטיס לניהול אירועים המוניים הופך לבלתי ניתן להחלפה. החברה פועלת לפי תקן ת"י 5688 ומציעה פתרונות בטיחות מותאמים אישית, החל מתכנון מערכות האבטחה ועד לפיקוח בזמן אמת.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#D4AF37]">
                    הבטחה לשירות יוצא דופן
                  </h4>
                  <p>
                    פאי אקספרטיס פועלת מתוך מחויבות בלתי מתפשרת לאתיקה מקצועית ודיסקרטיות. החברה מעניקה שירותים בארץ ובעולם, תוך שמירה על התאמה לתנאים ולתקנות בכל יעד שבו היא פועלת.
                  </p>
                  <p>
                    סטיב בלחסן מסכם: "אנחנו כאן כדי לספק לאנשים, ארגונים ועסקים את הביטחון שהם צריכים כדי להצליח – לא משנה באיזה תחום הם פועלים."
                  </p>
                  <p>
                    במציאות שבה איומים חדשים מופיעים בכל יום, פאי אקספרטיס מציעה את השקט הנפשי הנדרש, עם צוות מקצועי ופתרונות שלא משאירים מקום לטעויות.
                  </p>
                </div>

                <div className="text-center pt-8 border-t border-border/20">
                  <p className="text-lg font-semibold text-[#D4AF37]">
                    מעוניינים להבטיח את הביטחון שלכם? צרו קשר עם פאי אקספרטיס – כי על ביטחון לא מתפשרים.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewspaperArticleSection;