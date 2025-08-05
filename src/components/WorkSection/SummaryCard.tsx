import * as S from "./SummaryCard.styles";

type SummaryCardProps = {
  img: string;
  title: string;
  desc: string;
};

export default function SummaryCard({ img, title, desc }: SummaryCardProps) {
  return (
    <S.CardBox>
      <S.CardImg src={img} alt={title} />
      <S.CardText>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDesc>{desc}</S.CardDesc>
      </S.CardText>
    </S.CardBox>
  );
}
