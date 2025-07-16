import {CardContainer, DescriptionContainer, PreviewContainer, PreviewMask} from './HighlightCard.styles'

export default function HightlightCard () {
  return (
    <CardContainer>
      <PreviewContainer>
        <PreviewMask src="/assets/images/workSectionMask.svg" alt="" />
      </PreviewContainer>
      <DescriptionContainer>
        <p>급여</p>
      </DescriptionContainer>
    </CardContainer>
  )
}