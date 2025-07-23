import {
  CardBox,
  CardContainer,
  CardTitle,
  CardDesc,
  CardSkills,
  SkillBadge,
  CardLinkBox,
  CardImage,
  CardTextBox,
  CardBottom,
} from "./ToyCard.styles";

interface ToyCardProps {
  title: string;
  description: string;
  skills: string[];
  image: string;
  link: string;
}

export default function ToyCard({ title, description, skills, image, link }: ToyCardProps) {
  return (
    <CardContainer>
      <CardLinkBox href={link} target="_blank" rel="noopener noreferrer">
        <CardBox>
          <CardImage src={image} alt={title} />
          <CardBottom>
            <CardTextBox>
              <CardTitle>{title}</CardTitle>
              <CardDesc>{description}</CardDesc>
            </CardTextBox>
            <CardSkills>
              {skills.map((skill, idx) => (
                <SkillBadge key={idx}>{skill}</SkillBadge>
              ))}
            </CardSkills>
          </CardBottom>
        </CardBox>
      </CardLinkBox>
    </CardContainer>
  );
}
