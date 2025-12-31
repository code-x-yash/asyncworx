import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://customer-assets.emergentagent.com/job_e84a2f9f-eaa2-40d6-8235-e7abcf3ef6d1/artifacts/lbd8mlag_ChatGPT%20Image%20Dec%2031%2C%202025%2C%2001_33_37%20PM.png"
              alt="AsyncWorx Logo"
              className="h-36 w-auto mb-6"
              data-testid="footer-logo"
            />
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              AI-powered technology. Human-centered creativity. Business-driven outcomes.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@asyncworx.com"
                data-testid="footer-email-link"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                info@asyncworx.com
              </a>
              <a
                href="tel:+919760286560"
                data-testid="footer-phone-link"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                +91 9760286560
              </a>
              <a
                href="https://wa.me/919760286560"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-link"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp: +91 9760286560
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-slate-50 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" data-testid="footer-link-home" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" data-testid="footer-link-about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" data-testid="footer-link-services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" data-testid="footer-link-work" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" data-testid="footer-link-contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} AsyncWorx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;