import {BlurBackground, CardContainer, DescriptionContainer, DetailPageArrow, FeatureList, MainBackground, PreviewContainer, PreviewMask} from './HighlightCard.styles'
import { GoArrowRight } from "react-icons/go";

type HighlightCardProps = {
  title: string;
  period: string;
  contribution: string;
  features: string[];
  background: string;  // 이미지 optional
  backColor?: string;   // 색상 optional
}

export default function HightlightCard ({title,period,contribution,features,background,backColor}:HighlightCardProps) {
  return ( 
    <CardContainer>
      <PreviewContainer >
        <BlurBackground
          background={background}
          backColor={backColor}
        />
        <MainBackground src={background}></MainBackground>
        {/* <PreviewMask src="/assets/home/mask/workSectionMaskHid.svg" alt="" /> */}
        <DetailPageArrow>
          <GoArrowRight />
        </DetailPageArrow>
      </PreviewContainer>
      <DescriptionContainer>
        <h3 >{title}</h3>
        <p>기간 | {period}</p>
        <p>기여도 | {contribution}</p>
        <p>주요 기능</p>
        <FeatureList>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </FeatureList>
      </DescriptionContainer>
    </CardContainer>
  )
}