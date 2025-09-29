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
        <section className="relative pt-32 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Shield className="mx-auto mb-6 text-blue-400" size={80} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                ייעוץ ביטחוני
              </h1>
              <div className="text-xl md:text-2xl mb-4 text-blue-300">
                המומחים שלך בביטחון
              </div>
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
                הבטיחות שלך היא המשימה שלנו - פתרונות ביטחון מתקדמים ומקצועיים המותאמים אישית לכל לקוח
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-full px-8 py-4 font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a href="#consultation-areas">
                    גלה עוד
                    <ArrowDown className="mr-2" size={20} />
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/60 rounded-full px-8 py-4 font-medium text-lg transition-all duration-300"
                  asChild
                >
                  <a href="tel:050-730-0720">
                    <Phone className="mr-2" size={20} />
                    צור קשר
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white/60" size={24} />
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