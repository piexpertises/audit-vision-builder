import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Phone, Users, Target, Clock, Award } from 'lucide-react';
import securityBg from '@/assets/security-hero-bg.jpg';
import { useI18n } from '@/hooks/useI18n';
import SEO from '@/components/SEO';

const SecurityConsulting = () => {
  const { t, isRTL } = useI18n();

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEO 
        title={`${t('security_consulting.title')} | Pi Expertises`}
        description={t('security_consulting.intro')}
        keywords="security consulting, business security, risk assessment, security planning"
        canonical="https://pi-expertises.com/security-consulting"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative pt-32 pb-24 min-h-[70vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.75)), url(${securityBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-50 z-10 pointer-events-none" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1d9bf0] to-[#0284c7] rounded-full flex items-center justify-center mx-auto shadow-2xl mb-8">
                  <Shield className="text-white" size={40} />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                {t('security_consulting.title')}
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light">
                {t('security_consulting.subtitle')}
              </p>
              
              <Button 
                className="bg-[#1d9bf0] hover:bg-[#0284c7] text-white border-0 rounded-full px-10 py-4 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <a 
                  href="https://wa.me/972507300720?text=שלום+אני+מעוניין+לקבל+פרטים+נוספים+על+השירותים+שלכם"
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
        <section className="relative py-20 bg-gray-50">
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white pointer-events-none" />
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0d1b2a]">
                {t('security_consulting.intro_title')}
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-8"></div>
              <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
                {t('security_consulting.intro')}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 bg-white">
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none" />
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0d1b2a]">
                {t('security_consulting.why_title')}
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-16"></div>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 shadow-lg">
                <p className="text-lg leading-relaxed text-gray-700 text-center mb-12">
                  {t('security_consulting.why_desc')}
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <Award className="w-12 h-12 text-[#1d9bf0] mx-auto" />
                    <div className="text-3xl font-bold text-[#0d1b2a]">20+</div>
                    <div className="text-gray-600 font-medium">{t('hero.stats.experience')}</div>
                  </div>
                  <div className="space-y-4">
                    <Users className="w-12 h-12 text-[#1d9bf0] mx-auto" />
                    <div className="text-3xl font-bold text-[#0d1b2a]">500+</div>
                    <div className="text-gray-600 font-medium">{t('hero.stats.clients')}</div>
                  </div>
                  <div className="space-y-4">
                    <Target className="w-12 h-12 text-[#1d9bf0] mx-auto" />
                    <div className="text-3xl font-bold text-[#0d1b2a]">200+</div>
                    <div className="text-gray-600 font-medium">{t('hero.stats.projects')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 bg-gray-50">
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white pointer-events-none" />
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0d1b2a]">
                {t('security_consulting.services_title')}
              </h2>
              <div className="w-24 h-1 bg-[#1d9bf0] mx-auto mb-16"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((num) => (
                  <Card key={num} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-[#1d9bf0] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-[#0d1b2a]">
                            {t(`security_consulting.service${num}_title`)}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {t(`security_consulting.service${num}_desc`)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1b4965]">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {t('contact.title')}
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                {t('contact.subtitle')}
              </p>
              <Button 
                size="lg"
                className="bg-[#1d9bf0] hover:bg-[#0284c7] text-white px-10 py-4 text-lg rounded-full shadow-xl"
                asChild
              >
                <a 
                  href="https://wa.me/972507300720?text=שלום+אני+מעוניין+לקבל+פרטים+נוספים+על+השירותים+שלכם"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                  {t('contact.call_now')}
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

export default SecurityConsulting;
