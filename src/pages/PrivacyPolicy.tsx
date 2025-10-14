import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/hooks/useI18n';
import SEO from '@/components/SEO';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const { t, isRTL } = useI18n();

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEO 
        title={`${t('privacy.title')} | Pi Expertises`}
        description={t('privacy.description')}
        keywords="privacy policy, data protection, GDPR, confidentiality"
        canonical="https://piexpertises.com/privacy-policy"
      />
      <Header />
      
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {t('privacy.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('privacy.last_updated')}: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t('privacy.intro_title')}</h2>
                <p className="text-foreground/90 leading-relaxed">
                  {t('privacy.intro_text')}
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t('privacy.data_collection_title')}</h2>
                <div className="space-y-4 text-foreground/90">
                  <p className="leading-relaxed">{t('privacy.data_collection_text')}</p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>{t('privacy.data_item1')}</li>
                    <li>{t('privacy.data_item2')}</li>
                    <li>{t('privacy.data_item3')}</li>
                    <li>{t('privacy.data_item4')}</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t('privacy.data_usage_title')}</h2>
                <div className="space-y-4 text-foreground/90">
                  <p className="leading-relaxed">{t('privacy.data_usage_text')}</p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>{t('privacy.usage_item1')}</li>
                    <li>{t('privacy.usage_item2')}</li>
                    <li>{t('privacy.usage_item3')}</li>
                    <li>{t('privacy.usage_item4')}</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t('privacy.cookies_title')}</h2>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  {t('privacy.cookies_text')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mr-6">
                  <li>{t('privacy.cookie_item1')}</li>
                  <li>{t('privacy.cookie_item2')}</li>
                  <li>{t('privacy.cookie_item3')}</li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t('privacy.rights_title')}</h2>
                <div className="space-y-4 text-foreground/90">
                  <p className="leading-relaxed">{t('privacy.rights_text')}</p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>{t('privacy.right_item1')}</li>
                    <li>{t('privacy.right_item2')}</li>
                    <li>{t('privacy.right_item3')}</li>
                    <li>{t('privacy.right_item4')}</li>
                    <li>{t('privacy.right_item5')}</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t('privacy.security_title')}</h2>
                <p className="text-foreground/90 leading-relaxed">
                  {t('privacy.security_text')}
                </p>
              </section>

              <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-foreground">{t('privacy.contact_title')}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t('contact.email_label')}</p>
                      <a href="mailto:steve@piexpertises.com" className="text-primary hover:underline">
                        steve@piexpertises.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t('contact.phone_label')}</p>
                      <a href="tel:+972507300720" className="text-primary hover:underline">
                        +972 50-730-0720
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{t('contact.address_label')}</p>
                      <p className="text-foreground/90">{t('contact.address')}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
