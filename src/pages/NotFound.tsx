import { Link } from "react-router-dom";
import { useI18n } from '@/hooks/useI18n';
import { Home, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t } = useI18n();

  return (
    <div 
      className="flex min-h-screen items-center justify-center p-4"
      style={{
        background: 'linear-gradient(180deg, #0D1B2A 0%, #1d9bf0 60%, rgba(135, 206, 250, 0.4) 100%)',
      }}
    >
      <div className="text-center max-w-md mx-auto">
        <Shield className="w-24 h-24 mx-auto mb-6 text-[#D4AF37]" style={{
          filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))',
        }} />
        <h1 className="text-8xl font-bold text-white mb-4" style={{
          textShadow: '0 0 30px rgba(212, 175, 55, 0.5)',
        }}>404</h1>
        <p className="text-2xl text-white/90 mb-2 font-semibold">
          {t('error.pageNotFound') || 'Page Not Found'}
        </p>
        <p className="text-white/70 mb-8">
          {t('error.pageNotFoundDesc') || 'The page you are looking for does not exist.'}
        </p>
        <Button 
          asChild
          className="bg-[#1d9bf0] hover:bg-[#1878c8] text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300"
          style={{
            boxShadow: '0 4px 20px rgba(29, 155, 240, 0.4)',
          }}
        >
          <Link to="/" className="inline-flex items-center gap-2">
            <Home size={20} />
            {t('error.returnHome') || 'Return to Home'}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
