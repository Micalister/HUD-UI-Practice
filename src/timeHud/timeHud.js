import "./timeHud.css";

function TimeHud() {

  /* Time HUD Component
       • displays the current date in the format "MMM | DD | YYYY"
  */

    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'short' }).toUpperCase();

    /*const currentBrowser = navigator.userAgentData.brands[1];
    console.log("Current Browser:", currentBrowser);*/

    
    return (
        <div className="time-hud">
            <svg width="192.552" height="36.052" viewBox="0 0 192.552 36.052">
  <path id="Path_12515" data-name="Path 12515" d="M14342.083,37.127l165.956.679-16.671,28.643-165.875-.715Z" transform="translate(-14316.355 -35.491)" fill="rgba(43,71,190,0.44)" stroke="#2b47be" stroke-width="1" stroke-dasharray="94"/>
 
  <g id="Group_972" data-name="Group 972" transform="translate(-580.355 -1229.102)">
    <path id="Path_12514" data-name="Path 12514" d="M182.131,5.6l.889.579-7.6,11.7H347.057V18.95H173.464Z" transform="translate(406.891 1246.204)" fill="#2b47be"/>
    <rect id="Rectangle_610" data-name="Rectangle 610" width="36.167" height="3.272" transform="translate(611 1229.102)" fill="#2b47be"/>
    <path id="Path_12516" data-name="Path 12516" d="M158.774,7.67,141.586,37.187H126.1L143.285,7.67Z" transform="translate(612.511 1227.967)" fill="#2b47be"/>
  </g>

  <g id="Group_973" data-name="Group 973" transform="translate(-582.355 -1229.102)">
    <text id="Feb" transform="translate(612 1251.611)" fill="#e55213" font-size="18" font-family="Hansson-Stencil-MN"><tspan x="0" y="0">{month}</tspan></text>
    <text id="_" data-name="|" transform="translate(649 1251.611)" fill="#e55213" font-size="18" font-family="Hansson-Stencil-MN"><tspan x="0" y="0">|</tspan></text>
    <text id="date" data-name="date" transform="translate(661.819 1251.611)" fill="#e55213" font-size="18" font-family="Hansson-Stencil-MN"><tspan x="0" y="0">{dayOfMonth}</tspan></text>
    <text id="_2026" data-name="2026" transform="translate(694 1251.611)" fill="#e55213" font-size="18" font-family="Hansson-Stencil-MN"><tspan x="0" y="0">{year}</tspan></text>
  </g>
</svg>


        </div>
    );
}

export default TimeHud;