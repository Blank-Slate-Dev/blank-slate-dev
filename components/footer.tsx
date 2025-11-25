// components/footer.tsx
import Logo from "@/components/logo";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#f3edf9] to-[#e8dcfb] border-t border-[hsl(var(--border))]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand / intro */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 max-w-md text-base text-slate-700 leading-relaxed">
              Building exceptional digital products that drive business growth.
              From startups to enterprises, we bring ideas to life.
            </p>
            <div className="mt-8 flex gap-5">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 transition-all hover:bg-primary hover:text-white hover:scale-110 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 transition-all hover:bg-primary hover:text-white hover:scale-110 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 transition-all hover:bg-primary hover:text-white hover:scale-110 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-slate-700 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-slate-700 hover:text-primary transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-slate-700 hover:text-primary transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-slate-700 hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-slate-700 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <a
                    href="mailto:hello@blankslatedev.com"
                    className="text-base text-slate-700 hover:text-primary transition-colors"
                  >
                    hello@blankslatedev.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <a
                    href="tel:+1234567890"
                    className="text-base text-slate-700 hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div className="text-base text-slate-700">
                  San Francisco, CA
                  <br />
                  United States
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-[hsl(var(--border))] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">
              © {currentYear} Blank Slate Dev. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
