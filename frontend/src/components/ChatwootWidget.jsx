import { useEffect } from 'react';

const chatwootBaseUrl = (import.meta.env.VITE_CHATWOOT_BASE_URL || 'https://chatwoot.yalabyte.com').replace(/\/$/, '');
const websiteToken = import.meta.env.VITE_CHATWOOT_WEBSITE_TOKEN || '';

export default function ChatwootWidget() {
  useEffect(() => {
    if (!websiteToken || window.chatwootSDK) return undefined;

    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right',
      locale: 'en',
      type: 'standard'
    };

    const script = document.createElement('script');
    script.src = `${chatwootBaseUrl}/packs/js/sdk.js`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.chatwootSDK?.run({
        websiteToken,
        baseUrl: chatwootBaseUrl
      });
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
