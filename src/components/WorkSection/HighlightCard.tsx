import {CardContainer, DescriptionContainer, FeatureList, PreviewContainer, PreviewMask} from './HighlightCard.styles'

type HighlightCardProps = {
  title:string;
  period:string;
  contribution:string;
  features:string[];
}

export default function HightlightCard ({title,period,contribution,features}:HighlightCardProps) {
  return (
    <CardContainer>
      <PreviewContainer>
        <PreviewMask src="/assets/images/workSectionMask.svg" alt="" />
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