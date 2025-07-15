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
  border-radius:30px;
`;

export const PreviewMask = styled.img`
  position:absolute;
  bottom:0;
  right:0;
`

export const DescriptionContainer = styled.div`
  flex:1;
`
