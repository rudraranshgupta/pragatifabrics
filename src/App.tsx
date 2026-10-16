/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ArrowRight, MapPin, Phone, Mail, Clock, 
  CheckCircle2, Factory, ShieldCheck, Truck, Palette, 
  Banknote, Headphones, Star, Quote, ChevronRight
} from 'lucide-react';

import { ShapeGrid } from './components/ShapeGrid.tsx';
import Silk from './components/Silk.tsx';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${isScrolled ? 'scrolled-nav' : 'bg-transparent'} fixed top-0 w-full z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex flex-col">
          <span className={`font-body text-xl lg:text-2xl font-black tracking-tighter uppercase leading-none transition-colors duration-300 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
            PRAGATI FABRICS
          </span>
          <span className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-300 ${isScrolled ? 'text-brand-orange' : 'text-brand-orange-light'}`}>
            Mfg. of Exclusive Designer Fabrics
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className={`flex gap-8 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-charcoal' : 'text-white/80'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-brand-orange transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a href="#contact" className="bg-brand-orange text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300">
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-charcoal' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8 h-screen"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-black text-xl tracking-tighter">PRAGATI FABRICS</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-display font-light border-b border-gray-100 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="btn-accent text-center py-5 mt-4"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="section-padding bg-charcoal relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Silk 
          speed={3.5}
          scale={1.2}
          color="#f5a623"
          noiseIntensity={0.8}
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-transparent to-charcoal/40 pointer-events-none z-[1]"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 w-full">
        
        {/* Main Hero Bento Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-10 lg:p-16 flex flex-col justify-center text-white"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-orange rounded-full opacity-10"></div>
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-orange mb-4 block">Est. 2004 — 20+ Years Excellence</span>
          <h1 className="text-5xl lg:text-7xl font-display leading-[1.1] mb-8 font-bold">
            Crafting <span className="italic font-normal">Exclusive</span> <br />Designer Fabrics
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-xl leading-relaxed">
            Direct manufacturers of premium textiles based in Mumbai, with state-of-the-art production in Surat Udhana.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="bg-brand-orange text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300 flex items-center gap-2">
              Explore Fabrics <ChevronRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-6 px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Mumbai HQ</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Surat Factory</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 bg-brand-orange rounded-[2.5rem] p-10 flex flex-col justify-between text-white border-b-[6px] border-white/20 shadow-2xl"
        >
          <div>
            <p className="text-5xl lg:text-6xl font-display font-bold mb-1 relative z-20 italic">20+</p>
            <p className="text-[10px] uppercase font-black tracking-widest text-white/70 relative z-20">Years in Business</p>
          </div>
          <div className="h-px bg-white opacity-20 w-full my-6"></div>
          <div>
            <p className="text-5xl lg:text-6xl font-display font-bold mb-1 relative z-20 italic">6</p>
            <p className="text-[10px] uppercase font-black tracking-widest text-white/70 relative z-20">Core Product Lines</p>
          </div>
          <div className="h-px bg-white opacity-20 w-full my-6"></div>
          <div>
            <p className="text-5xl lg:text-6xl font-display font-bold mb-1 relative z-20 italic">Surat</p>
            <p className="text-[10px] uppercase font-black tracking-widest text-white/70 relative z-20">Manufacturing Unit</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const MarqueeBar = () => {
  const items = [
    "Knitting Fabrics", "Polyester Blend", "Nylon Viscose", "Exclusive Designer Fabrics", 
    "Mumbai Office", "Surat Udhana Factory", "20 Years of Excellence", "Wholesale Supplier", "Made in India"
  ];
  
  return (
    <div className="marquee-container py-6">
      <div className="marquee-content flex items-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-white text-sm uppercase tracking-widest font-medium px-8">{item}</span>
                <div className="w-2 h-2 bg-brand-orange transform rotate-45"></div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-warm-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Card: Image Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 bento-card relative aspect-square md:aspect-auto h-full min-h-[400px] bg-charcoal !p-0"
        >
          <img 
            src="/src/assets/images/regenerated_image_1779112235582.jpg" 
            alt="Heritage Textile" 
            className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Right Card: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 bento-card p-10 lg:p-16 flex flex-col justify-center"
        >
          <span className="small-caps mb-4 block">Manufacturing Pride</span>
          <h2 className="display-title mb-8">Two Decades of <span className="italic font-normal">Excellence</span></h2>
          <div className="space-y-6 text-charcoal/70 leading-relaxed">
            <p>
              Founded in 2004 in Mumbai, Pragati Fabrics has evolved into a powerhouse of textile manufacturing. 
              Our headquarters in Kalbadevi Road puts us at the center of India's historic textile trade district.
            </p>
            <p>
              What sets us apart is our direct manufacturing advantage. From our factory in Surat Udhana, 
              we manage every aspect of production, ensuring rigorous quality control and competitive 
              wholesale pricing.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['GSTIN: 27ADGPG7450D1ZR', 'Surat Udhana Facility', 'Direct Mfg', 'Kalbadevi HQ'].map(item => (
              <span key={item} className="text-[9px] uppercase font-bold tracking-widest bg-charcoal/5 px-4 py-2 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const Products = () => {
  const fabricRange = [
    {
      name: "Knitting Fabrics",
      desc: "Single Jersey, Double Jersey, Interlock, Rib — ideal for T-shirts, sportswear, and casual wear.",
      minOrder: "300 Kg",
      badge: "Core Product",
      gradient: "from-charcoal to-slate-600",
      image: "/src/assets/images/regenerated_image_1779087030780.jpg"
    },
    {
      name: "Polyester Blend",
      desc: "Poly-cotton, poly-viscose blends. Wrinkle resistant, easy care, and vibrant colors for ethnic wear.",
      minOrder: "500 Mtr",
      badge: "Bestseller",
      gradient: "from-brand-orange-deep to-brand-orange",
      image: "/src/assets/images/regenerated_image_1779169204584.jpg"
    },
    {
      name: "Nylon Viscose",
      desc: "Soft drape, premium feel — ideal for luxury ethnic wear and designer linings.",
      minOrder: "200 Mtr",
      badge: "Premium",
      gradient: "from-amber-700 to-amber-500",
      image: "https://static.fibre2fashion.com/MemberResources/LeadResources/8/2023/3/Buyer/23210395/Images/23210395_0_viscose-nylon-blend-fabric.jpg?tr=if-h_lt_420_or_w_lt_420,w-420,h-420,cm-pad_extract,bg-FFFFFF,if-else,w-420,h-420,c-at_max,cm-pad_resize,bg-FFFFFF,if-end"
    },
    {
      name: "Designer Jacquard",
      desc: "Complex patterned weave for high-end boutique garments and exclusive bridal wear.",
      minOrder: "100 Mtr",
      badge: "Exclusive",
      gradient: "from-charcoal to-indigo-900",
      image: "https://m.media-amazon.com/images/I/A1BQoBCgm6L.jpg"
    },
    {
      name: "Printed Fabrics",
      desc: "Custom print-ready polyester and viscose base materials for seasonal collections.",
      minOrder: "1000 Mtr",
      badge: "Custom Orders",
      gradient: "from-orange-400 to-rose-400",
      image: "https://sino-silk.com/wp-content/uploads/2024/07/printed-rayon-fabric-1.jpg"
    },
    {
      name: "Dyed Fabrics",
      desc: "Premium solid-dyed fabrics with superior color fastness. Available in a wide spectrum of seasonal shades.",
      minOrder: "500 Mtr",
      badge: "Vibrant",
      gradient: "from-rose-700 to-rose-500",
      image: "/src/assets/images/regenerated_image_1779170265198.png"
    }
  ];

  return (
    <section id="products" className="bg-white pb-32">
      <div className="section-padding !pb-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="small-caps text-brand-orange-deep block mb-2">The Collection</span>
          <h2 className="display-title font-semibold">Our <span className="italic">Fabric Range</span></h2>
          <p className="max-w-2xl mx-auto mt-4 text-charcoal/60">
            Direct from our Surat Udhana facility — premium textures crafted for the modern designer.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-0">
        {fabricRange.map((fabric, i) => (
          <div 
            key={fabric.name} 
            className="sticky top-32 mb-20"
            style={{ 
              zIndex: i + 1,
              paddingTop: `${i * 20}px` 
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bento-card bg-white p-0 overflow-hidden grid lg:grid-cols-2 shadow-2xl border border-charcoal/5"
            >
              {/* Image Column */}
              <div className={`h-80 lg:h-auto w-full bg-linear-to-br ${fabric.gradient} relative overflow-hidden`}>
                {fabric.image ? (
                  <img 
                    src={fabric.image} 
                    alt={fabric.name} 
                    className="absolute inset-0 w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, white, white 2px, transparent 2px, transparent 8px)'}}></div>
                )}
                <div className="absolute top-8 left-8 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.2em] border border-white/20">
                  {fabric.badge}
                </div>
              </div>

              {/* Content Column */}
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-orange mb-4">Fabric {i + 1}</span>
                <h3 className="text-4xl lg:text-5xl font-display font-semibold mb-6">
                  {fabric.name}
                </h3>
                <p className="text-charcoal/60 text-lg mb-10 leading-relaxed">
                  {fabric.desc}
                </p>
                <div className="flex items-center justify-between pt-10 border-t border-charcoal/10">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 mb-1">Minimum Order</p>
                    <p className="text-xl font-display font-bold italic">{fabric.minOrder}</p>
                  </div>
                  <a href="#contact" className="btn-accent flex items-center gap-3">
                    Enquire Now <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Manufacturing = () => {
  const stats = [
    { label: "Surat Udhana Factory", icon: Factory, desc: "State-of-the-art facility" },
    { label: "Direct Manufacturing", icon: ShieldCheck, desc: "Zero middlemen markups" },
    { label: "Quality Checked", icon: CheckCircle2, desc: "Rigorous batch testing" },
    { label: "Pan-India Dispatch", icon: Truck, desc: "Reliable logistics supply" },
  ];

  return (
    <section id="manufacturing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left: Manufacturing Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 bento-card p-0 overflow-hidden flex flex-col justify-center bg-charcoal text-white relative group min-h-[400px]"
        >
          <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-30 transition-opacity">
            <img 
              src="https://images.unsplash.com/photo-1558444479-27519c362159?q=80&w=2670&auto=format&fit=crop" 
              alt="Manufacturing Facility"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-10 lg:p-16 h-full flex flex-col justify-center">
            <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center mb-6 text-white">
              <Factory className="w-6 h-6" />
            </div>
            <h2 className="display-title text-white mb-6">Direct Factory <span className="italic font-normal">Advantage</span></h2>
            <p className="text-[#2e2204] text-lg leading-relaxed mb-8 max-w-md">
              By manufacturing at our OWN Surat Udhana facility, we eliminate middlemen and pass the cost-benefit directly to our wholesale partners.
            </p>
            <div className="mt-auto pt-6 border-t border-white/10 italic text-[#250000] text-sm">
              Quality checked at source. Distributed from Mumbai HQ.
            </div>
          </div>
        </motion.div>

        {/* Right: Feature Grid Cards */}
        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card p-8 flex flex-col items-start"
            >
              <stat.icon className="w-8 h-8 text-brand-orange mb-4" />
              <h4 className="font-display text-xl font-bold mb-2">{stat.label}</h4>
              <p className="text-xs text-charcoal/50 uppercase tracking-tighter font-bold">{stat.desc}</p>
            </motion.div>
          ))}
          <div className="sm:col-span-2 bento-card h-32 bg-warm-light p-8 flex items-center justify-between border-b-4 border-brand-orange">
             <div className="flex flex-col">
                <span className="small-caps !text-charcoal/40 mb-1">Office Hours</span>
                <span className="font-bold text-sm">Mon - Sat: 10AM - 7PM</span>
             </div>
             <div className="flex flex-col text-right">
                <span className="small-caps !text-charcoal/40 mb-1">Factory Location</span>
                <span className="font-bold text-sm italic">Surat Udhana, Gujarat</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Direct Manufacturer",
      desc: "Our own Surat Udhana facility ensures zero middlemen markups.",
      icon: Factory
    },
    {
      title: "Quality Assured",
      desc: "Every batch is inspected for color, GSM, and tensile strength.",
      icon: ShieldCheck
    },
    {
      title: "Pan-India Supply",
      desc: "Reliable shipping from Mumbai to all major textile markets.",
      icon: Truck
    },
    {
      title: "Exclusive Designs",
      desc: "Designer fabrics not available off-the-shelf in standard markets.",
      icon: Palette
    },
    {
      title: "Competitive Pricing",
      desc: "Factory-direct rates passed on to bulk and wholesale buyers.",
      icon: Banknote
    },
    {
      title: "Dedicated Support",
      desc: "Personal support from our Mumbai team, 6 days a week.",
      icon: Headphones
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto text-center mb-16 lg:mb-24">
        <span className="small-caps text-brand-orange-deep block mb-2">Our Advantage</span>
        <h2 className="display-title font-semibold">Built on <span className="italic">Quality, Trust</span> & Expertise</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, i) => (
          <motion.div 
            key={reason.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-10 border border-charcoal/5 bento-card"
          >
            <div className="w-14 h-14 bg-warm-light rounded-none flex items-center justify-center mb-8 group-hover:bg-brand-orange/10 transition-colors z-20 relative">
              <reason.icon className="w-7 h-7 text-charcoal group-hover:text-brand-orange transition-colors" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4 relative z-20">{reason.title}</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed relative z-20">{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Suresh Patel",
      role: "Garment Manufacturer, Ahmedabad",
      quote: "Been sourcing polyester blends from Pragati for 8 years. Consistent quality, fair pricing, and always on time.",
      initials: "SP"
    },
    {
      name: "Meena Desai",
      role: "Boutique Owner, Mumbai",
      quote: "Their nylon viscose fabrics have the most beautiful drape. My customers always ask where I source from!",
      initials: "MD"
    },
    {
      name: "Ramesh Jain",
      role: "Fabric Retailer, Delhi",
      quote: "The knitting fabric quality is top-notch. Pragati is our go-to manufacturer for bulk cotton-poly orders.",
      initials: "RJ"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
           <div className="max-w-2xl">
              <span className="small-caps text-brand-orange-deep block mb-2">Our Reputation</span>
              <h2 className="display-title font-semibold">Voices from the <span className="italic">Textile Community</span></h2>
           </div>
           <div className="flex gap-2">
              <div className="w-12 h-12 border border-charcoal/10 flex items-center justify-center rounded-full opacity-50 cursor-pointer"><ChevronRight className="rotate-180" /></div>
              <div className="w-12 h-12 border border-charcoal/10 flex items-center justify-center rounded-full cursor-pointer hover:bg-brand-orange hover:text-white transition-all"><ChevronRight /></div>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {reviews.map((rev, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-white border border-charcoal/10 relative group hover:shadow-2xl transition-all duration-500 bento-card"
             >
                <Quote className="w-12 h-12 text-charcoal/5 absolute top-10 right-10 group-hover:text-brand-orange/10 transition-colors z-20" />
                <div className="flex gap-1 mb-6 z-20 relative">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />)}
                </div>
                <p className="text-charcoal/80 italic text-lg leading-relaxed mb-8 relative z-20 italic font-display">
                  "{rev.quote}"
                </p>
                <div className="flex items-center gap-4 z-20 relative">
                   <div className="flex h-12 w-12 items-center justify-center bg-charcoal text-white font-display text-lg italic">
                      {rev.initials}
                   </div>
                   <div>
                      <p className="font-bold text-sm tracking-tight">{rev.name}</p>
                      <p className="text-[10px] uppercase tracking-widest text-charcoal/50">{rev.role}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-off-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left: Contact Info Bento */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="bg-warm-light p-10 flex-grow bento-card">
            <span className="small-caps mb-4 block">Get in Touch</span>
            <h2 className="display-title text-4xl mb-8 leading-tight">Let's Talk <br /><span className="italic font-normal">Fabrics</span></h2>
            
            <div className="space-y-6">
               <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-brand-orange mt-1" />
                  <p className="text-sm leading-relaxed text-charcoal/70">
                    1/3, K.M. Building, 1st Floor, Near M.J. Market, Kalbadevi Road, Mumbai – 400002
                  </p>
               </div>
               <div className="flex gap-4 items-center">
                  <Phone className="w-5 h-5 text-brand-orange" />
                  <span className="font-bold text-sm tracking-tight">+91 98190 44484 / 93239 52219</span>
               </div>
            </div>
          </div>

          <div className="bg-charcoal p-8 h-32 flex items-center justify-between text-white bento-card border-charcoal">
             <div className="flex flex-col">
                <span className="small-caps opacity-50 mb-1">Company GSTIN</span>
                <span className="font-bold tracking-tight text-white italic">27ADGPG7450D1ZR</span>
             </div>
             <CheckCircle2 className="w-8 h-8 text-brand-orange" />
          </div>
        </div>

        {/* Right: Form Bento */}
        <div className="md:col-span-7 p-10 lg:p-16 bg-white bento-card">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-brand-orange">Wholesale Enquiry Form</h4>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold uppercase opacity-40">Your Name</label>
                   <input type="text" className="border-b border-charcoal/10 py-2 outline-none focus:border-brand-orange transition-colors" placeholder="Rudransh..." />
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold uppercase opacity-40">Contact Number</label>
                   <input type="tel" className="border-b border-charcoal/10 py-2 outline-none focus:border-brand-orange transition-colors" placeholder="+91..." />
                </div>
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase opacity-40">Fabric Selection</label>
                <select className="border-b border-charcoal/10 py-2 outline-none focus:border-brand-orange transition-colors bg-transparent">
                   <option>Knitting Fabrics</option>
                   <option>Polyester Blend</option>
                   <option>Nylon Viscose</option>
                   <option>Other / Not Sure</option>
                </select>
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase opacity-40">Message / Request</label>
                <textarea rows={3} className="border border-charcoal/5 bg-gray-50 p-4 rounded-2xl outline-none focus:border-brand-orange transition-colors" placeholder="Specific order requirements..."></textarea>
             </div>
             <button className="btn-accent w-full py-5 text-sm">Send Request</button>
          </form>
        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20 relative z-20">
        <div className="lg:col-span-1 p-8 bg-[#0b133f] text-white border border-white/5 bento-card !border-white/5">
          <div className="font-display text-2xl font-bold mb-4 relative z-20">PRAGATI FABRICS</div>
          <p className="text-white/50 text-sm leading-relaxed mb-8 relative z-20">
            Established in 2004, we are premier manufacturers of exclusive designer fabrics serving wholesalers and garment makers across India.
          </p>
          <div className="p-4 bg-white/5 border border-white/10 relative z-20">
             <span className="text-[10px] uppercase opacity-50 block mb-1">Company GSTIN</span>
             <span className="font-bold tracking-tight text-brand-orange">27ADGPG7450D1ZR</span>
          </div>
        </div>

        <div className="p-8 bg-white/5 border border-white/5 bento-card !border-white/5">
          <h4 className="small-caps text-white mb-8 relative z-20">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60 relative z-20">
            {['About Us', 'Fabric Range', 'Manufacturing', 'Why Choose Us', 'Enquire Now'].map(link => (
              <li key={link}><a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-orange transition-all">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-white/5 border border-white/5 bento-card !border-white/5">
          <h4 className="small-caps text-white mb-8 relative z-20">Products</h4>
          <ul className="space-y-4 text-sm text-white/60 relative z-20">
            {['Knitting Fabrics', 'Polyester Blend', 'Nylon Viscose', 'Designer Jacquard', 'Printed Fabrics', 'Dyed Fabrics'].map(link => (
              <li key={link}><a href="#products" className="hover:text-brand-orange transition-all">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-[#051334] border border-white/5 bento-card !border-white/5">
          <h4 className="small-caps text-white mb-8 relative z-20">Contact Info</h4>
          <div className="space-y-6 text-sm text-white/60 relative z-20">
            <div className="flex items-start gap-4">
               <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
               <p>1/3, K.M. Building, Kalbadevi Road, <br />Mumbai - 400002</p>
            </div>
            <div className="flex items-center gap-4">
               <Phone className="w-5 h-5 text-brand-orange shrink-0" />
               <p>98190 44484 / 93239 52219</p>
            </div>
            <div className="flex items-center gap-4">
               <Clock className="w-5 h-5 text-brand-orange shrink-0" />
               <p>10:00 AM – 7:00 PM (Mon-Sat)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30 text-center">
         <div>© {currentYear} Pragati Fabrics. All Rights Reserved.</div>
         <div className="flex gap-8">
            <a href="#" className="hover:text-brand-orange">Terms & Conditions</a>
            <a href="#" className="hover:text-brand-orange">Privacy Policy</a>
         </div>
         <div className="text-brand-orange/60">Site by Rudraransh</div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeBar />
      <AboutUs />
      <Products />
      <Manufacturing />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
