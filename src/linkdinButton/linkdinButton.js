import './linkdinButton.css';

function LinkdinButton({ onClick }) {

  /* !incomplete
    LinkedIn Button Component
      • reusable button component for LinkedIn
      • accepts onClick prop for handling click events

      * to complete:
      • You can connect the click event to the corresponding LinkedIn functionality.
  */

      /* handles the linkdinButton click event */
  const linkdinButtonClick = () => {
    console.log("LinkedIn Button Clicked");
  };


  return (
    <button className="linkdin-button button-hover-small" onClick={linkdinButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="84.272" height="53.584" viewBox="0 0 84.272 53.584">
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
          <g id="Group_835" data-name="Group 835" transform="translate(-1417.365 -4447.864)">
            <rect className="button-phase-two-right button-hover-small-selector" id="Rectangle_213" data-name="Rectangle 213" width="5.848" height="3.738" transform="translate(1485.337 4497.71)" fill="#2b47be"/>
            <rect className="button-phase-one button-hover-small-selector" id="Rectangle_214" data-name="Rectangle 214" width="3.15" height="53.583" transform="translate(1490.187 4447.865)" fill="#2b47be"/>
            <rect className="button-phase-two-right button-hover-small-selector" id="Rectangle_215" data-name="Rectangle 215" width="5.848" height="3.738" transform="translate(1485.337 4447.865)" fill="#2b47be"/>
            <rect className="button-phase-one" id="Rectangle_219" data-name="Rectangle 219" width="1.8" height="53.583" transform="translate(1495.135 4447.865)" fill="#2b47be"/>
            <path className="button-phase-one" id="Path_10760" data-name="Path 10760" d="M172.828,52.048l3.444-4.77V5.451L172.963.867Z" transform="translate(1325.365 4448.198)" fill="#2b47be"/>
          </g>
        </g>

        <g className="button-phase-left-small">
          <g id="Group_836" data-name="Group 836" transform="translate(-1417.365 -4447.864)">
            <rect className="button-phase-two-left button-hover-small-selector" id="Rectangle_216" data-name="Rectangle 216" width="5.848" height="3.738" transform="translate(1427.771 4447.864)" fill="#2b47be"/>
            <rect className="button-phase-one button-hover-small-selector"id="Rectangle_217" data-name="Rectangle 217" width="3.15" height="53.583" transform="translate(1425.621 4447.864)" fill="#2b47be"/>
            <rect className="button-phase-one"id="Rectangle_218" data-name="Rectangle 218" width="1.8" height="53.583" transform="translate(1422.022 4447.864)" fill="#2b47be"/>
            <rect className="button-phase-two-left button-hover-small-selector"id="Rectangle_220" data-name="Rectangle 220" width="5.848" height="3.738" transform="translate(1427.771 4497.709)" fill="#2b47be"/>
            <path className="button-phase-one" id="Path_10761" data-name="Path 10761" d="M0,5.637V47.466l3.308,4.581L3.444.867Z" transform="translate(1417.365 4448.197)" fill="#2b47be"/>
          </g>
        </g>

          <g id="Group_837" data-name="Group 837" transform="translate(-1417.365 -4447.864)">
            <path className="button-phase-four" id="Path_10762" data-name="Path 10762" d="M59.116,9.943H24.731L22.88,1.918H20.009V1.185H22.95L24.8,9.209H59.046L60.98.826h2.232V1.56H61.05Z" transform="translate(1417.406 4448.182)" fill="#2b47be" stroke="#2b47be" stroke-width="0.2"/>
            <path className="button-phase-three" id="Path_10763" data-name="Path 10763" d="M24.1,31.506l-1.934,8.383H20.009v.734h2.232l1.934-8.383H58.419l1.851,8.025h2.941v-.734h-2.87L58.49,31.506Z" transform="translate(1417.406 4459.991)" fill="#2b47be" stroke="#2b47be" stroke-width="0.2"/>
          </g>
          <path className="icon-phase-four" id="Icon_corebrands-linkedin" data-name="Icon corebrands-linkedin" d="M21.44,21.448H17.717V15.607c0-1.393-.029-3.183-1.947-3.183-1.941,0-2.237,1.511-2.237,3.08v5.943H9.807V9.437h3.58v1.638h.048a3.923,3.923,0,0,1,3.532-1.941c3.776,0,4.477,2.486,4.477,5.719v6.595ZM5.6,7.8A2.165,2.165,0,1,1,7.763,5.632,2.163,2.163,0,0,1,5.6,7.8ZM7.463,21.448H3.728V9.438H7.463ZM23.308,0H1.856A1.835,1.835,0,0,0,0,1.814v21.54a1.835,1.835,0,0,0,1.856,1.814H23.3a1.842,1.842,0,0,0,1.863-1.814V1.814A1.842,1.842,0,0,0,23.3,0Z" transform="translate(29.552 14.208)" fill="#e55213"/>
        </svg>

    </button>
    );

}

export default LinkdinButton;