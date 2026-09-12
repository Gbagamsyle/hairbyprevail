import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Instagram } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Wig Revamp',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Prevail, I would like to get in touch:\n` +
      `• Name: ${formData.name || 'Client'}\n` +
      `• Interest: ${formData.serviceInterest}\n` +
      `• Preferred Date: ${formData.preferredDate || 'Earliest available'}\n` +
      `• Message: ${formData.message || 'General enquiry'}`
    );
    window.open(`https://wa.me/2349012966554?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-24 bg-ivory text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-surface border border-taupe-light text-champagne-dark text-xs font-semibold tracking-widest-luxury uppercase mb-3">
            <span>Studio Inquiries & Booking</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso">
            LET’S CREATE YOUR NEXT LOOK
          </h1>
          <p className="mt-4 text-base sm:text-lg text-taupe-warm font-light">
            We are here to assist with custom orders, wig revamping drop-offs, styling appointments, and nationwide courier pickups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-ivory-surface p-8 sm:p-10 rounded-luxury border border-taupe-light shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 bg-champagne-soft text-espresso rounded-full flex items-center justify-center mx-auto border border-champagne">
                  <CheckCircle2 className="w-8 h-8 text-espresso" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-espresso">
                  Enquiry Received
                </h3>
                <p className="text-sm text-taupe-warm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-espresso">{formData.name}</strong>. We have received your details and will respond via WhatsApp at <strong className="text-espresso">{formData.phone}</strong> shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="py-3 px-6 bg-[#25D366] text-white text-xs font-bold tracking-widest-luxury uppercase rounded-luxury flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-3 px-6 bg-ivory text-espresso text-xs font-semibold uppercase tracking-wider rounded-luxury border border-taupe-light hover:bg-taupe-light/20"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-espresso mb-4">
                  Send an Enquiry
                </h3>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Bukola Adeleke"
                    className="w-full px-4 py-3 bg-ivory border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 bg-ivory border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="bukola@example.com"
                      className="w-full px-4 py-3 bg-ivory border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                      What are you interested in?
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-ivory border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all"
                    >
                      <option value="Wig Purchase">Wig Purchase</option>
                      <option value="Wig Revamp">Wig Revamp</option>
                      <option value="Styling / Install">Styling / Install</option>
                      <option value="Braiding">Braiding</option>
                      <option value="Other">Other / General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-ivory border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                    Message / Hair Description
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to achieve with your hair or wig..."
                    className="w-full px-4 py-3 bg-ivory border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-espresso text-ivory text-xs font-bold tracking-widest-luxury uppercase rounded-luxury hover:bg-espresso-rich transition-all border border-espresso flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4 text-champagne" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}

            {/* Prefer WhatsApp Callout */}
            <div className="mt-8 pt-6 border-t border-taupe-light/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-espresso">
                  Prefer Immediate WhatsApp Response?
                </p>
                <p className="text-xs text-taupe-warm">
                  Direct chat with Prevail Studio Concierge.
                </p>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold tracking-widest-luxury uppercase rounded-luxury hover:brightness-105 transition-all flex items-center gap-2 shrink-0 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly</span>
              </button>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-luxury bg-espresso text-ivory border border-champagne/30 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-ivory">
                Studio Information
              </h3>

              <div className="space-y-4 text-sm text-taupe-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ivory">Studio Location</h4>
                    <p className="font-light">Lagos, Nigeria</p>
                    <p className="text-xs text-taupe-light mt-1">Exact address provided upon confirmed booking for privacy and security.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ivory">Operating Hours</h4>
                    <p className="font-light">Tuesday to Saturday: 9:00 AM to 6:30 PM</p>
                    <p className="font-light">Sunday: 1:00 PM to 6:00 PM (By appointment)</p>
                    <p className="text-xs text-taupe-light mt-1">Monday: Studio Cleaning & Custom Wig Production</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ivory">Direct Inquiries</h4>
                    <p className="font-light">WhatsApp: +234 800 000 0000</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-espresso-muted">
                <p className="text-xs uppercase tracking-widest-luxury text-champagne mb-3">
                  Social Channels
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.tiktok.com/@everythinghair_byprevail?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-espresso-rich text-center text-xs font-semibold rounded-luxury border border-espresso-muted hover:border-champagne text-ivory transition-colors"
                  >
                    TikTok
                  </a>
                  <a
                    href="https://www.instagram.com/everythinghairby_prevail/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-espresso-rich text-center text-xs font-semibold rounded-luxury border border-espresso-muted hover:border-champagne text-ivory transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Delivery Notice Card */}
            <div className="p-6 rounded-luxury bg-ivory-surface border border-taupe-light space-y-2 text-xs text-taupe-warm">
              <h4 className="font-serif font-bold text-sm text-espresso">
                Wig Courier & Drop-Off Note
              </h4>
              <p>
                We accept nationwide revamp packages via GIG, DHL, and local dispatch riders. Please ensure your package is labeled with your full name and registered phone number.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
