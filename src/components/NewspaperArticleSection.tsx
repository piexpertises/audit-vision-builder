import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from 'lucide-react';

const NewspaperArticleSection = () => {
  return (
    <section className="py-20 bg-light-gray" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Article Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Newspaper className="w-8 h-8 text-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-gold">
                כתבה בעיתון כלכלי
              </h2>
            </div>
            <div className="w-32 h-1 bg-gold mx-auto"></div>
          </div>

          {/* Article Content */}
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardContent className="p-8 md:p-12">
              
              {/* Article Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-8 text-center leading-tight">
                "פאי אקספרטיס – המומחים שלכם בביטחון"
              </h3>
              
              {/* Article Body */}
              <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
                
                <p className="text-lg">
                  בשוק הביטחון המתפתח, שבו הדרישות הולכות וגוברות, יש שחקן אחד שמביא סטנדרט חדש של מקצועיות, התאמה אישית ושירות דיסקרטי ללקוחות – פאי אקספרטיס. החברה, שהוקמה בשנת 2016 על ידי סטיב בלחסן, סא"ל במילואים ובעל ותק של מעל 20 שנה בתחום הביטחון, מבססת את מעמדה כמובילה בתחום ייעוץ האבטחה, הגנת העורף וניהול אירועים המוניים.
                </p>

                <div className="bg-gold/10 p-6 rounded-lg border-r-4 border-gold">
                  <h4 className="text-xl font-semibold text-gold mb-3">החזון שמאחורי פאי אקספרטיס</h4>
                  <p>
                    הפילוסופיה של פאי אקספרטיס נובעת משמו של המספר היווני "π" (פאי) – המסמל שלמות שמורכבת מאינספור פרטים קטנים. כל פרט, קטן ככל שיהיה, חיוני להגנה מיטבית. כך, כל שירות שהחברה מציעה – החל מתכנון אבטחה לאירועים המוניים, דרך ייעוץ אישי למנהלים, ועד להדרכות בתחום הירי והלחימה – מתוכנן עד לפרטים הקטנים ביותר.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">מה הופך את פאי אקספרטיס לבחירה המובילה?</h4>
                  <p>
                    סטיב בלחסן, המייסד והמנהיג המקצועי, מביא עימו לא רק ניסיון שטח עשיר, אלא גם ידע אקדמי רחב, עם תארים מתקדמים בניהול משברים, ביטחון והגנת העורף. שילוב זה מאפשר לחברה להציע פתרונות חדשניים ומדויקים, שמתאימים לצרכים המשתנים של לקוחותיה.
                  </p>
                  <p>
                    הצוות המוביל של פאי אקספרטיס כולל אנשי מקצוע בעלי רקע מוסדי מרשים וניסיון מוכח במגזר הביטחוני. הצוות מקפיד להתעדכן בהתפתחויות הגלובליות, ומספק מענה מהיר ומותאם אישית לאיומים עכשוויים.
                  </p>
                </div>

                <div className="bg-navy/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-navy mb-4">שירותים שמספקים שקט נפשי</h4>
                  <p className="mb-4">פאי אקספרטיס מציעה מגוון רחב של שירותים, הכוללים:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>ייעוץ ביטחוני מותאם אישית לעסקים, מוסדות ולקוחות פרטיים.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>ניהול אירועים המוניים – תכנון וביצוע פתרונות בטיחות לאירועים תחת כיפת השמיים.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>תכנון מערכי חירום והגנת עורף למוסדות ציבוריים ולחברות פרטיות.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>הדרכות מתקדמות בתחום הירי, הלחימה והאבטחה המונעת.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>פתרונות ייחודיים לארגונים רגישים – כולל טיפול בנושאי ריגול תעשייתי.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">ניהול אירועים המוניים – מנגישים בטיחות ברמה הגבוהה ביותר</h4>
                  <p>
                    בישראל, שבה מתקיימים אירועים גדולים ומגוונים לאורך השנה, השירות של פאי אקספרטיס לניהול אירועים המוניים הופך לבלתי ניתן להחלפה. החברה פועלת לפי תקן ת"י 5688 ומציעה פתרונות בטיחות מותאמים אישית, החל מתכנון מערכות האבטחה ועד לפיקוח בזמן אמת.
                  </p>
                </div>

                <div className="bg-royal-blue/10 p-6 rounded-lg border-r-4 border-royal-blue">
                  <h4 className="text-xl font-semibold text-royal-blue mb-3">הבטחה לשירות יוצא דופן</h4>
                  <p>
                    פאי אקספרטיס פועלת מתוך מחויבות בלתי מתפשרת לאתיקה מקצועית ודיסקרטיות. החברה מעניקה שירותים בארץ ובעולם, תוך שמירה על התאמה לתנאים ולתקנות בכל יעד שבו היא פועלת.
                  </p>
                </div>

                <blockquote className="border-r-4 border-gold bg-gold/5 p-6 italic text-lg">
                  <p className="mb-2">
                    סטיב בלחסן מסכם: "אנחנו כאן כדי לספק לאנשים, ארגונים ועסקים את הביטחון שהם צריכים כדי להצליח – לא משנה באיזה תחום הם פועלים."
                  </p>
                </blockquote>

                <p>
                  במציאות שבה איומים חדשים מופיעים בכל יום, פאי אקספרטיס מציעה את השקט הנפשי הנדרש, עם צוות מקצועי ופתרונות שלא משאירים מקום לטעויות.
                </p>

                <div className="text-center bg-navy/5 p-6 rounded-lg">
                  <p className="text-lg font-semibold text-navy">
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