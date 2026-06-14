import { useEffect } from 'react';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogType?: string;
  ogUrl?: string;
}

export default function SEO({
  title = "Shifra Panwar | Software Developer | Java | Full Stack Developer",
  description = "Explore Shifra Panwar's premium engineering portfolio. B.Tech Information Technology graduate specializing in Java, React, SQL, and robust scalable web applications.",
  keywords = "Shifra Panwar, Software Developer, Java Developer, Full Stack Developer, React Portfolio, Baghpat, Uttar Pradesh, B.Tech IT, SmartLib, MindWell AI, Solitaire Infosys Portfolio",
  author = "Shifra Panwar",
  ogType = "profile",
  ogUrl = "https://github.com/shifrapanwar"
}: SeoProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to update or create a meta tag
    const updateMetaTag = (nameAttr: string, valueAttr: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Search Engine Meta Tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('name', 'author', author);

    // 3. OpenGraph Social Sharing Preview Tags (Facebook, LinkedIn, Discord)
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:url', ogUrl);
    updateMetaTag('property', 'og:site_name', "Shifra Panwar Portfolio");

    // 4. Twitter Card Preview Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);

  }, [title, description, keywords, author, ogType, ogUrl]);

  return null; // This component handles side effects inside the DOM header
}
