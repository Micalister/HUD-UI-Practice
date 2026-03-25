import './windowHud.css';
import React, { useState, useEffect } from 'react';

function WindowSizeHud() {

  /* Window Size HUD Component !incomplete
       • displays the current width and height of the window
       * to complete:
         • re-design
  */

  //This code updates the width anf the height of the window 

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  // Height
  
  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  
  useEffect(() => {
    window.addEventListener('resize', updateWindowHeight);
    return () => {
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  return (

    <div className="WindowSizeHud" id="window-size-hud">

      <svg width="174.201" height="124.877" viewBox="0 0 174.201 124.877">

  <defs>
    <clipPath id="clip-path" >
    <rect /* height background panel */ id="Rectangle_132" data-name="Rectangle 132" width="69.944" height="56.697" transform="translate(123.551 16.426)" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <rect /* width background panel */ id="Rectangle_133" data-name="Rectangle 133" width="69.944" height="56.697" transform="translate(68.708 59.081)" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <rect /* 'X' background panel */ id="Rectangle_131" data-name="Rectangle 131" width="48.219" height="38.206" transform="translate(145.012 77.57)" fill="#2b47be"/>
    </clipPath>
  </defs>

  <g id="Group_253" data-name="Group 253" transform="translate(-27.377)" opacity="0.22">
    <g  id="Group_252" data-name="Group 252">
      <g id="Group_251" data-name="Group 251" clip-path="">
        <path  className="phase-five" id="Path_639" data-name="Path 639" d="M193.495,25.566V73.123H148.72l-25.169-19.8v-36.9h60.8Z" fill="#2b47be"/>
      </g>
    </g>
  </g>
  <g id="Group_256" data-name="Group 256" transform="translate(-27.377)" opacity="0.22">
    <g id="Group_255" data-name="Group 255">
      <g id="Group_254" data-name="Group 254" clip-path="">
        <path className="phase-five" id="Path_640" data-name="Path 640" d="M138.652,78.878v36.9H80.121L68.708,104.365V59.082h44.775Z" fill="#2b47be"/>
      </g>
    </g>
  </g>

  <path /* line between circle and panels */ className="phase-two" id="Path_641" data-name="Path 641" d="M145.011,78.42a.792.792,0,0,1-.5-.18L118.279,56.78a.8.8,0,0,1-.291-.615V15.124l-8.053-9.563H35.591a.8.8,0,0,1,0-1.59H110.3a.8.8,0,0,1,.608.283l8.478,10.068a.793.793,0,0,1,.187.512V55.788L145.515,77.01a.8.8,0,0,1-.5,1.41" transform="translate(-27.377)" fill="#2b47be"/>
  <path /* the circle */ className="phase-one" id="Path_642" data-name="Path 642" d="M32.146,0a4.768,4.768,0,1,0,4.769,4.768A4.766,4.766,0,0,0,32.146,0m0,7.492A2.726,2.726,0,1,1,34.87,4.768a2.723,2.723,0,0,1-2.724,2.724" transform="translate(-27.377)" fill="#2b47be"/>
  <path /* height panel border */  className="phase-four" id="Path_644" data-name="Path 644" d="M193.495,73.919H148.72a.788.788,0,0,1-.491-.171l-25.17-19.8a.794.794,0,0,1-.3-.625V16.427a.794.794,0,0,1,.794-.8h60.8a.794.794,0,0,1,.562.232L194.057,25a.8.8,0,0,1,.233.562V73.124a.8.8,0,0,1-.795.795m-44.5-1.59H192.7V25.9l-8.675-8.675h-59.68V52.936Z" transform="translate(-27.377)" fill="#2b47be"/>
  <path /* width panel border */ className="phase-four" id="Path_645" data-name="Path 645" d="M138.653,116.573H80.122a.794.794,0,0,1-.562-.232L68.146,104.927a.794.794,0,0,1-.232-.562V59.081a.793.793,0,0,1,.794-.794h44.775a.8.8,0,0,1,.491.17l25.17,19.8a.794.794,0,0,1,.3.625v36.9a.794.794,0,0,1-.794.794m-58.2-1.589h57.407V79.264l-24.65-19.388H69.5v44.16Z" transform="translate(-27.377)" fill="#2b47be"/>
  <path /* width panel bottom*/ className="phase-four" id="Path_648" data-name="Path 648" d="M138.652,111.587v4.191H80.121l-4.191-4.191Z" transform="translate(-27.377)" fill="#2b47be"/>

  <g id="Group_454" data-name="Group 454" transform="translate(-1151.588 -909.88)">
    <g id="Group_250" data-name="Group 250" transform="translate(1124.211 909.88)" opacity="0.22">
      <g id="Group_249" data-name="Group 249">
        <g id="Group_248" data-name="Group 248" clip-path="url(#clip-path-3)">

          <path /* 'X' background panel */ className="phase-five" id="Path_638" data-name="Path 638" d="M193.231,77.625l-37.676-.055-10.543.055v38.151h48.219Z" fill="#2b47be"/>
        </g>
      </g>
    </g>

    <path /* 'X' panel border */ className="phase-three" id="Path_646" data-name="Path 646" d="M193.23,116.571H145.011a.793.793,0,0,1-.794-.794V77.625a.8.8,0,0,1,.79-.795l10.544-.054,37.681.054a.8.8,0,0,1,.793.795v38.152a.794.794,0,0,1-.795.794m-47.424-1.589h46.63V78.419l-36.883-.054-9.747.051Z" transform="translate(1124.211 909.88)" fill="#2b47be"/>
    <rect /* 'X' panel bottom */ className="phase-three" id="Rectangle_134" data-name="Rectangle 134" width="48.484" height="4.191" transform="translate(1269.223 1021.466)" fill="#2b47be"/>
  </g>


  <path /* Height panel bottom */ className="phase-four" id="Path_649" data-name="Path 649" d="M144.129,69.239,193.5,68.93v4.191H150.223Z" transform="translate(-27.377)" fill="#2b47be"/>
   {/* these next four are the top cut rectangle */}
  <path className="phase-four" id="Path_650" data-name="Path 650" d="M123.551,13.028V3.755h16.14l9.406,9.406Z" transform="translate(-27.377)" fill="#2b47be"/>
  <path className="phase-four" id="Path_651" data-name="Path 651" d="M144.592,3.657l9.455,9.454h6.309l-9.4-9.4Z" transform="translate(-27.377)" fill="#2b47be"/>
  <path className="phase-four" id="Path_652" data-name="Path 652" d="M155.985,3.657l9.454,9.454h6.31l-9.4-9.4Z" transform="translate(-27.377)" fill="#2b47be"/>
  <path className="phase-four" id="Path_653" data-name="Path 653" d="M167.377,3.657l9.454,9.454h6.31l-9.4-9.4Z" transform="translate(-27.377)" fill="#2b47be"/>

    {/* testing the group element. you can select all the paths with a class selector */}
  <g id="Group_456" data-name="Group 456" transform="translate(-1151.588 -909.88)">
    <path className="phase-four " id="Path_654" data-name="Path 654" d="M199.48,122.625H79.946v-.53h119V22.147L183.031,6.228H180.27V5.7h2.981l.077.077L199.48,21.928Z" transform="translate(1124.211 909.88)" fill="#2b47be"/>
    <path className="phase-four " id="Path_655" data-name="Path 655" d="M199.215,26.716l2.362,2.362V47.646l-2.307,2.307Z" transform="translate(1124.211 909.88)" fill="#2b47be"/>
    <path className="phase-four " id="Path_656" data-name="Path 656" d="M199.634,40.427l-2.683,2.682V74.273l2.159,2.159V42.348Z" transform="translate(1124.211 909.88)" fill="#2b47be"/>
    <path className="phase-four " id="Path_657" data-name="Path 657" d="M199.215,122.36l-2.517,2.517H131.764l-2.528-2.528Z" transform="translate(1124.211 909.88)" fill="#2b47be"/>
    <path className="phase-four " id="Path_658" data-name="Path 658" d="M140.353,122.625l-3.19-3.19H83.037l-3.206,2.925h59.5Z" transform="translate(1124.211 909.88)" fill="#2b47be"/>
  </g>

  {/* the Text elements */}
  <text className="phase-six" id="X" transform="translate(136.412 102.12)" fill="#2b47be" font-size="18" font-family="HanssonStencilMN-Regular, Hansson-Stencil-MN"><tspan x="0" y="0">X</tspan></text>
  <text className="phase-six" transform="translate(101.412 47.12)" fill="#E55213" font-size="18" font-family="HanssonStencilMN-Regular, Hansson-Stencil-MN"><tspan x="0" y="0">{window.innerHeight}</tspan><tspan y="0" font-size="10.499" baseline-shift="-5.999400079342301">PX</tspan></text>
  <text className="phase-six" transform="translate(45.412 91.12)" fill="#E55213" font-size="18" font-family="HanssonStencilMN-Regular, Hansson-Stencil-MN"><tspan x="0" y="0">{windowWidth}</tspan><tspan y="0" font-size="10.499" baseline-shift="-5.999400079342301">PX</tspan></text>
</svg>

    </div>
  );
}

export default WindowSizeHud;