import { useState, useEffect, useCallback } from 'react';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

const CONSENT_KEY = 'cookie_consent';

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'declined') {
      setConsentStatus(stored);
    }
  }, []);

  const acceptCookies = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsentStatus('accepted');
    // Re-enable GA4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  }, []);

  const declineCookies = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setConsentStatus('declined');
    // Disable GA4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  }, []);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(CONSENT_KEY);
    setConsentStatus('pending');
  }, []);

  return {
    consentStatus,
    acceptCookies,
    declineCookies,
    resetConsent,
    showBanner: consentStatus === 'pending',
  };
};
