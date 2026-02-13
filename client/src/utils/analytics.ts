// GA4 Analytics tracking utilities
// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackPhoneClick = (phone: string, location: string) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", "phone_click", {
      event_category: "Contact",
      event_label: location,
      phone_number: phone,
    });
  }
};

export const trackEmailClick = (email: string, location: string) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", "email_click", {
      event_category: "Contact",
      event_label: location,
      email_address: email,
    });
  }
};

export const trackServiceInterest = (serviceName: string) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", "service_interest", {
      event_category: "Engagement",
      event_label: serviceName,
    });
  }
};

export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: title ?? document.title,
    });
  }
};

export const trackGenerateLead = (params: {
  facilityType?: string;
  serviceInterest?: string;
}) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", "generate_lead", {
      event_category: "Contact",
      event_label: "Quote Request Form",
      value: 1,
      facility_type: params.facilityType,
      service_interest: params.serviceInterest,
    });
  }
};
