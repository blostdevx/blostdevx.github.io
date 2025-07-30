import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home", color: "text-neon-cyan" },
    { href: "#blog", label: "Blog", color: "text-neon-purple" },
    { href: "#writeups", label: "Writeups", color: "text-neon-pink" },
    { href: "#docs", label: "Docs", color: "text-neon-green" },
    { href: "#contact", label: "Contact", color: "text-electric-blue" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-deep-black/80 backdrop-blur-md border-b border-neon-cyan/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-orbitron font-bold text-neon-cyan cursor-pointer"
            whileHover={{ scale: 1.05, textShadow: "0 0 10px currentColor" }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => handleNavClick("#home")}
          >
            BLOSTDEVX
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`hover:${link.color} transition-colors duration-300 font-medium relative`}
                whileHover={{ scale: 1.1, textShadow: "0 0 8px currentColor" }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                <motion.div
                  className={`absolute -bottom-1 left-0 h-0.5 ${link.color.replace('text-', 'bg-')} opacity-0`}
                  whileHover={{ opacity: 1, width: "100%" }}
                  initial={{ width: 0 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-neon-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ textShadow: "0 0 10px currentColor" }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left py-2 hover:${link.color} transition-colors duration-300 font-medium`}
                  whileHover={{ x: 10, textShadow: "0 0 8px currentColor" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}