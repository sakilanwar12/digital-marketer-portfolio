'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Menu, X, ArrowRight, TrendingUp, Users, Zap, ExternalLink, Award, BarChart3, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const caseStudies = [
    {
      title: 'E-Commerce Growth Campaign',
      client: 'Fashion Retail Brand',
      metrics: '+340% ROI',
      description: 'Multi-channel paid advertising strategy combining Google Ads, Instagram, and TikTok',
      tags: ['PPC', 'Social Ads', 'Conversion'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
    },
    {
      title: 'SaaS Acquisition Strategy',
      client: 'B2B Software Company',
      metrics: '250+ MQL/month',
      description: 'Content marketing and LinkedIn strategy that increased qualified leads by 250%',
      tags: ['Content', 'LinkedIn', 'Lead Gen'],
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2340&auto=format&fit=crop'
    },
    {
      title: 'Brand Repositioning',
      client: 'Tech Startup',
      metrics: '3x Awareness',
      description: 'Complete brand strategy overhaul with social media relaunch and community building',
      tags: ['Strategy', 'Social', 'Community'],
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2531&auto=format&fit=crop'
    },
    {
        title: 'Global Performance Marketing',
        client: 'Fintech App',
        metrics: '-45% CAC',
        description: 'Scaling user acquisition across 15+ countries while maintaining LTV/CAC ratios.',
        tags: ['Performance', 'Global', 'Scaling'],
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop'
      },
  ]

  const services = [
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Data-driven strategies to accelerate your business growth and market expansion',
    },
    {
      icon: Users,
      title: 'Paid Advertising',
      description: 'Expert management of Google Ads, Facebook, LinkedIn, and TikTok campaigns',
    },
    {
      icon: Zap,
      title: 'Content Marketing',
      description: 'Compelling content creation and distribution to build authority and engagement',
    },
  ]

  const testimonials = [
    {
      quote: "Alex's strategic approach transformed our marketing entirely. We saw a 300% increase in qualified leads within 6 months.",
      author: 'Sarah Johnson',
      role: 'CMO, TechFlow Inc',
    },
    {
      quote: 'Working with Alex was a game-changer for our ad spend. The ROI improvements were immediate and substantial.',
      author: 'Michael Chen',
      role: 'Founder, EcommercePro',
    },
    {
      quote: "Best investment we've made in marketing. Alex brings both strategy and execution excellence.",
      author: 'Jennifer Martinez',
      role: 'VP Marketing, StyleHub',
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-border/50' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tight"
          >
            Alex<span className="text-accent">Chen</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {['Work', 'Services', 'About', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-accent transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            <Button size="sm" className="bg-accent text-accent-foreground rounded-full px-6 hover:bg-accent/90 transition-transform active:scale-95">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background overflow-hidden px-6 py-8 flex flex-col gap-6"
            >
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium hover:text-accent transition" onClick={() => setMenuOpen(false)}>
                  {item}
                </Link>
              ))}
              <Button className="bg-accent text-accent-foreground rounded-full w-full">Let's Talk</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6"
            >
                <Award size={14} /> Digital Marketing Strategist
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 text-balance">
              Scaling Brands via <br />
              <span className="text-gradient">Data-Driven Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              I help high-growth startups and B2B companies dominate their markets through sophisticated paid advertising, strategic content, and meticulous optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 h-14 text-lg font-medium shadow-xl shadow-accent/20">
                Start a Project
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-medium border-2">
                View My Success Stories
              </Button>
            </div>
            
            <div className="mt-16 flex items-center gap-12">
               <div>
                  <div className="text-2xl font-bold">$50M+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Ad Spend Managed</div>
               </div>
               <div className="w-px h-10 bg-border" />
               <div>
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Campaigns Optimized</div>
               </div>
               <div className="w-px h-10 bg-border" />
               <div>
                  <div className="text-2xl font-bold">150%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Avg. Growth ROI</div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background aspect-[4/5] md:aspect-square">
              <Image 
                src="/hero.png" 
                alt="Digital Marketing Illustration" 
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating UI Elements */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 glass-dark p-6 rounded-2xl z-20 backdrop-blur-2xl shadow-2xl"
            >
               <BarChart3 className="text-accent mb-2" size={32} />
               <div className="text-sm font-bold">+240% Growth</div>
               <div className="text-[10px] text-muted-foreground uppercase">Q4 Performance</div>
            </motion.div>
            
            <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl z-20 shadow-2xl border border-white/20"
            >
               <div className="flex -space-x-3 mb-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
               </div>
               <div className="text-sm font-bold leading-tight">Trusted by <br /> 50+ Global Brands</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Logo Cloud / Social Proof */}
      <section className="py-12 border-y border-border/50 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-50 grayscale gap-8 px-12">
            {['Microsoft', 'Coinbase', 'Shopify', 'Airbnb', 'Notion', 'Slack'].map(logo => (
                <div key={logo} className="font-display font-black text-2xl tracking-tighter">{logo}</div>
            ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span {...fadeInUp} className="text-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">Case Studies</motion.span>
              <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-display font-bold leading-tight">Exceptional Results, <br />Proven Strategies</motion.h2>
            </div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Button variant="ghost" className="text-lg group">
                    Explore all projects <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="group overflow-hidden border-none bg-secondary/20 hover:bg-secondary/40 transition-all rounded-[2.5rem]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />
                    <div className="absolute top-6 right-6">
                        <Button size="icon" className="rounded-full bg-white text-black hover:bg-accent hover:text-white border-none shadow-xl scale-0 group-hover:scale-100 transition-transform">
                            <ExternalLink size={18} />
                        </Button>
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-xs text-accent font-bold uppercase tracking-widest mb-2">{study.client}</p>
                            <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                        </div>
                        <div className="text-3xl font-display font-black text-accent">{study.metrics}</div>
                    </div>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{study.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-background/50 border border-border px-4 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-secondary/20 relative overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.span {...fadeInUp} className="text-accent font-bold uppercase tracking-[0.2em] text-xs block mb-4">Expertise</motion.span>
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-display font-bold mb-6">Mastering Digital Ecosystems</motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-muted-foreground max-w-2xl mx-auto text-lg">
                I combine technical precision with creative flair to deliver marketing ecosystems that don&apos;t just look good, but drive bottom-line results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-10 rounded-[2rem] bg-background border border-border/50 hover:border-accent/40 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all group"
                >
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <Link href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent group-hover:gap-4 transition-all">
                        Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group"
            >
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2487&auto=format&fit=crop" alt="Alex Chen Profile" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute bottom-10 left-10 p-10 glass-dark rounded-3xl backdrop-blur-3xl">
                    <div className="text-3xl font-bold mb-1">Alex Chen</div>
                    <div className="text-accent uppercase tracking-widest text-sm font-bold">Founder & Lead Strategist</div>
                </div>
            </motion.div>
            
            <div className="space-y-8">
                <motion.span {...fadeInUp} className="text-accent font-bold uppercase tracking-[0.2em] text-xs block">My Story</motion.span>
                <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-display font-bold">The Strategic Mind Behind the Success</motion.h2>
                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light">
                    <p>
                        With over 8 years of experience, I&apos;ve helped scaled brands from seed to Series D, managing over $50M in cumulative ad spend across multiple verticals.
                    </p>
                    <p>
                        My philosophy is simple: <span className="text-foreground font-medium">Creativity that converts.</span> I believe the best marketing happens at the intersection of psychology and analytics.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-border/50">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                            <Globe size={24} />
                        </div>
                        <div className="text-sm font-bold">Global Perspective</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                            <Zap size={24} />
                        </div>
                        <div className="text-sm font-bold">Agile Methodology</div>
                    </div>
                </div>
                
                <motion.div {...fadeInUp} className="pt-4">
                    <Button size="lg" className="rounded-full px-12 h-14 text-lg">Download Resume</Button>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold">Voices of Success</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 text-accent/20">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.83z"/></svg>
                </div>
                <Card className="p-10 h-full border-none shadow-sm rounded-[2rem] bg-background">
                  <p className="text-xl text-foreground/80 mb-10 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${idx + 25}`} alt={testimonial.author} />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0 h-[80%] rounded-b-[4rem]" />
        
        <div className="max-w-5xl mx-auto relative z-10 glass-dark p-16 md:p-24 rounded-[4rem] text-center border-white/5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8 text-white"
          >
            Ready to Amplify <br /> Your Brand?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Let&apos;s build a growth engine that scales. Book a 30-minute discovery call to discuss your objectives.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-black rounded-full px-12 h-16 text-xl font-bold transition-all shadow-2xl shadow-accent/20">
              Schedule Consultation
              <ArrowRight className="ml-2" size={24} />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/5 rounded-full px-12 h-16 text-xl">
               Contact Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-display font-bold mb-8 italic">Alex<span className="text-accent underline">Chen.</span></div>
              <p className="text-xl text-muted-foreground max-w-sm mb-8 leading-relaxed">
                Empowering businesses with data-led marketing strategies that transcend conventional boundaries.
              </p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                    <Link key={social} href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                        <span className="sr-only">{social}</span>
                        <div className="w-5 h-5 bg-current mask-icon" />
                    </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Work', 'Services', 'About', 'Journal'].map(item => (
                    <li key={item}><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Get in Touch</h4>
              <p className="text-xl font-medium mb-2">hello@alexchen.tech</p>
              <p className="text-muted-foreground leading-relaxed">
                Available for worldwide <br /> partnerships and consulting.
              </p>
            </div>
          </div>
          <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Alex Chen Design. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-accent transition">Privacy Policy</Link>
                <Link href="#" className="hover:text-accent transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
