import * as S from "./Footer.styles";
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.ContactSection>
        <S.Title>CONTACT</S.Title>
        <S.ContactInfo>
          <a href="mailto:mkyng.jeon@gmail.com" className="email">
            <HiOutlineMail size={18} style={{ marginRight: '6px' }} />
            mkyng.jeon@gmail.com
          </a>
          <p>010-4936-6224</p>
        </S.ContactInfo>
      </S.ContactSection>
      <S.Copyright>
        ©2025 MikyeongJeon. All Rights Reserved.
      </S.Copyright>
    </S.FooterContainer>
  );
}
