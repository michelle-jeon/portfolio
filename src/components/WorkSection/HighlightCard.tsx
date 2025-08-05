import { useNavigate } from 'react-router-dom';
import * as S from './HighlightCard.styles'
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
    <S.CardContainer>
      <S.PreviewContainer 
        onClick={() => navigate(`/work/${id}`)}
      >
        <S.BlurBackground
          background={background}
          backColor={backColor}
        />
        <S.MainBackground src={background}></S.MainBackground>
        <S.PreviewMask src="/assets/home/mask/workSectionMaskHid.svg" alt="" />
        <S.DetailPageArrow>
          <GoArrowRight />
        </S.DetailPageArrow>
      </S.PreviewContainer>
      <S.DescriptionContainer>
        <h3 >{title}</h3>
        <p><span className='font-bold'>기간 |</span> {period}</p>
        <p><span className='font-bold'>기여도 |</span> {contribution}</p>
        <p className='font-bold'>주요 기능</p>
        <S.FeatureList>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </S.FeatureList>
      </S.DescriptionContainer>
    </S.CardContainer>
  )
}