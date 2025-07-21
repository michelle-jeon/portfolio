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
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
`;

export const BlurBackground = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  border-radius:30px;
  object-fit: cover;
  filter: blur(7px) brightness(0.4);
  z-index: 0;
  overflow:hidden;
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
  bottom:-1px;
  right:-1px;
`

export const DetailPageArrow = styled.span`
  width:94px;
  height:94px;
  position:absolute;
  bottom:0;
  right:0;
  background-color:#FFB9B9;
  border-radius:30px;
`

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