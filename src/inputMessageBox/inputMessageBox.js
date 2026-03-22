import './inputMessageBox.css';

function InputMessageBox({ placeholder, value, onChange }) {
  return (

    /* !incomplete 
      • reusable input message box
      • accepts placeholder, value, and onChange props
   
      * to complete: 
        • find solution for the scroll bar issue
    */

    <div className="input-message-box">
        
        <svg className="text-box"  width="359.147" height="145.776" viewBox="0 0 359.147 145.776">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_227" data-name="Rectangle 227" width="359.146" height="129.897" fill="#2b47be"/>
            </clipPath>
          </defs>
          
          <g id="Group_421" data-name="Group 421" transform="translate(0.001 0)" opacity="0.22">
            <g id="Group_420" data-name="Group 420">
              <g id="Group_419" data-name="Group 419" clip-path="">
                <rect className="input-field-phase-three" id="Rectangle_226" data-name="Rectangle 226" width="359.147" height="129.896" transform="translate(-0.001 -0.001)" fill="#2b47be"/>
              </g>
            </g>
          </g>
        <foreignObject x=".5rem" y="0rem" width="340" height="130">
          <textarea className="input-field-phase-three" placeholder={placeholder} value={value} onChange={onChange}></textarea>
        </foreignObject> 
          <rect className="input-field-phase-one" id="Rectangle_234" data-name="Rectangle 234" width="8.552" height="129.898" fill="#2b47be"/>
          <g className="input-field-phase-two" id="Group_852" data-name="Group 852" transform="translate(-559.544 -635.095)">
            <path id="Path_10790" data-name="Path 10790" d="M260.134,64.475,253.7,70.706H212.288l-5.552,5.375H157.829l-5.915-5.726h-9.256l-6.345-6.142Z" transform="translate(621.861 704.237)" fill="#2b47be"/>
            <path id="Path_10794" data-name="Path 10794" d="M177.1,70.762h12.546l6.644-6.432H182.061l-6.666,6.454Z" transform="translate(707.255 704.482)" fill="#2b47be"/>
            <path id="Path_10796" data-name="Path 10796" d="M183.867,70.762h4.625l6.644-6.432h-6.31l-6.666,6.454Z" transform="translate(722.039 704.482)" fill="#2b47be"/>
            <path id="Path_12501" data-name="Path 12501" d="M15998.412,361.94H16155.7l9.326,9.326h19.565" transform="translate(-15429.345 406.609)" fill="none" stroke="#2b47be" stroke-width="1"/>
            <circle id="Ellipse_14" data-name="Ellipse 14" cx="3" cy="3" r="3" transform="translate(754.443 774.871)" fill="#2b47be"/>
          </g>
        </svg>

    </div>
  );
};  

export default InputMessageBox;