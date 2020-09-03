/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Expertise = (props: any) => {
  const theme = useContext(ThemeContext);
  
 const isSelected = () => {
   return props.selectedExpertiseDescription === props.expertise?.description;
 }

  return (
    <button css={css`display: flex; 
                  background-color: ${isSelected() ? theme.backgroundAltActive : theme.backgroundAlt}; 
                  font-weight: 200;
                  font-size: 14px;
                  line-height: 14px; 
                  font-weight: ${isSelected() ? 400 : 400};
                  letter-spacing: 1px;
                  margin-right: 12px;
                  margin-bottom: 12px;
                  padding: 10px 14px;
                  border: none;
                  border-right: 2px solid ${isSelected() ? theme.backgroundAltBorderActive : theme.backgroundAltBorder};
                  border-bottom: 2px solid ${isSelected() ? theme.backgroundAltBorderActive : theme.backgroundAltBorder};
                  border-radius: 8px;
                  cursor: pointer;
                  &:hover {
                    background-color: ${theme.backgroundAltActive};
                  }`}
                  onClick={() => { props.setSelectedExpertiseDescription(props.expertise?.description); }}>
      <span css={css`background-color: transparent; 
                     color: ${theme.foreground};
                     `}>
      {props.expertise?.name}
      </span>
    </button>
  );
}

export default Expertise;
