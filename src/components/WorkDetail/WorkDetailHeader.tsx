import {
  Container,
  Left,
  Back,
  Title,
  Meta,
  Apps,
  DescriptionList,
  DescriptionItem,
  ContainerInner,
} from "./WorkDetailHeader.styles";

type Props = {
  title: string;
  period: string;
  contribution: string;
  apps: string[];          // 예: ["하이브리드 웹앱", "웹 어드민"]
  description: string[];
};

export default function WorkDetailHeader({
  title,
  period,
  contribution,
  apps,
  description,
}: Props) {
  return (
    <Container>
      <ContainerInner>
      <Left>
        <Back>{"← Prev"}</Back>
        <Title>{title}</Title>
        <Meta>
          <span>{contribution}</span>
          <span>{period}</span>
        </Meta>
        <Apps>
          {apps.map((app, i) => (
            <span key={i}>{app}</span>
          ))}
        </Apps>
      </Left>
      <DescriptionList>
        {description.map((line, i) => (
          <DescriptionItem key={i}>{line}</DescriptionItem>
        ))}
      </DescriptionList>
      </ContainerInner>
    </Container>
  );
}
