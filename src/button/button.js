import './button.css';

const Button = ({label}) => {

  /* !incomplete
    • This component is a reuseable button that passes in a label from the app.js render
    • When clicked the label is passed to the ButtonClick function that checks which button is click through an array
    • The return of the ButtonClick function is currently logged to the console

    * to complete:
      • When the label is found in the array you then connect it to the corresponding functionality of the label
        • like how resume will open up the resume local on the web app.
  */

  /* Handles the click on the current button */    
  const ButtonClick = () => {
    const labelList = ['Source Code', 'Design Process', 'Showcase', 'Submit', 'Resume'];

    for (const i in labelList) {
      if (labelList[i] === label) {
        console.log(`Button Clicked: ${label}, Label Index: ${i}`);
      }
    }
  };


    return (
        <button type="button"  className="" onClick={ButtonClick}>
            <svg width="199.831" height="53.583" viewBox="0 0 199.831 53.583">
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectangle_212" data-name="Rectangle 212" width="199.831" height="53.583" fill="#2b47be"/>
              </clipPath>
              <clipPath id="clip-path-2">
                <rect id="Rectangle_211" data-name="Rectangle 211" width="173.92" height="46.107" fill="#2b47be"/>
              </clipPath>
            </defs>
            <g className="button-hover" id="Group_831" data-name="Group 831" transform="translate(-1318.638 -4727.868)">
              <g id="Group_410" data-name="Group 410" transform="translate(1318.638 4727.868)">
                <g id="Group_409" data-name="Group 409" clip-path="">
                  <g id="Group_408" data-name="Group 408" transform="translate(12.93 3.738)" opacity="0.22">
                    <g id="Group_407" data-name="Group 407">
                      <g id="Group_406" data-name="Group 406" clip-path="">
                          {/* button background panel */}
                        <rect className="button-phase-three" id="Rectangle_210" data-name="Rectangle 210" width="173.92" height="46.106" transform="translate(0 0.001)" fill="#2b47be"/>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g className="button-phase-right" id="Group_829" data-name="Group 829">
                  {/* right button holder */}
                <rect className="button-phase-two-right" id="Rectangle_213" data-name="Rectangle 213" width="6.63" height="3.738" transform="translate(1499.856 4777.713)" fill="#2b47be"/>
                <rect className="button-phase-one" id="Rectangle_214" data-name="Rectangle 214" width="3.571" height="53.583" transform="translate(1505.486 4727.868)" fill="#2b47be"/>
                <rect className="button-phase-two-right" id="Rectangle_215" data-name="Rectangle 215" width="6.63" height="3.738" transform="translate(1499.856 4727.868)" fill="#2b47be"/>
                <rect className="button-phase-one" id="Rectangle_219" data-name="Rectangle 219" width="2.041" height="53.583" transform="translate(1511.098 4727.868)" fill="#2b47be"/>
                <path className="button-phase-one" id="Path_10760" data-name="Path 10760" d="M172.828,52.048l3.9-4.77V5.451L172.981.867Z" transform="translate(1341.736 4728.201)" fill="#2b47be"/>
              </g>
              <g className="button-phase-left" id="Group_828" data-name="Group 828">
                  {/* left button holder */}
                <rect className="button-phase-two-left" id="Rectangle_216" data-name="Rectangle 216" width="6.63" height="3.738" transform="translate(1330.568 4727.868)" fill="#2b47be"/>
                <rect className="button-phase-one" id="Rectangle_217" data-name="Rectangle 217" width="3.571" height="53.583" transform="translate(1327.997 4727.868)" fill="#2b47be"/>
                <rect className="button-phase-one" id="Rectangle_218" data-name="Rectangle 218" width="2.041" height="53.583" transform="translate(1323.917 4727.868)" fill="#2b47be"/>
                <rect className="button-phase-two-left" id="Rectangle_220" data-name="Rectangle 220" width="6.63" height="3.738" transform="translate(1330.568 4777.713)" fill="#2b47be"/>
                <path className="button-phase-one" id="Path_10761" data-name="Path 10761" d="M0,5.637V47.466l3.75,4.581L3.9.867Z" transform="translate(1318.638 4728.202)" fill="#2b47be"/>
              </g>

              <g className="button-hover" id="Group_830" data-name="Group 830">
                  
                  {/* button traces */}
                <g className="button-hover-selector">
                <path id="Path_10762" data-name="Path 10762" d="M158.8,9.943H36.767L30.2,1.918H20.009V1.185H30.446l6.57,8.024H158.547L165.408.826h7.921V1.56h-7.671Z" transform="translate(1321.312 4728.186)" fill="#e55213"/>
                <path id="Path_10763" data-name="Path 10763" d="M34.543,31.506l-6.862,8.383H20.009v.734H27.93l6.862-8.383H156.323l6.57,8.025h10.436v-.734H163.142l-6.57-8.025Z" transform="translate(1321.312 4739.994)" fill="#e55213"/>
                </g>

                <g className="button-hover-selector-inverted">
                <path className="button-phase-three" id="" data-name="Path 10762" d="M158.8,9.943H36.767L30.2,1.918H20.009V1.185H30.446l6.57,8.024H158.547L165.408.826h7.921V1.56h-7.671Z" transform="translate(1321.312 4728.186)" fill="#2b47be"/>
                <path className="button-phase-four" id="" data-name="Path 10763" d="M34.543,31.506l-6.862,8.383H20.009v.734H27.93l6.862-8.383H156.323l6.57,8.025h10.436v-.734H163.142l-6.57-8.025Z" transform="translate(1321.312 4739.994)" fill="#2b47be"/>
                </g>
                
              </g>
              <text className="button-phase-three" id="Label" transform="translate(1418.554 4761.314)" fill="#e55213" font-size="20" font-family="Hansson-Stencil-MN"><tspan className="button-text" x="0%" y="0%" textAnchor="middle">{label}</tspan></text>
            </g>
          </svg>

        </button>

    );
};

export default Button;