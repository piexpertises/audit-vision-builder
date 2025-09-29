import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Users, CheckCircle, Target, Award, Clock, Phone, Heart, Zap, Database, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import emergencyResponsePlanning from "@/assets/emergency-response-planning.jpg";
import disasterRecoverySystems from "@/assets/disaster-recovery-systems.jpg";
import psychologicalResilience from "@/assets/psychological-resilience-teamwork.jpg";
import naturalDisasterPreparedness from "@/assets/natural-disaster-preparedness.jpg";

const EmergencyPreparedness = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.75)), url(${emergencyResponsePlanning})`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <AlertTriangle className="w-20 h-20 mx-auto mb-6 text-[#1d9bf0]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            היערכות לשעת חירום
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-[#1d9bf0]">
            מוכנים לכל תרחיש
          </p>
          <p className="text-xl mb-8">
            האם אתם מוכנים למצבי חירום?
          </p>
          <Button 
            size="lg" 
            className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3 text-lg rounded-lg"
            asChild
          >
            <a 
              href="https://wa.me/972505730072?text=שלום%20פאי%20אקספרטיס,%20אני%20מעוניין%20לקבל%20פרטים%20נוספים%20על%20היערכות%20לשעת%20חירום."
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6">
                מוכנות למצבי חירום - חיוני לכל ארגון
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                מצבי חירום יכולים להתרחש בפתאומיות ובאופן בלתי צפוי, והם לעיתים חוצים גבולות גיאוגרפיים, חברתיים וכלכליים. בין אם מדובר באסונות טבע (רעידת אדמה, פנדמיה, צונאמי) או באירועים הנגרמים על ידי מעשה אדם (פיגועי טרור, מלחמה, שריפות), מצבים אלו משפיעים באופן ישיר על המשכיות הפעולה של הארגון, ויכולים להוביל לקריסת תשתיות ולעומס על הקהילה.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                בפאי אקספרטיס, אנו מאמינים כי אירועים כאלו אינם "ברבור שחור" - תרחישים כאלו יכולים וצריכים להיות צפויים, מתוכננים ומנוהלים באופן מושכל. כל ארגון, עסק או מוסד חייב להיות מוכן למצבי חירום, ושם אנו נכנסים לתמונה.
              </p>
            </div>
            <div className="relative">
              <img 
                src={naturalDisasterPreparedness} 
                alt="היערכות לאסונות טבע ומצבי חירום"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">איך אנחנו עוזרים לך להיערך?</h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start mb-6">
                <Shield className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    היערכות לשעת חירום דורשת תכנון יסודי ומקיף, הכולל לא רק את בניית התכניות השגרתיות, אלא גם את התמודדות עם מצבים חריגים, תרחישים שונים, והכנת הארגון לפעולה מידית במצבים של לחץ.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    בניית תוכניות חירום בשילוב עם תפיסת ביטחון מקיפה, חוסן נפשי בארגונים ו-רציפות תפקודית תספק פתרון הוליסטי שיבטיח שהארגון לא רק ישרוד את המשבר אלא גם יוכל להמשיך לפעול ביעילות.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BCP Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={disasterRecoverySystems} 
                alt="רציפות תפקודית ושחזור מערכות"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6">
                מהי רציפות תפקודית (Business Continuity Planning - BCP)?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                היכולת להמשיך לפעול תחת תנאים קשים ומשתנים, מבלי שהשירותים הקריטיים והפעילויות העסקיות ייפגעו. הגדרה ויישום של BCP מאפשרים לארגונים להתמודד עם כל משבר או אסון בצורה מקצועית ומסודרת, ולהימנע מקטסטרופות כלכליות בעקבות חוסר יכולת לפעול.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                למשל, במקרה של פנדמיה או אסון טבע שיפגע במערך העובדים או בפעילות יומיומית, נוכל לתכנן מראש תוכנית גיבוי שתשמור על רציפות כל השירותים הקריטיים של הארגון, כולל מערכות טכנולוגיות, שירותים ללקוחות והספקים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DRP Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6">
                מהו DRP (Disaster Recovery Plan)?
              </h2>
              <div className="flex items-start mb-6">
                <Database className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  תוכנית DRP מתמקדת במענה טכנולוגי, ושואפת לשחזר את כל מערכות ה-IT שנפגעו במהלך משבר. מדובר במערכות קריטיות כמו שרתים, מאגרי נתונים, מערכות מידע ויישומים חיוניים אחרים.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                בניית תוכנית DRP מאפשרת לארגונים לחזור לפעולה במהירות לאחר אסון, ומפחיתה את זמן ההשבתה של המערכות.
              </p>
            </div>
            <div className="relative">
              <img 
                src={psychologicalResilience} 
                alt="חוסן נפשי וצוותיות בארגון"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Psychological Resilience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">
            חוסן נפשי בארגונים – הגורם המוביל להצלחה
          </h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start mb-6">
                <Heart className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    חוסן נפשי הוא מרכיב קריטי להצלחת הארגון בזמן חירום. תמיכה נפשית לעובדים, הדרכות חוסן נפשי ואימוץ תרבות ארגונית שמבוססת על גמישות ויכולת התמודדות עם משברים, יכולות לעשות את ההבדל בין הישרדות לקטסטרופה.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    במצבים של משבר או טראומה, הארגון יכול לפתח חוסן ארגוני, המאפשר לאנשים להמשיך לעבוד ולהתפקד בצורה מיטבית גם תחת לחץ. זהו אחד מהמרכיבים המרכזיים בהכנה לכל תרחיש חירום.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Advantage Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">יתרון עסקי בשעת משבר</h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start mb-6">
                <TrendingUp className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    המשבר עצמו, אם יטופל כראוי, יכול להפוך ליתרון עסקי. ארגון שמסוגל לשמור על פעולתו בצורה מקצועית ונכונה בזמן חירום – ייצא מהמשבר עם מוניטין חזק יותר, נאמנות לקוחות גבוהה יותר, ויכולת לשמור על קשרים עסקיים מוצלחים לאורך זמן.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    ארגון שמגיב במהירות, מקצועיות ויעילות, הופך להיות "הסמן" הארגוני שמשדרים בו אמון, יציבות ויכולת עמידות.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">
            איך אנחנו עובדים?
          </h2>
          <p className="text-center text-gray-600 mb-12">בפאי אקספרטיס, אנו מספקים הכנה מקיפה וממוקדת לשעת חירום, כולל את כל המרכיבים הנדרשים:</p>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">סקירת איומים ותרחישי סיכון</h3>
                <p className="text-gray-700">נתחיל בהבנת הסיכונים והאיומים שעומדים בפני הארגון שלך. נעבוד יחד כדי למפות את כלל הסיכונים שיכולים להשפיע על הפעילות העסקית, כולל איומים פיזיים, דיגיטליים ופסיכולוגיים.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">תכנון וביצוע BCP ו-DRP</h3>
                <p className="text-gray-700">נבנה תוכניות רציפות תפקודית ו-שחזור מערכות IT מותאמות אישית לארגון שלך. תכנון זה יכלול פיתוח של מערכות גיבוי, פתרונות טכנולוגיים ומענה לאובדן נתונים.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">הכשרת צוותים ותרגולים</h3>
                <p className="text-gray-700">צוותי האבטחה, עובדי המשרד, וההנהלה יעברו הכשרה ותרגול למצבי חירום, תוך שמירה על רציפות תפקודית ויכולת התמודדות עם מצבים קיצוניים.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">הקניית חוסן נפשי לארגון</h3>
                <p className="text-gray-700">אנו מספקים ליווי והדרכה לפיתוח חוסן נפשי בארגון, כך שלכל עובד יהיה את הכלים להתמודד עם מצבי לחץ ומשבר בצורה אפקטיבית.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">מענה בזמן אמת</h3>
                <p className="text-gray-700">במקרה של משבר או אסון, נספק לך את כל הכלים וההנחיות על מנת שהארגון יוכל להתמודד במהירות ולהחזיר את כל המערכות לעבודה, תוך כדי שמירה על הביטחון הפיזי והנפשי של כל המעורבים.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">כל השירותים שלנו:</h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Target className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">ייעוץ מקצועי והכוונה</h3>
                    <p className="text-gray-700">ייעוץ מקצועי והכוונה לבניית תוכניות מוכנות למצבי חירום.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Users className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">הדרכות ותרגולים</h3>
                    <p className="text-gray-700">הדרכות סדירות ותרגולים למערך האבטחה וההנהלה.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Database className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">הטמעת תוכניות גיבוי</h3>
                    <p className="text-gray-700">הטמעת תוכניות גיבוי לכל מערכות ה-IT של הארגון.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Heart className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">תמיכה בחוסן נפשי</h3>
                    <p className="text-gray-700">תמיכה בהכנת הארגון לחוסן נפשי וליצירת תרבות ארגונית חזקה המוכנה להתמודדות עם משברים.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Zap className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">תמיכה מלאה בשעת חירום</h3>
                    <p className="text-gray-700">תמיכה מלאה בשעת חירום – פיקוח, ניהול ותיאום בין כל הגורמים הרלוונטיים.</p>
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
            היערכות מוקדמת למצבי חירום לא רק שיכולה להציל חיים, אלא גם לשמור על היציבות העסקית שלכם לאורך זמן. פאי אקספרטיס מציעה לך את הידע, הכלים וההדרכות המתאימות ביותר לשמירה על רציפות תפקודית, חוסן נפשי ויכולת להתמודד עם כל משבר שיבוא.
          </p>
          <p className="text-lg mb-8">
            צרו קשר עוד היום כדי להתחיל את תהליך ההיערכות שלכם לשעת חירום.
          </p>
          <Button 
            size="lg" 
            className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3 text-lg rounded-lg"
            asChild
          >
            <a 
              href="https://wa.me/972505730072?text=שלום%20פאי%20אקספרטיס,%20אני%20מעוניין%20לקבל%20פרטים%20נוספים%20על%20היערכות%20לשעת%20חירום."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="ml-2 h-5 w-5" />
              צור קשר
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EmergencyPreparedness;