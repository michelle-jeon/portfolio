import * as S from "./About.styles";

import {
  FaReact,
  FaGitAlt,
  FaSun,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiVercel,
} from "react-icons/si";

export default function About() {
  return (
    <S.AboutWrapper>
      <S.InfoBox>
        <S.Name>전미경 MIKYEONG JEON</S.Name>
        <S.ButtonGroup>
          {/* <GrayButton href="/assets/Jeon_Mikyeong_Resume.pdf" target="_blank" rel="noopener noreferrer">
            이력서
          </GrayButton> */}
          <S.GrayButton href="https://github.com/michelle-jeon" target="_blank" rel="noopener noreferrer">
            GitHub
          </S.GrayButton>
          <S.GrayButton href="https://tantail.tistory.com/" target="_blank" rel="noopener noreferrer">
            블로그
          </S.GrayButton>
        </S.ButtonGroup>

        <S.Row>
          <S.Label>졸업</S.Label>
          <S.Value>숙명여자대학교 영문학사</S.Value>
          <S.DateText></S.DateText>
        </S.Row>
        <S.Row>
          <S.Label>수료</S.Label>
          <S.Value>
            이젠아카데미 웹 퍼블리셔 프론트엔드
          </S.Value>
          <S.DateText>2022.11 - 2023.04</S.DateText>
        </S.Row>
        <S.Row>
          <S.Label>근무</S.Label>
          <S.Value>
            (주)널리소프트 개발팀 사원
          </S.Value>
          <S.DateText>2023.04 - 현재</S.DateText>
        </S.Row>
        <S.Row>
          <S.Label>기술</S.Label>
          <S.SkillList>
            <S.SkillItem><FaReact /></S.SkillItem>
            <S.SkillItem><SiTypescript /></S.SkillItem>
            <S.SkillItem><SiJavascript /></S.SkillItem>
            <S.SkillItem><SiCss3 /></S.SkillItem>
            <S.SkillItem><SiHtml5 /></S.SkillItem>
            <S.SkillItem><FaGitAlt /></S.SkillItem>
            <S.SkillItem><FaSun /></S.SkillItem>
            <S.SkillItem><FaFigma /></S.SkillItem>
            <S.SkillItem><SiVercel /></S.SkillItem>
          </S.SkillList>
        </S.Row>
      </S.InfoBox>

      <S.PhotoWrapper>
        <S.Circle />
        <S.Photo src="/assets/home/about/profile.png" alt="전미경 프로필" />
      </S.PhotoWrapper>
    </S.AboutWrapper>
  );
}
