import { useEffect } from 'react';
import { useI18n } from '@/hooks/useI18n';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({ title, description, keywords, canonical, ogImage }: SEOProps) => {
  const { language } = useI18n();

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updateOGMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    if (description) {
      updateMeta('description', description);
      updateOGMeta('og:description', description);
      updateMeta('twitter:description', description);
    }

    if (keywords) {
      // Add Hebrew SEO terms to keywords
      const hebrewTerms = 'מנבט, מנב\'\'ט, פקם אבטחה, פק\'\'מ אבטחה, תיק שטח, סטיב בלחסן, Steve Bellahsen, הדרכות אבטחה, אבטחה מונעת';
      const combinedKeywords = keywords.includes(hebrewTerms) ? keywords : `${keywords}, ${hebrewTerms}`;
      updateMeta('keywords', combinedKeywords);
    }

    if (title) {
      updateOGMeta('og:title', title);
      updateMeta('twitter:title', title);
      updateOGMeta('og:site_name', 'piexpertises.com');
    }

    if (ogImage) {
      updateOGMeta('og:image', ogImage);
      updateMeta('twitter:image', ogImage);
      updateMeta('twitter:card', 'summary_large_image');
    }

    // Add Open Graph type
    updateOGMeta('og:type', 'website');
    updateOGMeta('og:locale', language === 'he' ? 'he_IL' : language === 'fr' ? 'fr_FR' : 'en_US');

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Update language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';

    // Add alternate language links
    const addAlternateLink = (lang: string, url: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.href = url;
    };

    const baseUrl = canonical || window.location.origin + window.location.pathname;
    addAlternateLink('he', `${baseUrl}?lang=he`);
    addAlternateLink('en', `${baseUrl}?lang=en`);
    addAlternateLink('fr', `${baseUrl}?lang=fr`);
    addAlternateLink('x-default', baseUrl);
  }, [title, description, keywords, canonical, ogImage, language]);

  return null;
};

export default SEO;
