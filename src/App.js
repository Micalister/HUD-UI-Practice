import './App.css';
import './Keyframes.css';
import { useState } from 'react';

import WindowSizeHud from './windowHud/windowSizeHud.js';
import Button from './button/button.js';  
import GitHubButton from './gitHubButton/gitHubButton.js';
import LinkdinButton from './linkdinButton/linkdinButton.js';
import UpgradedButton from './upgradedButton/upgradedButton.js';
import CarouselButton from './carouselButton/carouselButton.js';
import LeftBorderPanel from './leftBorderPanel/leftBorderPanel.js';
import InputField from './inputFeild/inputField.js';
import InputMessageBox from './inputMessageBox/inputMessageBox.js';
import TopPanel from './topPanel/topPanel.js';
import MouseHud from './mouseHud/mouseHud.js';
import Alister from './alister/alister.js';
import BottomPanel from './bottomPanel/bottomPanel.js';
import RightBorderPanel from './rightBorderPanel/rightBorderPanel.js';
import TimeHud from './timeHud/timeHud.js';
import MobilePanelContainer from './mobilePanelContainer/mobilePanelContainer.js';
import ControlPanelHud from './controlPanelHud/controlPanelHud.js';
import PagePortfolio from './pagePortfolio/pagePortfolio.js';
import PageContact from './pageContact/pageContact.js';
import PageAboutMe from './pageAboutMe/pageAboutMe.js';
import BackgroundGrid from './backgroundGrid/backgroundGrid.js';

function App() {

  /*
  • update the github and lindin buttons hover animations to match the other animation
  • update the carousel button for the ending transition to not hide the text in the changing color
  */

  /* left from last update on buttons could be reused */
  const handleButtonClick = (label) => {
    
  };

  /* Handles the changes in the input field */
  const [inputValue, setInputValue] = useState("");

  const inputHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  /* Handles the changes in the message field */
  const [messageValue, setMessageValue] = useState("");

  const messageHandleChange = (event) => {
    setMessageValue(event.target.value);
  };

  /* Runs the mouseHud to track & update the mouse position */
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };


  /* ControlPanelHud logic to switch the content */

  const activePage = ['Portfolio', 'Contact', 'About Me'];

  /* set the state of the active index */
  const [pageIndex, setPageIndex] = useState(0);

  if (activePage[pageIndex] === 'Portfolio') {
    // Logic for portfolio page
    
  } else if (activePage[pageIndex] === 'Contact') {
    // Logic for contact page
    
  } else if (activePage[pageIndex] === 'About Me') {
    // Logic for about me page
    
  }
  

  return (
    <div className="App">
      <header className="App-header" onMouseMove={handleMouseMove}>
        <TopPanel />
        <MouseHud mousePosition={mousePosition} />
        <LeftBorderPanel />
        <WindowSizeHud />
        <BottomPanel />
        <Alister />
        <ControlPanelHud activePage={activePage} pageIndex={pageIndex} setPageIndex={setPageIndex} />
        <RightBorderPanel />
        <BackgroundGrid />
        {activePage[pageIndex] === 'Portfolio' && <PagePortfolio />}
        {activePage[pageIndex] === 'Contact' && <PageContact />}
        {activePage[pageIndex] === 'About Me' && <PageAboutMe />}
        <TimeHud />

        {/* testing all the svg elements and init set up 
          <Button label="Source Code" />
          <Button label="Design Process" />
          <Button label="Showcase" />
          <Button label="Submit" />
          <Button label="Resume" />
          <GitHubButton />
          <LinkdinButton />
          <UpgradedButton text="Launch" />
          <CarouselButton />
          <InputField placeholder="Placeholder Text" value={inputValue} onChange={inputHandleChange} />
          <InputMessageBox placeholder="Placeholder Text" value={messageValue} onChange={messageHandleChange} />
          <MobilePanelContainer />*/}
          
      </header>
    </div>
  );
}

export default App;
