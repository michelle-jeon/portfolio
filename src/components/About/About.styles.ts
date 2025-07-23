import styled from "styled-components";

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px 0;
  gap: 50px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoBox = styled.div`
  flex: 1;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const GrayButton = styled.button`
  padding: 5px 10px;
  background-color: #eee;
  border: none;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 14px;
  gap: 8px;
`;

export const Label = styled.div`
  width: 60px;
  font-weight: 600;
  flex-shrink: 0;
`;

export const Value = styled.div`
  color: #333;
  font-weight: 400;
   width: 240px;
`;

export const DateText = styled.div`
  font-size: 12px;
  color: #999;
  min-width: 90px;
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SkillItem = styled.div`
  width: 32px;
  height: 32px;
  background-color: #eee;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const PhotoWrapper = styled.div`
  width: 180px;
  height: 280px;
  position: relative;
  flex-shrink: 0;
`;

export const Circle = styled.div`
  width: 160px;
  height: 160px;
  background-color: #aaffdd;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  left: -40px;
  z-index: 1;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 2;
`;
