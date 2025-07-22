
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Root(){
  const [selectedNav,setSelectedNav] = useState('Home');
  const navigate = useNavigate();
  const location = useLocation();

  const homeRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);
  const toyRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const refs: Record<string, React.RefObject<HTMLElement | null>> = {
      HOME: homeRef,
      WORK: workRef,
      TOY: toyRef,
      CONTACT: contactRef,
    };

    const targetRef = refs[selectedNav];
    targetRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedNav, location.pathname]);

  const handleNavChange = (nav: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => setSelectedNav(nav), 0);
    } else {
      setSelectedNav(nav);
    }
  };
  return(
    <div>
      <Header
        selectedNav={selectedNav}
        onNavChange={handleNavChange}
      />
      <Outlet 
        context={{
          homeRef,
          workRef,
          toyRef,
        }}
      />
      <section ref={contactRef}>
        <Footer />
      </section>
    </div>
  )
}