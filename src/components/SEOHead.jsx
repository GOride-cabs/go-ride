import { useEffect } from 'react';

/**
 * Lightweight dynamic SEO meta & title manager for React SPA routes.
 * Updates document.title, meta description, canonical link, and Open Graph tags.
 */
export default function SEOHead({
  title,
  description,
  canonicalUrl,
  keywords,
  schemaJson
}) {
  useEffect(() => {
    // 1. Update document title
    if (title) {
      document.title = title;
    }

    // 2. Helper to set or update meta tags
    const setMetaTag = (nameAttr, nameValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update primary meta description
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    // 4. Update title for Open Graph and Twitter
    if (title) {
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }

    // 5. Update keywords if provided
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 6. Update Canonical URL
    const canonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href.split('?')[0] : '');
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
      setMetaTag('property', 'og:url', canonical);
    }

    // 7. Optional Structured Data injection for route
    let scriptElement = null;
    if (schemaJson) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.setAttribute('data-route-schema', 'true');
      scriptElement.textContent = JSON.stringify(schemaJson);
      document.head.appendChild(scriptElement);
    }

    // Cleanup on unmount / route change
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [title, description, canonicalUrl, keywords, schemaJson]);

  return null;
}
