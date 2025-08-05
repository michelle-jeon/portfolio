import { HeaderWrapper, NavBar, NavItem, Title } from './Header.styles';

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
    <HeaderWrapper>
      {/* <Title className="styled_font">MIGYUL</Title> */}
      <p className='w-12 pt-4'><img src="/assets/logo.svg" alt="logo" /></p>
      <NavBar>
        {navigations.map((nav) => (
          <NavItem
            key={nav.name}
            onClick={() => onNavChange(nav.name)}
          >
            {nav.name}
          </NavItem>
        ))}
      </NavBar>
    </HeaderWrapper>
  );
}