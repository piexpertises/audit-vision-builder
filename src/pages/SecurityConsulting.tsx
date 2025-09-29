import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Phone, Users, Target, Clock, Award } from 'lucide-react';
import securityBg from '@/assets/security-hero-bg.jpg';
import securityConsultingStrategy from '@/assets/security-consulting-strategy.jpg';

const SecurityConsulting = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      
      <main>
        {/* Hero Section - Single, Professional */}
        <section 
          className="relative pt-32 pb-24 min-h-[70vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.75)), url(${securityBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1d9bf0] to-[#0284c7] rounded-full flex items-center justify-center mx-auto shadow-2xl mb-8">
                  <Shield className="text-white" size={40} />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                ייעוץ ביטחוני | המומחים שלך בביטחון
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light">
                הבטיחות שלך היא המשימה שלנו.
              </p>
              
              <Button 
                className="bg-[#1d9bf0] hover:bg-[#0284c7] text-white border-0 rounded-full px-10 py-4 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <a href="tel:050-730-0720">
                  צור קשר
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0d1b2a]">
                  פאי אקספרטיס - שותפכם לביטחון מקסימלי
                </h2>
                <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-8"></div>
                <div className="relative mb-12">
                  <img 
                    src={securityConsultingStrategy} 
                    alt="ייעוץ ביטחוני ואסטרטגיה מקצועית" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto text-center">
                בפאי אקספרטיס, אנו מבינים את החשיבות של ביטחון איכותי ומקצועי, המתואם לצרכים הספציפיים של כל לקוח. אנחנו כאן כדי להבטיח שלביטחון שלך יש את הפתרונות המתקדמים ביותר, תוך התאמה אישית לכל אתגר, מהעסקים הגדולים ביותר ועד לארגונים קטנים ופרטיים.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0d1b2a]">
                למה לבחור בנו?
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-16"></div>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 shadow-lg">
                <p className="text-lg leading-relaxed text-gray-700 text-center mb-12">
                  הצוות שלנו כולל מומחים בתחומי הביטחון, הגנת העורף, אבטחה מונעת, ניהול משברים ואימון מקצועי. אנו מציעים ייעוץ ביטחוני מותאם אישית לכל לקוח, תוך שימוש בידע ובניסיון שנצברו במשך יותר מ-20 שנה בשטח. השירותים שלנו מבוססים על תכנון, תיאום ויישום פתרונות שמספקים הגנה אופטימלית לאנשים, עסקים וארגונים.
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <Award className="w-12 h-12 text-[#1d9bf0] mx-auto" />
                    <div className="text-3xl font-bold text-[#0d1b2a]">20+</div>
                    <div className="text-gray-600 font-medium">שנות ניסיון</div>
                  </div>
                  <div className="space-y-4">
                    <Shield className="w-12 h-12 text-[#1d9bf0] mx-auto" />
                    <div className="text-3xl font-bold text-[#0d1b2a]">100%</div>
                    <div className="text-gray-600 font-medium">שירות מקצועי</div>
                  </div>
                  <div className="space-y-4">
                    <Clock className="w-12 h-12 text-[#1d9bf0] mx-auto" />
                    <div className="text-3xl font-bold text-[#0d1b2a]">24/7</div>
                    <div className="text-gray-600 font-medium">זמינות</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Areas Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0d1b2a]">
                תחומי הייעוץ הביטחוני שלנו
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-16"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1d9bf0] to-[#0284c7] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#0d1b2a]">ייעוץ לארגונים עסקיים ופרטיים</h3>
                    <p className="text-gray-600 leading-relaxed">
                      אסטרטגיות ניהול ביטחוני מותאמות אישית לאתגרים הייחודיים של כל ארגון.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#0d1b2a]">הגנת עורף</h3>
                    <p className="text-gray-600 leading-relaxed">
                      פיתוח מערכות חירום וביטחון בתנאים משתנים, תוך שימת דגש על יציבות בעת מצבי חירום.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#0d1b2a]">אבטחה מונעת</h3>
                    <p className="text-gray-600 leading-relaxed">
                      בניית מערכי אבטחה מראש כדי למנוע סיכונים ולמזער אובדן אפשרי.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#0d1b2a]">הדרכות מקצועיות</h3>
                    <p className="text-gray-600 leading-relaxed">
                      קורסים בהדרכת ירי, לחימה ואבטחה, המועברים על ידי מומחים בתחום הביטחון.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#0d1b2a]">הדרכת אבטחת אירועים</h3>
                    <p className="text-gray-600 leading-relaxed">
                      תכנון והכנה לאירועים תחת כיפת השמים, תוך ניהול סיכונים מקסימלי.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#0d1b2a]">פתרונות הגנה אישיים</h3>
                    <p className="text-gray-600 leading-relaxed">
                      שירותי ייעוץ ואימון למנהלים ולקוחות פרטיים הנדרשים לפתרונות אבטחה אישיים וייחודיים.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Consulting Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0d1b2a]">
                ייעוץ מקצועי שניתן לסמוך עליו
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-16"></div>
              
              <div className="bg-gradient-to-l from-[#0d1b2a] to-[#1e3a52] rounded-2xl p-12 text-white">
                <p className="text-lg leading-relaxed mb-8">
                  הצוות שלנו בפאי אקספרטיס מורכב מאנשי ביטחון ברמה הגבוהה ביותר, עם ניסיון מצטבר של עשרות שנים בשירותים ביטחוניים מגוונים. כל אחד מחברי הצוות עבר הכשרה מקצועית והסמכות בתחומים כגון הגנת עורף, אבטחה מונעת, הכשרה בשימוש בנשק, תכנון וביצוע מערכי חירום ,ומיומנויות ניהול בעת מצבי חירום.
                </p>
                <p className="text-lg leading-relaxed">
                  כמובילים בתחום, אנו מתעדכנים באופן מתמיד בשינויים ובסיכונים הביטחוניים בעולם, ומספקים ללקוחותינו ייעוץ מותאם אישית בהתאם לצרכים המיוחדים שלהם, תוך שמירה על דיסקרטיות מוחלטת ואתיקה מקצועית.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0d1b2a]">
                איך זה עובד?
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-16"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-white border-0 shadow-lg text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1d9bf0] to-[#0284c7]"></div>
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#1d9bf0] to-[#0284c7] rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[#0d1b2a]">פגישת ייעוץ ראשונית</h3>
                    <p className="text-gray-600 leading-relaxed">
                      נתחיל בהבנת הצרכים הביטחוניים שלך באמצעות פגישה ראשונית, בה נבחן את האתגרים והדרישות הביטחוניות שלך.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-lg text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[#0d1b2a]">תכנון פתרון מותאם אישית</h3>
                    <p className="text-gray-600 leading-relaxed">
                      על בסיס המידע שנקבל, נבנה תוכנית ייעוץ ופתרון אבטחה המותאמת אישית לצרכים שלך.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-lg text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[#0d1b2a]">הדרכה והכשרה</h3>
                    <p className="text-gray-600 leading-relaxed">
                      אם נדרש, נדאג להדריך את צוותך או אותך בפרט במיומנויות ביטחוניות שונות, כולל הגנה עצמית ואבטחת אירועים.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-lg text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[#0d1b2a]">תמיכה שוטפת</h3>
                    <p className="text-gray-600 leading-relaxed">
                      גם לאחר הייעוץ הראשוני, נשמח להמשיך ללוות אותך ולספק תמיכה שוטפת במידת הצורך.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1e3a52] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                פאי אקספרטיס – פתרונות ביטחוניים מותאמים אישית
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>
              
              <p className="text-lg leading-relaxed mb-8">
                אם אתם מחפשים ייעוץ ביטחוני מקצועי ואמין, אנחנו כאן בשבילכם. פאי אקספרטיס מציעה לכם את כל הכלים שדרושים להבטחת ביטחון מקסימלי, בין אם מדובר במערך אבטחה לאירועים, הגנת עורף לעסק או פתרונות אבטחה אישיים.
              </p>
              <p className="text-lg leading-relaxed mb-12">
                צרו קשר עם פאי אקספרטיס עוד היום לקבלת ייעוץ ביטחוני מקצועי. נשמח לעזור ולהתאים פתרונות שמספקים שקט נפשי וביטחון.
              </p>
              
              <Button 
                className="bg-[#1d9bf0] hover:bg-[#0284c7] text-white rounded-full px-12 py-4 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <a href="tel:050-730-0720" className="flex items-center gap-3">
                  <Phone size={24} />
                  צור קשר עכשיו
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Highlights Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0d1b2a]">
                מדוע לבחור בנו?
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-16"></div>
              
              <div className="bg-gray-50 rounded-2xl p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-[#1d9bf0] flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">ניסיון של 20 שנה בתחום הביטחון</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-[#1d9bf0] flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">ייעוץ מותאם אישית לכל לקוח ולקוח</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-[#1d9bf0] flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">הכשרה והדרכה על ידי מומחים בתחום</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-[#1d9bf0] flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">התחייבות לשמירה על דיסקרטיות ואתיקה מקצועית</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm md:col-span-2 justify-center">
                    <CheckCircle className="text-[#1d9bf0] flex-shrink-0" size={28} />
                    <span className="text-lg font-medium text-gray-800">שירותים בארץ ובחו״ל</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Satisfied Clients Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0d1b2a]">
                לקוחות מרוצים
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-16"></div>
              
              <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                <p className="text-lg leading-relaxed text-gray-700">
                  לאורך השנים, סיפקנו ייעוץ ביטחוני והדרכות לארגונים ולקוחות פרטיים, כולל מוסדות ציבוריים, חברות ביטחוניות, אירועים תחת כיפת השמים ולקוחות פרטיים, והעברנו אותם חוויות בלתי נשכחות בתחום הביטחון.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityConsulting;