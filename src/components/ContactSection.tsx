import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  MessageSquare, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles,
  Clock,
  Globe,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onBackToOverview?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBackToOverview }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Hire for Full-Time Role',
    message: '',
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
    confetti({ particleCount: 25, spread: 50 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `[Portfolio Inquiry - ${formData.subject}] from ${formData.name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Hello Hamza,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form.`
  )}`;

  const whatsappUrl = `https://wa.me/923217677493?text=${encodeURIComponent(
    `Hello Hamza Khalid, I saw your portfolio and would like to discuss an opportunity regarding ${formData.subject}.`
  )}`;

  return (
    <section id="contact" className="pt-24 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Button */}
        {onBackToOverview && (
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={onBackToOverview}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 text-xs font-semibold border border-slate-200 shadow-sm transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              <span>Back to Overview</span>
            </button>
            <div className="text-xs text-slate-400 font-medium hidden sm:block">
              Portfolio &gt; <span className="text-slate-700 font-semibold">Contact & Hire Me</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Exceptional Together
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you have a full-time software engineering role, a freelance AI / Web project, or want to discuss technical ideas, my inbox and WhatsApp are always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Direct Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-card-whatsapp"
              className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 transition-all flex items-center justify-between group cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-300 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Instant Messaging
                  </div>
                  <div className="text-base font-bold text-slate-900">WhatsApp Direct Chat</div>
                  <div className="text-xs text-slate-500 font-mono">+92 321 7677493</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                      Primary Email
                    </span>
                    <span className="text-sm font-bold text-slate-900 font-mono">{personalInfo.email}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  id="contact-copy-email-btn"
                  className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {personalInfo.secondaryEmail && (
                <div className="text-xs text-slate-500 pt-1 font-mono">
                  Secondary: {personalInfo.secondaryEmail}
                </div>
              )}
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-card-linkedin"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-between group cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Professional Network
                  </div>
                  <div className="text-sm font-bold text-slate-900">LinkedIn Profile</div>
                  <div className="text-xs text-slate-500">hamza-khalid-629a20299</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Phone & Location */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block">
                      Direct Telephone Call
                    </span>
                    <span className="text-sm font-bold text-slate-900 font-mono">{personalInfo.phone}</span>
                  </div>
                </div>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="px-3 py-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-blue-700 font-bold"
                >
                  Call
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Send a Direct Message</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Quick response guaranteed within 24 hours</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Fast Response</span>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-slate-50 border border-emerald-300 text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Prepared Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. You can send it directly through your email client or via WhatsApp with one click below:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'Hire for Full-Time Role', message: '' });
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 border border-slate-200"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        id="contact-form-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Your Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        id="contact-form-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Topic / Subject Preset
                    </label>
                    <select
                      id="contact-form-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Hire for Full-Time Role">Full-Time Software Engineer Role</option>
                      <option value="Freelance Web / AI Project">Freelance Web / Generative AI Project</option>
                      <option value="Flutter Mobile App Development">Flutter Mobile Application</option>
                      <option value="Database / Backend Engineering">Database Schema & Backend Consulting</option>
                      <option value="General Technical Inquiry">General Discussion / Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      id="contact-form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Hamza, I'd like to discuss an opportunity regarding..."
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Hamza</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
