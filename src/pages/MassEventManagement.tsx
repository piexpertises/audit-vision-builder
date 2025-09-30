import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Shield, Clipboard, GraduationCap, PhoneCall, AlertCircle, Award, TrendingUp, CheckCircle, FileText, Target, BarChart3, Calendar, UserCheck } from 'lucide-react';
import massEventHero from '@/assets/mass-event-hero.jpg';
import { useI18n } from '@/hooks/useI18n';
import SEO from '@/components/SEO';

const MassEventManagement = () => {
  const { t, isRTL } = useI18n();
  const whatsappUrl = `https://wa.me/972507300720?text=${encodeURIComponent(t('navigation.whatsapp_message'))}`;

  const services = [
    { icon: Calendar, title: t('mass_events.service1_title'), desc: t('mass_events.service1_desc') },
    { icon: Shield, title: t('mass_events.service2_title'), desc: t('mass_events.service2_desc') },
    { icon: Users, title: t('mass_events.service3_title'), desc: t('mass_events.service3_desc') },
    { icon: GraduationCap, title: t('mass_events.service4_title'), desc: t('mass_events.service4_desc') },
    { icon: PhoneCall, title: t('mass_events.service5_title'), desc: t('mass_events.service5_desc') },
    { icon: CheckCircle, title: t('mass_events.service6_title'), desc: t('mass_events.service6_desc') },
  ];

  const processSteps = [
    { num: "01", title: t('mass_events.process_step1_title'), desc: t('mass_events.process_step1_desc'), icon: UserCheck },
    { num: "02", title: t('mass_events.process_step2_title'), desc: t('mass_events.process_step2_desc'), icon: FileText },
    { num: "03", title: t('mass_events.process_step3_title'), desc: t('mass_events.process_step3_desc'), icon: GraduationCap },
    { num: "04", title: t('mass_events.process_step4_title'), desc: t('mass_events.process_step4_desc'), icon: Target },
    { num: "05", title: t('mass_events.process_step5_title'), desc: t('mass_events.process_step5_desc'), icon: BarChart3 },
  ];

  const reasons = [
    { icon: Award, text: t('mass_events.reason1') },
    { icon: Shield, text: t('mass_events.reason2') },
    { icon: Users, text: t('mass_events.reason3') },
    { icon: TrendingUp, text: t('mass_events.reason4') },
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEO 
        title={`${t('mass_events.title')} | Pi Expertises`}
        description={t('mass_events.intro')}
        keywords="mass events, event management, event security, festival security, concert security"
        canonical="https://pi-expertises.com/mass-event-management"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative pt-32 pb-24 min-h-[75vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.88), rgba(27, 73, 101, 0.85)), url(${massEventHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-background/30 to-background z-10 pointer-events-none" />
          
          <div className="container mx-auto px-4 text-center relative z-20">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8 animate-zoom-in">
                <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary/80 to-accent rounded-2xl flex items-center justify-center mx-auto shadow-2xl hover-glow rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Users className="text-white" size={48} />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight animate-fade-up">
                {t('mass_events.title')}
              </h1>
              
              <p className="text-xl md:text-3xl mb-12 text-gray-100 font-light leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {t('mass_events.subtitle')}
              </p>
              
              <Button 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white border-0 rounded-full px-12 py-6 font-bold text-lg shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-fade-up"
                style={{ animationDelay: '0.2s' }}
                asChild
              >
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('nav.contact')}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="relative py-24 bg-gradient-to-b from-background via-secondary/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-lg md:text-xl leading-relaxed text-foreground max-w-5xl mx-auto animate-fade-up">
                {t('mass_events.intro')}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground animate-fade-up">
                {t('mass_events.why_title')}
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16"></div>
              
              <div className="bg-gradient-to-br from-card via-secondary/30 to-card rounded-3xl p-8 md:p-16 shadow-card hover-glow border border-border/50 backdrop-blur-sm">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-center">
                  {t('mass_events.why_desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
                {t('mass_events.services_title')}
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-20"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <Card 
                    key={idx} 
                    className="hover-lift group border-2 border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
                {t('mass_events.details_title')}
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16"></div>
              
              <div className="bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-8 md:p-12 shadow-card border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                      {t('mass_events.details_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="relative py-24 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
                {t('mass_events.process_title')}
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-20"></div>

              <div className="relative">
                {/* Vertical Line */}
                <div className={`absolute ${isRTL ? 'right-8 md:right-1/2 md:mr-0.5' : 'left-8 md:left-1/2 md:ml-0.5'} top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block`}></div>

                <div className="space-y-16">
                  {processSteps.map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                        idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Number Badge */}
                      <div className={`flex-shrink-0 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} ${isRTL && idx % 2 === 0 ? 'md:mr-auto md:ml-0' : ''} ${isRTL && idx % 2 !== 0 ? 'md:ml-auto md:mr-0' : ''}`}>
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                          <span className="text-2xl font-bold text-white">{step.num}</span>
                        </div>
                      </div>

                      {/* Content Card */}
                      <Card className={`flex-1 hover-lift border-2 border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${
                        idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                      } ${isRTL && idx % 2 === 0 ? 'md:ml-auto md:mr-0' : ''} ${isRTL && idx % 2 !== 0 ? 'md:mr-auto md:ml-0' : ''}`}>
                        <CardContent className="p-8">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <step.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                                {step.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
                {t('mass_events.reasons_title')}
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reasons.map((reason, idx) => (
                  <Card 
                    key={idx} 
                    className="hover-lift group border-2 border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-8 flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <reason.icon className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-lg font-semibold text-foreground">
                        {reason.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                {t('mass_events.cta_title')}
              </h2>
              <p className="text-lg md:text-xl mb-10 text-gray-100 leading-relaxed">
                {t('mass_events.cta_desc')}
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-glow transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('nav.contact')}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MassEventManagement;
