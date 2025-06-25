// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Enova Studio | Creative Software Solutions</title>
      <meta name="description" content="Enova Studio offers innovative web design, UI/UX, logo design, and app development services." />
      <meta name="keywords" content="Enova Studio, web design, UI/UX, logo design, app development" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://enovastudio-ye.com" />
      <meta property="og:title" content="Enova Studio | Creative Software Solutions" />
      <meta property="og:description" content="Innovative web design, UI/UX, logo design, and app development services." />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://enovastudio-ye.com" />
      <meta name="twitter:title" content="Enova Studio | Creative Software Solutions" />
      <meta name="twitter:description" content="Innovative web design, UI/UX, logo design, and app development services." />
      
      {/* Favicon */}
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico?v=2" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png?v=2" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://enovastudio-ye.com" />
    </Helmet>
  );
};

export default SEO;