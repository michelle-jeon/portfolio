import { HeaderWrapper, NavBar, NavItem, Title } from './Header.styles';

type HeaderProps = {
  onNavChange: (nav: string) => void;
  selectedNav: string;
};

export default function Header({ onNavChange, selectedNav }: HeaderProps) {
  const navigations = [
    { name: 'HOME' },
    { name: 'WORK' },
    { name: 'TOY' },
    { name: 'CONTACT' },
  ];

  return (
    <HeaderWrapper>
      <Title className="styled_font">MIKYEONG JEON</Title>
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