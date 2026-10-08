export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", name, params);
    return;
  }

  // Keep GTM compatibility when a site uses a container instead of the direct GA4 tag.
  window.dataLayer?.push({ event: name, ...params });
}
