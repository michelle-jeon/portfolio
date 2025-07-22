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
          <HightlightCard
            title="급여 서비스"
            period="2024.08 - 2025.06"
            contribution="Frontend 개발 100%"
            features={[
              '직원 등록, 급여 지급 등 화면 전체 개발',
              '각 단계별 데이터 검증 및 입력 편의성 개선',
              'API 연동 및 예외 처리',
              'CBT 결과 반영 화면 흐름 및 UX 개선'
            ]}
            backColor="#fff"
            background="/assets/home/work/highlightScreenshotSslc.png"
          ></HightlightCard>
          <HightlightCard
            title="인건비 서비스"
            period="2023.07 - 2025.07"
            contribution="Frontend 유지보수 및 개선 100%, 서비스 운영"
            features={[
              '고객 피드백 기반으로 화면 사용성 개선',
              '신고 테스트 기능 개발',
              '사용자 설문 수집',
              '신고 효율 증대를 위한 UI 개선'
            ]}
            backColor='#EB6225'
            background='/assets/home/work/highlightScreenshotSlc.png'
          ></HightlightCard>
          <HightlightCard
            title="면접자 관리 시스템"
            period="2023.06"
            contribution="Frontend 초기 개발 100%"
            features={[
              '코딩테스트 예약 페이지 개발',
              '전용 어드민 제작',
              'UI 및 기능 개선',
              '보안 기능 확대'
            ]}
            background="/assets/home/work/highlightScreenshotRms.jpg"
          ></HightlightCard>
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