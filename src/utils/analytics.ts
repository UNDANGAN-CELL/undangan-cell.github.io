/**
 * Event tracking Google Analytics 4. Aman dipanggil meskipun GA belum termuat.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === 'undefined') return;

  const gtag = (window as Window & {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }).gtag;

  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}
