import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from "sonner";
import { useI18n } from '@/hooks/useI18n';
import { z } from 'zod';

// Validation schema with zod
const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\u0590-\u05FF\s'-]+$/, 'Name contains invalid characters'),
  phone: z.string()
    .trim()
    .min(9, 'Phone number is too short')
    .max(20, 'Phone number is too long')
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, 'Invalid phone number format'),
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase(),
  message: z.string()
    .trim()
    .max(1000, 'Message must be less than 1000 characters')
    .optional()
});

const ContactSection = () => {
  const { t, isRTL, language } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with zod
    try {
      const validatedData = contactFormSchema.parse(formData);
      
      // Build WhatsApp message with validated data
      const nameLabel = language === 'he' ? 'שם' : language === 'fr' ? 'Nom' : 'Name';
      const phoneLabel = language === 'he' ? 'טלפון' : language === 'fr' ? 'Téléphone' : 'Phone';
      const emailLabel = language === 'he' ? 'אימייל' : language === 'fr' ? 'Email' : 'Email';
      const messageLabel = language === 'he' ? 'הודעה' : language === 'fr' ? 'Message' : 'Message';
      
      let whatsappMessage = `${nameLabel}: ${validatedData.name}\n${phoneLabel}: ${validatedData.phone}\n${emailLabel}: ${validatedData.email}`;
      
      if (validatedData.message && validatedData.message.trim()) {
        whatsappMessage += `\n${messageLabel}: ${validatedData.message}`;
      }
      
      const whatsappUrl = `https://wa.me/972507300720?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Reset form and show success message
      setFormData({ name: '', phone: '', email: '', message: '' });
      toast.success(t('form.success'), {
        description: language === 'he' ? 'פותח WhatsApp...' : language === 'fr' ? 'Ouverture de WhatsApp...' : 'Opening WhatsApp...'
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show first validation error
        const firstError = error.errors[0];
        toast.error(
          language === 'he' ? 'שגיאה בטופס' : language === 'fr' ? 'Erreur de validation' : 'Validation Error',
          {
            description: firstError.message
          }
        );
      }
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
      href: 'mailto:infos.piexpertises@gmail.com',
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
                    {t('contact.message')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={1000}
                    rows={5}
                    className="bg-background border-border focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                    placeholder={t('form.message_placeholder')}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    aria-label={t('contact.message')}
                  />
                  <p className="text-xs text-muted-foreground" dir={isRTL ? 'rtl' : 'ltr'}>
                    {formData.message.length}/1000
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-hero group min-h-[44px] text-base font-semibold"
                >
                  <Send className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5 group-hover:translate-x-1 transition-transform`} />
                  {t('contact.send')}
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
                href={`https://wa.me/972507300720?text=${encodeURIComponent(t('navigation.whatsapp_message'))}`}
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