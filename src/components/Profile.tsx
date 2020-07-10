import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Profile = (props: any) => {
  const theme = useContext(ThemeContext);
  
  return (
    <div style={{ display: `flex`,
    backgroundColor: theme.backgroundAlt, 
    color: theme.foreground,
    fontSize: `28px`,
    lineHeight: `12px`, 
    marginRight: `15px`,
    marginLeft: `15px`,
    marginBottom: `20px`,
    padding: `14px`, 
    borderRadius: `60px`,
    alignContent: `center`,
    alignItems: `center`,
    cursor: `pointer`}}
    onClick={() => { Object.assign(document.createElement('a'), { target: '_blank', href: props.profile.url}).click();}}
    >
     <i style={{color: theme.foreground,}} className={`${props.profile.icon}`}></i>
    </div>
  );
}

export default Profile;
