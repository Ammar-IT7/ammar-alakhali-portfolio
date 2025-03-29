// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ammar Alakhali | Software Engineer</title>
      <meta name="description" content="Ammar Alakhali is a software engineer specializing in full-stack development with expertise in React, Node.js, and cloud technologies." />
      <meta name="keywords" content="Ammar Alakhali, software engineer, web developer, full stack, React, Node.js" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ammar-it7.github.io/ammar-alakhali-portfolio/" />
      <meta property="og:title" content="Ammar Alakhali | Software Engineer" />
      <meta property="og:description" content="Software Engineer specializing in full-stack development" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ammar Alakhali | Software Engineer" />
      <meta name="twitter:description" content="Software Engineer specializing in full-stack development" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ammar-it7.github.io/ammar-alakhali-portfolio/" />
    </Helmet>
  );
};

export default SEO;