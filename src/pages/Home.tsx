import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';
import Visual from '../components/Visual/Visual';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import HightlightCard from '@/components/WorkSection/HighlightCard';

const SectionTitle = styled.div`
  font-family: 'Sofachrome Rg', sans-serif;
  font-size:48px;
`

export default function Home(){
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
      <section className='visualSection' ref={homeRef}>
        <Visual />
      </section>
      {/* about */}
      <section>
        <div className="sectionInner">
          
        </div>
      </section>

      {/* WORK */}
      <section ref={workRef}>
        <div className="sectionInner">
          <SectionTitle className='color_neonGreen'>WORK</SectionTitle>
          <p className=''>널리소프트 2023.04 - 현재</p>
          <HightlightCard></HightlightCard>
        </div>
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