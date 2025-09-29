import React from 'react';
import steveProfile from '@/assets/steve-profile.jpg';

const AboutIntroSection = () => {
  return (
    <section id="about-intro" className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        
        {/* Section 1 - אודות פאי אקספרטיס */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              אודות פאי אקספרטיס
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo - Left Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-80 bg-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={steveProfile} 
                  alt="סטיב בלחסן - מייסד ומנהל" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Main About Content - Right Side */}
            <div className="space-y-6 lg:pr-8">
              <div className="text-right">
                <h3 className="text-xl font-semibold text-accent mb-6">
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
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutIntroSection;