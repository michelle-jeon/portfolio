import * as S from "./WorkDetailLayout.styles";
import WorkDetailHeader from "./WorkDetailHeader";
import WorkSteps from "./WorkSteps";
import WorkDetailPhoneMockup from "./WorkDetailPhoneMockup";

type StepItemType = {
  title: string;
  detail: string;
};

type StepSection = {
  sectionTitle: string;
  items: StepItemType[];
};

type Props = {
  title: string;
  period: string;
  contribution: string;
  apps: string[];
  description: string[];
  steps: StepSection[];
  gif: string;
  onPrev?: () => void;
};

export default function WorkDetailLayout({
  title,
  period,
  contribution,
  apps,
  description,
  steps,
  gif,
  onPrev
}: Props) {
  return (
    <S.Container>
      <WorkDetailHeader
        title={title}
        period={period}
        contribution={contribution}
        apps={apps}
        description={description}
        onPrev={onPrev}
      />
      <S.Content>
        <WorkSteps steps={steps} />
        <WorkDetailPhoneMockup gif={gif} />
      </S.Content>
    </S.Container>
  );
}
