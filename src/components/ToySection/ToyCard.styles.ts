import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  padding: 30px 0;
`;

export const CardLinkBox = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const CardBox = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  &:hover img {
    transform: scale(1.0);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  transform: scale(1.05);
`;

export const CardBottom = styled.div`
position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 15px 20px;
  box-sizing: border-box;
  z-index: 2;
  display:flex;
`

export const CardTextBox = styled.div`
  
`;

export const CardTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const CardDesc = styled.div`
  font-size: 14px;
  color: #444;
  margin-bottom: 10px;
`;

export const CardSkills = styled.div`
  display: flex;
  align-items:center;
  justify-content:flex-end;
  gap: 8px;
  flex:1;
  width:100%;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const SkillBadge = styled.span`
display:flex;
align-items:center;
  font-size: 15px;
  background: #eee;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 500;
`;
