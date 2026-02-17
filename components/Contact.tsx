import React, { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

// FORMSPREE SETUP - CONFIGURED ✓
// Form will send emails to: gandijahnavi886@gmail.com
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdalzjry';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Rotating Background Elements */}
      <div className="absolute top-[10%] left-[8%] w-48 h-48 opacity-20 animate-rotate-slow">
        <div className="w-full h-full border-4 border-blue-400/30 rounded-3xl"></div>
      </div>
      <div className="absolute top-[15%] right-[10%] w-44 h-44 opacity-25 animate-rotate-reverse">
        <div className="w-full h-full border-4 border-purple-400/30 rounded-full"></div>
      </div>
      <div className="absolute bottom-[18%] left-[12%] w-40 h-40 opacity-22 animate-rotate-medium">
        <div className="w-full h-full border-4 border-pink-400/30" style={{borderRadius: '25%'}}></div>
      </div>
      <div className="absolute bottom-[12%] right-[8%] w-36 h-36 opacity-28 animate-rotate-fast">
        <div className="w-full h-full border-4 border-blue-500/35 rounded-2xl rotate-45"></div>
      </div>
      <div className="absolute top-[45%] right-[5%] w-32 h-32 opacity-20 animate-rotate-reverse">
        <div className="w-full h-full border-4 border-purple-400/25 rounded-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-3 sm:mb-4">Let's Connect</h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-xl group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Email Me</p>
                    <p className="text-slate-700 font-medium">{SOCIAL_LINKS.email}</p>
                  </div>
                </a>

                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-xl group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">LinkedIn</p>
                    <p className="text-slate-700 font-medium">jahnavi-gandi</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-2xl group">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Location</p>
                    <p className="text-slate-700 font-medium">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    disabled={isSubmitting}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-100 outline-none transition-all disabled:bg-slate-50 disabled:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    disabled={isSubmitting}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-100 outline-none transition-all disabled:bg-slate-50 disabled:text-slate-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  disabled={isSubmitting}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-100 outline-none transition-all disabled:bg-slate-50 disabled:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  disabled={isSubmitting}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-100 outline-none transition-all resize-none disabled:bg-slate-50 disabled:text-slate-500"
                ></textarea>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  <CheckCircle size={20} />
                  <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <span className="font-medium">Failed to send message. Please try again or email directly.</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-purple-300 hover:scale-105 transition-all duration-300 active:scale-95 disabled:from-blue-400 disabled:to-purple-400 disabled:cursor-not-allowed disabled:active:scale-100 disabled:shadow-blue-100 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                <div className="relative flex items-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;