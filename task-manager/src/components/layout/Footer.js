import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 20px;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.border};
  margin-top: auto;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 10px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 0.9rem;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Copyright>© {currentYear} Task Manager 2.0 - All Rights Reserved</Copyright>
      <FooterLinks>
        <FooterLink to="/contact">Contact Us</FooterLink>
        <FooterLink to="/privacy">Privacy Policy</FooterLink>
        <FooterLink to="/terms">Terms & Conditions</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
