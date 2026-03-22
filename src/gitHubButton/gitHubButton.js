import './gitHubButton.css';

function GitHubButton({ onClick }) {

  /* !incomplete 
    • This component is a reusable GitHub button that triggers a click event.
    • When clicked, the gitHubClick function logs a message to the console.
    * to complete:
      • You can connect the click event to the corresponding GitHub functionality.
  */

  const gitHubClick = () => {
    console.log("GitHub Button Clicked");
  };


  return (
    <button className="github-button button-hover-small" onClick={gitHubClick}>
        <svg xmlns="http://www.w3.org/2000/svg"  width="84.272" height="53.584" viewBox="0 0 84.272 53.584">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_211" data-name="Rectangle 211" width="61.251" height="46.107" fill="#2b47be"/>
    </clipPath>
  </defs>
  <g id="Group_408" data-name="Group 408" transform="translate(-80.595 3.739)" opacity="0.22">
    <g id="Group_407" data-name="Group 407" transform="translate(92.165)">
      <g id="Group_406" data-name="Group 406" clip-path="">

        <rect className="button-phase-four" id="Rectangle_210" data-name="Rectangle 210" width="61.251" height="46.106" transform="translate(0 0.001)" fill="#2b47be"/>
      </g>
    </g>
  </g>

<g className="button-phase-right-small">
  <g id="Group_832" data-name="Group 832" transform="translate(-1525.365 -4447.864)">
    <rect className="button-phase-two-right button-hover-small-selector" id="Rectangle_213" data-name="Rectangle 213" width="5.848" height="3.738" transform="translate(1593.337 4497.71)" fill="#2b47be"/>
    <rect className="button-phase-one button-hover-small-selector" id="Rectangle_214" data-name="Rectangle 214" width="3.15" height="53.583" transform="translate(1598.187 4447.865)" fill="#2b47be"/>
    <rect className="button-phase-two-right button-hover-small-selector" id="Rectangle_215" data-name="Rectangle 215" width="5.848" height="3.738" transform="translate(1593.337 4447.865)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_219" data-name="Rectangle 219" width="1.8" height="53.583" transform="translate(1603.135 4447.865)" fill="#2b47be"/>
    <path className="button-phase-one" id="Path_10760" data-name="Path 10760" d="M172.828,52.048l3.444-4.77V5.451L172.963.867Z" transform="translate(1433.365 4448.198)" fill="#2b47be"/>
  </g>
</g>

<g className="button-phase-left-small">
  <g id="Group_833" data-name="Group 833" transform="translate(-1525.365 -4447.864)">
    <rect className="button-phase-two-left button-hover-small-selector" id="Rectangle_216" data-name="Rectangle 216" width="5.848" height="3.738" transform="translate(1535.771 4447.864)" fill="#2b47be"/>
    <rect className="button-phase-one button-hover-small-selector" id="Rectangle_217" data-name="Rectangle 217" width="3.15" height="53.583" transform="translate(1533.621 4447.864)" fill="#2b47be"/>
    <rect className="button-phase-one" id="Rectangle_218" data-name="Rectangle 218" width="1.8" height="53.583" transform="translate(1530.022 4447.864)" fill="#2b47be"/>
    <rect className="button-phase-two-left button-hover-small-selector" id="Rectangle_220" data-name="Rectangle 220" width="5.848" height="3.738" transform="translate(1535.771 4497.709)" fill="#2b47be"/>
    <path className="button-phase-one" id="Path_10761" data-name="Path 10761" d="M0,5.637V47.466l3.308,4.581L3.444.867Z" transform="translate(1525.365 4448.197)" fill="#2b47be"/>
  </g>
</g>

  <g id="Group_834" data-name="Group 834" transform="translate(-1525.365 -4447.864)">
    <path className="button-phase-four" id="Path_10762" data-name="Path 10762" d="M59.116,9.943H24.731L22.88,1.918H20.009V1.185H22.95L24.8,9.209H59.046L60.98.826h2.232V1.56H61.05Z" transform="translate(1525.406 4448.182)" fill="#2b47be" stroke="#2b47be" stroke-width="0.2"/>
    <path className="button-phase-three" id="Path_10763" data-name="Path 10763" d="M24.1,31.506l-1.934,8.383H20.009v.734h2.232l1.934-8.383H58.419l1.851,8.025h2.941v-.734h-2.87L58.49,31.506Z" transform="translate(1525.406 4459.991)" fill="#2b47be" stroke="#2b47be" stroke-width="0.2"/>
  </g>

  <path className="icon-phase-four" id="Icon_akar-github-fill" data-name="Icon akar-github-fill" d="M13.688,0A13.689,13.689,0,0,0,9.359,26.675c.684.12.941-.291.941-.65,0-.325-.017-1.4-.017-2.549-3.439.633-4.329-.838-4.6-1.608a4.977,4.977,0,0,0-1.4-1.933c-.479-.257-1.164-.89-.017-.907a2.739,2.739,0,0,1,2.1,1.4,2.926,2.926,0,0,0,3.987,1.129,2.879,2.879,0,0,1,.873-1.831C8.179,19.386,5,18.205,5,12.97A5.327,5.327,0,0,1,6.4,9.291a4.919,4.919,0,0,1,.137-3.627S7.683,5.3,10.3,7.067a12.905,12.905,0,0,1,6.844,0c2.618-1.779,3.764-1.4,3.764-1.4a4.919,4.919,0,0,1,.137,3.627,5.3,5.3,0,0,1,1.4,3.679c0,5.253-3.2,6.416-6.245,6.759a3.242,3.242,0,0,1,.924,2.532c0,1.831-.017,3.3-.017,3.764,0,.359.257.787.941.65A13.7,13.7,0,0,0,13.688,0Z" transform="translate(28.447 13.442)" fill="#e55213"/>
</svg>

    </button>
  );
}

export default GitHubButton;