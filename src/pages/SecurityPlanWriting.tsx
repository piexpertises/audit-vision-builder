import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Users, CheckCircle, Calendar, Award, Clock, Phone, Target, MapPin, Camera, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import securityPlanDocument from "@/assets/security-plan-document.jpg";
import securityFacilityMap from "@/assets/security-facility-map.jpg";
import securityTechnology from "@/assets/security-technology-systems.jpg";
import securityConsultation from "@/assets/security-consultation-meeting.jpg";
import securityPlanChecklist from "@/assets/security-plan-checklist.jpg";

const SecurityPlanWriting = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.75)), url(${securityPlanDocument})`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <FileText className="w-20 h-20 mx-auto mb-6 text-[#1d9bf0]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            כתיבת תוכנית אבטחה
          </h1>
          <p className="text-xl mb-8">
            הבטיחות שלך, התוכנית שלנו.
          </p>
          <Button 
            size="lg" 
            className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3 text-lg rounded-lg"
          >
            <Phone className="ml-2 h-5 w-5" />
            צור קשר
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <img 
                src={securityPlanChecklist} 
                alt="תוכנית אבטחה מקצועית ורשימת בדיקות" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6">
                מומחי כתיבת תוכניות אבטחה מקצועיות
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                בפאי אקספרטיס, אנו מבינים את החשיבות של תוכנית אבטחה מותאמת אישית לכל ארגון או עסק. על פי חוק רישוי עסקים (1968) ודרישות משטרת ישראל (פק"מ 90.029.978) כל עסק או מקום המעסיק עובדים או מקבל קהל חייב להגיש תוכנית אבטחה מקצועית שמותאמת לצרכים הספציפיים של המקום.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                התוכנית נועדה לא רק להבטיח את הביטחון של העובדים והלקוחות, אלא גם להקנות כלים למענה מהיר ויעיל במקרים של חירום.
              </p>
            </div>
            <div className="relative">
              <img 
                src={securityConsultation} 
                alt="ייעוץ מקצועי לכתיבת תוכנית אבטחה"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Security Plan Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">מי חייב בתוכנית אבטחה?</h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Users className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">עסקים המעסיקים עובדים</h3>
                    <p className="text-gray-700">חנויות, אולמות אירועים, מסעדות, מרכזים מסחריים, משרדים ועוד.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Shield className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">מפעלים ועסקים רגישים</h3>
                    <p className="text-gray-700">מפעלים, חברות טכנולוגיה, גופים המייצרים מוצרי ביטחונית או עוסקים בנושאים רגישים.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Calendar className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">מרכזי אירועים</h3>
                    <p className="text-gray-700">אירועים תחת כיפת השמים, כנסים, תערוכות, הופעות, ועוד.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Target className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">מקומות ציבוריים</h3>
                    <p className="text-gray-700">אולמות שמחות, בתי מלון, מרכזים רפואיים ומוסדות ציבוריים.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={securityFacilityMap} 
                alt="מפה וסקירת מתקן לתוכנית אבטחה"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6">
                מטרת תוכנית האבטחה ותיק שטח
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                תוכנית אבטחה מהווה כלי חיוני לגורמים הרלוונטיים – משטרת ישראל, כיבוי אש, מד"א, פיקוד העורף ועוד. מטרת התוכנית היא לאפשר מענה מהיר ויעיל בעת חירום, תוך שמירה על שפה אחידה בין כל הגורמים המוסמכים.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                זו הדרך להבטיח שהאבטחה שלך עומדת בכל התקנים ונכונה גם להיערכות חירום. תוכנית האבטחה מכילה את כל המרכיבים הנדרשים לשמירה על בטיחות מקסימלית במתקן שלך, ומספקת את הבסיס להיערכות מערכתית לניהול סיכונים ואיומים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">
            נושאים מרכזיים הכלולים בתוכנית אבטחה
          </h2>
          <p className="text-center text-gray-600 mb-12">(רשימה חלקית)</p>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <AlertTriangle className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">הגדרת איומים וסקר סיכונים</h3>
                <p className="text-gray-700">ניתוח הסיכונים הקיימים למקום, כולל איומים פיזיים, טכנולוגיים ופסיכולוגיים.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">מפת סביבת המתקן</h3>
                <p className="text-gray-700">מיפוי מדויק של המתקן והסביבה הקרובה לו, כולל נקודות רגישות ומיקומי גישה.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">זיהוי מקומות רגישים</h3>
                <p className="text-gray-700">הצבעה על נקודות רגישות במתקן (משרדים חשובים, חדרי מחשבים, מאגרי נתונים רגישים).</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">שיטת האבטחה</h3>
                <p className="text-gray-700">תכנון שיטת האבטחה המתאימה לכל מקום, כולל כוחות אבטחה, טכנולוגיה והתקנים דרושים.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Camera className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">מערכות טכנולוגיות</h3>
                <p className="text-gray-700">בחירה ותכנון מערכות טכנולוגיות להגברת האבטחה (מצלמות, מערכות כניסה, אזעקות).</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-[#1d9bf0] mb-4" />
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">אמצעי אבטחה ותגובות</h3>
                <p className="text-gray-700">טבלת אמצעי אבטחה, מקרים ותגובות – כללי פעולה למצבי חירום המאושרים על ידי משטרת ישראל.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">
            איך אנחנו עובדים?
          </h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">בניית תוכנית מותאמת</h3>
                <p className="text-gray-700">אנו מתחילים בתכנון תוכנית אבטחה שמתאימה לצרכים הספציפיים של העסק שלך, בהתבסס על גודל המתקן, רגישות המקום והסיכונים הנדרשים.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">הגשת תוכנית ותיק שטח</h3>
                <p className="text-gray-700">לאחר שהמדריך המפורט ייבנה, נעביר את התוכנית לרשויות המתאימות – משטרת ישראל וכיבוי אש, לצורך אישור והתאמה לתקנים.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">אישור והפקת עותקים</h3>
                <p className="text-gray-700">לאחר קבלת האישור, תקבל עותק מודפס ועותק דיגיטלי של התוכנית, כך שתוכל לשמור אותם במקום נגיש ומאובטח.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">ליווי מתמשך ובקרה</h3>
                <p className="text-gray-700">לא נפסיק לעקוב אחרי התוכנית גם אחרי שהיא אושרה. אנחנו נדאג לעדכון שוטף של תוכנית האבטחה בהתאם לשינויים בשטח, ותכנה תרגולים ובקרות שנועדו לשמור על כשירות המערך וההיערכות.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1d9bf0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">רענון שנתי</h3>
                <p className="text-gray-700">בכל שנה נעדכן את התוכנית בהתאם לשינויים בסטנדרטים, תקנים חדשים ודרישות החוק.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={securityTechnology} 
                alt="מערכות אבטחה טכנולוגיות"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6">
                שירותים ללקוחות חדשים ולקוחות קיימים
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-4 flex items-center">
                  <Users className="w-6 h-6 text-[#1d9bf0] ml-2" />
                  לקוחות חדשים:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1d9bf0] ml-2 mt-0.5 flex-shrink-0" />
                    בניית תוכנית אבטחה מקיפה הכוללת תיק שטח ואישורים מול משטרת ישראל וכיבוי אש.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1d9bf0] ml-2 mt-0.5 flex-shrink-0" />
                    לאחר אישור התוכנית, תקבל עותק מודפס ועותק דיגיטלי של התוכנית לשימוש מיידי.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0d1b2a] mb-4 flex items-center">
                  <Award className="w-6 h-6 text-[#1d9bf0] ml-2" />
                  לקוחות קיימים:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1d9bf0] ml-2 mt-0.5 flex-shrink-0" />
                    ליווי צמוד לכל אורך השנה עם מנהל ביטחון מוסמך.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1d9bf0] ml-2 mt-0.5 flex-shrink-0" />
                    ביצוע תרגולות שוטפות ובקרות למערך האבטחה במתקן.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1d9bf0] ml-2 mt-0.5 flex-shrink-0" />
                    רענון שנתי של תוכנית האבטחה ותיק השטח על פי דרישות רישוי עסקים.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#1d9bf0] ml-2 mt-0.5 flex-shrink-0" />
                    הגשת עדכונים מול רשויות האכיפה – הגשה שוטפת של תיקי השטח והאישורים מול משטרת ישראל וכיבוי אש.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#0d1b2a] text-center mb-4">למה לבחור בנו?</h2>
          <div className="w-20 h-1 bg-[#1d9bf0] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Award className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">ניסיון מקצועי</h3>
                    <p className="text-gray-700">עם ניסיון עשיר של עשרות שנים בתחום האבטחה והייעוץ הביטחוני, אנחנו יודעים לבנות תוכניות אבטחה שמתאימות בדיוק לכל ארגון.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Target className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">התאמה אישית</h3>
                    <p className="text-gray-700">כל תוכנית אבטחה שאנחנו בונים מותאמת לצרכים הספציפיים של הלקוח, כך שהפתרונות הניתנים הם תמיד מתאימים, יעילים ובטוחים.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">שמירה על תקנים מחמירים</h3>
                    <p className="text-gray-700">אנו פועלים לפי כל התקנים המחמירים ביותר, ודרישות משטרת ישראל.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Clock className="w-8 h-8 text-[#1d9bf0] ml-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d1b2a] mb-3">ליווי שוטף</h3>
                    <p className="text-gray-700">אנחנו לא עוזבים אותך אחרי הגשת התוכנית. עם ליווי צמוד והדרכות, אנחנו נשמור על רמת אבטחה גבוהה ומקצועית לאורך כל השנה.</p>
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
            אם אתם זקוקים לתוכנית אבטחה מקצועית ואישית לעסק שלכם, פאי אקספרטיס היא הבחירה הנכונה. צוות המומחים שלנו כאן כדי לבנות תוכנית שמתאימה בדיוק לצרכים שלכם, תוך שמירה על הבטיחות והדרישות החוקיות.
          </p>
          <p className="text-lg mb-8">
            צרו קשר עוד היום לקבלת ייעוץ והכוונה מקצועית בתהליך כתיבת תוכנית האבטחה שלכם.
          </p>
          <Button 
            size="lg" 
            className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3 text-lg rounded-lg"
          >
            <Phone className="ml-2 h-5 w-5" />
            צור קשר
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SecurityPlanWriting;