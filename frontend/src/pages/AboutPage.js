import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Lightbulb, Rocket } from 'lucide-react';

const AboutPage = () => {
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

  const values = [
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation First',
      description:
        'We push boundaries and embrace emerging technologies to deliver solutions that set industry standards.',
    },
    {
      icon: <Users size={40} />,
      title: 'Client Partnership',
      description:
        'Your success is our mission. We build lasting relationships based on trust, transparency, and results.',
    },
    {
      icon: <Rocket size={40} />,
      title: 'Excellence in Execution',
      description:
        'From concept to launch, we maintain the highest standards of quality and craftsmanship in every project.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Human-Centered Design',
      description:
        'Technology serves people. We create experiences that are intuitive, accessible, and delightful.',
    },
  ];

  return (
    <div className="bg-slate-950" data-testid="about-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1
              className="text-6xl md:text-7xl font-bold tracking-tight leading-none mb-8 text-slate-50"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="about-heading"
            >
              About <span className="gradient-text">AsyncWorx</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400" data-testid="about-intro">
              We are a future-focused consulting firm at the intersection of artificial intelligence,
              creative design, and strategic growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32" data-testid="mission-vision-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeInUp} data-testid="mission-card">
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-10">
                <Target size={48} className="text-cyan-400 mb-6" />
                <h2
                  className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  data-testid="mission-heading"
                >
                  Our Mission
                </h2>
                <p className="text-base leading-relaxed text-slate-400" data-testid="mission-text">
                  To empower businesses with AI-driven technology, world-class creative design, and data-backed
                  marketing strategies that drive measurable growth. We believe in building solutions that are
                  not just innovative, but transformative—creating lasting impact for our clients and their
                  customers.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} data-testid="vision-card">
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-10">
                <Eye size={48} className="text-cyan-400 mb-6" />
                <h2
                  className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  data-testid="vision-heading"
                >
                  Our Vision
                </h2>
                <p className="text-base leading-relaxed text-slate-400" data-testid="vision-text">
                  To become the global partner of choice for businesses seeking to harness the power of AI and
                  digital innovation. We envision a future where technology and creativity seamlessly merge to
                  solve complex challenges, creating smarter, faster, and more human-centered solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture & Team */}
      <section className="py-24 md:py-32 bg-slate-900/50" data-testid="culture-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="culture-heading"
            >
              Innovation Culture
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-3xl mx-auto" data-testid="culture-description">
              We foster an environment where creativity meets technology, and where every team member is
              empowered to think big and execute with precision.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="relative rounded-3xl overflow-hidden mb-16"
            data-testid="culture-visual"
          >
            <img
              src="https://images.unsplash.com/photo-1758873272809-7947b9a73fe5?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Technology team collaboration"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-colors duration-300"
                data-testid={`value-card-${idx}`}
              >
                <div className="text-cyan-400 mb-4">{value.icon}</div>
                <h3
                  className="text-2xl md:text-3xl font-medium text-slate-50 mb-3"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  data-testid={`value-title-${idx}`}
                >
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-400" data-testid={`value-description-${idx}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32" data-testid="philosophy-section">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="text-center">
            <h2
              className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-8"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="philosophy-heading"
            >
              Our Philosophy
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-400" data-testid="philosophy-text">
              <p>
                At AsyncWorx, we believe that the future belongs to those who can harness the power of AI while
                never losing sight of the human element. Technology is a tool, but empathy, creativity, and
                strategic thinking are what make it meaningful.
              </p>
              <p>
                We don't just build software—we craft experiences. We don't just run campaigns—we tell stories
                that resonate. And we don't just deliver projects—we forge partnerships that endure.
              </p>
              <p className="text-cyan-400 font-semibold text-xl">
                "AI-powered technology. Human-centered creativity. Business-driven outcomes."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;