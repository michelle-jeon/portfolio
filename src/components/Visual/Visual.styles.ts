import styled from 'styled-components';

export const VisualWrapper = styled.div`
  height: 200vh;
  background-color: #666;
  align-items: center;
  justify-content: center;
  position:relative;
  // background-image: url("https://transparenttextures.com/patterns/always-grey.png");
  // background-repeat: repeat;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 150px);
  grid-template-rows: repeat(6, 150px);
  gap: 0;
  position: relative;
`;

interface GridItemProps {
  $row: number;
  $col: number;
  $colSpan: number;
  $color: string;
  $transform?:string;
  $scrollProgress?: number;
}

export const GridItem = styled.div<GridItemProps>`
  grid-row: ${props => props.$row};
  grid-column: ${props => props.$col} ;
  background-color: ${props => props.$color};
  transform: ${({ $color, $scrollProgress, $transform }) =>
  $color === '#00EF87'
    ? `translateY(${(-70 + 70 * ($scrollProgress ?? 0)).toFixed(1)}px)`
    : $transform || 'none'};
  transition: transform 0.1s linear;
  will-change: transform;
  border-radius: 30px;
  display: flex;
  align-items: top;
  justify-content: center;
  font-size: 20px;
  font-weight: medium;
  padding:15px;
  color: white;
  text-align: right;
  line-height:20px;
  div {
    white-space: pre-line;
  }
`;