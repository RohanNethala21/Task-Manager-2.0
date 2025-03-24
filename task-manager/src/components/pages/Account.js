import React, { useState } from 'react';
import styled from 'styled-components';

const AccountContainer = styled.div`
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

const ProfileDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
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
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const SectionDescription = styled.p`
  color: ${props => props.theme.colors.darkGray};
  margin-bottom: 30px;
`;

const AccountSettingsSection = styled.div`
  margin-bottom: 40px;
`;

const SettingsForm = styled.form`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 30px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const RadioLabel = styled.label`
  font-weight: normal;
`;

const RemindersDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.darkGray};
  margin-top: 10px;
`;

const SaveButton = styled.button`
  padding: 12px 25px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #333;
  }
`;

const DangerZoneSection = styled.div`
  margin-bottom: 40px;
`;

const DangerZoneContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DangerZoneHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DangerIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff8e1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const DangerTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.warning};
`;

const DangerDescription = styled.p`
  color: ${props => props.theme.colors.darkGray};
  margin-bottom: 20px;
`;

const DangerActions = styled.div`
  display: flex;
  gap: 15px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.warning};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

const Account = () => {
  const [emailReminders, setEmailReminders] = useState('enabled');
  
  return (
    <AccountContainer>
      <ProfileSection>
        <ProfileInfo>
          <ProfileAvatar>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#757575"/>
            </svg>
          </ProfileAvatar>
          <ProfileDetails>
            <ProfileName>User's Name</ProfileName>
            <ProfileEmail>Premium User</ProfileEmail>
            <ProfileDescription>Manage your account and profile settings here.</ProfileDescription>
          </ProfileDetails>
        </ProfileInfo>
        <ProfileActions>
          <ProfileButton primary>Change Password</ProfileButton>
          <ProfileButton>Edit Profile</ProfileButton>
        </ProfileActions>
      </ProfileSection>
      
      <AccountSettingsSection>
        <SectionTitle>Account Settings</SectionTitle>
        <SectionDescription>Update your account settings here.</SectionDescription>
        
        <SettingsForm>
          <FormGroup>
            <FormLabel htmlFor="newPassword">New Password</FormLabel>
            <FormInput type="password" id="newPassword" placeholder="Enter new password" />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <FormInput type="password" id="confirmPassword" placeholder="Confirm new password" />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Email Reminders</FormLabel>
            <RadioGroup>
              <RadioOption>
                <RadioInput 
                  type="radio" 
                  id="enabled" 
                  name="emailReminders" 
                  value="enabled" 
                  checked={emailReminders === 'enabled'}
                  onChange={() => setEmailReminders('enabled')}
                />
                <RadioLabel htmlFor="enabled">Enabled</RadioLabel>
              </RadioOption>
              
              <RadioOption>
                <RadioInput 
                  type="radio" 
                  id="disabled" 
                  name="emailReminders" 
                  value="disabled" 
                  checked={emailReminders === 'disabled'}
                  onChange={() => setEmailReminders('disabled')}
                />
                <RadioLabel htmlFor="disabled">Disabled</RadioLabel>
              </RadioOption>
            </RadioGroup>
            <RemindersDescription>Receive email reminders for tasks</RemindersDescription>
          </FormGroup>
          
          <SaveButton type="button">Save Changes</SaveButton>
        </SettingsForm>
      </AccountSettingsSection>
      
      <DangerZoneSection>
        <SectionTitle>Danger Zone</SectionTitle>
        <DangerZoneContainer>
          <DangerZoneHeader>
            <DangerIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#FFC107"/>
              </svg>
            </DangerIcon>
            <DangerTitle>Delete Account</DangerTitle>
          </DangerZoneHeader>
          
          <DangerDescription>This action cannot be undone!</DangerDescription>
          
          <DangerActions>
            <CancelButton>Cancel</CancelButton>
            <DeleteButton>Delete My Account</DeleteButton>
          </DangerActions>
        </DangerZoneContainer>
      </DangerZoneSection>
    </AccountContainer>
  );
};

export default Account;
