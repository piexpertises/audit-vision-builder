import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, CheckCircle, Calendar, Award, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import massEventHero from "@/assets/mass-event-hero.jpg";
import eventCoordination from "@/assets/event-coordination.jpg";
import eventPlanning from "@/assets/event-planning.jpg";

const MassEventManagement = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.75)), url(${massEventHero})`
          }}
        />
        {/* Bottom gradient fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-white/30 to-white z-10 pointer-events-none" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Shield className="w-20 h-20 mx-auto mb-6 text-[#1d9bf0]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ניהול אירועים המוניים
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-[#1d9bf0]">
            המומחים שלך בניהול אירועים
          </p>
          <p className="text-xl mb-8">
            האירוע שלך, הבטיחות שלנו.
          </p>
          <Button 
            size="lg" 
            className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3 text-lg rounded-lg"
            asChild
          >
            <a 
              href="https://wa.me/972507300720?text=שלום+אני+מעוניין+לקבל+פרטים+נוספים+על+השירותים+שלכם"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="ml-2 h-5 w-5" />
              צור קשר
            </a>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20 bg-white">
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6">
                מומחי ניהול אירועים המוניים בישראל
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                בישראל מתקיימים אירועים המוניים רבים בכל שנה – חגים, פסטיבלים, הופעות, ימי עיון ועוד. כל אירוע כזה מצריך תכנון, ארגון ויישום של פתרונות בטיחותיים כדי להבטיח את הצלחתו ואת שלום המשתתפים.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                בפאי אקספרטיס, אנו מציעים שירות ניהול אירועים המוניים שמיועד לארגונים, עיריות, מועצות, עמותות ומוסדות שונים, כדי לוודא שהאירוע שלכם יתנהל בצורה בטוחה ומסודרת, תוך שמירה על הבטיחות והשלווה של כל המשתתפים.
              </p>
            </div>
            <div className="relative">
              <img 
                src={eventCoordination} 
                alt="מרכז תיאום אירועים מקצועי"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">למה לבחור בנו?</h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start mb-6">
                <Award className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    ניהול אירועים המוניים הוא אתגר גדול, ודורש ידע, ניסיון והתאמה אישית לצרכים של כל אירוע. צוות המומחים שלנו, אשר כולל אנשי מקצוע בעלי ניסיון עשיר בתכנון והפקת אירועים בתנאים משתנים, מבצע תהליך תכנון, ארגון וביצוע יסודי של כל פרויקט, בשיתוף פעולה הדוק עם הלקוח.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    אנחנו נדאג לכל פרט ופרט, כדי שאתם תוכלו להתמקד בתוכן האירוע, ולא בביצוע ובבטיחות.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-white">
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">
            שירותים שכוללים ניהול אירועים המוניים
          </h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">תכנון מקצועי</h3>
                <p className="text-gray-700">יצירת תוכניות ביטחוניות שמותאמות לכל סוג של אירוע, בין אם מדובר בהפנינג, פסטיבל, חג או יום פתוח.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">תכנית אבטחה מקיפה</h3>
                <p className="text-gray-700">הכנה ויישום של מערכות אבטחה לכל סוג של אירוע, כולל תיאום עם הגורמים הרלוונטיים.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">בטיחות המשתתפים</h3>
                <p className="text-gray-700">קביעת נהלי בטיחות ברורים ומדויקים, התחשבות במאפייני הקהל והתאמת הכלים הדרושים להבטחת בטיחותם.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">הדרכות צוות</h3>
                <p className="text-gray-700">הכשרה והדרכה שוטפת לכל אנשי האבטחה והצוותים הפועלים במקום, על פי התקנים והדרישות המחמירות ביותר.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">תיאום רשויות</h3>
                <p className="text-gray-700">תיאום מול משטרת ישראל, צוותי חירום, כוחות הצלה ורשויות מקומיות כדי להבטיח כיסוי ביטחוני מקיף.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">פיקוח בזמן אמת</h3>
                <p className="text-gray-700">פיקוח צמוד בזמן אמת כדי להבטיח שהאירוע יתנהל בצורה חלקה ובטוחה לכל המשתתפים.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={eventPlanning} 
                alt="תכנון אירועים מקצועי"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6">
                ניהול אירועים המוניים – כל פרט חשוב
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                האירועים המוניים יכולים להיות מרהיבים, אך גם כרוכים באתגרים רבים בתחום הבטיחות והניהול. בעקבות אסון ערד (17.7.1995), נדרש למוסדות ולגופים המקיימים אירועים המוניים להתאים את האירועים לתקנים מחמירים של בטיחות.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                בפאי אקספרטיס, אנו פועלים לפי התקן הישראלי ת"י 5688, אשר קובע את דרישות הבטיחות המינימליות לאירועים המוניים. התקן הזה נכתב על מנת למנוע סיכונים ולוודא שכל פרט באירוע מבוצע באופן מסודר ומפוקח.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-white">
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">
            שלב אחר שלב – איך אנחנו פועלים?
          </h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">פגישת ייעוץ והיכרות</h3>
                <p className="text-gray-700">בשלב זה נבין את מטרות האירוע, קהל היעד, המיקום והדרישות הספציפיות שלכם.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">תכנון ביטחוני מותאם</h3>
                <p className="text-gray-700">נבנה את תוכנית האבטחה והבטיחות המתאימה ביותר לאירוע שלכם, על בסיס הניסיון שלנו והדרישות החוקיות.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">הכנת צוותי האבטחה</h3>
                <p className="text-gray-700">נאמן את הצוותים לאירוע, מספקים הדרכות וליווי צמוד להבטחת ביצוע תקני הבטיחות.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">ליווי בשטח</h3>
                <p className="text-gray-700">הצוות שלנו ילווה את האירוע בפועל, יוודא את ביצוע התקנים, יפקח על הציוד ויתאם עם הגורמים השונים לכל אורך האירוע.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">סיכום וניתוח</h3>
                <p className="text-gray-700">לאחר סיום האירוע, נבצע סיכום מקצועי שיכלול ניתוח ביצועי ומסקנות לשיפור עתידי.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Highlights */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#0d1b2a]/10 to-[#0d1b2a] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">למה אנחנו?</h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Award className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">ניסיון וידע בתחום</h3>
                    <p className="text-gray-700">עם עשרות שנים של ניסיון, הצוות שלנו מומחה בניהול וייעוץ לאירועים המוניים.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">הכשרה לפי התקנים</h3>
                    <p className="text-gray-700">אנו פועלים לפי התקן ת"י 5688 ומבצעים כל אירוע בהתאם לדרישות המשרד לביטחון לאומי, משרד הכלכלה והתעשייה.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Target className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">שירות מותאם אישית</h3>
                    <p className="text-gray-700">אנו מבינים שכל אירוע הוא ייחודי ולכן כל פתרון שלנו מותאם אישית לצרכים הספציפיים שלך.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Clock className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">ביצוע בזמן אמת</h3>
                    <p className="text-gray-700">צוות מקצועי שמלווה את האירוע לכל אורכו, תוך שמירה על אופטימיזציה של הבטיחות והניהול.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1a365d] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">צרו קשר</h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed mb-8">
            אם אתם מתכננים אירוע המוני, פאי אקספרטיס כאן כדי להבטיח שהאירוע יתנהל בצורה הבטוחה והמקצועית ביותר. צרו איתנו קשר וגלו איך אנחנו יכולים להבטיח את הצלחת האירוע שלכם, תוך שמירה על ביטחון המשתתפים והצלחת האירוע.
          </p>
          <Button 
            size="lg" 
            className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3 text-lg rounded-lg"
            asChild
          >
            <a 
              href="https://wa.me/972507300720?text=שלום+אני+מעוניין+לקבל+פרטים+נוספים+על+השירותים+שלכם"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="ml-2 h-5 w-5" />
              צור קשר עכשיו
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MassEventManagement;