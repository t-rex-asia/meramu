import { Facebook, Globe, MessageCircle, Share2, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function ShareInvitation() {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;
  const shareTitle = "Undangan Pernikahan Rezky & Mutiara";
  const shareText = "Kami mengundang Anda untuk merayakan hari istimewa kami. Buka undangan di: ";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback behavior if Web Share API is not supported
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + shareUrl)}`,
      color: 'hover:text-[#25D366]'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-[#1877F2]'
    },
    {
      name: 'X',
      icon: <Twitter className="w-5 h-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'hover:text-[#000000]'
    }
  ];

  return (
    <div className="py-12 border-t border-white/5 space-y-8">
      <div className="space-y-4">
        <span className="label-sm text-white opacity-40">Spread the Word</span>
        <h3 className="text-3xl font-serif italic text-white/90">Bagikan Kebahagiaan</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 px-8 py-3 bg-white text-primary-brown text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-primary-light transition-all"
        >
          <Share2 className="w-4 h-4" />
          Share Invitation
        </button>

        <button 
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-8 py-3 border border-white/20 text-white text-[10px] tracking-[0.2em] uppercase hover:bg-white/5 transition-all"
        > 
          <Globe className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>

      <div className="flex justify-center gap-8 pt-4">
        {socialLinks.map((social) => (
          <a 
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white/40 transition-colors ${social.color}`}
            title={`Share on ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
