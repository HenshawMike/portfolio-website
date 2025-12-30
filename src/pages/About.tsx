import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { engineerInfo } from '@/data/engineer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with engineer biography and professional information
 * Features split layout with portrait and comprehensive biography
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${engineerInfo.name}, ${engineerInfo.tagline}. ${engineerInfo.biography.split('\n\n')[0]}`}
        image={engineerInfo.portraitImage}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
              About
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              AI Engineer & Problem Solver
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portrait and Biography - Split Layout */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Portrait Image */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0.8, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                <img
                  src={engineerInfo.portraitImage}
                  alt={engineerInfo.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {engineerInfo.socialLinks.github && (
                  <a
                    href={engineerInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="size-5" />
                  </a>
                )}
                {engineerInfo.socialLinks.linkedin && (
                  <a
                    href={engineerInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
                {engineerInfo.socialLinks.twitter && (
                  <a
                    href={engineerInfo.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="size-5" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Biography and Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0.8, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Name and Tagline */}
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                  {engineerInfo.name}
                </h2>
                <p className="text-xl text-muted-foreground font-light tracking-wide">
                  {engineerInfo.tagline}
                </p>
              </div>

              <Separator />

              {/* Biography */}
              <div className="space-y-4">
                {engineerInfo.biography.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Approach */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-light tracking-wide">My Approach</h3>
                {engineerInfo.approach.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base font-light leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-4 space-y-2">
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Email: </span>
                  <a
                    href={`mailto:${engineerInfo.email}`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {engineerInfo.email}
                  </a>
                </div>
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Location: </span>
                  <span className="text-foreground">{engineerInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Skills */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-light tracking-wide">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {engineerInfo.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent text-foreground rounded-sm text-sm font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-2xl font-light tracking-wide">Experience</h3>
              <ul className="space-y-3">
                {engineerInfo.experience.map((exp) => (
                  <li key={exp} className="text-sm font-light text-muted-foreground">
                    {exp}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-2xl font-light tracking-wide">Certifications</h3>
              <ul className="space-y-3">
                {engineerInfo.certifications.map((cert) => (
                  <li key={cert} className="text-sm font-light text-muted-foreground">
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
