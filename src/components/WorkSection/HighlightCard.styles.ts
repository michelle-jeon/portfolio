import styled from "styled-components";

export const CardContainer = styled.div`
  width:100%;
  padding:30px 0;
  display:flex;
`

export const PreviewContainer = styled.div`
  position: relative;
  flex:1;
  height: 300px;
  background-color: pink;

  -webkit-mask-image: url('/assets/images/workSectionMaskShow.svg');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: 100% 100%;

  mask-image: url('/assets/images/workSectionMaskShow.svg');
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 100% 100%;

`;

export const DescriptionContainer = styled.div`
  flex:1;
`
