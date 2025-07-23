import {
  Steps,
  Section,
  SectionTitle,
  StepItem,
  StepTitle,
  StepDetail,
} from "./WorkSteps.styles";

type StepItemType = {
  title: string;
  detail: string;
};

type StepSection = {
  sectionTitle: string;
  items: StepItemType[];
};

type Props = {
  steps: StepSection[];
};

export default function WorkSteps({ steps }: Props) {
  return (
    <Steps>
      {steps.map((section, i) => (
        <Section key={i}>
          <SectionTitle>{section.sectionTitle}</SectionTitle>
          {section.items.map((item, j) => (
            <StepItem key={j}>
              <StepTitle>{item.title}</StepTitle>
              <StepDetail>{item.detail}</StepDetail>
            </StepItem>
          ))}
        </Section>
      ))}
    </Steps>
  );
}
