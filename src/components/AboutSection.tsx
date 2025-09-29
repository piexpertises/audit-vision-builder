import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">

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

      </div>
    </section>
  );
};

export default AboutSection;