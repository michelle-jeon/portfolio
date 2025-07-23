import { Steps, StepItem, StepTitle, StepDetail } from "./WorkSteps.styles";

type Step = {
  title: string;
  detail: string;
};

type Props = {
  steps: Step[];
};

export default function WorkSteps({ steps }: Props) {
  return (
    <Steps>
      {steps.map((step, i) => (
        <StepItem key={i}>
          <StepTitle>{step.title}</StepTitle>
          <StepDetail>{step.detail}</StepDetail>
        </StepItem>
      ))}
    </Steps>
  );
}
