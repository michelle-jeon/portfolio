// Footer.styles.ts

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #e5e5e5;
  padding: 60px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactSection = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-family: 'Sofachrome Rg', sans-serif;
  font-size: 48px;
  color: #333;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .email {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 6px;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: #555;
    font-weight: 500;
  }
`;

export const Copyright = styled.div`
  font-size: 12px;
  color: #666;
`;
