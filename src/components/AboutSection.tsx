import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20" dir="rtl">
      {/* Glass Background Layer */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'hsl(216 18% 12% / 0.1)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        />
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-hsl(216 18% 12% / 0.15) pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">

        {/* Section 3 - Our Expert Team with Glass Cards */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            {/* Title Glass Card */}
            <div 
              className="inline-block px-8 py-6 rounded-2xl mb-6"
              style={{
                background: 'hsl(210 20% 98% / 0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid hsl(210 20% 98% / 0.18)',
                boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                צוות המומחים שלנו
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </div>
          
          <div 
            className="p-8 rounded-2xl"
            style={{
              background: 'hsl(210 20% 98% / 0.12)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid hsl(210 20% 98% / 0.18)',
              boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
            }}
          >
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                הצוות שלנו מורכב מאנשי מקצוע בתחום הביטחון, בעלי רקע עשיר במוסדות ביטחוניים וניסיון של עשרות שנים בתחום. כל חבר צוות מביא עימו יכולות ייחודיות ועוסק בתפקידים שמבטיחים את ההגנה המירבת על לקוחותינו.
              </p>
              <p>
                אנו מתעדכנים באופן שוטף בשינויים ובסיכונים הגלויים בארץ ובעולם, ומספקים ללקוחותינו תדרוכים תקופתיים, אזהרות מסע ומענה מותאם אישית לכל צורך ביטחוני.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 - Our Commitment with Glass Cards */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            {/* Title Glass Card */}
            <div 
              className="inline-block px-8 py-6 rounded-2xl mb-6"
              style={{
                background: 'hsl(210 20% 98% / 0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid hsl(210 20% 98% / 0.18)',
                boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                ההתחייבות שלנו
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </div>
          
          <div 
            className="p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, hsl(200 100% 40% / 0.05), hsl(34 100% 84% / 0.05)), hsl(210 20% 98% / 0.12)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid hsl(210 20% 98% / 0.18)',
              boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
            }}
          >
            <p className="text-lg text-foreground leading-relaxed text-center">
              פאי אקספרטיס מתחייבת לספק שירות מקצועי, איכותי ודיסקרטי, תוך שמירה על אתיקה מקצועית והתאמת הפתרונות הביטחוניים בצורה מדויקת לצרכים של כל לקוח. אנו פועלים תמיד במסגרת החוק ומתאימים את כל השירותים והפתרונות לשינויים המתמידים במציאות הביטחונית.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;