import Visual from '../components/Visual/Visual';
import styled from 'styled-components';
import HightlightCard from '@/components/WorkSection/HighlightCard';
import ToyCard from '@/components/ToySection/ToyCard';
import { useOutletContext } from 'react-router-dom';
import About from '@/components/About/About';
import SummaryCard from '@/components/WorkSection/SummaryCard';
import { useEffect } from 'react';

const SectionTitle = styled.div`
  font-family: 'Sofachrome Rg', sans-serif;
  font-size:36px;
  padding-top:50px;
`

export default function Home(){
  const { homeRef, careerRef, personalRef } =
    useOutletContext<{
      homeRef: React.RefObject<HTMLElement>;
      careerRef: React.RefObject<HTMLElement>;
      personalRef: React.RefObject<HTMLElement>;
    }>();

    useEffect(() => {
      const preloadImages = [
        "/assets/work-detail/workDetailSalaryDummy.jpg",
        "/assets/work-detail/workDetailLaborDummy.jpg",
        "/assets/work-detail/workDetailRmsDummy.jpg",
      ];

      preloadImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, []);

  return (
    <main>
      <section ref={homeRef}>
        <Visual />
      </section>
      {/* about */}
      <section className='Homesection about'>
        <div className="sectionInner">
          <About />
        </div>
      </section>

      {/* CAREER */}
      <section className='Homesection career' ref={careerRef}>
        <div className="sectionInner">
          <SectionTitle className='color_white'>Career</SectionTitle>
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
            id="salary"
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
            backColor='#FF7436'
            background='/assets/home/work/highlightScreenshotSlc.png'
            id='labor'
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
            backColor='#fff'
            background="/assets/home/work/highlightScreenshotRms.png"
            id='interview'
          ></HightlightCard>
          <div className="flex gap-6 w-full justify-between pt-20 pb-20">
            <SummaryCard
              img="/assets/home/work/summaryScreenshotHomepage.png"
              title="홈페이지 리뉴얼"
              desc="반응형 UI 홈페이지 디자인 리뉴얼 퍼블리싱"
            />
            <SummaryCard
              img="/assets/home/work/summaryScreenshotChat.png"
              title="챗봇 리뉴얼"
              desc="앱, 홈페이지 챗봇 리뉴얼 및 리팩토링"
            />
            <SummaryCard
              img="/assets/home/work/summaryScreenshotCxem.png"
              title="CX 어드민 개선"
              desc="페이지네이션 추가 및 검색 필터 최적화로 어드민 과부하 개선 로딩 시간 91퍼센트 감소"
            />
          </div>
        </div>
      </section>

      {/* PERSONAL */}
      <section className='Homesection personal' ref={personalRef}>
        <div className="sectionInner">
          <SectionTitle className='color_mypink'>Personal</SectionTitle>
          <ToyCard
            title="얼마세우"
            description="세후 급여 계산기 : 프리랜서, 상용직, 일용직"
            skills={['React', 'Typescript', 'Styled Components', 'Tailwind']}
            image="/assets/home/toy/shrimply-calc-pay.png"
            link="https://shrimply-calc-pay.vercel.app/"
          />

          <ToyCard
            title="신입 포트폴리오"
            description="gsap 등을 이용한 인터렉티브 UI/UX, 클론 코딩, 교육 이수 과정"
            skills={['HTML', 'Javascript', 'CSS']}
            image="/assets/home/toy/publisher-portfolio.png"
            link="http://jeonmk.dothome.co.kr/portfolio/index.html"
          />
        </div>
      </section>
    </main>
  );
}