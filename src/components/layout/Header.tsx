import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { engineerInfo } from '@/data/engineer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

/**
 * Main header component with scroll-aware styling
 * Transparent on hero section, solid when scrolled
 * Mobile responsive with hamburger menu
 */
export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Header is transparent only on homepage hero when not scrolled
  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'text-lg font-light tracking-widest transition-all duration-300',
              isTransparent
                ? 'text-white hover:text-white/80'
                : 'text-foreground hover:text-foreground/80'
            )}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {engineerInfo.name.toUpperCase()}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Link
                    to={link.path}
                    className="relative text-lg leading-7 font-light tracking-wide text-white transition-colors duration-300 hover:text-white/80"
                  >
                    {link.name}
                    {/* Active underline */}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'size-9',
                    isTransparent && 'text-white hover:bg-white/10'
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 flex flex-col">
                <div className="flex-1 flex flex-col">
                  {/* Logo in mobile menu */}
                  <div className="mb-12 pt-4">
                    <span className="text-xl font-light tracking-widest text-foreground">
                      {engineerInfo.name.toUpperCase()}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">AI Engineer</p>
                  </div>

                  {/* Navigation links */}
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "block py-4 px-4 text-xl font-light tracking-wide transition-all duration-300 rounded-lg",
                            location.pathname === link.path
                              ? "bg-primary/10 text-primary"
                              : "text-foreground hover:bg-muted hover:text-foreground/80"
                          )}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Social links & contact */}
                  <div className="mt-auto pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Get in touch</p>
                    <div className="flex flex-col gap-2">
                      <a 
                        href={`mailto:${engineerInfo.email}`}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {engineerInfo.email}
                      </a>
                      <a 
                        href={engineerInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        GitHub
                      </a>
                      <a 
                        href={engineerInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
