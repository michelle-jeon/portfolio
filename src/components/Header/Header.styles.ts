import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index:9999;
  background-color: #f8f8f8;
`;

export const Title = styled.h1`
  color: #49DD9D;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  color: #3D3D3D;
`;

export const NavItem = styled.div`
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #49DD9D;
  }
`;
