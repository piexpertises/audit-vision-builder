import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-background" dir="rtl">
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-secondary/30 pointer-events-none" />
      <div className="container mx-auto px-4">

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