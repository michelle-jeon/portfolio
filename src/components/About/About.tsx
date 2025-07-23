import {
  AboutWrapper,
  InfoBox,
  Name,
  ButtonGroup,
  GrayButton,
  Row,
  Label,
  Value,
  DateText,
  SkillList,
  SkillItem,
  PhotoWrapper,
  Circle,
  Photo,
} from "./About.styles";

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
    <AboutWrapper>
      <InfoBox>
        <Name>전미경 MIKYEONG JEON</Name>
        <ButtonGroup>
          <GrayButton>이력서</GrayButton>
          <GrayButton>github</GrayButton>
          <GrayButton>블로그</GrayButton>
        </ButtonGroup>

        <Row>
          <Label>졸업</Label>
          <Value>숙명여자대학교 영문학사</Value>
          <DateText></DateText>
        </Row>
        <Row>
          <Label>수료</Label>
          <Value>
            이젠아카데미 프론트엔드 개발자
          </Value>
          <DateText>2022.11 - 2023.04</DateText>
        </Row>
        <Row>
          <Label>근무</Label>
          <Value>
            (주)널리소프트 개발팀 사원
          </Value>
          <DateText>2023.04 - 현재</DateText>
        </Row>
        <Row>
          <Label>기술</Label>
          <SkillList>
            <SkillItem><FaReact /></SkillItem>
            <SkillItem><SiTypescript /></SkillItem>
            <SkillItem><SiJavascript /></SkillItem>
            <SkillItem><SiCss3 /></SkillItem>
            <SkillItem><SiHtml5 /></SkillItem>
            <SkillItem><FaGitAlt /></SkillItem>
            <SkillItem><FaSun /></SkillItem>
            <SkillItem><FaFigma /></SkillItem>
            <SkillItem><SiVercel /></SkillItem>
          </SkillList>
        </Row>
      </InfoBox>

      <PhotoWrapper>
        <Circle />
        <Photo src="/assets/home/about/profile.png" alt="전미경 프로필" />
      </PhotoWrapper>
    </AboutWrapper>
  );
}
