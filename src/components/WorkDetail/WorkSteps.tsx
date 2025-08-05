import * as S from "./WorkSteps.styles";

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
    <S.Steps>
      {steps.map((section, i) => (
        <S.Section key={i}>
          <S.SectionTitle>{section.sectionTitle}</S.SectionTitle>
          {section.items.map((item, j) => (
            <S.StepItem key={j}>
              <S.StepTitle>{item.title}</S.StepTitle>
              <S.StepDetail>{item.detail}</S.StepDetail>
            </S.StepItem>
          ))}
        </S.Section>
      ))}
    </S.Steps>
  );
}
