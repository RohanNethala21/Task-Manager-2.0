import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LoginHeader = styled.header`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  
  svg {
    margin-right: 10px;
  }
`;

const LoginContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LoginBox = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  overflow: hidden;
`;

const LoginForm = styled.form`
  flex: 1;
  padding: 40px;
  background-color: #f9f9f9;
`;

const LoginImage = styled.div`
  flex: 1;
  background-color: #2196f3;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 80%;
    height: auto;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #333;
  }
`;

const RegisterLink = styled.p`
  text-align: center;
  
  a {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.warning};
  text-align: center;
  margin-bottom: 15px;
`;

const LoginFooter = styled.footer`
  padding: 20px;
  background-color: #ffffff;
  border-top: 1px solid ${props => props.theme.colors.lightGray};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLogo = styled.div`
  font-weight: bold;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.darkGray};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    const result = login(email, password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message || 'Invalid email or password');
    }
  };
  
  return (
    <LoginContainer>
      <LoginHeader>
        <LogoContainer>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" fill="black" />
            <rect x="3" y="14" width="7" height="7" fill="black" />
            <rect x="14" y="3" width="7" height="7" fill="black" />
            <rect x="14" y="14" width="7" height="7" fill="black" />
          </svg>
          Task Manager 2.0
        </LogoContainer>
      </LoginHeader>
      
      <LoginContent>
        <LoginBox>
          <LoginForm onSubmit={handleSubmit}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login to Your Account</h2>
            
            <RegisterLink>
              Don't have an account? <Link to="/register">Register</Link>
            </RegisterLink>
            
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <FormGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            
            <CheckboxContainer>
              <Checkbox 
                type="checkbox" 
                id="remember" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Label htmlFor="remember" style={{ margin: 0 }}>Remember me</Label>
            </CheckboxContainer>
            
            <LoginButton type="submit">Log in</LoginButton>
          </LoginForm>
          
          <LoginImage>
            <svg width="200" height="200" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 80 Q 40 60 80 80 T 160 80 T 200 80" stroke="#FFFFFF" strokeWidth="5" fill="#87CEFA" />
              <path d="M0 60 Q 40 40 80 60 T 160 60 T 200 60" stroke="#FFFFFF" strokeWidth="5" fill="#ADD8E6" />
            </svg>
          </LoginImage>
        </LoginBox>
      </LoginContent>
      
      <LoginFooter>
        <FooterContent>
          <FooterLogo>LOGO</FooterLogo>
          <div>© 2010 — 2025</div>
          <FooterLinks>
            <FooterLink href="#privacy">Privacy</FooterLink>
            <FooterLink href="#terms">Terms</FooterLink>
          </FooterLinks>
        </FooterContent>
      </LoginFooter>
    </LoginContainer>
  );
};

export default Login;
