import { Container, Content } from "./WorkDetailLayout.styles";
import WorkDetailHeader from "./WorkDetailHeader";
import WorkSteps from "./WorkSteps";
import WorkDetailPhoneMockup from "./WorkDetailPhoneMockup";

type Step = {
  title: string;
  detail: string;
};

type Props = {
  title: string;
  period: string;
  contribution: string;
  apps: string[];
  description: string[];
  steps: Step[];
  gif: string;
};

export default function WorkDetailLayout({
  title, period, contribution, apps, description, steps, gif,
}: Props) {
  return (
    <Container>
      <WorkDetailHeader
        title={title}
        period={period}
        contribution={contribution}
        apps={apps}
        description={description}
      />
      <Content>
        <WorkSteps steps={steps} />
        <WorkDetailPhoneMockup gif={gif} />
      </Content>
    </Container>
  );
}
