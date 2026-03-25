import './mouseHud.css';

    
export default function MouseHud({mousePosition}) {

/* 
    Mouse HUD Component
        • displays the current mouse position on the screen
        • accepts mousePosition prop with x and y coordinates
        • the logic is ran in the app.js main renderer 
*/



    return(
        <div className="mouse-hud">
            <svg width="128.151" height="40.321" viewBox="0 0 188.151 40.321">
              <defs>
                <clipPath id="clip-path">
                  <rect id="Rectangle_103" data-name="Rectangle 103" width="108.84" height="19.028" fill="#2b47be"/>
                </clipPath>
              </defs>
              <g id="Group_294" data-name="Group 294" transform="translate(12.471 0.004)" opacity="0.22">
                <g id="Group_192" data-name="Group 192">
                  <g id="Group_191" data-name="Group 191" clip-path="">
                    <path className="mouse-panel-phase-two" id="Path_571" data-name="Path 571" d="M83.361,42.109H192.2V23.082H98.446Z" transform="translate(-83.362 -23.081)" fill="#2b47be"/>
                  </g>
                </g>
              </g>
              <g id="Group_295" data-name="Group 295" transform="translate(66.891 21.266)" opacity="0.22">
                <g id="Group_192-2" data-name="Group 192">
                  <g id="Group_191-2" data-name="Group 191" clip-path="">
                    <path className="mouse-panel-phase-two" id="Path_571-2" data-name="Path 571" d="M192.2,23.082H83.361V42.109h93.756Z" transform="translate(-83.361 -23.082)" fill="#2b47be"/>
                  </g>
                </g>
              </g>
              <text className="mouse-panel-phase-two" id="y:_123" data-name={`y: ${mousePosition.y}`} transform="translate(97.662 36.293)" fill="#e55213" font-size="18" font-family="Hansson-Stencil-MN"><tspan x="-28.134" y="0">Y: {mousePosition.y}</tspan></text>
              <text className="mouse-panel-phase-two" id="X:_120" data-name={`X: ${mousePosition.x}`} transform="translate(87.453 15.033)" fill="#e55213" font-size="18" font-family="Hansson-Stencil-MN"><tspan x="-28.449" y="0">X: {mousePosition.x}</tspan></text>
              <path className="mouse-panel-phase-one-left" id="Path_694" data-name="Path 694" d="M164.505,68.312,179.59,49.285h9.859L174.373,68.312Z" transform="translate(-164.505 -49.285)" fill="#2b47be"/>
              <path className="mouse-panel-phase-one-right" id="Path_695" data-name="Path 695" d="M164.505,68.312,179.59,49.285h9.859L174.373,68.312Z" transform="translate(-1.297 -27.991)" fill="#2b47be"/>
            </svg>

        </div>
    );
};
    
