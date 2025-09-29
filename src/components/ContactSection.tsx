import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from "sonner";
import { useI18n } from '@/hooks/useI18n';

const ContactSection = () => {
  const { t, isRTL } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('form.success'));
    setFormData({ name: '', phone: '', email: '', message: '' });
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
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <Card className="card-security mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                {t('contact.form_title')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      {t('contact.name')} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-accent"
                      placeholder={t('form.name_placeholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      {t('contact.phone')} *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-accent"
                      placeholder={t('form.phone_placeholder')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    {t('contact.email')} *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-accent"
                    placeholder={t('form.email_placeholder')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    {t('contact.message')} *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-accent resize-none"
                    placeholder={t('form.message_placeholder')}
                  />
                </div>

                <Button type="submit" className="w-full btn-hero group">
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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