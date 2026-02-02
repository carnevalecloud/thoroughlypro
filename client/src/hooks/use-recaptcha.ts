import { useCallback } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = "6LfsXV4sAAAAAFhY8ZQlC0ap-anQuQ40_hYZz59I";

export function useReCaptcha() {
  const executeRecaptcha = useCallback(async (action: string = "submit"): Promise<string | null> => {
    return new Promise((resolve) => {
      if (!window.grecaptcha) {
        console.error("reCAPTCHA not loaded");
        resolve(null);
        return;
      }

      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
          resolve(token);
        } catch (error) {
          console.error("reCAPTCHA error:", error);
          resolve(null);
        }
      });
    });
  }, []);

  return { executeRecaptcha };
}
