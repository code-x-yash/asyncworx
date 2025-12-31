import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service_interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      toast.success('Thank you! We\'ll get back to you soon.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service_interest: '',
        message: '',
      });
    } catch (error) {
      const errorMessage = error.response?.data?.detail || 'Something went wrong. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950" data-testid="contact-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1
              className="text-6xl md:text-7xl font-bold tracking-tight leading-none mb-8 text-slate-50"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="contact-heading"
            >
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400" data-testid="contact-intro">
              Ready to transform your business? Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32" data-testid="contact-form-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <motion.div {...fadeInUp} data-testid="contact-info">
              <h2
                className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-8"
                style={{ fontFamily: 'Outfit, sans-serif' }}
                data-testid="contact-info-heading"
              >
                Get in Touch
              </h2>
              <p className="text-base leading-relaxed text-slate-400 mb-12" data-testid="contact-info-description">
                Whether you have a project in mind or just want to explore possibilities, we're here to help.
                Fill out the form and we'll respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start" data-testid="contact-email-info">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <a
                      href="mailto:info@asyncworx.com"
                      className="text-lg text-slate-50 hover:text-cyan-400 transition-colors"
                      data-testid="contact-email-link"
                    >
                      info@asyncworx.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start" data-testid="contact-phone-info">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 mb-1">Phone / WhatsApp</p>
                    <a
                      href="tel:+919760286560"
                      className="text-lg text-slate-50 hover:text-cyan-400 transition-colors block"
                      data-testid="contact-phone-link"
                    >
                      +91 9760286560
                    </a>
                    <a
                      href="https://wa.me/919760286560"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-400 hover:text-green-300 transition-colors inline-flex items-center mt-1"
                      data-testid="contact-whatsapp-link"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl">
                <h3 className="text-xl font-semibold text-slate-50 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  What to Expect
                </h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Initial consultation within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Detailed project assessment and proposal
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Transparent pricing and timelines
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Dedicated team assigned to your project
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div {...fadeInUp} data-testid="contact-form-container">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-950/50 border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 px-4 text-slate-200 placeholder:text-slate-600 transition-all w-full"
                    placeholder="Your full name"
                    data-testid="contact-form-name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-slate-950/50 border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 px-4 text-slate-200 placeholder:text-slate-600 transition-all w-full"
                    placeholder="Your company name"
                    data-testid="contact-form-company"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-950/50 border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 px-4 text-slate-200 placeholder:text-slate-600 transition-all w-full"
                    placeholder="your@email.com"
                    data-testid="contact-form-email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-950/50 border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 px-4 text-slate-200 placeholder:text-slate-600 transition-all w-full"
                    placeholder="+1 (555) 000-0000"
                    data-testid="contact-form-phone"
                  />
                </div>

                <div>
                  <label htmlFor="service_interest" className="block text-sm font-medium text-slate-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service_interest"
                    name="service_interest"
                    value={formData.service_interest}
                    onChange={handleChange}
                    className="bg-slate-950/50 border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 px-4 text-slate-200 transition-all w-full"
                    data-testid="contact-form-service"
                  >
                    <option value="">Select a service</option>
                    <option value="AI & Technology">AI & Technology Development</option>
                    <option value="Creative & Design">Creative & Design Studio</option>
                    <option value="Marketing & Growth">Marketing & Growth Solutions</option>
                    <option value="Full Suite">Full Suite (All Services)</option>
                    <option value="Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-950/50 border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 transition-all w-full resize-none"
                    placeholder="Tell us about your project..."
                    data-testid="contact-form-message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="contact-form-submit"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;