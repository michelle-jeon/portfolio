import './Header.css'

type HeaderProps = {
  onNavChange: (nav:string)=>void;
  selectedNav:string;
}

export default function Header({onNavChange,selectedNav}:HeaderProps){
  const navigations = [
    {name:'HOME'},{name:'WORK'},{name:'TOY'},{name:'CONTACT'}
  ]
  return (
    <div className="header">
      <h1 className="styled_font">
        MIKYEONG JEON
      </h1>
      <div className='nav_bar'>
        {navigations.map((nav)=>(
          <div 
            className="nav" 
            key={nav.name}
            onClick={()=>onNavChange(nav.name)}
          >
            {nav.name}
          </div>
        ))}
      </div>
    </div>
  );
};