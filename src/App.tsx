import { useEffect, useRef, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Visual from './components/Visual/Visual';
import Footer from './components/Footer/Footer';


export default function App() {
  const [selectedNav,setSelectedNav] = useState('Home');

  const homeRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);
  const toyRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(()=>{
    const refs: Record<string, React.RefObject<HTMLElement | null>> = {
      HOME: homeRef,
      WORK: workRef,
      TOY: toyRef,
      CONTACT: contactRef
    };

    const targetRef = refs[selectedNav];
    targetRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[selectedNav])

  return (
    <div>
      <Header 
        selectedNav={selectedNav}
        onNavChange={setSelectedNav}
      />
      <section className=''>
        <Visual />
      </section>
      {/* about */}
      <section>
        <div className="inner">
          blabla
        </div>
      </section>

      {/* WORK */}
      <section ref={workRef}>

      </section>

      {/* TOY */}
      <section ref={toyRef}>

      </section>

      {/* CONTACT */}
      <section ref={contactRef}>
        <Footer  />
      </section>
    </div>
  );
}
