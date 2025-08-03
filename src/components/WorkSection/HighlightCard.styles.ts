import styled from "styled-components";

export const CardContainer = styled.div`
  width:100%;
  padding:30px 0;
  display:flex;
`

export const PreviewContainer = styled.div`
  position: relative;
  flex: 1;
  height: 300px;
  border-radius: 30px 30px 20px 30px;
  cursor: pointer;
  overflow: hidden;
`;

interface BlurBackgroundProps {
  background: string;
  backColor?: string;
}

export const BlurBackground = styled.div<BlurBackgroundProps>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: ${({ backColor, background }) =>
    backColor
      ? backColor
      : `url(${background}) center/cover no-repeat`};
   ${({ backColor }) =>
    !backColor &&
    `
      filter: blur(7px) brightness(0.4);
    `}

  z-index: 0;
  overflow: hidden;
`;

export const MainBackground = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
`;


export const PreviewMask = styled.img`
  position:absolute;
  z-index:2;
  bottom:-1px;
  right:-1px;
`

export const DetailPageArrow = styled.span`
  width: 64px;
  height: 64px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #49DD9D;
  border-radius: 20px;
z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: transform 0.3s ease;

  &:hover {
  }

  svg {
    width: 32px;
    height: 32px;
    color: #fff; /* 화살표는 흰색으로 */
    transition: transform 0.3s ease;
    transform: rotate(-135deg);
  }

  &:hover svg {
    transform: rotate(-45deg);
  }
`;


export const DescriptionContainer = styled.div`
  flex:1;
  padding-left:30px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    margin: 4px 0;
  }
`

 export const FeatureList = styled.ul`
  margin: 8px 0 0 0;
  padding-left: 20px;

  li {
    list-style-type: disc;
    margin-bottom: 4px;
  }
`;