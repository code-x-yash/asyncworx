import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Anchor, TrendingUp, Zap } from 'lucide-react';

const WorkPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true, margin: '-100px' },
  };

  const caseStudies = [
    {
      title: 'Maritime Fleet Management Platform',
      industry: 'Maritime',
      icon: <Anchor size={32} />,
      description:
        'AI-powered fleet optimization system reducing operational costs by 35% and improving route efficiency.',
      image: 'https://images.unsplash.com/photo-1759660017393-c581868bea2b?crop=entropy&cs=srgb&fm=jpg&q=85',
      results: ['35% Cost Reduction', 'Real-time Tracking', 'Predictive Maintenance'],
      tags: ['AI', 'IoT', 'Custom Software'],
    },
    {
      title: 'Enterprise SaaS Platform',
      industry: 'Enterprise',
      icon: <TrendingUp size={32} />,
      description:
        'Cloud-based collaboration platform serving 10,000+ users with advanced analytics and automation.',
      image: 'https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?crop=entropy&cs=srgb&fm=jpg&q=85',
      results: ['10K+ Active Users', '99.9% Uptime', '40% Productivity Gain'],
      tags: ['Cloud', 'SaaS', 'Analytics'],
    },
    {
      title: 'E-Commerce Growth Campaign',
      industry: 'Retail',
      icon: <Zap size={32} />,
      description:
        'Integrated marketing strategy driving 3x revenue growth through AI-optimized ad campaigns and UX redesign.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85',
      results: ['3x Revenue Growth', '250% Traffic Increase', '45% Conversion Rate'],
      tags: ['Marketing', 'UX Design', 'AI Optimization'],
    },
    {
      title: 'Fintech Mobile Application',
      industry: 'Financial Services',
      icon: <TrendingUp size={32} />,
      description:
        'Secure mobile banking app with biometric authentication and AI-powered financial insights.',
      image: 'https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=srgb&fm=jpg&q=85',
      results: ['100K+ Downloads', 'Bank-Grade Security', '4.8 App Rating'],
      tags: ['Mobile', 'Security', 'AI'],
    },
    {
      title: 'Healthcare Analytics Dashboard',
      industry: 'Healthcare',
      icon: <Zap size={32} />,
      description:
        'Real-time patient data visualization platform improving clinical decision-making and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=srgb&fm=jpg&q=85',
      results: ['25% Faster Decisions', 'HIPAA Compliant', 'Multi-facility Support'],
      tags: ['Healthcare', 'Data Viz', 'Cloud'],
    },
    {
      title: 'Brand Transformation',
      industry: 'Professional Services',
      icon: <Anchor size={32} />,
      description:
        'Complete rebrand and digital presence overhaul resulting in 200% increase in qualified leads.',
      image: 'https://images.unsplash.com/photo-1746470427617-91e8dd28298d?crop=entropy&cs=srgb&fm=jpg&q=85',
      results: ['200% More Leads', 'New Brand Identity', 'Award-Winning Design'],
      tags: ['Branding', 'Web Design', 'Marketing'],
    },
  ];

  return (
    <div className="bg-slate-950" data-testid="work-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32" data-testid="work-hero">
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
              data-testid="work-heading"
            >
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400" data-testid="work-intro">
              Transformative projects across industries. Real results. Measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 md:py-32" data-testid="case-studies-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:shadow-2xl transition-all duration-500"
                data-testid={`case-study-${idx}`}
              >
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-800">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {study.icon}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3
                    className="text-2xl md:text-3xl font-medium text-slate-50 mb-3"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                    data-testid={`case-study-title-${idx}`}
                  >
                    {study.title}
                  </h3>

                  <p className="text-base leading-relaxed text-slate-400 mb-6" data-testid={`case-study-description-${idx}`}>
                    {study.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {study.results.map((result, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center text-sm text-slate-300"
                        data-testid={`case-study-${idx}-result-${rIdx}`}
                      >
                        <ArrowRight size={16} className="text-cyan-400 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300"
                        data-testid={`case-study-${idx}-tag-${tIdx}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 md:py-32 bg-slate-900/50" data-testid="results-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="results-heading"
            >
              Outcomes That Matter
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-3xl mx-auto" data-testid="results-description">
              We measure success by the impact we create for our clients.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '3x', label: 'Avg. ROI Increase' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, idx) => (
              <motion.div key={idx} {...fadeInUp} className="text-center" data-testid={`stat-${idx}`}>
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3" data-testid={`stat-value-${idx}`}>
                  {stat.value}
                </div>
                <p className="text-base text-slate-300" data-testid={`stat-label-${idx}`}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;