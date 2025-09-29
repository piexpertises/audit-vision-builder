import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, CheckCircle, Phone, Mail } from 'lucide-react';

const SecurityConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-security">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ייעוץ ביטחוני | המומחים שלך בביטחון
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              הבטיחות שלך היא המשימה שלנו.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="card-security mb-16">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-center">
                  בפאי אקספרטיס, אנו מבינים את החשיבות של ביטחון איכותי ומקצועי, המתואם לצרכים הספציפיים של כל לקוח. אנחנו כאן כדי להבטיח שלביטחון שלך יש את הפתרונות המתקדמים ביותר, תוך התאמה אישית לכל אתגר, מהעסקים הגדולים ביותר ועד לארגונים קטנים ופרטיים.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              למה לבחור בנו?
            </h2>
            <Card className="card-security">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">
                  הצוות שלנו כולל מומחים בתחומי הביטחון, הגנת העורף, אבטחה מונעת, ניהול משברים ואימון מקצועי. אנו מציעים ייעוץ ביטחוני מותאם אישית לכל לקוח, תוך שימוש בידע ובניסיון שנצברו במשך יותר מ-20 שנה בשטח. השירותים שלנו מבוססים על תכנון, תיאום ויישום פתרונות שמספקים הגנה אופטימלית לאנשים, עסקים וארגונים.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Consulting Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              תחומי הייעוץ הביטחוני שלנו
            </h2>
            <Card className="card-security">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">
                      <strong>ייעוץ לארגונים עסקיים ופרטיים</strong> – אסטרטגיות ניהול ביטחוני מותאמות אישית לאתגרים הייחודיים של כל ארגון.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">
                      <strong>הגנת עורף</strong> – פיתוח מערכות חירום וביטחון בתנאים משתנים, תוך שימת דגש על יציבות בעת מצבי חירום.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">
                      <strong>אבטחה מונעת</strong> – בניית מערכי אבטחה מראש כדי למנוע סיכונים ולמזער אובדן אפשרי.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">
                      <strong>הדרכות מקצועיות</strong> – קורסים בהדרכת ירי, לחימה ואבטחה, המועברים על ידי מומחים בתחום הביטחון.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">
                      <strong>הדרכת אבטחת אירועים</strong> – תכנון והכנה לאירועים תחת כיפת השמים, תוך ניהול סיכונים מקסימלי.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">
                      <strong>פתרונות הגנה אישיים</strong> – שירותי ייעוץ ואימון למנהלים ולקוחות פרטיים הנדרשים לפתרונות אבטחה אישיים וייחודיים.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Consulting */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              ייעוץ מקצועי שניתן לסמוך עליו
            </h2>
            <Card className="card-security">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  הצוות שלנו בפאי אקספרטיס מורכב מאנשי ביטחון ברמה הגבוהה ביותר, עם ניסיון מצטבר של עשרות שנים בשירותים ביטחוניים מגוונים. כל אחד מחברי הצוות עבר הכשרה מקצועית והסמכות בתחומים כגון הגנת עורף, אבטחה מונעת, הכשרה בשימוש בנשק, תכנון וביצוע מערכי חירום ,ומיומנויות ניהול בעת מצבי חירום.
                </p>
                <p className="text-lg leading-relaxed">
                  כמובילים בתחום, אנו מתעדכנים באופן מתמיד בשינויים ובסיכונים הביטחוניים בעולם, ומספקים ללקוחותינו ייעוץ מותאם אישית בהתאם לצרכים המיוחדים שלהם, תוך שמירה על דיסקרטיות מוחלטת ואתיקה מקצועית.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              איך זה עובד?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="card-security text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">פגישת ייעוץ ראשונית</h3>
                  <p className="text-sm leading-relaxed">
                    נתחיל בהבנת הצרכים הביטחוניים שלך באמצעות פגישה ראשונית, בה נבחן את האתגרים והדרישות הביטחוניות שלך.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-security text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">תכנון פתרון מותאם אישית</h3>
                  <p className="text-sm leading-relaxed">
                    על בסיס המידע שנקבל, נבנה תוכנית ייעוץ ופתרון אבטחה המותאמת אישית לצרכים שלך.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-security text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">הדרכה והכשרה</h3>
                  <p className="text-sm leading-relaxed">
                    אם נדרש, נדאג להדריך את צוותך או אותך בפרט במיומנויות ביטחוניות שונות, כולל הגנה עצמית ואבטחת אירועים.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-security text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">תמיכה שוטפת</h3>
                  <p className="text-sm leading-relaxed">
                    גם לאחר הייעוץ הראשוני, נשמח להמשיך ללוות אותך ולספק תמיכה שוטפת במידת הצורך.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              פאי אקספרטיס – פתרונות ביטחוניים מותאמים אישית
            </h2>
            <Card className="card-security">
              <CardContent className="p-8 text-center">
                <p className="text-lg leading-relaxed mb-8">
                  אם אתם מחפשים ייעוץ ביטחוני מקצועי ואמין, אנחנו כאן בשבילכם. פאי אקספרטיס מציעה לכם את כל הכלים שדרושים להבטחת ביטחון מקסימלי, בין אם מדובר במערך אבטחה לאירועים, הגנת עורף לעסק או פתרונות אבטחה אישיים.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  צרו קשר עם פאי אקספרטיס עוד היום לקבלת ייעוץ ביטחוני מקצועי. נשמח לעזור ולהתאים פתרונות שמספקים שקט נפשי וביטחון.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-medium text-lg"
                  asChild
                >
                  <a href="tel:050-730-0720">
                    <Phone size={20} className="mr-2" />
                    צור קשר עכשיו
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us - Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              מדוע לבחור בנו?
            </h2>
            <Card className="card-security">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="text-lg">ניסיון של 20 שנה בתחום הביטחון</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="text-lg">ייעוץ מותאם אישית לכל לקוח ולקוח</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="text-lg">הכשרה והדרכה על ידי מומחים בתחום</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="text-lg">התחייבות לשמירה על דיסקרטיות ואתיקה מקצועית</span>
                  </div>
                  <div className="flex items-center gap-4 md:col-span-2 justify-center">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="text-lg">שירותים בארץ ובחו"ל</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Satisfied Clients */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              לקוחות מרוצים
            </h2>
            <Card className="card-security">
              <CardContent className="p-8 text-center">
                <p className="text-lg leading-relaxed">
                  לאורך השנים, סיפקנו ייעוץ ביטחוני והדרכות לארגונים ולקוחות פרטיים, כולל מוסדות ציבוריים, חברות ביטחוניות, אירועים תחת כיפת השמים ולקוחות פרטיים, והעברנו אותם חוויות בלתי נשכחות בתחום הביטחון.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityConsulting;