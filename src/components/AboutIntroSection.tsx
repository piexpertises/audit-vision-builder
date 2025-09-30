import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n } from '@/hooks/useI18n';
import steveProfile from '@/assets/steve-belhasen-profile.jpg';

const AboutIntroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t, isRTL } = useI18n();

  return (
    <section id="about-intro" className="relative py-20" dir={isRTL ? 'rtl' : 'ltr'} ref={ref}>
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
      
      {/* Hero Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-hsl(216 18% 12% / 0.15) pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section 1 - About Pi Expertises with Glass Cards */}
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
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
                {t('about.title')}
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Profile Photo */}
            <div className={`flex justify-center lg:order-1 transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-right-new opacity-100' : 'opacity-0 translate-x-10'}`}>
              <div className="relative hover-lift">
                <div 
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'hsl(210 20% 98% / 0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid hsl(210 20% 98% / 0.18)',
                    boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
                  }}
                >
                  <img 
                    src={steveProfile} 
                    alt="סטיב בלחסן - מייסד ומנהל" 
                    className="w-80 h-96 object-cover rounded-lg shadow-lg hover-glow transition-all duration-500"
                  />
                  <div className="absolute inset-6 rounded-lg ring-4 ring-accent/20 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Main About Content */}
            <div className={`space-y-6 lg:order-2 transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-left opacity-100' : 'opacity-0 -translate-x-10'}`}>
              <div 
                className="p-8 rounded-2xl hover-lift"
                style={{
                  background: 'hsl(210 20% 98% / 0.12)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid hsl(210 20% 98% / 0.18)',
                  boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
                }}
              >
                <h3 className="text-xl font-semibold text-accent mb-4 text-center">
                  {t('about.founder_title')}
                </h3>
                
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    פאי אקספרטיס הוא משרד בוטיק בתחום הביטחון שהוקם בשנת 2016 על ידי סטיב בלחסן, סא"ל במיל', מנהל בכיר בתחום האירועים תחת כיפת השמים.
                  </p>
                  <p>
                    סטיב בלחסן מביא עימו 20 שנה של ניסיון עשיר בביטחון והגנה, עם התמחות בתחומים כמו הגנת העורף, הקמת מערכי חירום, אבטחה מונעת והדרכת ירי ולחימה. הוא בעל תואר ראשון במדעי החברה והרוח עם התמחות בביטחון והגנת העורף, ובוגר תואר שני במנהל עסקים עם התמחות בניהול משברים ובניית חוסן בארגונים. בנוסף, סטיב הוא בעל תואר שני נוסף במדעי היהדות והרוח.
                  </p>
                  <p>
                    כמנהיג בתחום הביטחון, סטיב משתמש בידע המקצועי, האקדמי והמעשי שלו כדי לפתח פתרונות ביטחוניים מותאמים אישית וחדשניים. את כל הידע הזה הוא מעביר לצוות פאי אקספרטיס, שמוביל את המשרד להצלחה ומקצועיות ללא פשרות.
                  </p>
                  <div 
                    className="p-4 rounded-lg"
                    style={{
                      background: 'hsl(34 100% 84% / 0.1)',
                      border: '1px solid hsl(34 100% 84% / 0.2)',
                    }}
                  >
                    <p className="text-foreground font-medium">
                      ההגדרה שלנו למושג ביטחון היא אנלוגיה למספר היווני π (פאי): כל פרט, קטן ככל שיהיה, חיוני להשלמת התמונה ולהגנה אפקטיבית על המושא המאובטח.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutIntroSection;