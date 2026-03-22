import './inputField.css';

function InputField({ placeholder, value, onChange }) {

  /* !incomplete 
    • reusable input field
    • accepts placeholder, value, and onChange props
    
    * to complete:
      • change the input functions of email, phone, name to have input validation based on the type
        • EMAIL: 
            • no max char
            • @email.com validation
        • NAME: 
            • about 26 char 
            • space allowed
        • SUBJECT: 
            • about 26 char 
            • space allowed
  */

  return (
   <div>

        <svg xmlns="http://www.w3.org/2000/svg" width="359.147" height="61.411" viewBox="0 0 359.147 61.411">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_227" data-name="Rectangle 227" width="359.146" height="45.532" fill="#2b47be"/>
            </clipPath>
          </defs>
          <g id="Group_851" data-name="Group 851" transform="translate(-558.132 -372.446)">
            <g id="Group_421" data-name="Group 421" transform="translate(558.133 372.447)" opacity="0.22">
              <g id="Group_420" data-name="Group 420">
                <g id="Group_419" data-name="Group 419" clip-path="">
                  <rect className="input-field-phase-three" id="Rectangle_226" data-name="Rectangle 226" width="359.147" height="45.531" transform="translate(-0.001 0)" fill="#2b47be"/>
                </g>
              </g>
            </g>
            <rect className="input-field-phase-one" id="Rectangle_234" data-name="Rectangle 234" width="8.552" height="45.531" transform="translate(558.132 372.446)" fill="#2b47be"/>
          </g>
            <foreignObject x=".5rem" y="0rem" width="340" height="45.5">
            
            <input className="input-field input-field-phase-three" type="text" placeholder={placeholder} value={value} onChange={onChange}></input>
            
            </foreignObject>
          <g className="input-field-phase-two" id="Group_850" data-name="Group 850" transform="translate(-558.132 -372.446)">
            <path id="Path_10790" data-name="Path 10790" d="M260.134,64.475,253.7,70.706H212.288l-5.552,5.375H157.829l-5.915-5.726h-9.256l-6.345-6.142Z" transform="translate(620.449 357.223)" fill="#2b47be"/>
            <path id="Path_10794" data-name="Path 10794" d="M177.1,70.762h12.546l6.644-6.432H182.061l-6.666,6.454Z" transform="translate(705.843 357.468)" fill="#2b47be"/>
            <path id="Path_10796" data-name="Path 10796" d="M183.867,70.762h4.625l6.644-6.432h-6.31l-6.666,6.454Z" transform="translate(720.625 357.468)" fill="#2b47be"/>
            <path id="Path_12501" data-name="Path 12501" d="M15998.412,361.94H16155.7l9.326,9.326h19.565" transform="translate(-15430.757 59.595)" fill="none" stroke="#2b47be" stroke-width="1"/>
            <circle id="Ellipse_14" data-name="Ellipse 14" cx="3" cy="3" r="3" transform="translate(753.031 427.857)" fill="#2b47be"/>
          </g>
          <text id="Name_" data-name="Name…" transform="translate(18.981 26.706)" fill="#d9ddef" font-size="18" font-family="Hansson-Stencil-MN" opacity="0.582"><tspan x="0" y="0">
          
            </tspan></text>
        </svg>
   </div> 

  );
}

export default InputField;