import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Leaf, 
  Wind, 
  Droplets,
  Moon,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'bg-stone-950/90 border-b border-stone-800' : 'bg-white/90 shadow-sm') : 'bg-transparent'} backdrop-blur-md py-4`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${darkMode ? 'bg-stone-100' : 'bg-stone-800'}`}>
            <Sparkles className={`${darkMode ? 'text-stone-900' : 'text-stone-100'} w-5 h-5`} />
          </div>
          <span className={`text-2xl font-serif tracking-widest uppercase transition-colors ${isScrolled || darkMode ? (darkMode ? 'text-white' : 'text-stone-900') : 'text-white'}`}>Aromi</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm uppercase tracking-widest hover:opacity-60 transition-all ${isScrolled || darkMode ? (darkMode ? 'text-stone-300' : 'text-stone-800') : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${isScrolled || darkMode ? (darkMode ? 'text-yellow-400 hover:bg-stone-800' : 'text-stone-800 hover:bg-stone-100') : 'text-white hover:bg-white/10'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all ${isScrolled || darkMode ? (darkMode ? 'bg-white text-stone-900 hover:bg-stone-200' : 'bg-stone-900 text-white hover:bg-stone-700') : 'bg-white text-stone-900 hover:bg-stone-100'}`}>
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleDarkMode} className={isScrolled || darkMode ? (darkMode ? 'text-yellow-400' : 'text-stone-900') : 'text-white'}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={isScrolled || darkMode ? (darkMode ? 'text-white' : 'text-stone-900') : 'text-white'} /> : <Menu className={isScrolled || darkMode ? (darkMode ? 'text-white' : 'text-stone-900') : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 w-full shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden transition-colors ${darkMode ? 'bg-stone-900 border-b border-stone-800' : 'bg-white'}`}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-serif border-b pb-2 transition-colors ${darkMode ? 'text-white border-stone-800' : 'text-stone-800 border-stone-100'}`}>
                {link.name}
              </a>
            ))}
            <button className={`w-full py-4 rounded-none uppercase tracking-widest transition-colors ${darkMode ? 'bg-white text-stone-900' : 'bg-stone-900 text-white'}`}>
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover"
        alt="Spa background"
      />
      <div className="absolute inset-0 bg-stone-900/40" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white/80 uppercase tracking-[0.3em] text-sm mb-6 block"
      >
        The Art of Serenity
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight"
      >
        Aromi Fashion <br />& Wellness Spa
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col md:flex-row gap-4 justify-center"
      >
        <button className="bg-white text-stone-900 px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-stone-100 transition-colors">
          Explore Services
        </button>
        <button className="border border-white text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
          Our Story
        </button>
      </motion.div>
    </div>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
    >
      <div className="w-[1px] h-12 bg-white/30 mx-auto" />
    </motion.div>
  </section>
);

const Services = ({ darkMode }: { darkMode: boolean }) => {
  const services = [
    {
      title: "Signature Massage",
      desc: "A bespoke blend of aromatherapy and deep tissue techniques.",
      price: "From $120",
      icon: <Wind className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Radiance Facial",
      desc: "Advanced skincare using organic botanical extracts.",
      price: "From $95",
      icon: <Sparkles className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Hydrotherapy",
      desc: "Mineral-rich thermal baths for ultimate detoxification.",
      price: "From $80",
      icon: <Droplets className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-stone-950' : 'bg-stone-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-serif mb-4 transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>Curated Treatments</h2>
          <p className={`max-w-xl mx-auto transition-colors ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}>Experience the perfect harmony of traditional healing and modern luxury.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`group cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${darkMode ? 'bg-stone-900' : 'bg-white'}`}
            >
              <div className="h-64 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className={`mb-4 transition-colors ${darkMode ? 'text-stone-500' : 'text-stone-400'}`}>{s.icon}</div>
                <h3 className={`text-xl font-serif mb-2 transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>{s.title}</h3>
                <p className={`text-sm mb-6 leading-relaxed transition-colors ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}>{s.desc}</p>
                <div className={`flex justify-between items-center border-t pt-6 transition-colors ${darkMode ? 'border-stone-800' : 'border-stone-100'}`}>
                  <span className={`font-medium transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>{s.price}</span>
                  <button className={`transition-colors flex items-center gap-2 text-sm uppercase tracking-widest ${darkMode ? 'text-stone-500 group-hover:text-white' : 'text-stone-400 group-hover:text-stone-900'}`}>
                    Book <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = ({ darkMode }: { darkMode: boolean }) => (
  <section id="experience" className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-stone-900' : 'bg-white'} overflow-hidden`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=600" className="rounded-2xl mt-12" alt="Spa interior" />
            <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600" className="rounded-2xl" alt="Spa treatment" />
          </div>
          <div className={`absolute -bottom-6 -right-6 p-8 rounded-2xl hidden md:block transition-colors ${darkMode ? 'bg-white text-stone-900' : 'bg-stone-900 text-white'}`}>
            <p className="text-3xl font-serif mb-1">15+</p>
            <p className="text-xs uppercase tracking-widest opacity-70">Years of Excellence</p>
          </div>
        </div>
        
        <div>
          <span className={`uppercase tracking-[0.2em] text-xs mb-4 block transition-colors ${darkMode ? 'text-stone-500' : 'text-stone-400'}`}>The Aromi Way</span>
          <h2 className={`text-4xl md:text-5xl font-serif mb-8 leading-tight transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>A Sanctuary for the Modern Soul</h2>
          <p className={`mb-8 leading-relaxed text-lg transition-colors ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
            At Aromi, we believe that true beauty radiates from within. Our fashion-forward approach to wellness combines aesthetic excellence with deep-rooted therapeutic practices.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Organic Elements", desc: "We use only the finest sustainably sourced botanical oils." },
              { title: "Expert Therapists", desc: "Our team consists of world-class certified practitioners." },
              { title: "Tailored Experience", desc: "Every treatment is customized to your unique needs." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${darkMode ? 'bg-stone-800' : 'bg-stone-100'}`}>
                  <Leaf className={`w-3 h-3 transition-colors ${darkMode ? 'text-stone-400' : 'text-stone-600'}`} />
                </div>
                <div>
                  <h4 className={`font-medium transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>{item.title}</h4>
                  <p className={`text-sm transition-colors ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = ({ darkMode }: { darkMode: boolean }) => (
  <section id="reviews" className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-stone-950' : 'bg-stone-900'} text-white`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-stone-400 text-stone-400" />)}
        </div>
        <h2 className="text-4xl font-serif mb-4">Voices of Serenity</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {[
          { name: "Elena Rossi", role: "Fashion Designer", quote: "The most tranquil space in the city. Their signature massage is transformative." },
          { name: "Marcus Thorne", role: "Creative Director", quote: "Aromi isn't just a spa; it's a lifestyle. The attention to detail is unmatched." },
          { name: "Sophia Chen", role: "Wellness Blogger", quote: "I've visited spas globally, and Aromi's facial treatments are truly world-class." }
        ].map((t, i) => (
          <div key={i} className={`relative p-8 border transition-colors ${darkMode ? 'border-stone-800 hover:border-stone-700' : 'border-white/10 hover:border-white/30'}`}>
            <p className="text-lg italic mb-8 text-stone-300">"{t.quote}"</p>
            <div>
              <p className="font-serif text-xl">{t.name}</p>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = ({ darkMode }: { darkMode: boolean }) => (
  <footer className={`pt-20 pb-10 border-t transition-colors duration-500 ${darkMode ? 'bg-stone-950 border-stone-900' : 'bg-stone-50 border-stone-200'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${darkMode ? 'bg-white' : 'bg-stone-800'}`}>
              <Sparkles className={`${darkMode ? 'text-stone-900' : 'text-stone-100'} w-4 h-4`} />
            </div>
            <span className={`text-xl font-serif tracking-widest uppercase transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>Aromi</span>
          </div>
          <p className={`text-sm leading-relaxed mb-6 transition-colors ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
            Redefining the intersection of fashion, wellness, and tranquility since 2008.
          </p>
          <div className="flex gap-4">
            <Instagram className={`w-5 h-5 cursor-pointer transition-colors ${darkMode ? 'text-stone-600 hover:text-white' : 'text-stone-400 hover:text-stone-900'}`} />
            <Facebook className={`w-5 h-5 cursor-pointer transition-colors ${darkMode ? 'text-stone-600 hover:text-white' : 'text-stone-400 hover:text-stone-900'}`} />
            <Twitter className={`w-5 h-5 cursor-pointer transition-colors ${darkMode ? 'text-stone-600 hover:text-white' : 'text-stone-400 hover:text-stone-900'}`} />
          </div>
        </div>

        <div>
          <h4 className={`font-serif text-lg mb-6 transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>Quick Links</h4>
          <ul className={`space-y-4 text-sm transition-colors ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
            <li><a href="#" className="hover:text-stone-900 dark:hover:text-white">Gift Cards</a></li>
            <li><a href="#" className="hover:text-stone-900 dark:hover:text-white">Memberships</a></li>
            <li><a href="#" className="hover:text-stone-900 dark:hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-stone-900 dark:hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className={`font-serif text-lg mb-6 transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>Contact</h4>
          <ul className={`space-y-4 text-sm transition-colors ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> 124 Serenity Blvd, Milan</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +39 02 123 4567</li>
            <li className="flex items-center gap-3"><Clock className="w-4 h-4" /> Mon - Sun: 9am - 9pm</li>
          </ul>
        </div>

        <div>
          <h4 className={`font-serif text-lg mb-6 transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>Newsletter</h4>
          <p className={`text-sm mb-4 transition-colors ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>Join our circle for exclusive offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className={`border px-4 py-2 text-sm w-full focus:outline-none transition-colors ${darkMode ? 'bg-stone-900 border-stone-800 text-white focus:border-stone-600' : 'bg-white border-stone-200 focus:border-stone-400'}`}
            />
            <button className={`px-4 py-2 text-sm uppercase tracking-widest transition-colors ${darkMode ? 'bg-white text-stone-900' : 'bg-stone-900 text-white'}`}>Join</button>
          </div>
        </div>
      </div>
      
      <div className={`pt-8 border-t text-center transition-colors ${darkMode ? 'border-stone-900' : 'border-stone-200'}`}>
        <p className="text-xs text-stone-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Aromi Fashion Spa. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans selection:bg-stone-200 ${darkMode ? 'bg-stone-950 text-white selection:bg-stone-800' : 'bg-white text-stone-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Services darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        
        {/* CTA Section */}
        <section className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-stone-900' : 'bg-stone-100'}`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-3xl md:text-4xl font-serif mb-8 italic transition-colors ${darkMode ? 'text-white' : 'text-stone-900'}`}>"The time to relax is when you don't have time for it."</h2>
            <button className={`px-12 py-5 rounded-full uppercase tracking-[0.2em] text-sm transition-all shadow-lg ${darkMode ? 'bg-white text-stone-900 hover:bg-stone-200' : 'bg-stone-900 text-white hover:bg-stone-800'}`}>
              Reserve Your Escape
            </button>
          </div>
        </section>

        <Testimonials darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}