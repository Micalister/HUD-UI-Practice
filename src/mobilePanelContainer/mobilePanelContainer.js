import './mobilePanelContainer.css'
import { useState } from 'react';

import MobilePanel from '../mobilePanel/mobilePanel.js';
import MobileAlister from '../mobileAlister/mobileAlister.js';
import MobilePanelActive from '../mobilePanelActive/mobilePanelActive.js';

export default function MobilePanelContainer() {

    /* This container manages the state and interactions between the mobile panels.
    The MobileAlister passes the logic of the click up to the parent component.
    then it passes the classes that hold the classes to change in and out for the components
    need to rethink the animation design as I redo the keyframes :3
    also clean up those warnnings caus thats gross
    */
   
    const [isActive, setIsActive] = useState(false);

    const MobileAlisterClick = () => {
        setIsActive(!isActive);
    }

    const MobilePanelActiveClass = isActive ? 'class1' : 'class2';
    const MobilePanelInactiveClass = isActive ? 'class2' : 'class1';
    
    return (
        <div className="mobile-panel-container">
            <MobileAlister MobileAlisterClick={MobileAlisterClick} />
            <MobilePanel MobilePanelActiveClass={MobilePanelActiveClass} />
            <MobilePanelActive MobilePanelInactiveClass={MobilePanelInactiveClass} />
        </div>
    );
}