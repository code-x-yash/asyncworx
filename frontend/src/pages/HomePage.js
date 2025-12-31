import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Code, Palette, BarChart3, Globe, Anchor, Zap, Cpu, Sparkles, Layers, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: '-100px' },
  };

  const pillars = [
    {
      icon: <Cpu size={48} />,
      title: 'Technology & AI Innovation',
      description:
        'Cutting-edge software solutions powered by artificial intelligence, machine learning, and predictive analytics to transform your business operations.',
      features: ['AI Automation', 'Custom Software', 'Predictive Analytics', 'Cloud Solutions'],
    },
    {
      icon: <Palette size={48} />,
      title: 'Creative & Visual Studio',
      description:
        'World-class 2D & 3D design, branding, and visual storytelling that brings your vision to life with stunning precision and creativity.',
      features: ['2D & 3D Design', 'Brand Identity', 'UI/UX Design', 'Motion Graphics'],
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Marketing & Growth Strategy',
      description:
        'Data-driven marketing campaigns and growth strategies that deliver measurable results and scale your business to new heights.',
      features: ['Digital Marketing', 'Performance Ads', 'Content Strategy', 'Growth Hacking'],
    },
  ];

  const industries = [
    { icon: <Anchor size={32} />, name: 'Maritime' },
    { icon: <Globe size={32} />, name: 'Enterprise' },
    { icon: <Layers size={32} />, name: 'SaaS' },
    { icon: <TrendingUp size={32} />, name: 'Retail' },
    { icon: <Sparkles size={32} />, name: 'Startups' },
    { icon: <Zap size={32} />, name: 'Professional Services' },
  ];

  const trustMarkers = [
    '50+ Projects Delivered',
    'AI-Powered Solutions',
    'Global Client Base',
    '24/7 Support',
  ];

  return (
    <div className="bg-slate-950" data-testid="home-page">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        data-testid="hero-section"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1746470427617-91e8dd28298d?crop=entropy&cs=srgb&fm=jpg&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white/5 border border-cyan-500/30 rounded-full px-4 py-2 mb-8"
                data-testid="hero-badge"
              >
                <Sparkles size={18} className="text-cyan-400" />
                <span className="text-sm text-slate-300">AI-Powered Digital Innovation</span>
              </motion.div>

              <h1
                className="text-6xl md:text-7xl font-bold tracking-tight leading-none mb-8"
                style={{ fontFamily: 'Outfit, sans-serif' }}
                data-testid="hero-heading"
              >
                <span className="text-slate-50">AI-powered</span>
                <br />
                <span className="gradient-text">technology.</span>
                <br />
                <span className="text-slate-50">Human-centered</span>
                <br />
                <span className="gradient-text">creativity.</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-slate-400 mb-12 max-w-2xl" data-testid="hero-description">
                Business-driven outcomes. We deliver cutting-edge AI solutions, world-class design, and
                strategic marketing to help businesses grow faster and smarter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  data-testid="hero-cta-start-project"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  Start a Project
                </Link>
                <Link
                  to="/contact"
                  data-testid="hero-cta-talk"
                  className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md text-center"
                >
                  Talk to Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 blur-3xl rounded-full" />
                <div className="relative glass-panel rounded-3xl p-8 space-y-6">
                  {['AI Automation', 'Predictive Analytics', 'Custom Development', 'Creative Design'].map(
                    (item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                        className="flex items-center space-x-3 text-slate-300"
                        data-testid={`hero-feature-${idx}`}
                      >
                        <Zap size={20} className="text-cyan-400" />
                        <span>{item}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-24 md:py-32 relative" data-testid="pillars-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="pillars-heading"
            >
              Three Pillars of Excellence
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-3xl mx-auto" data-testid="pillars-description">
              We combine AI innovation, creative excellence, and strategic marketing to deliver
              transformative results.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-10 hover:shadow-2xl transition-all duration-500 hover-lift group"
                data-testid={`pillar-card-${idx}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-6">{pillar.icon}</div>
                  <h3
                    className="text-2xl md:text-3xl font-medium text-slate-50 mb-4"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                    data-testid={`pillar-title-${idx}`}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-400 mb-6" data-testid={`pillar-description-${idx}`}>
                    {pillar.description}
                  </p>
                  <div className="space-y-2">
                    {pillar.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-sm text-slate-300" data-testid={`pillar-${idx}-feature-${fIdx}`}>
                        <Zap size={14} className="text-cyan-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 md:py-32 bg-slate-900/50" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="industries-heading"
            >
              Industries We Serve
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-3xl mx-auto" data-testid="industries-description">
              From maritime to enterprise, we deliver tailored solutions across diverse sectors.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-colors duration-300 group text-center"
                data-testid={`industry-card-${idx}`}
              >
                <div className="text-cyan-400 flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <p className="text-slate-300 font-medium" data-testid={`industry-name-${idx}`}>{industry.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Markers Section */}
      <section className="py-24 md:py-32" data-testid="trust-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustMarkers.map((marker, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="text-center"
                data-testid={`trust-marker-${idx}`}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">•</div>
                <p className="text-lg text-slate-300 font-medium">{marker}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2
              className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="cta-heading"
            >
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 mb-8" data-testid="cta-description">
              Let's build something extraordinary together. Get in touch with our team today.
            </p>
            <Link
              to="/contact"
              data-testid="cta-contact-button"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;