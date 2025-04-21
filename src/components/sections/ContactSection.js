// src/components/sections/ContactSection.js
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { LanguageContext } from '../../contexts/LanguageContext';

const ContactContainer = styled.section`
  padding: 4rem 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => props.isRTL ? 'right' : 'left'};
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const ContactDescription = styled.p`
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textAlt};
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: ${props => props.isRTL ? 'row-reverse' : 'row'};
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundAlt};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.1);
  }
`;

const ContactMethodInfo = styled.div`
  flex: 1;
`;

const ContactMethodTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

const ContactMethodValue = styled.p`
  color: ${({ theme }) => theme.textAlt};
`;

const ContactForm = styled(motion.form)`
  background-color: ${({ theme }) => theme.backgroundAlt};
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: ${props => props.isRTL ? 'right' : 'left'};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  width: 100%;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.textAlt};
    cursor: not-allowed;
  }
`;

const Alert = styled(motion.div)`
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  text-align: center;
  background-color: ${({ success, theme }) => 
    success ? 'rgba(72, 187, 120, 0.2)' : 'rgba(245, 101, 101, 0.2)'};
  color: ${({ success, theme }) => 
    success ? '#48bb78' : '#f56565'};
  border: 1px solid ${({ success }) => 
    success ? '#48bb78' : '#f56565'};
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { language, t } = useContext(LanguageContext);
  const isRTL = language === 'ar';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactContainer>
      <ContactGrid>
        <ContactInfo isRTL={isRTL}>
          <ContactTitle>{t('contact.title')}</ContactTitle>
          <ContactDescription>
            {t('contact.description')}
          </ContactDescription>
          
          <ContactMethods>
            <ContactMethod>
              <IconContainer>
                <FaEnvelope />
              </IconContainer>
              <ContactMethodInfo>
                <ContactMethodTitle>Email</ContactMethodTitle>
                <ContactMethodValue>enovastudio.ye@gmail.com</ContactMethodValue>
              </ContactMethodInfo>
            </ContactMethod>
            
            <ContactMethod>
              <IconContainer>
                <FaMapMarkerAlt />
              </IconContainer>
              <ContactMethodInfo>
                <ContactMethodTitle>Location</ContactMethodTitle>
                <ContactMethodValue>Yemen, Sana`a</ContactMethodValue>
              </ContactMethodInfo>
            </ContactMethod>
            
            <ContactMethod>
              <IconContainer >
                <FaPhone />
              </IconContainer>
              <ContactMethodInfo>
                <ContactMethodTitle>Phone</ContactMethodTitle>
                <ContactMethodValue>967739502156+</ContactMethodValue>
              </ContactMethodInfo>
            </ContactMethod>
          </ContactMethods>
        </ContactInfo>
        
        <ContactForm
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          {submitStatus && (
            <Alert 
              success={submitStatus === 'success'}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {submitStatus === 'success' 
                ? t('contact.success') 
                : t('contact.error')}
            </Alert>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="name" isRTL={isRTL}>{t('contact.nameLabel')}</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email" isRTL={isRTL}>{t('contact.emailLabel')}</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject" isRTL={isRTL}>{t('contact.subjectLabel')}</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message" isRTL={isRTL}>{t('contact.messageLabel')}</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          </FormGroup>
          
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : t('contact.sendButton')}
            <FaPaperPlane />
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
};

export default ContactSection;