import './pageContact.css';
import { useState } from 'react';
import Button from '../button/button.js';
import InputField from '../inputFeild/inputField.js';
import InputMessageBox from '../inputMessageBox/inputMessageBox.js';

export default function PageContact({ inputValue, onInputChange, messageValue, onMessageChange }) {

    

    return (
        <div className="pageContact-container">
            <svg className="pageContact-container-svg" width="944.3" height="622.766" viewBox="0 0 944.3 622.766">

                <g id="Group_1011" data-name="Group 1011" transform="translate(-488 -70.041)">
                    
                    {/* background panel */}
                    <rect className="contact-background-panel" id="Rectangle_602" data-name="Rectangle 602" width="901" height="599" transform="translate(509.628 77.417)" fill="rgba(43,71,190,0.2)"/>
                    
                    {/* bottom Left Panel */}
                    <g className="contact-left-bottom"  id="Group_1009" data-name="Group 1009">
                        <path id="Path_12468" data-name="Path 12468" d="M425.324,15.791H351.755L311.517,56.028H169.57s6.57-7.7,7.7-7.7h29.75l13.61-13.61h91.94L340.692,6.6h77.389Z" transform="translate(325.728 636.314)" fill="#2b47be"/>
                        <path id="Path_12479" data-name="Path 12479" d="M307.526,25.093l-7.3,7.3H229.355L216.036,45.715H87.62l-32.8-32.8H97.583l12.791,12.794Z" transform="translate(651.621 646.627)" fill="#2b47be"/>
                        <path id="Path_12480" data-name="Path 12480" d="M231.161,31.7h36.66l-18.33-18.33Z" transform="translate(439.534 653.402)" fill="#2b47be"/>
                    </g>

                    {/* left panel */}
                    <g className="contact-side-panels" id="Group_1007" data-name="Group 1007">
                        <path id="Path_12466" data-name="Path 12466" d="M80.571,0,56.79,23.785H83.547L101.192,6.137H283.665L278.636,0Z" transform="translate(498.761 353.707) rotate(-90)" fill="#2b47be"/>
                        <path id="Path_12467" data-name="Path 12467" d="M0,0,21.745,21.745H167.82l8.255-8.252h84.2L273.619.143Z" transform="translate(498.761 561.417) rotate(-90)" fill="#2b47be"/>
                        <path id="Path_12471" data-name="Path 12471" d="M77.189,7.362l25.892,25.892H308.652L298.174,22.776H104.955L88.488,6.311Z" transform="translate(504.728 600.771) rotate(-90)" fill="#2b47be"/>
                        <path id="Path_12473" data-name="Path 12473" d="M0,0,11,11.1H45.345L34.461.213Z" transform="translate(537.981 172.923) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12474" data-name="Path 12474" d="M0,0,11,11.1H45.345L34.461.213Z" transform="translate(537.981 133.923) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12475" data-name="Path 12475" d="M0,0,11,11.1H45.345L34.461.213Z" transform="translate(537.981 212.849) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12476" data-name="Path 12476" d="M0,0,11,11.1H45.345L34.461.213Z" transform="translate(537.981 252.774) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12477" data-name="Path 12477" d="M70.592,15.383l-9.668,9.668h-42.8l1.827,2.378H135.421l3.644-3.646H117.034l-8.4-8.4Z" transform="translate(537.063 96.456) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12478" data-name="Path 12478" d="M219.83,6.037a3.019,3.019,0,1,0-3.019-3.019,3.019,3.019,0,0,0,3.019,3.019" transform="translate(300.19 373.877)" fill="#2b47be"/>
                        <path id="Path_12481" data-name="Path 12481" d="M374.359,14.079,361.548,1.268H0V0H362.074l12.811,12.811H463.8v1.268Z" transform="translate(545.53 194.443) rotate(90)" fill="#2b47be"/>
                        <circle id="Ellipse_12" data-name="Ellipse 12" cx="3.5" cy="3.5" r="3.5" transform="translate(528.628 655.417)" fill="#2b47be"/>
                        <path id="Path_12482" data-name="Path 12482" d="M303.074,14.165h-21.4L262.925,32.91H129.318l6.754-6.754h120.67L275.285,7.614h35.363Z" transform="translate(520.91 365.294) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12483" data-name="Path 12483" d="M188.662,8.885h17.332L214.71,17.6h20.1l-4-3.995h-5.872l-9.385-9.388H192Z" transform="translate(508.435 455.891) rotate(90)" fill="#2b47be"/>
                    </g>
                    
                    {/* bottom Right Panel */}
                    <g className="contact-right-bottom" id="Group_1010" data-name="Group 1010">
                        <path id="Path_12486" data-name="Path 12486" d="M169.57,15.791h73.569l40.237,40.237H425.324s-6.57-7.7-7.7-7.7h-29.75l-13.61-13.61h-91.94L254.2,6.6H176.813Z" transform="translate(999.677 636.779)" fill="#2b47be"/>
                        <path id="Path_12494" data-name="Path 12494" d="M54.819,25.093l7.3,7.3H132.99l13.319,13.319H274.724l32.8-32.8H264.761L251.97,25.707Z" transform="translate(906.335 647.092)" fill="#2b47be"/>
                        <path id="Path_12495" data-name="Path 12495" d="M267.821,31.7h-36.66l18.33-18.33Z" transform="translate(981.784 653.867)" fill="#2b47be"/>
                    </g>

                    
                    {/* right Panels */}
                    <g className="contact-side-panels" id="Group_1008" data-name="Group 1008">
                        <path id="Path_12484" data-name="Path 12484" d="M23.782,23.785,0,0H26.758L44.4,17.647H226.876l-5.03,6.137Z" transform="translate(1397.755 297.382) rotate(-90)" fill="#2b47be"/>
                        <path id="Path_12485" data-name="Path 12485" d="M0,21.745,21.745,0H167.82l8.255,8.252h84.2L273.619,21.6Z" transform="translate(1399.794 561.882) rotate(-90)" fill="#2b47be"/>
                        <path id="Path_12487" data-name="Path 12487" d="M0,25.892,25.892,0H231.463L220.985,10.478H27.766L11.3,26.943Z" transform="translate(1382.317 524.047) rotate(-90)" fill="#2b47be"/>
                        <path id="Path_12488" data-name="Path 12488" d="M0,11.1,11,0H45.345L34.461,10.884Z" transform="translate(1393.415 173.388) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12489" data-name="Path 12489" d="M0,11.1,11,0H45.345L34.461,10.884Z" transform="translate(1393.415 134.388) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12490" data-name="Path 12490" d="M0,11.1,11,0H45.345L34.461,10.884Z" transform="translate(1393.415 213.313) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12491" data-name="Path 12491" d="M0,11.1,11,0H45.345L34.461,10.884Z" transform="translate(1393.415 253.239) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12492" data-name="Path 12492" d="M52.465,12.047,42.8,2.378H0L1.827,0H117.295l3.644,3.646H98.908l-8.4,8.4Z" transform="translate(1410.665 115.047) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12493" data-name="Path 12493" d="M219.83,6.037a3.019,3.019,0,1,1,3.019-3.019,3.019,3.019,0,0,1-3.019,3.019" transform="translate(1180.45 374.342)" fill="#2b47be"/>
                        <path id="Path_12496" data-name="Path 12496" d="M374.359,0,361.548,12.811H0v1.268H362.074L374.885,1.268H463.8V0Z" transform="translate(1388.849 194.908) rotate(90)" fill="#2b47be"/>
                        <ellipse id="Ellipse_13" data-name="Ellipse 13" cx="3.5" cy="3.5" rx="3.5" ry="3.5" transform="translate(1384.671 655.882)" fill="#2b47be"/>
                        <path id="Path_12498" data-name="Path 12498" d="M0,8.716H17.332L26.048,0h20.1l-4,3.995H36.281L26.9,13.382H3.341Z" transform="translate(1429.466 645.018) rotate(90)" fill="#2b47be"/>
                        <path id="Path_12497" data-name="Path 12497" d="M173.756,18.745h-21.4L133.607,0H0L6.754,6.754h120.67L145.966,25.3h35.363Z" transform="translate(1432.3 495.078) rotate(90)" fill="#2b47be"/>
                    </g>
                    
                    {/* top Panels */}
                    <g className="contact-top-panels" id="Group_1006" data-name="Group 1006">
                        <rect id="Rectangle_603" data-name="Rectangle 603" width="266.464" height="3.317" transform="translate(516.77 77.555)" fill="#2b47be"/>
                        <path id="Path_12499" data-name="Path 12499" d="M103.647,0,96.5,7.151H7.137L0,.014Z" transform="translate(509.634 77.417)" fill="#2b47be"/>
                        <rect id="Rectangle_604" data-name="Rectangle 604" width="266.465" height="3.317" transform="translate(1136.661 77.748)" fill="#2b47be"/>
                        <path id="Path_12500" data-name="Path 12500" d="M0,0,7.151,7.151H96.51L103.647.014Z" transform="translate(1306.614 77.609)" fill="#2b47be"/>
                    </g>
                </g>

                <foreignObject width="100%" height="100%">
                    <div className="contact-form-container">
                        <h1>Let's Get in Touch</h1>
                        <div className="contact-form-container-form">
                            <div className="contact-form-container-form-inputs">
                                <InputField placeholder="Name..." inputValue={inputValue} onChange={onInputChange} />
                                <InputField placeholder="Email..." inputValue={inputValue} onChange={onInputChange} />
                                <InputField placeholder="Subject..." inputValue={inputValue} onChange={onInputChange} />
                            </div>
                            <div>
                                <InputMessageBox placeholder="Message..." messageValue={messageValue} onChange={onMessageChange} />
                            </div>
                        </div>
                        <div className="contact-form-container-submit">
                            <Button label="Submit" />
                        </div>
                    </div>
                </foreignObject>

                </svg>
        
        </div>
    )
}