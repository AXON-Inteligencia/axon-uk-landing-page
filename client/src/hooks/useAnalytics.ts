/**
 * useAnalytics Hook
 * Staff Engineer Level: Centralized analytics tracking for Google Analytics 4
 */

export const useAnalytics = () => {
  const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventData);
    }
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      });
    }
  };

  const trackConversion = (conversionName: string, value?: number) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        conversion_name: conversionName,
        value: value || 1,
      });
    }
  };

  const trackCTAClick = (ctaName: string, ctaType: "button" | "link" = "button") => {
    trackEvent("cta_click", {
      cta_name: ctaName,
      cta_type: ctaType,
      timestamp: new Date().toISOString(),
    });
  };

  const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
    trackEvent("form_submission", {
      form_name: formName,
      form_fields: Object.keys(formData || {}).length,
      timestamp: new Date().toISOString(),
    });
  };

  const trackScroll = (scrollPercentage: number) => {
    trackEvent("scroll", {
      scroll_percentage: scrollPercentage,
      timestamp: new Date().toISOString(),
    });
  };

  const trackTimeOnPage = (timeInSeconds: number) => {
    trackEvent("time_on_page", {
      time_seconds: timeInSeconds,
      timestamp: new Date().toISOString(),
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackCTAClick,
    trackFormSubmission,
    trackScroll,
    trackTimeOnPage,
  };
};

// Declare gtag global type
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
