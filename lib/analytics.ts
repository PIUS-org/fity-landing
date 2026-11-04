declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, location: string | undefined, os: string) {
  try {
    window.gtag?.("event", event, { link_location: location ?? "unknown", device_os: os });
  } catch {
    /* noop */
  }
}
