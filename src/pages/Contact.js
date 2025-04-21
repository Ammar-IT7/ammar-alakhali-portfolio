// src/pages/Contact.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ContactSection from '../components/sections/ContactSection';

const PageContainer = styled.div`
  padding-top: 5rem;
`;

const PageHeader = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const PageTitle = styled(motion.h1)`
  margin-bottom: 1rem;
`;

const PageDescription = styled(motion.p)`
  max-width: 700px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textAlt};
`;

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact | Enova Studio</title>
        <meta name="description" content="Enova Studio offers innovative web design, UI/UX, logo design, and app development services." />
        <meta name="keywords" content="Enova Studio, web design, UI/UX, logo design, app development" />
      </Helmet>
      <PageContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Me
          </PageTitle>
          <PageDescription
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </PageDescription>
        </PageHeader>
        
        <ContactSection />
      </PageContainer>
    </>
  );
};

export default Contact;