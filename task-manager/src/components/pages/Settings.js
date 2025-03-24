import React, { useState } from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  padding: 20px;
`;

const ProfileSection = styled.div`
  background-color: #4b6455;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  overflow: hidden;
`;

const ProfileDetails = styled.div``;

const ProfileName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const ProfileEmail = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
`;

const ProfileActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfileButton = styled.button`
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: ${props => props.primary ? 'transparent' : 'black'};
  color: white;
  border: ${props => props.primary ? '1px solid white' : 'none'};
  
  &:hover {
    background-color: ${props => props.primary ? 'rgba(255, 255, 255, 0.1)' : '#333'};
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ThemesSection = styled.div`
  margin-bottom: 40px;
`;

const ThemeDescription = styled.p`
  color: ${props => props.theme.colors.darkGray};
  margin-bottom: 30px;
`;

const ThemeOptions = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ThemeCard = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const ThemeIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background-color: ${props => props.bgColor || '#e0e0e0'};
`;

const ThemeDetails = styled.div`
  flex: 1;
`;

const ThemeTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const ThemeSubtitle = styled.p`
  color: ${props => props.theme.colors.darkGray};
  font-size: 0.9rem;
`;

const CustomThemeSection = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const ThemeSettingsSection = styled.div`
  margin-bottom: 40px;
`;

const ColorPickersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ColorPickerGroup = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ColorPickerLabel = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
`;

const ColorPickerDescription = styled.p`
  color: ${props => props.theme.colors.darkGray};
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const ColorPickerInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.primary ? 'white' : props.theme.colors.text};
  border: ${props => props.primary ? 'none' : `1px solid ${props.theme.colors.lightGray}`};
  
  &:hover {
    background-color: ${props => props.primary ? '#333' : props.theme.colors.lightGray};
  }
`;

const Settings = () => {
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [secondaryColor, setSecondaryColor] = useState('#ffffff');
  
  return (
    <SettingsContainer>
      <ProfileSection>
        <ProfileInfo>
          <ProfileAvatar>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#757575"/>
            </svg>
          </ProfileAvatar>
          <ProfileDetails>
            <ProfileName>User123</ProfileName>
            <ProfileEmail>Manage your preferences</ProfileEmail>
          </ProfileDetails>
        </ProfileInfo>
        <ProfileActions>
          <ProfileButton primary>Upload</ProfileButton>
          <ProfileButton>Edit Profile</ProfileButton>
        </ProfileActions>
      </ProfileSection>
      
      <ThemesSection>
        <SectionTitle>Themes & Customization</SectionTitle>
        <ThemeDescription>Customize the look and feel of Task Manager 2.0</ThemeDescription>
        
        <ThemeOptions>
          <ThemeCard>
            <ThemeIcon bgColor="#1a237e">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48z" fill="white"/>
                <path d="M12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" fill="white"/>
              </svg>
            </ThemeIcon>
            <ThemeDetails>
              <ThemeTitle>Dark Mode</ThemeTitle>
              <ThemeSubtitle>Switch to a darker theme for night viewing and reduced eye strain</ThemeSubtitle>
            </ThemeDetails>
          </ThemeCard>
          
          <ThemeCard>
            <ThemeIcon bgColor="#ffeb3b">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48z" fill="#333"/>
                <path d="M12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" fill="#333"/>
              </svg>
            </ThemeIcon>
            <ThemeDetails>
              <ThemeTitle>Light Mode</ThemeTitle>
              <ThemeSubtitle>Use the standard theme for ease of reading</ThemeSubtitle>
            </ThemeDetails>
          </ThemeCard>
        </ThemeOptions>
        
        <CustomThemeSection>
          <ThemeTitle>Custom Theme Selection</ThemeTitle>
          <ThemeSubtitle>Choose colors and fonts that suit your preferences</ThemeSubtitle>
        </CustomThemeSection>
      </ThemesSection>
      
      <ThemeSettingsSection>
        <SectionTitle>Theme Settings</SectionTitle>
        <ThemeDescription>Customize your theme colors</ThemeDescription>
        
        <ColorPickersContainer>
          <ColorPickerGroup>
            <ColorPickerLabel>Primary Color</ColorPickerLabel>
            <ColorPickerDescription>Used for buttons and important elements</ColorPickerDescription>
            <ColorPickerInput 
              type="color" 
              value={primaryColor} 
              onChange={(e) => setPrimaryColor(e.target.value)} 
            />
          </ColorPickerGroup>
          
          <ColorPickerGroup>
            <ColorPickerLabel>Secondary Color</ColorPickerLabel>
            <ColorPickerDescription>Used for backgrounds and subtle elements</ColorPickerDescription>
            <ColorPickerInput 
              type="color" 
              value={secondaryColor} 
              onChange={(e) => setSecondaryColor(e.target.value)} 
            />
          </ColorPickerGroup>
        </ColorPickersContainer>
        
        <ButtonsContainer>
          <Button>Reset to Defaults</Button>
          <Button primary>Save Theme</Button>
        </ButtonsContainer>
      </ThemeSettingsSection>
    </SettingsContainer>
  );
};

export default Settings;
