import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Palette,
  Pen,
  Sparkles,
  BarChart3,
  TrendingUp,
  Target,
  MessageSquare,
  Share2,
} from 'lucide-react';

const ServicesPage = () => {
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

  const aiTechServices = [
    {
      icon: <Brain size={32} />,
      title: 'AI Solutions & Automation',
      description:
        'Intelligent automation systems that streamline operations, reduce costs, and unlock new capabilities.',
    },
    {
      icon: <Cpu size={32} />,
      title: 'Machine Learning & Data Intelligence',
      description:
        'Advanced ML models and data analytics that turn raw information into actionable business insights.',
    },
    {
      icon: <Code size={32} />,
      title: 'Custom Software Platforms',
      description:
        'Tailored software solutions built to solve your unique business challenges with scalable architecture.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Website & Web-App Engineering',
      description:
        'Modern, responsive web applications with cutting-edge tech stacks and optimal performance.',
    },
    {
      icon: <Layers size={32} />,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications that deliver seamless user experiences.',
    },
    {
      icon: <Database size={32} />,
      title: 'API & Cloud Systems',
      description:
        'Robust backend infrastructure with cloud integration, API development, and microservices architecture.',
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'AI Chatbots & Assistants',
      description:
        'Conversational AI powered by NLP to enhance customer engagement and support automation.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Predictive Analytics',
      description:
        'Forecasting models that predict trends, optimize resources, and drive data-driven decision making.',
    },
  ];

  const creativeServices = [
    {
      icon: <Palette size={32} />,
      title: '2D & 3D Design',
      description: 'Stunning visual assets from concept art to photorealistic 3D renders.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Branding & Identity',
      description: 'Complete brand systems that capture your essence and resonate with audiences.',
    },
    {
      icon: <Pen size={32} />,
      title: 'UI/UX Product Design',
      description: 'User-centered design that balances aesthetics with functionality and usability.',
    },
    {
      icon: <Layers size={32} />,
      title: 'Digital Assets',
      description: 'Custom graphics, illustrations, and visual content for all platforms.',
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Visual Storytelling',
      description: 'Narrative-driven design that communicates your message with impact.',
    },
    {
      icon: <Share2 size={32} />,
      title: 'Animation & Motion Graphics',
      description: 'Dynamic animations that bring your brand to life across digital channels.',
    },
  ];

  const marketingServices = [
    {
      icon: <BarChart3 size={32} />,
      title: 'Digital Marketing',
      description: 'Comprehensive online marketing strategies across SEO, SEM, and social media.',
    },
    {
      icon: <Target size={32} />,
      title: 'Performance Ads',
      description: 'Data-driven ad campaigns optimized for conversions and ROI.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Growth Strategy',
      description: 'Scalable growth frameworks that align marketing with business objectives.',
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Content Campaigns',
      description: 'Compelling content marketing that engages audiences and builds authority.',
    },
    {
      icon: <Share2 size={32} />,
      title: 'Social Presence',
      description: 'Strategic social media management that builds communities and drives engagement.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Offline Branding Initiatives',
      description: 'Traditional marketing collateral and offline brand activations.',
    },
  ];

  return (
    <div className="bg-slate-950" data-testid="services-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32" data-testid="services-hero">
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
              data-testid="services-heading"
            >
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400" data-testid="services-intro">
              Comprehensive solutions across AI technology, creative design, and strategic marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI & Technology Development */}
      <section className="py-24 md:py-32 bg-slate-900/50" data-testid="ai-tech-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="flex items-start gap-8">
              <div className="w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <Brain size={36} className="text-white" />
                  </div>
                  <h2
                    className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                    data-testid="ai-tech-heading"
                  >
                    AI & Technology Development
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-slate-400 mb-6" data-testid="ai-tech-description">
                  We build enterprise-grade AI solutions and custom software that solve complex business
                  problems. Our team combines deep technical expertise with industry knowledge to deliver
                  systems that scale.
                </p>
                <div className="space-y-3 text-slate-300">
                  <p data-testid="ai-tech-value-1">
                    <span className="text-cyan-400 font-semibold">Business Problems Solved:</span> Operational
                    inefficiency, manual processes, data silos, poor customer insights
                  </p>
                  <p data-testid="ai-tech-value-2">
                    <span className="text-cyan-400 font-semibold">Value Delivered:</span> Cost reduction,
                    increased productivity, competitive advantage, faster decision-making
                  </p>
                  <p data-testid="ai-tech-value-3">
                    <span className="text-cyan-400 font-semibold">Why AsyncWorx:</span> We don't just code—we
                    architect solutions with long-term vision and proven methodologies
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTechServices.map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
                data-testid={`ai-tech-service-${idx}`}
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-medium text-slate-50 mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  data-testid={`ai-tech-service-title-${idx}`}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400" data-testid={`ai-tech-service-description-${idx}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative & Graphics Studio */}
      <section className="py-24 md:py-32" data-testid="creative-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="flex items-start gap-8">
              <div className="w-full md:w-2/3">
                <h2
                  className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  data-testid="creative-heading"
                >
                  Creative & Graphics Studio
                </h2>
                <p className="text-lg leading-relaxed text-slate-400 mb-6" data-testid="creative-description">
                  World-class design that captures attention and converts. From brand identity to digital assets,
                  we create visual experiences that resonate and inspire action.
                </p>
                <div className="space-y-3 text-slate-300">
                  <p data-testid="creative-value-1">
                    <span className="text-cyan-400 font-semibold">Design Excellence:</span> Award-worthy creative
                    that stands out in crowded markets
                  </p>
                  <p data-testid="creative-value-2">
                    <span className="text-cyan-400 font-semibold">Brand Impact:</span> Visual identity systems
                    that build recognition and trust
                  </p>
                  <p data-testid="creative-value-3">
                    <span className="text-cyan-400 font-semibold">Premium Aesthetic:</span> Sophisticated design
                    with attention to every detail
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Creative design studio workspace"
                  className="rounded-2xl w-full h-64 object-cover"
                  data-testid="creative-image"
                />
              </div>
            </div>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeServices.map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
                data-testid={`creative-service-${idx}`}
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-medium text-slate-50 mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  data-testid={`creative-service-title-${idx}`}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400" data-testid={`creative-service-description-${idx}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marketing & Growth Solutions */}
      <section className="py-24 md:py-32 bg-slate-900/50" data-testid="marketing-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="flex items-start gap-8">
              <div className="w-full md:w-2/3">
                <h2
                  className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  data-testid="marketing-heading"
                >
                  Marketing & Growth Solutions
                </h2>
                <p className="text-lg leading-relaxed text-slate-400 mb-6" data-testid="marketing-description">
                  Data-driven marketing strategies that deliver measurable ROI. We combine creativity with
                  analytics to build campaigns that acquire customers and drive sustainable growth.
                </p>
                <div className="space-y-3 text-slate-300">
                  <p data-testid="marketing-value-1">
                    <span className="text-cyan-400 font-semibold">Performance-Driven:</span> Every campaign
                    optimized for conversions and revenue
                  </p>
                  <p data-testid="marketing-value-2">
                    <span className="text-cyan-400 font-semibold">Multi-Channel Expertise:</span> Integrated
                    strategies across digital and traditional channels
                  </p>
                  <p data-testid="marketing-value-3">
                    <span className="text-cyan-400 font-semibold">Scalable Growth:</span> Systems that scale with
                    your business ambitions
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Digital marketing analytics dashboard"
                  className="rounded-2xl w-full h-64 object-cover"
                  data-testid="marketing-image"
                />
              </div>
            </div>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
                data-testid={`marketing-service-${idx}`}
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-medium text-slate-50 mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  data-testid={`marketing-service-title-${idx}`}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400" data-testid={`marketing-service-description-${idx}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;