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
                    <p className="text-sm text-slate-500 mb-1">Response Time</p>
                    <p className="text-lg text-slate-50">Within 24 hours</p>
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