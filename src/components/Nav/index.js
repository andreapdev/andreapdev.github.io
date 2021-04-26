import {React, useState} from 'react';

import StyledNav from './style';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
const barsIcon = <FontAwesomeIcon icon={faBars} />
const closeIcon = <FontAwesomeIcon icon={faTimes} />

const Nav = () => {
    const [isNavOpen, setisNavOpen] = useState(false);

    const toggleNav = () => {
        setisNavOpen(!isNavOpen);
        console.log(isNavOpen);
    }

    return (
        <>
            <StyledNav>
                <div id='navbar-open' onClick={toggleNav} className={isNavOpen? 'nav hideThis' : 'nav'}>
                    {barsIcon}
                </div>
                <div className={isNavOpen? 'nav' : 'nav hideThis'} onClick={toggleNav}>
                    <div id='navbar-close' >{closeIcon}</div>
                    <a href='#aboutme'>About Me</a>
                    <a href='#contact'>Contact</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#education'>Education</a>
                    
                </div>
            </StyledNav>
        </>
    );
}

export default Nav;