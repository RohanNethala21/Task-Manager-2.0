import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: ${props => props.padding || '20px'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${props => props.marginBottom || '20px'};
  border: ${props => props.bordered ? `1px solid ${props.theme.colors.lightGray}` : 'none'};
  transition: all 0.2s ease-in-out;
  
  ${props => props.hoverable && `
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  `}
`;

const CardHeader = styled.div`
  margin-bottom: 15px;
  padding-bottom: ${props => props.divider ? '15px' : '0'};
  border-bottom: ${props => props.divider ? `1px solid ${props.theme.colors.lightGray}` : 'none'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const CardContent = styled.div``;

const CardFooter = styled.div`
  margin-top: 15px;
  padding-top: ${props => props.divider ? '15px' : '0'};
  border-top: ${props => props.divider ? `1px solid ${props.theme.colors.lightGray}` : 'none'};
  display: flex;
  justify-content: ${props => props.align || 'flex-end'};
`;

const Card = ({ 
  children, 
  title, 
  extra, 
  footer, 
  footerAlign,
  bordered, 
  hoverable, 
  padding,
  marginBottom,
  headerDivider,
  footerDivider
}) => {
  return (
    <CardContainer 
      bordered={bordered} 
      hoverable={hoverable} 
      padding={padding}
      marginBottom={marginBottom}
    >
      {(title || extra) && (
        <CardHeader divider={headerDivider}>
          {title && <CardTitle>{title}</CardTitle>}
          {extra}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && (
        <CardFooter divider={footerDivider} align={footerAlign}>
          {footer}
        </CardFooter>
      )}
    </CardContainer>
  );
};

export default Card;
