import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Phone, ArrowDown, Users, Target } from 'lucide-react';

const SecurityConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center justify-center bg-gradient-to-r from-white via-gray-50 to-blue-50 overflow-hidden">
          {/* Professional background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Professional icon */}
              <div className="mb-12">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <Shield className="text-white" size={48} />
                </div>
              </div>
              
              {/* Main heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                ייעוץ ביטחוני
              </h1>
              
              {/* Subtitle */}
              <div className="text-2xl md:text-3xl mb-8 text-blue-600 font-medium">
                המומחים שלך בביטחון
              </div>
              
              {/* Professional description */}
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed font-light">
                הבטיחות שלך היא המשימה שלנו - פתרונות ביטחון מתקדמים ומקצועיים המותאמים אישית לכל לקוח
              </p>
              
              {/* Professional CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-lg px-10 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  asChild
                >
                  <a href="#consultation-areas" className="flex items-center gap-3">
                    <ArrowDown size={20} />
                    גלה עוד על השירותים
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 hover:border-blue-700 rounded-lg px-10 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  asChild
                >
                  <a href="tel:050-730-0720" className="flex items-center gap-3">
                    <Phone size={20} />
                    צור קשר מיידי
                  </a>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-16 pt-12 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">20+</div>
                    <div className="text-gray-600 font-medium">שנות ניסיון</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <div className="text-gray-600 font-medium">שירות מקצועי</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600 font-medium">זמינות</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                    פאי אקספרטיס - שותפכם לביטחון מקסימלי
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    בפאי אקספרטיס, אנו מבינים את החשיבות של ביטחון איכותי ומקצועי, המתואם לצרכים הספציפיים של כל לקוח. אנחנו כאן כדי להבטיח שלביטחון שלך יש את הפתרונות המתקדמים ביותר, תוך התאמה אישית לכל אתגר, מהעסקים הגדולים ביותר ועד לארגונים קטנים ופרטיים.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              למה לבחור בנו?
            </h2>
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-12">
                <p className="text-lg leading-relaxed text-gray-700 text-center">
                  הצוות שלנו כולל מומחים בתחומי הביטחון, הגנת העורף, אבטחה מונעת, ניהול משברים ואימון מקצועי. אנו מציעים ייעוץ ביטחוני מותאם אישית לכל לקוח, תוך שימוש בידע ובניסיון שנצברו במשך יותר מ-20 שנה בשטח. השירותים שלנו מבוססים על תכנון, תיאום ויישום פתרונות שמספקים הגנה אופטימלית לאנשים, עסקים וארגונים.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Consulting Areas */}
        <section id="consultation-areas" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              תחומי הייעוץ הביטחוני שלנו
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">ייעוץ לארגונים עסקיים ופרטיים</h3>
                  <p className="text-gray-600 leading-relaxed">
                    אסטרטגיות ניהול ביטחוני מותאמות אישית לאתגרים הייחודיים של כל ארגון.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">הגנת עורף</h3>
                  <p className="text-gray-600 leading-relaxed">
                    פיתוח מערכות חירום וביטחון בתנאים משתנים, תוך שימת דגש על יציבות בעת מצבי חירום.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">אבטחה מונעת</h3>
                  <p className="text-gray-600 leading-relaxed">
                    בניית מערכי אבטחה מראש כדי למנוע סיכונים ולמזער אובדן אפשרי.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">הדרכות מקצועיות</h3>
                  <p className="text-gray-600 leading-relaxed">
                    קורסים בהדרכת ירי, לחימה ואבטחה, המועברים על ידי מומחים בתחום הביטחון.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-red-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">הדרכת אבטחת אירועים</h3>
                  <p className="text-gray-600 leading-relaxed">
                    תכנון והכנה לאירועים תחת כיפת השמים, תוך ניהול סיכונים מקסימלי.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="text-teal-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">פתרונות הגנה אישיים</h3>
                  <p className="text-gray-600 leading-relaxed">
                    שירותי ייעוץ ואימון למנהלים ולקוחות פרטיים הנדרשים לפתרונות אבטחה אישיים וייחודיים.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Consulting */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              ייעוץ מקצועי שניתן לסמוך עליו
            </h2>
            <Card className="shadow-xl border-0 bg-white max-w-5xl mx-auto">
              <CardContent className="p-12">
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  הצוות שלנו בפאי אקספרטיס מורכב מאנשי ביטחון ברמה הגבוהה ביותר, עם ניסיון מצטבר של עשרות שנים בשירותים ביטחוניים מגוונים. כל אחד מחברי הצוות עבר הכשרה מקצועית והסמכות בתחומים כגון הגנת עורף, אבטחה מונעת, הכשרה בשימוש בנשק, תכנון וביצוע מערכי חירום ,ומיומנויות ניהול בעת מצבי חירום.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  כמובילים בתחום, אנו מתעדכנים באופן מתמיד בשינויים ובסיכונים הביטחוניים בעולם, ומספקים ללקוחותינו ייעוץ מותאם אישית בהתאם לצרכים המיוחדים שלהם, תוך שמירה על דיסקרטיות מוחלטת ואתיקה מקצועית.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              איך זה עובד?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-0">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">פגישת ייעוץ ראשונית</h3>
                  <p className="text-gray-600 leading-relaxed">
                    נתחיל בהבנת הצרכים הביטחוניים שלך באמצעות פגישה ראשונית, בה נבחן את האתגרים והדרישות הביטחוניות שלך.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-0">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">תכנון פתרון מותאם אישית</h3>
                  <p className="text-gray-600 leading-relaxed">
                    על בסיס המידע שנקבל, נבנה תוכנית ייעוץ ופתרון אבטחה המותאמת אישית לצרכים שלך.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-0">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">הדרכה והכשרה</h3>
                  <p className="text-gray-600 leading-relaxed">
                    אם נדרש, נדאג להדריך את צוותך או אותך בפרט במיומנויות ביטחוניות שונות, כולל הגנה עצמית ואבטחת אירועים.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-0">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-orange-600">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">תמיכה שוטפת</h3>
                  <p className="text-gray-600 leading-relaxed">
                    גם לאחר הייעוץ הראשוני, נשמח להמשיך ללוות אותך ולספק תמיכה שוטפת במידת הצורך.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                פאי אקספרטיס – פתרונות ביטחוניים מותאמים אישית
              </h2>
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-12">
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    אם אתם מחפשים ייעוץ ביטחוני מקצועי ואמין, אנחנו כאן בשבילכם. פאי אקספרטיס מציעה לכם את כל הכלים שדרושים להבטחת ביטחון מקסימלי, בין אם מדובר במערך אבטחה לאירועים, הגנת עורף לעסק או פתרונות אבטחה אישיים.
                  </p>
                  <p className="text-lg leading-relaxed mb-10 text-gray-700">
                    צרו קשר עם פאי אקספרטיס עוד היום לקבלת ייעוץ ביטחוני מקצועי. נשמח לעזור ולהתאים פתרונות שמספקים שקט נפשי וביטחון.
                  </p>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-4 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="tel:050-730-0720">
                      <Phone size={24} className="mr-3" />
                      צור קשר עכשיו
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Highlights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              מדוע לבחור בנו?
            </h2>
            <Card className="shadow-xl border-0 bg-white max-w-5xl mx-auto">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">ניסיון של 20 שנה בתחום הביטחון</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">ייעוץ מותאם אישית לכל לקוח ולקוח</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">הכשרה והדרכה על ידי מומחים בתחום</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">התחייבות לשמירה על דיסקרטיות ואתיקה מקצועית</span>
                  </div>
                  <div className="flex items-center gap-4 md:col-span-2 justify-center">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">שירותים בארץ ובחו״ל</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Satisfied Clients */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              לקוחות מרוצים
            </h2>
            <Card className="shadow-xl border-0 bg-white max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <p className="text-lg leading-relaxed text-gray-700">
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