import * as S from "./WorkDetailHeader.styles";

type Props = {
  title: string;
  period: string;
  contribution: string;
  apps: string[];
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
    <S.Container>
      <S.ContainerInner>
      <S.Left>
        <S.Back>{"← Prev"}</S.Back>
        <S.Title>{title}</S.Title>
        <S.Meta>
          <span>{contribution}</span>
          <span>{period}</span>
        </S.Meta>
        <S.Apps>
          {apps.map((app, i) => (
            <span key={i}>{app}</span>
          ))}
        </S.Apps>
      </S.Left>
      <S.DescriptionList>
        {description.map((line, i) => (
          <S.DescriptionItem key={i}>{line}</S.DescriptionItem>
        ))}
      </S.DescriptionList>
      </S.ContainerInner>
    </S.Container>
  );
}
