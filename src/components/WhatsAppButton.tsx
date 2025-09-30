import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '972507300720';
  const defaultMessage = 'שלום%20פאי%20אקספרטיס,%20אני%20מעוניין%20לקבל%20פרטים%20נוספים.';
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
    </a>
  );
};

export default WhatsAppButton;
