import { useNavigate } from 'react-router-dom';
import {BlurBackground, CardContainer, DescriptionContainer, DetailPageArrow, FeatureList, MainBackground, PreviewContainer, PreviewMask} from './HighlightCard.styles'
import { GoArrowRight } from "react-icons/go";

type HighlightCardProps = {
  title: string;
  period: string;
  contribution: string;
  features: string[];
  background: string;
  backColor?: string;
  id:string;
}

export default function HightlightCard ({title,period,contribution,features,background,backColor,id}:HighlightCardProps) {
  const navigate=useNavigate();

  return ( 
    <CardContainer>
      <PreviewContainer 
        onClick={() => navigate(`/work/${id}`)}
      >
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
        <p><span className='font-bold'>기간 |</span> {period}</p>
        <p><span className='font-bold'>기여도 |</span> {contribution}</p>
        <p className='font-bold'>주요 기능</p>
        <FeatureList>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </FeatureList>
      </DescriptionContainer>
    </CardContainer>
  )
}