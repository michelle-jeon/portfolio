import * as S from './Header.styles';

type HeaderProps = {
  onNavChange: (nav: string) => void;
  selectedNav: string;
};

export default function Header({ onNavChange }: HeaderProps) {
  const navigations = [
    { name: 'HOME' },
    { name: 'CAREER' },
    { name: 'PERSONAL' },
    { name: 'CONTACT' },
  ];

  return (
    <S.HeaderWrapper>
      {/* <Title className="styled_font">MIGYUL</Title> */}
      <p className='w-12 pt-4'><img src="/assets/logo.svg" alt="logo" /></p>
      <S.NavBar>
        {navigations.map((nav) => (
          <S.NavItem
            key={nav.name}
            onClick={() => onNavChange(nav.name)}
          >
            {nav.name}
          </S.NavItem>
        ))}
      </S.NavBar>
    </S.HeaderWrapper>
  );
}