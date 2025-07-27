import styled from "styled-components";

export const Phone = styled.div`
  width: 350px;
  height: 752px;
  border: 8px solid silver;
  border-radius: 30px;
  position: relative;
  background: #000;
`;

export const Screen = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 22px;
  background: #fff;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
