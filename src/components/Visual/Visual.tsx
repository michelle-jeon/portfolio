import { useEffect, useState } from 'react';
import { VisualWrapper, GridContainer, GridItem, StickyContainer, Updated } from './Visual.styles';

export default function Visual() {
  // 6x6 그리드에서 보이는 블록들만 정의 (1부터 시작)
  const blocks = [
    // 3행
    { row: 2, col: 3, color: '#00EF87'},
    { row: 2, col: 4, color: '#00EF87',text: 'SKILL:\rREACT\rTYPESCRIPT\rJAVASCRIPT' },
    { row: 2, col: 6, color: '#6BFFCB',text:'RESPONSIVE\rUSER-FRIEN\rDLY' ,transform:'rotate(90deg)'},
    
    // 4행
    { row: 3, col: 3, color: '#00EF87' },
    { row: 3, col: 4, color: '#FFA2B6' , text: 'IMPROVING\rLIVE\rSERVICE'},
    { row: 3, col: 5, color: '#FFA2B6' },
    { row: 3, col: 6, color: '#6BFFCB' },
    
    // 5행
    { row: 4, col: 1, color: '#A6C8B9', text: 'HARDWORK\rING' ,transform:'rotate(-90deg)'},
    { row: 4, col: 2, color: '#A6C8B9'},
    { row: 4, col: 3, color: '#00EF87'},
    { row: 4, col: 4, color: '#49DD9D' },
    { row: 4, col: 5, color: '#FFA2B6' },
    { row: 4, col: 6, color: '#6BFFCB' },

    //6행
    { row: 5, col: 1, color: '#A6C8B9'},
    { row: 5, col: 2, color: '#A6C8B9'},
    { row: 5, col: 3, color: '#49DD9D'},
    { row: 5, col: 4, color: '#49DD9D' },
    { row: 5, col: 5, color: '#49DD9D', text: 'COMMUNIC\rATION' },
    { row: 5, col: 6, color: '#6BFFCB' },
  ];

const [progress, setProgress] = useState(0);

 useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('visual');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;

      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        totalScroll
      );

      setProgress(scrolled / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <VisualWrapper id="visual">
      <StickyContainer>
        <GridContainer>
          {blocks.map((block, index) => (
            <GridItem
              key={index}
              $row={block.row}
              $col={block.col}
              $colSpan={1}
              $color={block.color}
              $transform={block.transform}
              $scrollProgress={progress}
            >
              {block.text && block.text.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </GridItem>
          ))}
        </GridContainer>
        <Updated>UPDATED 2025. 7. 23</Updated>
      </StickyContainer>
    </VisualWrapper>
  );
}