import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageCircle, Calendar, Clock, MapPin } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Wig Revamping',
    hairTexture: 'Body Wave',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Prevail, I would like to book a session:\n` +
      `• Name: ${formData.name || 'Client'}\n` +
      `• Service: ${formData.serviceType}\n` +
      `• Preferred Date: ${formData.preferredDate || 'Earliest available'}\n` +
      `• Time: ${formData.preferredTime}\n` +
      `• Notes: ${formData.message || 'Standard inquiry'}`
    );
    window.open(`https://wa.me/2348000000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/85 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-ivory rounded-luxury shadow-2xl overflow-hidden border border-taupe-light my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-taupe hover:text-espresso transition-colors rounded-full hover:bg-ivory-surface"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-espresso text-ivory p-6 sm:p-8 relative">
          <div className="flex items-center gap-2 text-champagne text-xs font-semibold tracking-widest-luxury uppercase mb-1">
            <span>Studio Appointments & Inquiries</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ivory">
            Let’s Create Your Next Look
          </h3>
          <p className="text-xs text-taupe-light mt-2 font-light">
            Located in Lagos, Nigeria. We also offer worldwide insured shipping for wigs and revamp parcels.
          </p>
        </div>

        {submitted ? (
          /* Confirmation State */
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 bg-champagne-soft text-espresso rounded-full flex items-center justify-center mx-auto border border-champagne">
              <CheckCircle className="w-8 h-8 text-espresso" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-espresso">
              Booking Request Received!
            </h4>
            <p className="text-sm text-taupe-warm leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-espresso">{formData.name}</strong>. Prevail or our concierge will reach out to you on WhatsApp at <strong className="text-espresso">{formData.phone}</strong> within 2 hours to confirm your schedule.
            </p>

            <div className="p-4 bg-ivory-surface rounded-luxury border border-taupe-light text-left text-xs space-y-1.5 max-w-md mx-auto text-taupe-warm">
              <div><strong>Service:</strong> {formData.serviceType}</div>
              <div><strong>Requested Date:</strong> {formData.preferredDate || 'To be scheduled'} ({formData.preferredTime})</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppDirect}
                className="py-3 px-6 bg-[#25D366] text-white text-xs font-bold tracking-widest-luxury uppercase rounded-luxury flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp Now</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="py-3 px-6 bg-ivory-surface text-espresso text-xs font-semibold uppercase tracking-wider rounded-luxury hover:bg-taupe-light/30 border border-taupe-light"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Adesuwa Okafor"
                className="w-full px-3.5 py-2.5 bg-ivory-surface border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso focus:ring-1 focus:ring-espresso transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234 800 000 0000"
                  className="w-full px-3.5 py-2.5 bg-ivory-surface border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso focus:ring-1 focus:ring-espresso transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 bg-ivory-surface border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso focus:ring-1 focus:ring-espresso transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                Service of Interest *
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-ivory-surface border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all"
              >
                <option value="Wig Revamping & Treatment">Wig Revamping & Spa Treatment</option>
                <option value="Custom Wig Purchase / Enquiry">Custom Wig Purchase / Enquiry</option>
                <option value="In-Studio Hair Styling & Install">In-Studio Hair Styling & Install</option>
                <option value="Artisan Braiding (Knotless / Goddess)">Artisan Braiding (Knotless / Goddess)</option>
                <option value="Bridal / Event Glam Hair">Bridal / Event Glam Hair</option>
                <option value="General Hair Consultation">General Hair Consultation</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-ivory-surface border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                  Preferred Time Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-ivory-surface border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all"
                >
                  <option value="Morning (10:00 AM)">Morning (10:00 AM)</option>
                  <option value="Afternoon (1:00 PM)">Afternoon (1:00 PM)</option>
                  <option value="Late Afternoon (4:00 PM)">Late Afternoon (4:00 PM)</option>
                  <option value="Flexible / Drop-off">Flexible / Drop-off only</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5">
                Hair Details or Special Requests
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share any details about your hair condition, wig length, texture, or event date..."
                className="w-full px-3.5 py-2.5 bg-ivory-surface border border-taupe-light rounded-luxury text-sm text-espresso focus:outline-none focus:border-espresso transition-all resize-none"
              />
            </div>

            <div className="pt-3 space-y-2.5">
              <button
                type="submit"
                className="w-full py-3.5 bg-espresso text-ivory text-xs font-bold tracking-widest-luxury uppercase rounded-luxury hover:bg-espresso-rich transition-all border border-espresso flex items-center justify-center gap-2 shadow"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Submit Appointment Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-3 bg-[#25D366] text-white text-xs font-bold tracking-widest-luxury uppercase rounded-luxury flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Prefer WhatsApp? Chat Instantly</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
