import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Users, CheckCircle, Calendar, Award, Clock, Phone, Target, MapPin, Camera, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import securityPlanDocument from "@/assets/security-plan-document.jpg";
import securityFacilityMap from "@/assets/security-facility-map.jpg";
import securityTechnology from "@/assets/security-technology-systems.jpg";
import securityConsultation from "@/assets/security-consultation-meeting.jpg";
import { useI18n } from "@/hooks/useI18n";
import SEO from "@/components/SEO";

const SecurityPlanWriting = () => {
  const { t, isRTL } = useI18n();

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEO 
        title={`${t('security_plans.title')} | Pi Expertises`}
        description={t('security_plans.intro')}
        keywords="security plans, security planning, risk assessment, security documentation"
        canonical="https://pi-expertises.com/security-plan-writing"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.75)), url(${securityPlanDocument})`
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-white/30 to-white z-10 pointer-events-none" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <FileText className="w-20 h-20 mx-auto mb-6 text-[#1d9bf0]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t('security_plans.title')}
          </h1>
          <p className="text-xl mb-8">
            {t('security_plans.subtitle')}
          </p>
          <Button 
            size="lg" 
            className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3 text-lg rounded-lg"
            asChild
          >
            <a 
              href="https://wa.me/972507300720?text=שלום+אני+מעוניין+לקבל+פרטים+נוספים+על+השירותים+שלכם"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
              {t('nav.contact')}
            </a>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              {t('security_plans.intro_title')}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('security_plans.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            {t('security_plans.services_title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <Card key={num} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {t(`security_plans.service${num}_title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`security_plans.service${num}_desc`)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={securityFacilityMap} 
                alt={t('security_plans.title')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={securityConsultation} 
                alt={t('security_plans.title')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1b4965]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">
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

      <Footer />
    </div>
  );
};

export default SecurityPlanWriting;
