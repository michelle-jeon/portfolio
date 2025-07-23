import styled from "styled-components";

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
`;

export const CardText = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 10px;
  text-align: center;
`;

export const CardBox = styled.div`
  flex: 1;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1/1;
  cursor: pointer;

  &:hover ${CardImg} {
    filter: brightness(0.4);
  }

  &:hover ${CardText} {
    opacity: 1;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const CardDesc = styled.p`
  font-size: 1rem;
  line-height: 1.2;
  word-break: keep-all;
`;
