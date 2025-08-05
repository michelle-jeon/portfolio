import * as S from "./ToyCard.styles";

interface ToyCardProps {
  title: string;
  description: string;
  skills: string[];
  image: string;
  link: string;
}

export default function ToyCard({ title, description, skills, image, link }: ToyCardProps) {
  return (
    <S.CardContainer>
      <S.CardLinkBox href={link} target="_blank" rel="noopener noreferrer">
        <S.CardBox>
          <S.CardImage src={image} alt={title} />
          <S.CardBottom>
            <S.CardTextBox>
              <S.CardTitle>{title}</S.CardTitle>
              <S.CardDesc>{description}</S.CardDesc>
            </S.CardTextBox>
            <S.CardSkills>
              {skills.map((skill, idx) => (
                <S.SkillBadge key={idx}>{skill}</S.SkillBadge>
              ))}
            </S.CardSkills>
          </S.CardBottom>
        </S.CardBox>
      </S.CardLinkBox>
    </S.CardContainer>
  );
}
