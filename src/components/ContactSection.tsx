import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { toast } from "sonner";
import { useI18n } from '@/hooks/useI18n';

const ContactSection = () => {
  const { t, isRTL, language } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_pi_expertises'; // À configurer dans EmailJS
      const templateId = 'template_contact_form'; // À configurer dans EmailJS
      const publicKey = 'YOUR_PUBLIC_KEY'; // À configurer dans EmailJS
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        to_email: 'pi.expertises@gmail.com',
        language: language,
        page: 'Contact Form'
      };

      // Envoyer via EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        toast.success(t('form.success'), {
          description: language === 'he' ? 'נחזור אליך בהקדם' : language === 'fr' ? 'Nous vous répondrons bientôt' : 'We will get back to you soon'
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      toast.error(
        language === 'he' ? 'שגיאה בשליחת הטופס' : language === 'fr' ? 'Erreur lors de l\'envoi' : 'Error sending form',
        {
          description: language === 'he' 
            ? 'אנא נסה שוב או צור קשר טלפוני' 
            : language === 'fr' 
            ? 'Veuillez réessayer ou nous contacter par téléphone' 
            : 'Please try again or contact us by phone'
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: t('contact.phone_label'),
      href: 'tel:050-730-0720',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: t('contact.email_label'),
      href: 'mailto:pi.expertises@gmail.com',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.address'),
      href: 'https://maps.google.com/?q=Mevaseret+Zion+Israel',
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: t('contact.hours'),
      href: null,
    },
  ];

  return (
    <section id="contact" className={`py-20 bg-secondary/30 ${isRTL ? 'dir-rtl' : 'dir-ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="font-bold mb-6 text-foreground"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
          >
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed px-4">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <Card className="card-security mb-8">
            <CardContent className="p-6 sm:p-8">
              <h3 
                className="font-semibold mb-6 text-foreground"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
              >
                {t('contact.form_title')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {submitStatus === 'success' && (
                  <div 
                    className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800"
                    role="alert"
                    aria-live="polite"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{t('form.success')}</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div 
                    className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800"
                    role="alert"
                    aria-live="polite"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-medium">
                      {language === 'he' ? 'שגיאה בשליחת הטופס' : language === 'fr' ? 'Erreur lors de l\'envoi' : 'Error sending form'}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label 
                      htmlFor="name" 
                      className="text-foreground font-medium text-sm"
                    >
                      {t('contact.name')} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      minLength={2}
                      maxLength={100}
                      className="bg-background border-border focus:border-accent focus:ring-2 focus:ring-accent/20 min-h-[44px]"
                      placeholder={t('form.name_placeholder')}
                      dir={isRTL ? 'rtl' : 'ltr'}
                      aria-required="true"
                      aria-label={t('contact.name')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label 
                      htmlFor="phone" 
                      className="text-foreground font-medium text-sm"
                    >
                      {t('contact.phone')} *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      minLength={9}
                      maxLength={20}
                      className="bg-background border-border focus:border-accent focus:ring-2 focus:ring-accent/20 min-h-[44px]"
                      placeholder={t('form.phone_placeholder')}
                      dir="ltr"
                      aria-required="true"
                      aria-label={t('contact.phone')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label 
                    htmlFor="email" 
                    className="text-foreground font-medium text-sm"
                  >
                    {t('contact.email')} *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    maxLength={255}
                    className="bg-background border-border focus:border-accent focus:ring-2 focus:ring-accent/20 min-h-[44px]"
                    placeholder={t('form.email_placeholder')}
                    dir="ltr"
                    aria-required="true"
                    aria-label={t('contact.email')}
                    aria-describedby="email-format"
                  />
                  <p id="email-format" className="sr-only">
                    {language === 'he' ? 'פורמט: example@email.com' : language === 'fr' ? 'Format: example@email.com' : 'Format: example@email.com'}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label 
                    htmlFor="message" 
                    className="text-foreground font-medium text-sm"
                  >
                    {t('contact.message')} *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    className="bg-background border-border focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                    placeholder={t('form.message_placeholder')}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    aria-required="true"
                    aria-label={t('contact.message')}
                  />
                  <p className="text-xs text-muted-foreground" dir={isRTL ? 'rtl' : 'ltr'}>
                    {formData.message.length}/1000
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-hero group min-h-[44px] text-base font-semibold"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      {language === 'he' ? 'שולח...' : language === 'fr' ? 'Envoi...' : 'Sending...'}
                    </span>
                  ) : (
                    <>
                      <Send className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5 group-hover:translate-x-1 transition-transform`} />
                      {t('contact.send')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="card-security bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-8 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                {t('contact.emergency_title')}
              </h4>
              <p className="text-muted-foreground mb-6">
                {t('contact.emergency_desc')}
              </p>
              <Button 
                size="lg" 
                className="btn-hero"
                asChild
              >
                <a 
                  href="https://wa.me/972505730072?text=שלום%20פאי%20אקספרטיס,%20אני%20מעוניין%20לקבל%20פרטים%20נוספים%20ולקבוע%20שיחה."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  {t('contact.call_now')}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;