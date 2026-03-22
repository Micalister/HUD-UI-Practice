import './carouselButton.css';
import { useState } from 'react';

export default function CarouselButton({ onClick }) {

  /* !incomplete
    • This component is a reusable carousel button that cycles through a list of pre-defined labels.
    • When clicked, the current label is passed to the carouselButtonClick function, which logs the label and its index.
    • The clickCarouselForward and clickCarouselBackward functions update the index to show the next or previous label.

    * to complete:
      • When the label is passed and matched, you can connect it to the corresponding button functionality.
  
  */

    const carouselButtonClick = () => {
        console.log(`Button Clicked: ${text[index]}, Label Index: ${index}`);
    };


    const text = ['Launch', 'Source Code', 'Design Process'];

    const [index, setIndex] = useState(0);

    const clickCarouselForward = () => {
        setIndex((prevIndex) => (prevIndex + 1) % text.length);
    };

    const clickCarouselBackward = () => {
        setIndex((prevIndex) => (prevIndex - 1 + text.length) % text.length);
    }

  return (
    <button className="carousel-button button-hover" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="247.406" height="60.646" viewBox="0 0 247.406 60.646">
<g onClick={carouselButtonClick}>
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_211" data-name="Rectangle 211" width="171.499" height="51.541" fill="rgba(43,71,190,0.22)"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <rect id="Rectangle_629" data-name="Rectangle 629" width="57.599" height="11.668" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <rect id="Rectangle_629-2" data-name="Rectangle 629" width="57.599" height="9.368" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-4">
      <rect id="Rectangle_630" data-name="Rectangle 630" width="23.085" height="46.568" fill="none"/>
    </clipPath>
  </defs>
  <g id="Group_407" data-name="Group 407" transform="translate(38.496 4.925)">
    <g id="Group_406" data-name="Group 406" clip-path="">
      <rect className="button-phase-four" id="Rectangle_210" data-name="Rectangle 210" width="171.5" height="51.54" transform="translate(0 0.002)" fill="rgba(43,71,190,0.22)"/>
    </g>
  </g>
  <text className="button-phase-four" id="Launch" transform="translate(81.793 38.256)" fill="#e55213" font-size="21" font-family="Hansson-Stencil-MN"><tspan x="17%" y="0" textAnchor='middle'>{text[index]}</tspan></text>

{/* top bar */}
<g className="button-hover-selector-upgraded">
  <g id="Group_844" data-name="Group 844" transform="translate(-1271.063 -5080.949)">
    
    <path className="button-phase-three" id="Path_10762" data-name="Path 10762" d="M156.864,11.018H36.534L30.056,2.046H20.009V1.227H30.3l6.478,8.97h119.84L163.384.826h7.811v.821H163.63Z" transform="translate(1299.167 5082.148)" fill="#E55213"/>

    <g id="Group_792" data-name="Group 792" transform="translate(1455.33 5092.783) rotate(180)">
      <g id="Group_791" data-name="Group 791" transform="translate(0 0)" clip-path="">
        <path className="button-phase-three" id="Path_12574" data-name="Path 12574" d="M54.494,11.6l2.582-4.607H44.449L38.19,0C12.378.079.206.074.008,0H0C-.062.083,3.976,4.646,10.272,11.668" transform="translate(-0.001 -0.001)" fill="#E55213"/>
      </g>
    </g>
  </g>
  <g id="Group_845" data-name="Group 845" transform="translate(-1271.063 -5080.949)">
    <path className="button-phase-four" id="Path_10763" data-name="Path 10763" d="M34.34,31.506l-6.766,9.371H20.009V41.7H27.82l6.766-9.371H154.426L160.9,41.3h10.291v-.821H161.15l-6.478-8.971Z" transform="translate(1299.167 5098.964)" fill="#E55213"/>
    <g id="Group_793" data-name="Group 793" transform="translate(1337.471 5130.93)">
      <g id="Group_791-2" data-name="Group 791" transform="translate(0 0)" clip-path="">
        <path className="button-phase-three" id="Path_12574-2" data-name="Path 12574" d="M10.272,9.368l44.221-.056L57.6,6.379H44.946L38.19,0C12.378.063.205.06.008,0H0C-.063.067,3.976,3.73,10.272,9.368" transform="translate(0 -0.001)" fill="#E55213"/>
      </g>
    </g>
  </g>
</g>
  {/* bottom bar */}

  <g className="button-hover-selector-inverted" id="Group_844" data-name="Group 844" transform="translate(-1271.063 -5080.949)">
    
    <path className="button-phase-three" id="Path_10762" data-name="Path 10762" d="M156.864,11.018H36.534L30.056,2.046H20.009V1.227H30.3l6.478,8.97h119.84L163.384.826h7.811v.821H163.63Z" transform="translate(1299.167 5082.148)" fill="#2b47be"/>

    <g id="Group_792" data-name="Group 792" transform="translate(1455.33 5092.783) rotate(180)">
      <g id="Group_791" data-name="Group 791" transform="translate(0 0)" clip-path="">
        <path className="button-phase-three" id="Path_12574" data-name="Path 12574" d="M54.494,11.6l2.582-4.607H44.449L38.19,0C12.378.079.206.074.008,0H0C-.062.083,3.976,4.646,10.272,11.668" transform="translate(-0.001 -0.001)" fill="#2b47be"/>
      </g>
    </g>
  </g>
  <g className="button-hover-selector-inverted" id="Group_845" data-name="Group 845" transform="translate(-1271.063 -5080.949)">
    <path className="button-phase-four" id="Path_10763" data-name="Path 10763" d="M34.34,31.506l-6.766,9.371H20.009V41.7H27.82l6.766-9.371H154.426L160.9,41.3h10.291v-.821H161.15l-6.478-8.971Z" transform="translate(1299.167 5098.964)" fill="#2b47be"/>
    <g id="Group_793" data-name="Group 793" transform="translate(1337.471 5130.93)">
      <g id="Group_791-2" data-name="Group 791" transform="translate(0 0)" clip-path="">
        <path className="button-phase-three" id="Path_12574-2" data-name="Path 12574" d="M10.272,9.368l44.221-.056L57.6,6.379H44.946L38.19,0C12.378.063.205.06.008,0H0C-.063.067,3.976,3.73,10.272,9.368" transform="translate(0 -0.001)" fill="#2b47be"/>
      </g>
    </g>
  </g>

  <text className="button-phase-three button-hover-inverse" id="_1_3" data-name="1 / 3" transform="translate(159.668 10)" fill="#e55213" font-size="12" font-family="Hansson-Stencil-MN"><tspan x="-14.304" y="0">{index + 1} / 3</tspan></text>
  
</g>



<g className="button-phase-left">
  <g id="Group_843" data-name="Group 843" transform="translate(-1271.063 -5080.949)">
    <rect className="button-phase-two-left" id="Rectangle_216" data-name="Rectangle 216" width="6.537" height="4.178" transform="translate(1308.559 5081.695)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_217" data-name="Rectangle 217" width="3.521" height="59.899" transform="translate(1306.038 5081.695)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_218" data-name="Rectangle 218" width="2.012" height="59.899" transform="translate(1302.015 5081.695)" fill="#2b47be"/>
    <rect className="button-phase-two-left" id="Rectangle_220" data-name="Rectangle 220" width="6.537" height="4.178" transform="translate(1308.559 5137.416)" fill="#2b47be"/>
    <path className="button-phase-one" id="Path_10761" data-name="Path 10761" d="M0,6.2v46.76L3.7,58.08,3.85.867Z" transform="translate(1296.809 5082.17)" fill="#2b47be"/>

 <g onClick={clickCarouselBackward} style={{ cursor: 'pointer' }}>
    <g id="Group_796" data-name="Group 796" transform="translate(1271.063 5088.36)">
      <g id="Group_794" data-name="Group 794" transform="translate(0 0)" clip-path="url(#clip-path-4)">
        <path className="button-phase-one" id="Path_12575" data-name="Path 12575" d="M23.085,46.568V0A23.636,23.636,0,0,0,.016,22.394C-.463,35.077,9.89,46.223,23.085,46.568" transform="translate(0 0)" fill="#2b47be"/>
      </g>
    </g>
    <g id="Icon_material-round-double-arrow" data-name="Icon material-round-double-arrow" transform="translate(1272.986 5099.907)">
      <path className="button-phase-two-left" id="Path_12566" data-name="Path 12566" d="M8.9,18.265l6.757-9.474a3.1,3.1,0,0,1,2.5-1.291,3.062,3.062,0,0,1,2.5,4.846l-4.913,6.892,4.913,6.892a3.066,3.066,0,1,1-5,3.555L8.885,20.21A1.689,1.689,0,0,1,8.9,18.265Z" transform="translate(-8.586 -7.5)" fill="#e55213"/>
    </g>
 </g>

  </g>
</g>

<g className="button-phase-right">
  <g id="Group_842" data-name="Group 842" transform="translate(-1271.063 -5080.949)">
    <rect className="button-phase-two-right" id="Rectangle_213" data-name="Rectangle 213" width="6.537" height="4.178" transform="translate(1475.52 5137.416)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_214" data-name="Rectangle 214" width="3.521" height="59.899" transform="translate(1481.058 5081.695)" fill="#2b47be"/>
    <rect className="button-phase-two-right" id="Rectangle_215" data-name="Rectangle 215" width="6.537" height="4.178" transform="translate(1475.52 5081.695)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_219" data-name="Rectangle 219" width="2.012" height="59.899" transform="translate(1486.59 5081.695)" fill="#2b47be"/>
    <path className="button-phase-one" id="Path_10760" data-name="Path 10760" d="M172.828,58.081l3.85-5.332V5.991l-3.7-5.124Z" transform="translate(1317.181 5082.17)" fill="#2b47be"/>

 <g onClick={clickCarouselForward} style={{ cursor: 'pointer' }}>
    <g id="Group_795" data-name="Group 795" transform="translate(1495.384 5088.36)">
      <g id="Group_794-2" data-name="Group 794" transform="translate(0 0)" clip-path="url(#clip-path-4)">
        <path className="button-phase-one" id="Path_12575-2" data-name="Path 12575" d="M0,46.568V0A23.636,23.636,0,0,1,23.07,22.394C23.548,35.077,13.2,46.223,0,46.568" transform="translate(0 0)" fill="#2b47be"/>
      </g>
    </g>
    <g id="Icon_material-round-double-arrow-2" data-name="Icon material-round-double-arrow" transform="translate(1504.204 5099.907)">
      <path className="button-phase-two-right"id="Path_12566-2" data-name="Path 12566" d="M20.921,18.265,14.163,8.791a3.1,3.1,0,0,0-2.5-1.291,3.062,3.062,0,0,0-2.5,4.846l4.913,6.892L9.166,26.129a3.066,3.066,0,1,0,5,3.555l6.774-9.474A1.689,1.689,0,0,0,20.921,18.265Z" transform="translate(-8.586 -7.5)" fill="#e55213"/>
    </g>
 </g>

  </g>
</g>
</svg>


    </button>
    );  
};
