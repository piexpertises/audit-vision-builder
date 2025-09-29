import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("הודעה נשלחה בהצלחה! נחזור אליכם בקרוב.");
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
      label: 'טלפון',
      value: '050-730-0720',
      href: 'tel:050-730-0720',
    },
    {
      icon: Mail,
      label: 'אימייל',
      value: 'pi.expertises@gmail.com',
      href: 'mailto:pi.expertises@gmail.com',
    },
    {
      icon: MapPin,
      label: 'כתובת',
      value: 'מבשרת ציון, ישראל',
      href: 'https://maps.google.com/?q=Mevaseret+Zion+Israel',
    },
    {
      icon: Clock,
      label: 'שעות פעילות',
      value: 'א-ה: 8:00-18:00',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            צור קשר
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            מוכנים לשדרג את הביטחון שלכם? צרו קשר עם המומחים שלנו לייעוץ מקצועי.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-security">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                שלחו לנו הודעה
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      שם מלא *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-accent"
                      placeholder="הכניסו את השם שלכם"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      טלפון *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-accent"
                      placeholder="הכניסו את הטלפון שלכם"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    אימייל *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-accent"
                    placeholder="הכניסו את האימייל שלכם"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    הודעה *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-accent resize-none"
                    placeholder="תארו את הצרכים הביטחוניים שלכם..."
                  />
                </div>

                <Button type="submit" className="w-full btn-hero group">
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  שלח הודעה
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-security">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  פרטי התקשרות
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-medium hover:text-accent transition-colors duration-300"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="card-security bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  זמינים 24/7 למצבי חירום
                </h4>
                <p className="text-muted-foreground mb-6">
                  לעניינים ביטחוניים דחופים, צוות המענה החירום שלנו זמין 24 שעות ביממה.
                </p>
                <Button 
                  size="lg" 
                  className="btn-hero"
                  asChild
                >
                  <a href="tel:050-730-0720">
                    <Phone className="ml-2 h-5 w-5" />
                    התקשרו עכשיו
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;