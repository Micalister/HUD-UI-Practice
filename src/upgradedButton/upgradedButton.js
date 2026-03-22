import './upgradedButton.css';

export default function UpgradedButton({ text, onClick }) {

  /* !incomplete
        • works like the button component but only one label as the main call to action

        * to complete:
          • the button will need to launch the application which can't be ran until the motherBoard phase is complete 

  */

  const upgradedButtonClick = () => {
    console.log('Upgraded Button Clicked');
  }

  return (
    <button className="upgraded-button button-hover" onClick={upgradedButtonClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="247.406" height="60.479" viewBox="0 0 247.406 60.479">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_211" data-name="Rectangle 211" width="171.499" height="51.541" fill="#2b47be"/>
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

  <g id="Group_407" data-name="Group 407" transform="translate(38.496 4.759)" opacity="0.22">
    <g id="Group_406" data-name="Group 406" clip-path="">
        {/* background panel */}
      <rect className="button-phase-four" id="Rectangle_210" data-name="Rectangle 210" width="171.5" height="51.54" transform="translate(0 0.002)" fill="#2b47be"/>
    </g>
  </g>

  <text className="button-phase-four" id="Launch" transform="translate(81.793 38.09)" fill="#e55213" font-size="22" font-family="Hansson-Stencil-MN"><tspan>{text}</tspan></text>

{/* top and bottom lines */}
<g className="button-hover-selector-upgraded">
  <g className="" id="Group_840" data-name="Group 840" transform="translate(-1267.094 -4895.971)">
    
    <path className="button-phase-three" id="Path_10762" data-name="Path 10762" d="M156.864,11.018H36.534L30.056,2.046H20.009V1.227H30.3l6.478,8.97h119.84L163.384.826h7.811v.821H163.63Z" transform="translate(1295.198 4897.004)" fill="#E55213"/>
    <g id="Group_792" data-name="Group 792" transform="translate(1451.361 4907.639) rotate(180)">
        
      <g id="Group_791" data-name="Group 791" transform="translate(0 0)" clip-path="">
        <path className="button-phase-three" id="Path_12574" data-name="Path 12574" d="M54.494,11.6l2.582-4.607H44.449L38.19,0C12.378.079.206.074.008,0H0C-.062.083,3.976,4.646,10.272,11.668" transform="translate(-0.001 -0.001)" fill="#E55213"/>
      </g>
    </g>
  </g>
  <g className="" id="Group_841" data-name="Group 841" transform="translate(-1267.094 -4895.971)">
    <path className="button-phase-three" id="Path_10763" data-name="Path 10763" d="M34.34,31.506l-6.766,9.371H20.009V41.7H27.82l6.766-9.371H154.426L160.9,41.3h10.291v-.821H161.15l-6.478-8.971Z" transform="translate(1295.198 4913.821)" fill="#E55213"/>
    <g id="Group_793" data-name="Group 793" transform="translate(1333.502 4945.787)">
      <g id="Group_791-2" data-name="Group 791" transform="translate(0 0)" clip-path="">
        <path className="button-phase-three" id="Path_12574-2" data-name="Path 12574" d="M10.272,9.368l44.221-.056L57.6,6.379H44.946L38.19,0C12.378.063.205.06.008,0H0C-.063.067,3.976,3.73,10.272,9.368" transform="translate(0 -0.001)" fill="#E55213"/>
      </g>
    </g>
  </g>
</g>

  {/* top and bottom lines under */}
<g className="button-hover-selector-inverted">
  <g className="" id="Group_840" data-name="Group 840" transform="translate(-1267.094 -4895.971)">
    
    <path className="button-phase-three" id="Path_10762" data-name="Path 10762" d="M156.864,11.018H36.534L30.056,2.046H20.009V1.227H30.3l6.478,8.97h119.84L163.384.826h7.811v.821H163.63Z" transform="translate(1295.198 4897.004)" fill="#2b47be"/>
    <g id="Group_792" data-name="Group 792" transform="translate(1451.361 4907.639) rotate(180)">
        
      <g id="Group_791" data-name="Group 791" transform="translate(0 0)" clip-path="">
        <path className="button-phase-three" id="Path_12574" data-name="Path 12574" d="M54.494,11.6l2.582-4.607H44.449L38.19,0C12.378.079.206.074.008,0H0C-.062.083,3.976,4.646,10.272,11.668" transform="translate(-0.001 -0.001)" fill="#2b47be"/>
      </g>
    </g>
  </g>
  <g className="" id="Group_841" data-name="Group 841" transform="translate(-1267.094 -4895.971)">
    <path className="button-phase-three" id="Path_10763" data-name="Path 10763" d="M34.34,31.506l-6.766,9.371H20.009V41.7H27.82l6.766-9.371H154.426L160.9,41.3h10.291v-.821H161.15l-6.478-8.971Z" transform="translate(1295.198 4913.821)" fill="#2b47be"/>
    <g id="Group_793" data-name="Group 793" transform="translate(1333.502 4945.787)">
      <g id="Group_791-2" data-name="Group 791" transform="translate(0 0)" clip-path="">
        <path className="button-phase-three" id="Path_12574-2" data-name="Path 12574" d="M10.272,9.368l44.221-.056L57.6,6.379H44.946L38.19,0C12.378.063.205.06.008,0H0C-.063.067,3.976,3.73,10.272,9.368" transform="translate(0 -0.001)" fill="#2b47be"/>
      </g>
    </g>
  </g>
</g>
    {/* Right hub */}
<g className="button-phase-right">
  <g id="Group_838" data-name="Group 838" transform="translate(-1267.094 -4895.971)">
    <rect className="button-phase-two-right" id="Rectangle_213" data-name="Rectangle 213" width="6.537" height="4.178" transform="translate(1471.551 4952.272)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_214" data-name="Rectangle 214" width="3.521" height="59.899" transform="translate(1477.089 4896.552)" fill="#2b47be"/>
    <rect className="button-phase-two-right" id="Rectangle_215" data-name="Rectangle 215" width="6.537" height="4.178" transform="translate(1471.551 4896.552)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_219" data-name="Rectangle 219" width="2.012" height="59.899" transform="translate(1482.621 4896.552)" fill="#2b47be"/>
    <path className="button-phase-one" id="Path_10760" data-name="Path 10760" d="M172.828,58.081l3.85-5.332V5.991l-3.7-5.124Z" transform="translate(1313.212 4897.026)" fill="#2b47be"/>
    <g id="Group_795" data-name="Group 795" transform="translate(1491.415 4903.217)">
      <g id="Group_794" data-name="Group 794" transform="translate(0 0)" clip-path="url(#clip-path-4)">
        <path className="button-phase-one" id="Path_12575" data-name="Path 12575" d="M0,46.568V0A23.636,23.636,0,0,1,23.07,22.394C23.548,35.077,13.2,46.223,0,46.568" transform="translate(0 0)" fill="#2b47be"/>
      </g>
    </g>
  </g>
</g>

  {/* Left hub */}
<g className="button-phase-left">
  <g id="Group_839" data-name="Group 839" transform="translate(-1267.094 -4895.971)">
    <rect className="button-phase-two-left" id="Rectangle_216" data-name="Rectangle 216" width="6.537" height="4.178" transform="translate(1304.59 4896.552)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_217" data-name="Rectangle 217" width="3.521" height="59.899" transform="translate(1302.069 4896.552)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_218" data-name="Rectangle 218" width="2.012" height="59.899" transform="translate(1298.046 4896.552)" fill="#2b47be"/>
    <rect className="button-phase-two-left" id="Rectangle_220" data-name="Rectangle 220" width="6.537" height="4.178" transform="translate(1304.59 4952.272)" fill="#2b47be"/>
    <path className="button-phase-one" id="Path_10761" data-name="Path 10761" d="M0,6.2v46.76L3.7,58.08,3.85.867Z" transform="translate(1292.84 4897.027)" fill="#2b47be"/>
    <g id="Group_796" data-name="Group 796" transform="translate(1267.094 4903.217)">
      <g id="Group_794-2" data-name="Group 794" transform="translate(0 0)" clip-path="url(#clip-path-4)">
        <path className="button-phase-one" id="Path_12575-2" data-name="Path 12575" d="M23.085,46.568V0A23.636,23.636,0,0,0,.016,22.394C-.463,35.077,9.89,46.223,23.085,46.568" transform="translate(0 0)" fill="#2b47be"/>
      </g>
    </g>
  </g>
</g>

</svg>

    </button>
  );
}
