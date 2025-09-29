import React from 'react';
import steveProfile from '@/assets/steve-profile-new.jpg';

const AboutIntroSection = () => {
  return (
    <section id="about-intro" className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        
        {/* Section 1 - אודות פאי אקספרטיס */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Profile Photo - Left Side */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src={steveProfile} 
                alt="סטיב בלחסן - מייסד ומנהל" 
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Main About Content - Right Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  אודותינו
                </h2>
                <h3 className="text-2xl font-semibold text-accent mb-4">
                  סטיב בלחסן | מייסד ומנהל
                </h3>
                <div className="w-24 h-1 bg-accent mb-6"></div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  פאי אקספרטיס הוא משרד בוטיק בתחום הביטחון שהוקם בשנת 2016 על ידי סטיב בלחסן, סא"ל במיל', מנהל בכיר בתחום האירועים תחת כיפת השמים.
                </p>
                <p>
                  <strong>סטיב בלחסן</strong> מביא עימו <strong>20 שנה</strong> של ניסיון עשיר בביטחון והגנה, עם התמחות בתחומים כמו הגנת העורף, הקמת מערכי חירום, אבטחה מונעת והדרכת ירי ולחימה. הוא בעל תואר ראשון במדעי החברה והרוח עם התמחות בביטחון והגנת העורף, ובוגר תואר שני במנהל עסקים עם התמחות בניהול משברים ובניית חוסן בארגונים. בנוסף, סטיב הוא בעל תואר שני נוסף במדעי היהדות והרוח.
                </p>
                <p>
                  כמנהיג בתחום הביטחון, סטיב משתמש בידע המקצועי, האקדמי והמעשי שלו כדי לפתח פתרונות ביטחוניים מותאמים אישית וחדשניים. את כל הידע הזה הוא מעביר לצוות פאי אקספרטיס, שמוביל את המשרד להצלחה ומקצועיות ללא פשרות.
                </p>
                
                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 mt-6">
                  <p className="font-medium">
                    ההגדרה שלנו למושג ביטחון היא אנלוגיה למספר היווני <strong>π (פאי)</strong>: כל פרט, קטן ככל שיהיה, חיוני להשלמת התמונה ולהגנה אפקטיבית על המושא המאובטח.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    צוות המומחים שלנו
                  </h4>
                  <p>
                    הצוות שלנו מורכב מאנשי מקצוע בתחום הביטחון, בעלי רקע עשיר במוסדות ביטחוניים וניסיון של עשרות שנים בתחום. כל חבר צוות מביא עימו יכולות ייחודיות ועוסק בתפקידים שמבטיחים את ההגנה המירבת על לקוחותינו.
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