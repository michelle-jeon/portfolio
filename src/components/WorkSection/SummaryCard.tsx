import { CardBox, CardImg, CardText, CardTitle, CardDesc } from "./SummaryCard.styles";

type SummaryCardProps = {
  img: string;
  title: string;
  desc: string;
};

export default function SummaryCard({ img, title, desc }: SummaryCardProps) {
  return (
    <CardBox>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
      </CardText>
    </CardBox>
  );
}
