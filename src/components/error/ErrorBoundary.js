// src/components/error/ErrorBoundary.js
import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 8px;
  border-left: 5px solid ${({ theme }) => theme.error};
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

const ErrorHeading = styled.h2`
  color: ${({ theme }) => theme.error};
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  margin-bottom: 1rem;
`;

const ErrorStack = styled.pre`
  background: ${({ theme }) => theme.backgroundAlt2};
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-family: monospace;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const ResetButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorHeading>Something went wrong</ErrorHeading>
          <ErrorMessage>
            We apologize for the inconvenience. An unexpected error has occurred.
          </ErrorMessage>
          {this.state.error && (
            <ErrorMessage>
              <strong>Error:</strong> {this.state.error.toString()}
            </ErrorMessage>
          )}
          {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
            <>
              <ErrorMessage>
                <strong>Component Stack:</strong>
              </ErrorMessage>
              <ErrorStack>
                {this.state.errorInfo.componentStack}
              </ErrorStack>
            </>
          )}
          <ResetButton onClick={this.resetErrorBoundary}>
            Try Again
          </ResetButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;