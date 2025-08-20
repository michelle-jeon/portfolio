import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  padding:200px 0 100px;
  background-color:#eee;
`;

export const ContainerInner = styled.div`
  max-width:800px;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex:1;
`;

export const Back = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-align:left;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const Meta = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #333;
`;

export const Apps = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #333;
`;

export const DescriptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  color: #000;
  flex:1;
`;

export const DescriptionItem = styled.div``;
