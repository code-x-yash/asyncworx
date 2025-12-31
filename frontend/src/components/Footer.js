import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://customer-assets.emergentagent.com/job_e84a2f9f-eaa2-40d6-8235-e7abcf3ef6d1/artifacts/lbd8mlag_ChatGPT%20Image%20Dec%2031%2C%202025%2C%2001_33_37%20PM.png"
              alt="AsyncWorx Logo"
              className="h-12 w-auto mb-6"
              data-testid="footer-logo"
            />
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              AI-powered technology. Human-centered creativity. Business-driven outcomes.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:info@asyncworx.com"
                data-testid="footer-email-link"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                info@asyncworx.com
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

          <div>
            <h4 className="text-xl font-semibold text-slate-50 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                data-testid="footer-social-linkedin"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                data-testid="footer-social-twitter"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                data-testid="footer-social-facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
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