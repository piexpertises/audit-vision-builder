import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  const achievements = [
    { icon: Award, label: 'Military Experience', value: 'Lt. Col. (Ret.)' },
    { icon: Shield, label: 'Years in Security', value: '20+' },
    { icon: Users, label: 'Clients Served', value: '500+' },
    { icon: Target, label: 'Success Rate', value: '100%' },
  ];

  const expertise = [
    'Physical Security Assessment',
    'VIP Protection Services',
    'Event Security Management',
    'Emergency Response Planning',
    'Security Training & Education',
    'Risk Management Consulting',
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* אודותינו Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              אודותינו
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Main About Content */}
            <div className="space-y-6">
              <Card className="card-security">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    אודות פאי אקספרטיס
                  </h3>
                  <h4 className="text-xl font-semibold text-accent mb-4">
                    סטיב בלחסן | מייסד ומנהל
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    פאי אקספרטיס הוא משרד בוטיק בתחום הביטחון שהוקם בשנת 2016 על ידי סטיב בלחסן, סא"ל במיל', מנהל בכיר בתחום האירועים תחת כיפת השמים.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    סטיב בלחסן מביא עימו 20 שנה של ניסיון עשיר בביטחון והגנה, עם התמחות בתחומים כמו הגנת העורף, הקמת מערכי חירום, אבטחה מונעת והדרכת ירי ולחימה. הוא בעל תואר ראשון במדעי החברה והרוח עם התמחות בביטחון והגנת העורף, ובוגר תואר שני במנהל עסקים עם התמחות בניהול משברים ובניית חוסן בארגונים. בנוסף, סטיב הוא בעל תואר שני נוסף במדעי היהדות והרוח.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    כמנהיג בתחום הביטחון, סטיב משתמש בידע המקצועי, האקדמי והמעשי שלו כדי לפתח פתרונות ביטחוניים מותאמים אישית וחדשניים. את כל הידע הזה הוא מעביר לצוות פאי אקספרטיס, שמוביל את המשרד להצלחה ומקצועיות ללא פשרות.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Philosophy and Team */}
            <div className="space-y-6">
              <Card className="card-security">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">הגדרת הביטחון שלנו</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    ההגדרה שלנו למושג ביטחון היא אנלוגיה למספר היווני π) פאי): כל פרט, קטן ככל שיהיה, חיוני להשלמת התמונה ולהגנה אפקטיבית על המושא המאובטח.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-security">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">צוות המומחים שלנו</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    הצוות שלנו מורכב מאנשי מקצוע בתחום הביטחון, בעלי רקע עשיר במוסדות ביטחוניים וניסיון של עשרות שנים בתחום. כל חבר צוות מביא עימו יכולות ייחודיות ועוסק בתפקידים שמבטיחים את ההגנה המירבת על לקוחותינו.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Section Header for Specializations */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            תחומי ההתמחות שלנו
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Information */}
          <div className="space-y-8">
            <Card className="card-security">
              <CardContent className="p-8">
                {/* Founder Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t('about.founder_title')}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Founder & CEO
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Lt. Colonel (Ret.)
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Security Expert
                    </Badge>
                  </div>
                </div>

                {/* Founder Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('about.founder_desc')}
                </p>

                {/* Expertise List */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Areas of Expertise</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {expertise.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Stats */}
          <div className="space-y-8">
            {/* Professional Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Professional Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="card-security text-center group">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                        <achievement.icon className="h-8 w-8 text-accent" />
                      </div>
                      <div className="text-2xl font-bold text-accent mb-2">{achievement.value}</div>
                      <div className="text-muted-foreground text-sm">{achievement.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Company Values */}
            <Card className="card-security">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Our Core Values</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Professionalism</h5>
                      <p className="text-muted-foreground text-sm">Unwavering commitment to excellence in every security solution we provide.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Reliability</h5>
                      <p className="text-muted-foreground text-sm">Consistent, dependable security services you can trust completely.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Innovation</h5>
                      <p className="text-muted-foreground text-sm">Cutting-edge security strategies adapted to modern threats and challenges.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16">
          <Card className="card-security bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To provide exceptional security consulting services that protect our clients' assets, people, and reputation 
                through innovative solutions, expert knowledge, and unwavering commitment to excellence. We believe that 
                true security comes from understanding each client's unique needs and delivering customized protection strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;