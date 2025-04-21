// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const NotFoundTitle = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const NotFoundSubtitle = styled.h2`
  margin: 1rem 0 2rem;
  color: ${({ theme }) => theme.textAlt};
`;

const NotFoundText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadow};

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
    color: white;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Helmet>
        <title>Page Not Found | Enova Studio</title>
        <meta name="description" content="The page you are looking for doesn't exist." />
      </Helmet>
      
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
      <NotFoundText>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </NotFoundText>
      <HomeButton to="/">
        Back to Home
      </HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;