/**
 * Google Analytics 4 (GA4) & Microsoft Clarity Conversion Tracking Helpers
 * The Beauty Barn Leicester
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js' | 'set',
      eventNameOrTargetId: string,
      params?: Record<string, unknown>
    ) => void;
    clarity?: (command: string, ...args: unknown[]) => void;
  }
}

/**
 * Safe generic event tracker for GA4 and Clarity
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Microsoft Clarity
  if (typeof window.clarity === 'function') {
    window.clarity('event', eventName);
  }
}

/**
 * Track when a user clicks through to Fresha to book a treatment or package
 */
export function trackFreshaBooking(treatmentName: string, destinationUrl: string) {
  trackEvent('fresha_booking_click', {
    treatment_name: treatmentName,
    destination_url: destinationUrl,
  });

  // Standard ecommerce / funnel event in GA4
  trackEvent('begin_checkout', {
    value: 1,
    currency: 'GBP',
    items: [{ item_name: treatmentName }],
  });
}

/**
 * Track when a user clicks to start a WhatsApp conversation
 */
export function trackWhatsAppClick(source: string = 'other') {
  trackEvent('whatsapp_click', {
    source,
    channel: 'whatsapp',
  });
}

/**
 * Track when a user clicks to call the salon phone number
 */
export function trackPhoneCall(source: string = 'other') {
  trackEvent('phone_call_click', {
    source,
    channel: 'phone',
  });
}

/**
 * Track when a user submits the website contact form
 */
export function trackContactFormSubmission(subject?: string) {
  trackEvent('contact_form_submission', {
    subject: subject || 'General Enquiry',
  });

  // Standard lead generation event in GA4
  trackEvent('generate_lead', {
    lead_type: 'contact_form',
  });
}

/**
 * Track when a user clicks to purchase or collect a gift voucher
 */
export function trackGiftVoucherClick(type: string = 'digital_fresha') {
  trackEvent('gift_voucher_click', {
    voucher_type: type,
  });
}
