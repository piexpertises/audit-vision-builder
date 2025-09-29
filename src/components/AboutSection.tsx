import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Target, Phone, Mail } from 'lucide-react';
import steveProfile from '@/assets/steve-profile.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        
        {/* Section 1 - אודות פאי אקספרטיס */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              אודות פאי אקספרטיס
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Profile Photo */}
            <div className="flex justify-center lg:order-1">
              <div className="relative">
                <img 
                  src={steveProfile} 
                  alt="סטיב בלחסן - מייסד ומנהל" 
                  className="w-80 h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 rounded-lg ring-4 ring-accent/20"></div>
              </div>
            </div>

            {/* Main About Content */}
            <div className="space-y-6 lg:order-2">
              <Card className="card-security">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-accent mb-4 text-center">
                    סטיב בלחסן | מייסד ומנהל
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      פאי אקספרטיס הוא משרד בוטיק בתחום הביטחון שהוקם בשנת 2016 על ידי סטיב בלחסן, סא"ל במיל', מנהל בכיר בתחום האירועים תחת כיפת השמים.
                    </p>
                    <p>
                      סטיב בלחסן מביא עימו 20 שנה של ניסיון עשיר בביטחון והגנה, עם התמחות בתחומים כמו הגנת העורף, הקמת מערכי חירום, אבטחה מונעת והדרכת ירי ולחימה. הוא בעל תואר ראשון במדעי החברה והרוח עם התמחות בביטחון והגנת העורף, ובוגר תואר שני במנהל עסקים עם התמחות בניהול משברים ובניית חוסן בארגונים. בנוסף, סטיב הוא בעל תואר שני נוסף במדעי היהדות והרוח.
                    </p>
                    <p>
                      כמנהיג בתחום הביטחון, סטיב משתמש בידע המקצועי, האקדמי והמעשי שלו כדי לפתח פתרונות ביטחוניים מותאמים אישית וחדשניים. את כל הידע הזה הוא מעביר לצוות פאי אקספרטיס, שמוביל את המשרד להצלחה ומקצועיות ללא פשרות.
                    </p>
                    <p className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      ההגדרה שלנו למושג ביטחון היא אנלוגיה למספר היווני π (פאי): כל פרט, קטן ככל שיהיה, חיוני להשלמת התמונה ולהגנה אפקטיבית על המושא המאובטח.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Section 2 - תחומי ההתמחות שלנו */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              תחומי ההתמחות שלנו
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <Card className="card-security">
            <CardContent className="p-8">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>ייעוץ ביטחוני מקצועי לכל תחום, מהעסק הפרטי ועד הגופים הגדולים והרגישים.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>הדרכה ואימון בתחום הירי, לחימה ואבטחה מונעת.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>הגנת העורף והקמת מערכי חירום.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>הדרכות תכנון אבטחה לאירועים תחת כיפת השמים.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span>שירותים מותאמים אישית בתחום הביטחון, הטרור וריגול תעשייתי.</span>
                </div>
                <p className="bg-accent/10 p-4 rounded-lg border border-accent/20 font-medium">
                  ההבנה שלנו היא שכל פרט הוא קריטי – לכל החלטה ולכל צעד יש תוצאה ישירה על מידת ההגנה שאנו מספקים ללקוחותינו.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 3 - צוות המומחים שלנו */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              צוות המומחים שלנו
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <Card className="card-security">
            <CardContent className="p-8">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  הצוות שלנו מורכב מאנשי מקצוע בתחום הביטחון, בעלי רקע עשיר במוסדות ביטחוניים וניסיון של עשרות שנים בתחום. כל חבר צוות מביא עימו יכולות ייחודיות ועוסק בתפקידים שמבטיחים את ההגנה המירבת על לקוחותינו.
                </p>
                <p>
                  אנו מתעדכנים באופן שוטף בשינויים ובסיכונים הגלויים בארץ ובעולם, ומספקים ללקוחותינו תדרוכים תקופתיים, אזהרות מסע ומענה מותאם אישית לכל צורך ביטחוני.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 4 - ההתחייבות שלנו */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              ההתחייבות שלנו
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <Card className="card-security bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                פאי אקספרטיס מתחייבת לספק שירות מקצועי, איכותי ודיסקרטי, תוך שמירה על אתיקה מקצועית והתאמת הפתרונות הביטחוניים בצורה מדויקת לצרכים של כל לקוח. אנו פועלים תמיד במסגרת החוק ומתאימים את כל השירותים והפתרונות לשינויים המתמידים במציאות הביטחונית.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Section 5 - המומחים שלך בביטחון (Call to Action) */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              המומחים שלך בביטחון
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <Card className="card-security">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  אם אתם זקוקים לייעוץ ביטחוני, קורסים בהדרכת ירי או הגנת עורף, אנחנו כאן כדי לעזור.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  צרו קשר עם פאי אקספרטיס וגלו איך אנחנו יכולים לשדרג את הביטחון שלכם.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3">
                    <Phone className="h-5 w-5 ml-2" />
                    צור קשר טלפוני
                  </Button>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 px-8 py-3">
                    <Mail className="h-5 w-5 ml-2" />
                    שלח הודעה
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;