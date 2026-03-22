import './alister.css';

export default function Alister() {

  /* !incomplete 
  
  This hud concept will interact with the user as they navigate the web app via the hover effect
    1) track thew mouse when it hovers over objects. 
    2) pass the object id into a function that changes the text displayed for the alister hud
  
  */

  return (
    <div className="alister">
      
<svg width="666.648" height="276.243" viewBox="0 0 666.648 276.243">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_141" data-name="Rectangle 141" width="57.48" height="1.369" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <rect id="Rectangle_138" data-name="Rectangle 138" width="28.059" height="45.399" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <rect id="Rectangle_143" data-name="Rectangle 143" width="10.039" height="17.054" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-4">
      <rect id="Rectangle_145" data-name="Rectangle 145" width="390.558" height="178.261" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-5">
      <rect id="Rectangle_6" data-name="Rectangle 6" width="9.914" height="22.554" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-6">
      <rect id="Rectangle_7" data-name="Rectangle 7" width="8.364" height="22.317" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-7">
      <rect id="Rectangle_8" data-name="Rectangle 8" width="6.781" height="21.99" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-8">
      <rect id="Rectangle_9" data-name="Rectangle 9" width="7.065" height="22.051" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-9">
      <rect id="Rectangle_10" data-name="Rectangle 10" width="8.646" height="22.356" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-10">
      <rect id="Rectangle_11" data-name="Rectangle 11" width="10.187" height="22.578" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-11">
      <rect id="Rectangle_12" data-name="Rectangle 12" width="11.685" height="22.632" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-12">
      <rect id="Rectangle_13" data-name="Rectangle 13" width="13.106" height="22.599" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-13">
      <rect id="Rectangle_14" data-name="Rectangle 14" width="14.467" height="22.394" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-14">
      <rect id="Rectangle_15" data-name="Rectangle 15" width="22.598" height="13.11" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-15">
      <rect id="Rectangle_16" data-name="Rectangle 16" width="22.393" height="14.47" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-16">
      <rect id="Rectangle_17" data-name="Rectangle 17" width="22.105" height="15.727" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-17">
      <rect id="Rectangle_18" data-name="Rectangle 18" width="21.666" height="16.906" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-18">
      <rect id="Rectangle_19" data-name="Rectangle 19" width="21.119" height="17.979" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-19">
      <rect id="Rectangle_20" data-name="Rectangle 20" width="20.464" height="18.943" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-20">
      <rect id="Rectangle_21" data-name="Rectangle 21" width="19.669" height="19.824" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-21">
      <rect id="Rectangle_22" data-name="Rectangle 22" width="18.797" height="20.568" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-22">
      <rect id="Rectangle_23" data-name="Rectangle 23" width="17.788" height="21.236" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-23">
      <rect id="Rectangle_24" data-name="Rectangle 24" width="20.569" height="18.795" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-24">
      <rect id="Rectangle_25" data-name="Rectangle 25" width="21.237" height="17.785" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-25">
      <rect id="Rectangle_26" data-name="Rectangle 26" width="21.749" height="16.704" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-26">
      <rect id="Rectangle_27" data-name="Rectangle 27" width="22.182" height="15.502" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-27">
      <rect id="Rectangle_28" data-name="Rectangle 28" width="22.447" height="14.229" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-28">
      <rect id="Rectangle_29" data-name="Rectangle 29" width="22.625" height="12.859" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-29">
      <rect id="Rectangle_30" data-name="Rectangle 30" width="22.638" height="11.422" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-30">
      <rect id="Rectangle_31" data-name="Rectangle 31" width="22.554" height="9.918" fill="#2b47be"/>
    </clipPath>
    <clipPath id="clip-path-31">
      <rect id="Rectangle_32" data-name="Rectangle 32" width="22.317" height="8.368" fill="#2b47be"/>
    </clipPath>
  </defs>



  <g id="Group_878" data-name="Group 878" transform="translate(-690.254 -404.459)">

    <g className="phase-one-startup-textbox">
        <rect id="Rectangle_137" data-name="Rectangle 137" width="114.93" height="1.369" transform="translate(822.754 546.069) rotate(-40.85)" fill="#2b47be"/>
        <path id="Path_666" data-name="Path 666" d="M419.646,60.743h-1.73V6.6H106.381V5.235H419.646Z" transform="translate(937.256 410.685)" fill="#2b47be"/>
        <path id="Path_665" data-name="Path 665" d="M46.456,60.743H45.088V5.235h114.6V6.6H46.456Z" transform="translate(864.375 410.685)" fill="#2b47be"/>
        <rect id="Rectangle_139" data-name="Rectangle 139" width="218.62" height="1.368" transform="translate(1088.949 406.795)" fill="#2b47be"/>
    </g>

    {/* the three dots */}
    <g id="Group_874" data-name="Group 874">
      <path className="phase-three-startup-textbox" id="Path_659" data-name="Path 659" d="M207.727,6.037a3.019,3.019,0,1,0-3.019-3.019,3.018,3.018,0,0,0,3.019,3.019" transform="translate(1113.172 404.459)" fill="#2b47be"/>
      <path className="phase-three-startup-textbox" id="Path_660" data-name="Path 660" d="M213.779,6.037a3.019,3.019,0,1,0-3.019-3.019,3.018,3.018,0,0,0,3.019,3.019" transform="translate(1120.367 404.459)" fill="#2b47be"/>
      <path className="phase-three-startup-textbox" id="Path_661" data-name="Path 661" d="M219.83,6.037a3.019,3.019,0,1,0-3.019-3.019,3.019,3.019,0,0,0,3.019,3.019" transform="translate(1127.563 404.459)" fill="#2b47be"/>
    </g>
    
    <g id="Group_876" data-name="Group 876"> 
      <path id="Path_667" data-name="Path 667" d="M100.128,1.379h0Z" transform="translate(929.82 406.1)" fill="#2b47be"/>
      
    </g>

    {/* rectangle bar */}
    <g className="phase-three-startup-textbox-bar" id="Group_873" data-name="Group 873">
      <path id="Path_668" data-name="Path 668" d="M230.637,7.872v11.8h-11.8l-11.8-11.8Z" transform="translate(1115.945 413.82)" fill="#2b47be"/>
      <path id="Path_669" data-name="Path 669" d="M210.818,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1104.848 413.82)" fill="#2b47be"/>
      <path id="Path_670" data-name="Path 670" d="M201.685,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1093.988 413.82)" fill="#2b47be"/>
      <path id="Path_671" data-name="Path 671" d="M192.553,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1083.129 413.82)" fill="#2b47be"/>
      <path id="Path_672" data-name="Path 672" d="M183.42,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1072.27 413.82)" fill="#2b47be"/>
      <path id="Path_673" data-name="Path 673" d="M174.287,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1061.41 413.82)" fill="#2b47be"/>
      <path id="Path_674" data-name="Path 674" d="M165.155,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1050.551 413.82)" fill="#2b47be"/>
      <path id="Path_675" data-name="Path 675" d="M156.022,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1039.691 413.82)" fill="#2b47be"/>
      <path id="Path_676" data-name="Path 676" d="M146.889,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1028.832 413.82)" fill="#2b47be"/>
      <path id="Path_677" data-name="Path 677" d="M137.757,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1017.975 413.82)" fill="#2b47be"/>
      <path id="Path_678" data-name="Path 678" d="M128.624,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(1007.115 413.82)" fill="#2b47be"/>
      <path id="Path_679" data-name="Path 679" d="M119.491,7.872l11.8,11.8H118.18l-11.8-11.8Z" transform="translate(996.256 413.82)" fill="#2b47be"/>
    </g>
    <g id="Group_877" data-name="Group 877">
      <g id="Group_266" data-name="Group 266" transform="translate(1204.42 632.151)" opacity="0.5">
        <g id="Group_265" data-name="Group 265">
          <g id="Group_264" data-name="Group 264" clip-path="">
            <rect className="phase-three-startup-textbox" id="Rectangle_140" data-name="Rectangle 140" width="57.478" height="1.368" transform="translate(0.002 0.002)" fill="#2b47be"/>
          </g>
        </g>
      </g>
      {/* bottom bar */}
      <rect className="phase-three-startup-textbox" id="Rectangle_142" data-name="Rectangle 142" width="36.603" height="2.738" transform="translate(1225.297 634.925)" fill="#2b47be"/>
    </g>
    <g id="Group_875" data-name="Group 875">
      <g id="Group_263" data-name="Group 263" transform="translate(877.027 446.753)" opacity="0.5">
        <g id="Group_262" data-name="Group 262">
          <g id="Group_261" data-name="Group 261" clip-path="">
            <path className="phase-three-startup-textbox" id="Path_664" data-name="Path 664" d="M31.175,64.719l-.9-1.029L56.96,40.2V19.321h1.368v21.5Z" transform="translate(-30.271 -19.321)" fill="#2b47be"/>
          </g>
        </g>
      </g>

      <g id="Group_269" data-name="Group 269" transform="translate(912.672 418.979)" opacity="0.5">
        <g id="Group_268" data-name="Group 268">
          <g id="Group_267" data-name="Group 267" clip-path="">
            <path className="phase-three-startup-textbox" id="Path_680" data-name="Path 680" d="M47.923,23.687H46.555V6.632H56.594V8H47.923Z" transform="translate(-46.554 -6.633)" fill="#2b47be"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Group_272" data-name="Group 272" transform="translate(959.852 446.753)" opacity="0.22">
      <g id="Group_271" data-name="Group 271">
        <g id="Group_270" data-name="Group 270" clip-path="">
            {/* background panel */}
          <rect className="phase-two-startup-textbox" id="Rectangle_144" data-name="Rectangle 144" width="390.557" height="178.264" transform="translate(0.001 -0.007)" fill="#2b47be"/>
        </g>
      </g>
    </g>
    <text className="phase-three-startup-textbox" id="Text_" data-name="Text…|" transform="translate(975 452)" fill="#d9ddef" font-size="20" font-family="Hansson-Stencil-MN"><tspan x="0" y="17">TEXT…</tspan><tspan y="17" fill="#e55213">|</tspan></text>
  </g>



{/* where the circle starts */}
  <g className="" id="Group_879" data-name="Group 879" transform="translate(-493 -404.398)">

    {/* Third Ring */}
    <g className="phase-one-startup" id="Group_864" data-name="Group 864" transform="translate()">
      <path id="Path_106" data-name="Path 106" d="M65.021,165.7a81.435,81.435,0,0,0,19.637,6.938,83.745,83.745,0,0,0,20.812,1.778,82.6,82.6,0,0,0,20.568-3.437,82.506,82.506,0,0,0,47.884-38.205A82.079,82.079,0,0,0,184.746,92.86l-5.718-.069q-1.984,1.47-3.948,2.791a72.7,72.7,0,0,1-8.022,29.722,72.294,72.294,0,0,1-19.626,23.823c.053,1.58.115,3.259.052,4.851a76.957,76.957,0,0,1-78.095,7.5c-.618-.255-1.2-.585-1.8-.886l-1.98-1.008-1.927-1.1c.168,1.189.348,2.412.568,3.62q.35,1.777.767,3.6" transform="translate(515.626 463.966)" fill="#2b47be"/>
      <path id="Path_107" data-name="Path 107" d="M144.094,146.761a69.085,69.085,0,0,0,26.754-51.178q2.513-1.6,5.066-3.445l.321.245q-2.482,1.791-4.928,3.356a69.55,69.55,0,0,1-26.825,51.306c.05.947.108,1.935.115,2.885s0,1.912-.02,2.888a74.279,74.279,0,0,1-79.926,3.629l.233-.4a73.829,73.829,0,0,0,79.31-3.525c.035-1.949.03-3.831-.1-5.761" transform="translate(515.969 463.734)" fill="#2b47be"/>
      <path id="Path_177" data-name="Path 177" d="M68.341,41.137c-.747.451-1.447.972-2.158,1.477s-1.431,1-2.126,1.523c-1.353,1.1-2.778,2.113-4.066,3.293a85.844,85.844,0,0,0-7.52,7.276l-1.71,1.981-.859.988L49.1,58.708l-1.62,2.055L45.964,62.9,45.2,63.96l-.7,1.1-1.415,2.2-1.3,2.265c-.442.752-.878,1.506-1.256,2.292a80.748,80.748,0,0,0-7.268,19.516,85.42,85.42,0,0,0-1.751,10.3,87.629,87.629,0,0,0-.388,10.471c.028.874.027,1.75.075,2.622l.2,2.61.095,1.305.167,1.3.327,2.594a84.82,84.82,0,0,0,5.664,20.047c.749,1.571,1.376,3.2,2.217,4.727l1.189,2.327,1.306,2.263L43,153.029l.709,1.1,1.408,2.2,1.517,2.132c.5.717,1,1.424,1.56,2.1l1.614,2.059,1.71,1.983c1.106,1.351,2.373,2.557,3.555,3.841a84.3,84.3,0,0,0,7.839,6.928c1.344,1.115,2.8,2.075,4.214,3.1.706.512,1.464.947,2.19,1.428.739.461,1.45.969,2.22,1.38l2.922-4.913c-.213-1.578-.306-3.258-.405-4.833a73.664,73.664,0,0,1-12.077-9.759,74.41,74.41,0,0,1-9.721-12.108,72.083,72.083,0,0,1-10.814-28.806q-2.088-1.12-4.216-2.387a78.683,78.683,0,0,1-.389-10.318A76.3,76.3,0,0,1,37.771,97.9c.313-1.685.568-3.383,1-5.042.342-1.681.847-3.316,1.306-4.966a75.024,75.024,0,0,1,3.64-9.6A77.017,77.017,0,0,1,69.825,47.039c.539-.4,1.087-.781,1.66-1.128,1.251-.794,2.48-1.625,3.785-2.33-2.259-.946-4.539-1.709-6.93-2.445" transform="translate(504.041 445.615)" fill="#2b47be"/>
      <path id="Path_178" data-name="Path 178" d="M43.028,118.34a67.354,67.354,0,0,0,10.135,27.694,70.757,70.757,0,0,0,9.285,11.646,69.032,69.032,0,0,0,11.577,9.376q.045,1.5.137,3.052c.062,1.029.175,2.014.285,3.044l-.375.163c-.24-1.958-.347-3.989-.411-5.94a69.078,69.078,0,0,1-31.076-48.84q-1.262-.646-2.538-1.348l-1.279-.714-1.228-.749a73.971,73.971,0,0,1,8.012-40.933A74.809,74.809,0,0,1,74.4,44.611l.232.4A74.353,74.353,0,0,0,46,74.941a73.464,73.464,0,0,0-8,40.6c1.6,1.018,3.372,1.941,5.038,2.8" transform="translate(506.222 446.849)" fill="#2b47be"/>
      <path id="Path_248" data-name="Path 248" d="M185.147,108.974a83.486,83.486,0,0,0-3.8-20.5A81.768,81.768,0,0,0,172.5,69.61a85.416,85.416,0,0,0-6.123-8.476l-1.716-1.976-.854-.991-.908-.945-1.8-1.9-1.9-1.8a83.184,83.184,0,0,0-16.879-12.276,83,83,0,0,0-60.8-7.394c-1.667.5-3.362.9-5,1.506-.821.285-1.652.546-2.469.842l-2.429.961-1.213.48-1.189.542-2.381,1.071-2.324,1.2-1.164.592-1.133.651,2.8,4.983c1.479.609,2.96,1.33,4.386,2.055a72.286,72.286,0,0,1,29.75-7.923,73.195,73.195,0,0,1,30.426,5.057c1.354-.867,2.751-1.712,4.166-2.464a76.554,76.554,0,0,1,45.54,63.9l.156,2c.088,1.484.077,2.976.141,4.464,1.843-1.488,3.758-3.089,5.567-4.79" transform="translate(515.103 442.059)" fill="#2b47be"/>
      <path id="Path_249" data-name="Path 249" d="M127.918,46.328a69.522,69.522,0,0,0-29.136-5.058,68.144,68.144,0,0,0-28.538,7.522c-.885-.477-1.8-.957-2.715-1.409q-1.36-.644-2.778-1.266l.046-.405c.92.4,1.817.806,2.706,1.233q1.35.677,2.647,1.373a68.538,68.538,0,0,1,28.611-7.511,69.927,69.927,0,0,1,29.209,5.043c1.61-1.091,3.227-2,4.944-2.965a74.4,74.4,0,0,1,43.148,67.461H175.6a73.938,73.938,0,0,0-42.749-66.983c-1.717.974-3.323,1.872-4.93,2.965" transform="translate(516.005 445.476)" fill="#2b47be"/>
    </g>

    {/* second ring */}
    <g className="phase-two-startup" id="Group_865" data-name="Group 865" transform="translate(0.203)">
      <path id="Path_595" data-name="Path 595" d="M1.06,6.967a64.692,64.692,0,0,1,15.6-5.511A66.527,66.527,0,0,1,33.192.043a65.614,65.614,0,0,1,16.339,2.73A65.543,65.543,0,0,1,87.57,33.123a65.2,65.2,0,0,1,8.6,31.707l-4.542.055q-1.576-1.168-3.136-2.217a57.752,57.752,0,0,0-6.372-23.611A57.43,57.43,0,0,0,66.527,20.133c.042-1.255.092-2.589.041-3.853A61.134,61.134,0,0,0,4.53,10.319c-.491.2-.953.465-1.427.7l-1.573.8L0,12.7c.134-.944.277-1.916.451-2.876q.278-1.411.609-2.859" transform="translate(624.447 483.333) rotate(30)" fill="#2b47be"/>
      <path id="Path_596" data-name="Path 596" d="M29.6,111.331c-.593-.359-1.15-.772-1.714-1.174s-1.137-.792-1.689-1.21c-1.074-.875-2.207-1.678-3.23-2.616a68.193,68.193,0,0,1-5.974-5.78l-1.359-1.574-.683-.785-.64-.819L13.026,95.74l-1.2-1.7-.605-.844-.56-.875L9.536,90.578,8.5,88.779c-.351-.6-.7-1.2-1-1.821a64.145,64.145,0,0,1-5.774-15.5A67.859,67.859,0,0,1,.337,63.276a69.613,69.613,0,0,1-.308-8.318c.023-.694.022-1.39.059-2.083L.249,50.8l.075-1.037.132-1.03.259-2.061a67.38,67.38,0,0,1,4.5-15.925c.6-1.248,1.093-2.542,1.761-3.755l.944-1.849,1.038-1.8.515-.9.563-.873,1.119-1.751,1.2-1.694c.394-.57.8-1.132,1.239-1.668l1.282-1.635,1.359-1.575c.879-1.073,1.885-2.032,2.824-3.051a66.966,66.966,0,0,1,6.227-5.5c1.068-.886,2.226-1.648,3.347-2.463.561-.407,1.163-.753,1.74-1.135C30.965.73,31.53.326,32.141,0l2.321,3.9c-.169,1.253-.243,2.588-.322,3.839a58.518,58.518,0,0,0-9.594,7.753,59.111,59.111,0,0,0-7.723,9.618A57.262,57.262,0,0,0,8.234,48q-1.659.89-3.349,1.9a62.505,62.505,0,0,0-.309,8.2,60.61,60.61,0,0,0,.741,8.152c.249,1.338.451,2.687.793,4.005.271,1.335.673,2.634,1.038,3.945a59.6,59.6,0,0,0,2.892,7.625,61.181,61.181,0,0,0,20.74,24.827c.428.315.863.62,1.319.9.994.631,1.97,1.291,3.007,1.851-1.795.751-3.606,1.358-5.5,1.942" transform="translate(589.463 473.718) rotate(30)" fill="#2b47be"/>
      <path id="Path_597" data-name="Path 597" d="M97.658,3.8a66.321,66.321,0,0,1-3.022,16.283,64.956,64.956,0,0,1-7.027,14.988,67.853,67.853,0,0,1-4.864,6.733l-1.363,1.57-.678.787-.721.75-1.433,1.507-1.507,1.433a66.082,66.082,0,0,1-13.408,9.752,66.812,66.812,0,0,1-15.4,6.052,67.464,67.464,0,0,1-16.463,1.985,67.329,67.329,0,0,1-16.438-2.163c-1.324-.4-2.671-.716-3.969-1.2-.652-.226-1.312-.434-1.962-.669l-1.929-.763-.964-.381-.944-.431-1.892-.851-1.846-.95L.9,57.771,0,57.255,2.226,53.3C3.4,52.812,4.578,52.24,5.71,51.664a57.424,57.424,0,0,0,23.633,6.294,58.146,58.146,0,0,0,24.17-4.017c1.076.689,2.186,1.36,3.31,1.957A61.114,61.114,0,0,0,81.884,35.447a61.491,61.491,0,0,0,7.633-14.4A61.248,61.248,0,0,0,93,5.139l.124-1.592c.07-1.179.061-2.364.112-3.546,1.464,1.182,2.985,2.454,4.423,3.8" transform="translate(590.26 539.375) rotate(30)" fill="#2b47be"/>
    </g>

    {/* Dot Ring */}
    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(576 514)" fill="none" stroke="#2b47be" stroke-linecap="round" stroke-width="4" stroke-dasharray="0 10">
      <circle className="phase-zero-startup-circle-scale-out" cx="41.5" cy="41.5" r="41.5" stroke="none"/>
      <circle className="phase-zero-startup-circle-scale-out" cx="41.5" cy="41.5" r="39.5" fill="none"/>
    </g>


    {/* Main Center Circle */}
    <circle className="phase-zero-startup-circle" id="Ellipse_2" data-name="Ellipse 2" cx="20.5" cy="20.5" r="20.5" transform="translate(597 535)" fill="#2b47be"/>
    
    <g id="Group_866" data-name="Group 866" transform="translate(-98.004 -157.764)">
        {/* Inner Center Circle */}
      <g className="left-panel-phase-one-circle" id="Group_853" data-name="Group 853" transform="translate(102.459 -90)">
        <path id="Path_12694" data-name="Path 12694" d="M8.089,71.773a4.44,4.44,0,1,0-4.442-4.442,4.442,4.442,0,0,0,4.442,4.442" transform="translate(605.283 736.241)" fill="#2b47be"/>
        <path id="Path_12695" data-name="Path 12695" d="M12.425,84.1A12.425,12.425,0,1,1,24.85,71.67,12.438,12.438,0,0,1,12.425,84.1m0-23.482A11.057,11.057,0,1,0,23.482,71.67,11.07,11.07,0,0,0,12.425,60.613" transform="translate(600.946 731.905)" fill="#2b47be"/>
      </g>
    </g>

    {/* Entire Outer Ring */}
    <g className="outer-ring-phase-one-startup" id="Group_870" data-name="Group 870">
        {/* 1/3rd inner bottom right */}
      <g className="" id="Group_856" data-name="Group 856">
        {/* inside the 1/3 */}
        <g className="" id="Group_855" data-name="Group 855">
          <path id="Path_110" data-name="Path 110" d="M161.117,98.655c.18-1.824.2-3.657.245-5.489l21.808.329c-.052,2.251-.089,4.5-.3,6.748Z" transform="translate(550.24 464.099)" fill="#2b47be"/>
          <path id="Path_111" data-name="Path 111" d="M160.565,103.8l.346-2.724c.121-.908.239-1.815.287-2.731l21.725,1.939c-.069,1.125-.207,2.244-.355,3.362l-.43,3.357Z" transform="translate(550.044 465.938)" fill="#2b47be"/>
          <path id="Path_112" data-name="Path 112" d="M159.6,108.863c.454-1.774.73-3.585,1.06-5.385l21.519,3.555c-.4,2.221-.759,4.451-1.306,6.642Z" transform="translate(549.7 467.763)" fill="#2b47be"/>
          <path id="Path_113" data-name="Path 113" d="M158.282,113.846l.748-2.64c.259-.878.5-1.759.693-2.655l21.191,5.161c-.239,1.1-.538,2.193-.854,3.277l-.928,3.258Z" transform="translate(549.232 469.565)" fill="#2b47be"/>
          <path id="Path_114" data-name="Path 114" d="M156.563,118.695c.709-1.689,1.269-3.432,1.855-5.164l20.742,6.741c-.72,2.141-1.424,4.287-2.289,6.374Z" transform="translate(548.622 471.334)" fill="#2b47be"/>
          <path id="Path_115" data-name="Path 115" d="M154.515,123.411c.73-1.678,1.553-3.316,2.216-5.021l20.176,8.283c-.825,2.1-1.823,4.131-2.738,6.194Z" transform="translate(547.895 473.061)" fill="#2b47be"/>
          <path id="Path_116" data-name="Path 116" d="M152.078,127.931c.45-.8.928-1.579,1.355-2.387l1.251-2.445,19.5,9.776-1.546,3.013c-.529,1-1.11,1.962-1.667,2.945Z" transform="translate(547.029 474.733)" fill="#2b47be"/>
          <path id="Path_117" data-name="Path 117" d="M149.337,132.271c1.006-1.529,2.007-3.063,2.953-4.628L171,138.851c-1.164,1.93-2.4,3.822-3.642,5.7Z" transform="translate(546.055 476.348)" fill="#2b47be"/>
          <path id="Path_118" data-name="Path 118" d="M146.252,136.371l1.7-2.159,1.6-2.235,17.822,12.573L165.4,147.3l-2.087,2.662Z" transform="translate(544.959 477.888)" fill="#2b47be"/>
          <path id="Path_119" data-name="Path 119" d="M142.88,140.234c1.26-1.328,2.416-2.751,3.625-4.127l16.837,13.864c-1.477,1.7-2.912,3.444-4.46,5.082Z" transform="translate(543.761 479.355)" fill="#2b47be"/>
          <path id="Path_120" data-name="Path 120" d="M139.219,143.831c1.325-1.263,2.669-2.509,3.907-3.863l15.758,15.077c-1.527,1.657-3.171,3.2-4.807,4.752Z" transform="translate(542.46 480.727)" fill="#2b47be"/>
          <path id="Path_121" data-name="Path 121" d="M135.3,147.13l1.08-.847,1.039-.9,2.076-1.8,14.6,16.2-2.553,2.216-1.282,1.1-1.327,1.046Z" transform="translate(541.067 482.012)" fill="#2b47be"/>
          <path id="Path_122" data-name="Path 122" d="M131.14,150.143c1.477-1.08,3.018-2.076,4.43-3.245l13.352,17.246c-1.747,1.427-3.631,2.673-5.458,3.993Z" transform="translate(539.59 483.188)" fill="#2b47be"/>
          <path id="Path_123" data-name="Path 123" d="M126.756,152.8c1.607-.877,3.125-1.906,4.67-2.885l12.031,18.192c-1.9,1.216-3.777,2.468-5.754,3.558Z" transform="translate(538.032 484.262)" fill="#2b47be"/>
          <path id="Path_124" data-name="Path 124" d="M122.191,155.162l2.444-1.252c.816-.413,1.633-.825,2.418-1.3l10.638,19.04c-.97.576-1.976,1.09-2.982,1.6l-3.014,1.54Z" transform="translate(536.411 485.218)" fill="#2b47be"/>
          <path id="Path_125" data-name="Path 125" d="M117.443,157.12c.847-.346,1.712-.648,2.545-1.026l2.5-1.132,9.179,19.784-3.086,1.393c-1.029.462-2.093.846-3.139,1.27Z" transform="translate(534.724 486.053)" fill="#2b47be"/>
          <path id="Path_126" data-name="Path 126" d="M112.566,158.758c1.729-.594,3.48-1.134,5.188-1.79l7.667,20.418c-2.109.806-4.265,1.485-6.4,2.206Z" transform="translate(532.991 486.766)" fill="#2b47be"/>
          <path id="Path_127" data-name="Path 127" d="M107.562,159.974c.889-.211,1.786-.4,2.671-.628l2.639-.751,6.11,20.938-3.259.922c-1.1.283-2.2.52-3.3.781Z" transform="translate(531.214 487.345)" fill="#2b47be"/>
        </g>

        {/* opacity of the 1/3 */}
        <g className="" id="Group_852" data-name="Group 852">
          <g id="Group_10" data-name="Group 10" transform="translate(631.887 647.663)" opacity="0.68">
            <g id="Group_9" data-name="Group 9">
              <g id="Group_8" data-name="Group 8" clip-path="url(#clip-path-5)">
                <path id="Path_128" data-name="Path 128" d="M102.479,160.855c1.8-.321,3.61-.609,5.4-.988l4.514,21.339c-2.208.466-4.436.831-6.66,1.216Z" transform="translate(-102.479 -159.867)" fill="#2b47be"/>
              </g>
            </g>
          </g>

          <g id="Group_13" data-name="Group 13" transform="translate(624.907 648.842)" opacity="0.68">
            <g id="Group_12" data-name="Group 12">
              <g id="Group_11" data-name="Group 11" clip-path="url(#clip-path-6)">
                <path id="Path_129" data-name="Path 129" d="M97.329,161.306c.912-.076,1.828-.122,2.738-.221l2.724-.348,2.9,21.617-3.357.423c-1.121.121-2.246.186-3.368.279Z" transform="translate(-97.329 -160.737)" fill="#2b47be"/>
              </g>
            </g>
          </g>
          <g id="Group_16" data-name="Group 16" transform="translate(617.889 649.528)" opacity="0.68">
            <g id="Group_15" data-name="Group 15">
              <g id="Group_14" data-name="Group 14" clip-path="url(#clip-path-7)">
                <path id="Path_130" data-name="Path 130" d="M92.15,161.423c1.831-.068,3.666-.052,5.493-.18l1.288,21.772c-2.247.153-4.5.149-6.749.218Z" transform="translate(-92.15 -161.243)" fill="#2b47be"/>
              </g>
            </g>
          </g>
          <g id="Group_19" data-name="Group 19" transform="translate(609.293 649.432)" opacity="0.68">
            <g id="Group_18" data-name="Group 18">
              <g id="Group_17" data-name="Group 17" clip-path="url(#clip-path-8)">
                <path id="Path_131" data-name="Path 131" d="M87.384,161.172c1.824.18,3.658.2,5.489.243l-.317,21.808c-2.251-.053-4.5-.085-6.748-.3Z" transform="translate(-85.808 -161.172)" fill="#2b47be"/>
              </g>
            </g>
          </g>
          <g id="Group_22" data-name="Group 22" transform="translate(600.697 648.685)" opacity="0.68">
            <g id="Group_21" data-name="Group 21">
              <g id="Group_20" data-name="Group 20" clip-path="url(#clip-path-9)">
                <path id="Path_132" data-name="Path 132" d="M82.658,160.621l2.724.346c.907.123,1.816.234,2.731.286l-1.927,21.725c-1.125-.069-2.244-.2-3.364-.352l-3.356-.428Z" transform="translate(-79.465 -160.621)" fill="#2b47be"/>
              </g>
            </g>
          </g>
          <g id="Group_25" data-name="Group 25" transform="translate(592.193 647.38)" opacity="0.68">
            <g id="Group_24" data-name="Group 24">
              <g id="Group_23" data-name="Group 23" clip-path="url(#clip-path-10)">
                <path id="Path_133" data-name="Path 133" d="M77.993,159.658c1.774.454,3.586.726,5.386,1.058l-3.544,21.52c-2.221-.4-4.451-.755-6.644-1.3Z" transform="translate(-73.191 -159.658)" fill="#2b47be"/>
              </g>
            </g>
          </g>
          <g id="Group_28" data-name="Group 28" transform="translate(583.82 645.599)" opacity="0.68">
            <g id="Group_27" data-name="Group 27">
              <g id="Group_26" data-name="Group 26" clip-path="url(#clip-path-11)">
                <path id="Path_134" data-name="Path 134" d="M73.4,158.344l2.64.748c.877.262,1.759.5,2.656.69l-5.15,21.194c-1.1-.239-2.194-.533-3.278-.85l-3.257-.928Z" transform="translate(-67.013 -158.344)" fill="#2b47be"/>
              </g>
            </g>
          </g>
          <g id="Group_31" data-name="Group 31" transform="translate(575.65 643.274)" opacity="0.68">
            <g id="Group_30" data-name="Group 30">
              <g id="Group_29" data-name="Group 29" clip-path="url(#clip-path-12)">
                <path id="Path_135" data-name="Path 135" d="M68.926,156.628c1.689.709,3.433,1.263,5.165,1.853l-6.73,20.746c-2.14-.722-4.288-1.42-6.375-2.286Z" transform="translate(-60.985 -156.629)" fill="#2b47be"/>
              </g>
            </g>
          </g>
          <g id="Group_34" data-name="Group 34" transform="translate(567.702 640.5)" opacity="0.68">
            <g id="Group_33" data-name="Group 33">
              <g id="Group_32" data-name="Group 32" clip-path="url(#clip-path-13)">
                <path id="Path_136" data-name="Path 136" d="M64.565,154.582c1.678.729,3.315,1.556,5.023,2.213l-8.274,20.181c-2.1-.821-4.131-1.822-6.194-2.735Z" transform="translate(-55.12 -154.581)" fill="#2b47be"/>
              </g>
            </g>
          </g>
        </g>
      </g>

    {/* 2/3rd inner bottom left */}
      <g className="outer-ring-phase-one-startup" id="Group_863" data-name="Group 863">
        <path id="Path_181" data-name="Path 181" d="M56.3,149.381c1.527,1.007,3.063,2.007,4.627,2.956L49.719,171.045c-1.93-1.167-3.823-2.4-5.7-3.643Z" transform="translate(508.639 484.071)" fill="#2b47be"/>
        <path id="Path_182" data-name="Path 182" d="M52.485,146.3l2.159,1.7,2.235,1.6L44.3,167.41l-2.748-1.971-2.66-2.087Z" transform="translate(506.817 482.975)" fill="#2b47be"/>
        <path id="Path_183" data-name="Path 183" d="M48.876,142.924c1.327,1.262,2.751,2.416,4.125,3.627L39.134,163.384c-1.7-1.479-3.444-2.911-5.081-4.462Z" transform="translate(505.098 481.777)" fill="#2b47be"/>
        <path id="Path_184" data-name="Path 184" d="M45.51,139.262c1.264,1.325,2.509,2.67,3.861,3.906L34.293,158.926c-1.659-1.529-3.2-3.174-4.752-4.808Z" transform="translate(503.495 480.476)" fill="#2b47be"/>
        <path id="Path_185" data-name="Path 185" d="M42.405,135.339l.847,1.08.9,1.039,1.8,2.076L29.74,154.129l-2.215-2.553-1.1-1.282-1.048-1.327Z" transform="translate(502.016 479.082)" fill="#2b47be"/>
        <path id="Path_186" data-name="Path 186" d="M39.569,131.182c1.082,1.477,2.076,3.018,3.243,4.432L25.565,148.962c-1.427-1.747-2.673-3.631-3.993-5.459Z" transform="translate(500.664 477.605)" fill="#2b47be"/>
        <path id="Path_187" data-name="Path 187" d="M37.042,126.8c.877,1.609,1.9,3.127,2.884,4.672L21.733,143.5c-1.216-1.9-2.467-3.778-3.558-5.754Z" transform="translate(499.457 476.047)" fill="#2b47be"/>
        <path id="Path_188" data-name="Path 188" d="M34.8,122.232l1.252,2.442c.415.816.824,1.634,1.3,2.419L18.306,137.727c-.577-.97-1.088-1.976-1.6-2.982l-1.54-3.014Z" transform="translate(498.388 474.425)" fill="#2b47be"/>
        <path id="Path_189" data-name="Path 189" d="M32.911,117.483c.346.847.649,1.712,1.026,2.545l1.132,2.5-19.787,9.177-1.392-3.086c-.461-1.03-.847-2.093-1.27-3.139Z" transform="translate(497.483 472.738)" fill="#2b47be"/>
        <path id="Path_190" data-name="Path 190" d="M31.32,112.606c.592,1.731,1.134,3.48,1.788,5.188l-20.42,7.663c-.8-2.109-1.485-4.264-2.2-6.4Z" transform="translate(496.725 471.005)" fill="#2b47be"/>
        <path id="Path_191" data-name="Path 191" d="M30.108,107.6c.211.89.4,1.786.626,2.671l.751,2.64-20.939,6.1-.922-3.259c-.281-1.094-.519-2.2-.778-3.3Z" transform="translate(496.143 469.228)" fill="#2b47be"/>
        <path id="Path_192" data-name="Path 192" d="M29.206,102.518c.318,1.8.61,3.61.987,5.4L8.854,112.429c-.466-2.208-.832-4.437-1.214-6.66Z" transform="translate(495.714 467.421)" fill="#2b47be"/>
        <path id="Path_193" data-name="Path 193" d="M28.694,97.369c.076.912.123,1.828.221,2.738l.347,2.724-21.617,2.9-.423-3.356c-.119-1.122-.186-2.247-.278-3.369Z" transform="translate(495.468 465.592)" fill="#2b47be"/>
        <path id="Path_194" data-name="Path 194" d="M28.491,92.19c.068,1.831.053,3.666.179,5.493L6.9,98.966c-.15-2.247-.148-4.5-.217-6.749Z" transform="translate(495.374 463.752)" fill="#2b47be"/>
        <path id="Path_195" data-name="Path 195" d="M28.76,87.424c-.18,1.824-.2,3.658-.244,5.49L6.708,92.593c.053-2.252.088-4.5.3-6.749Z" transform="translate(495.383 461.498)" fill="#2b47be"/>
        <path id="Path_196" data-name="Path 196" d="M29.392,82.7l-.346,2.724c-.123.907-.236,1.815-.286,2.731L7.035,86.22c.069-1.125.2-2.244.352-3.362l.43-3.356Z" transform="translate(495.499 459.245)" fill="#2b47be"/>
        <path id="Path_197" data-name="Path 197" d="M30.414,78.034c-.454,1.774-.728,3.586-1.058,5.384L7.835,79.872c.4-2.221.756-4.451,1.305-6.644Z" transform="translate(495.783 457.016)" fill="#2b47be"/>
        <path id="Path_198" data-name="Path 198" d="M31.743,73.443l-.748,2.64c-.26.878-.5,1.759-.69,2.655L9.111,73.585c.239-1.1.534-2.193.851-3.277l.928-3.258Z" transform="translate(496.237 454.821)" fill="#2b47be"/>
      </g>
    {/* the opacity bar */}
<g className="outer-ring-phase-one-startup" id="Group_861" data-name="Group 861">
        <g id="Group_37" data-name="Group 37" transform="translate(507.707 513.701)" opacity="0.68">
          <g id="Group_36" data-name="Group 36">
            <g id="Group_35" data-name="Group 35" clip-path="url(#clip-path-14)">
              <path id="Path_199" data-name="Path 199" d="M33.45,68.967c-.709,1.689-1.264,3.433-1.854,5.165L10.852,67.4c.721-2.14,1.42-4.288,2.286-6.375Z" transform="translate(-10.852 -61.022)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_40" data-name="Group 40" transform="translate(510.687 505.754)" opacity="0.68">
          <g id="Group_39" data-name="Group 39">
            <g id="Group_38" data-name="Group 38" clip-path="url(#clip-path-15)">
              <path id="Path_200" data-name="Path 200" d="M35.444,64.606c-.729,1.678-1.554,3.315-2.215,5.021L13.051,61.352c.823-2.1,1.821-4.131,2.736-6.195Z" transform="translate(-13.05 -55.158)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_43" data-name="Group 43" transform="translate(514.274 498.113)" opacity="0.68">
          <g id="Group_42" data-name="Group 42">
            <g id="Group_41" data-name="Group 41" clip-path="url(#clip-path-16)">
              <path id="Path_201" data-name="Path 201" d="M37.8,60.415c-.449.8-.93,1.578-1.354,2.388L35.2,65.247,15.7,55.478l1.545-3.011c.526-1,1.11-1.964,1.666-2.946Z" transform="translate(-15.697 -49.52)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_46" data-name="Group 46" transform="translate(518.427 490.777)" opacity="0.68">
          <g id="Group_45" data-name="Group 45">
            <g id="Group_44" data-name="Group 44" clip-path="url(#clip-path-17)">
              <path id="Path_202" data-name="Path 202" d="M40.426,56.383c-1,1.531-2.009,3.062-2.952,4.63l-18.714-11.2c1.16-1.933,2.4-3.822,3.638-5.7Z" transform="translate(-18.761 -44.107)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_49" data-name="Group 49" transform="translate(523.153 483.829)" opacity="0.68">
          <g id="Group_48" data-name="Group 48">
            <g id="Group_47" data-name="Group 47" clip-path="url(#clip-path-18)">
              <path id="Path_203" data-name="Path 203" d="M43.368,52.563l-1.7,2.159-1.594,2.236L22.248,44.393l1.969-2.751L26.3,38.98Z" transform="translate(-22.249 -38.98)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_52" data-name="Group 52" transform="translate(528.374 477.266)" opacity="0.68">
          <g id="Group_51" data-name="Group 51">
            <g id="Group_50" data-name="Group 50" clip-path="url(#clip-path-19)">
              <path id="Path_204" data-name="Path 204" d="M46.566,48.951c-1.258,1.331-2.418,2.751-3.623,4.128L26.1,39.222c1.475-1.7,2.912-3.444,4.457-5.085Z" transform="translate(-26.102 -34.138)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_55" data-name="Group 55" transform="translate(534.129 471.148)" opacity="0.68">
          <g id="Group_54" data-name="Group 54">
            <g id="Group_53" data-name="Group 53" clip-path="url(#clip-path-20)">
              <path id="Path_205" data-name="Path 205" d="M50.017,45.585c-1.327,1.263-2.667,2.51-3.9,3.863L30.348,34.377c1.529-1.657,3.17-3.2,4.806-4.753Z" transform="translate(-30.347 -29.624)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_58" data-name="Group 58" transform="translate(540.315 465.5)" opacity="0.68">
          <g id="Group_57" data-name="Group 57">
            <g id="Group_56" data-name="Group 56" clip-path="url(#clip-path-21)">
              <path id="Path_206" data-name="Path 206" d="M53.709,42.478l-1.082.847-1.037.9-2.076,1.8-14.6-16.2,2.555-2.216,1.279-1.1,1.327-1.048Z" transform="translate(-34.912 -25.456)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_61" data-name="Group 61" transform="translate(546.957 460.342)" opacity="0.68">
          <g id="Group_60" data-name="Group 60">
            <g id="Group_59" data-name="Group 59" clip-path="url(#clip-path-22)">
              <path id="Path_207" data-name="Path 207" d="M57.6,39.64c-1.479,1.079-3.017,2.078-4.429,3.246L39.813,25.644c1.747-1.426,3.628-2.675,5.456-3.994Z" transform="translate(-39.813 -21.65)" fill="#2b47be"/>
            </g>
          </g>
        </g>
      </g>


      {/* 3/3rds top right */}
      <g className="" id="Group_860" data-name="Group 860">
        <path id="Path_252" data-name="Path 252" d="M65.99,34.845c-1.615.858-3.284,1.621-4.861,2.549L50.5,18.35c1.95-1.136,4-2.1,6-3.14Z" transform="translate(510.94 436.404)" fill="#2b47be"/>
        <path id="Path_253" data-name="Path 253" d="M70.406,32.958c-.847.344-1.71.651-2.545,1.025l-2.5,1.132L56.187,15.328l3.086-1.393c1.031-.459,2.094-.846,3.14-1.269Z" transform="translate(512.962 435.5)" fill="#2b47be"/>
        <path id="Path_254" data-name="Path 254" d="M74.924,31.368c-1.731.59-3.479,1.136-5.188,1.786l-7.66-20.421c2.11-.8,4.265-1.484,6.405-2.2Z" transform="translate(515.054 434.741)" fill="#2b47be"/>
        <path id="Path_255" data-name="Path 255" d="M79.552,30.158c-.89.21-1.786.4-2.673.626l-2.639.751-6.1-20.94L71.4,9.673c1.094-.279,2.2-.519,3.3-.778Z" transform="translate(517.209 434.16)" fill="#2b47be"/>
        <path id="Path_256" data-name="Path 256" d="M84.241,29.257c-1.8.317-3.609.61-5.4.984L74.334,8.9c2.209-.464,4.437-.832,6.66-1.213Z" transform="translate(519.408 433.731)" fill="#2b47be"/>
        <path id="Path_257" data-name="Path 257" d="M88.985,28.744c-.912.076-1.828.125-2.738.22l-2.724.348-2.9-21.618,3.357-.423c1.121-.117,2.246-.184,3.369-.276Z" transform="translate(521.645 433.485)" fill="#2b47be"/>
        <path id="Path_258" data-name="Path 258" d="M93.749,28.543c-1.831.068-3.666.054-5.493.179L86.975,6.948c2.248-.149,4.5-.148,6.751-.215Z" transform="translate(523.899 433.392)" fill="#2b47be"/>
        <path id="Path_259" data-name="Path 259" d="M98.591,28.813c-1.823-.18-3.658-.2-5.489-.244L93.427,6.76c2.251.053,4.5.089,6.748.3Z" transform="translate(526.076 433.402)" fill="#2b47be"/>
        <path id="Path_260" data-name="Path 260" d="M103.732,29.445l-2.724-.346c-.908-.122-1.816-.237-2.731-.287l1.935-21.724c1.125.068,2.244.206,3.362.352l3.357.43Z" transform="translate(527.915 433.518)" fill="#2b47be"/>
        <path id="Path_261" data-name="Path 261" d="M108.8,30.468c-1.774-.454-3.585-.729-5.385-1.06l3.551-21.519c2.221.4,4.451.758,6.642,1.305Z" transform="translate(529.74 433.803)" fill="#2b47be"/>
        <path id="Path_262" data-name="Path 262" d="M113.783,31.8l-2.64-.748c-.878-.26-1.759-.5-2.655-.691l5.157-21.192c1.1.239,2.193.537,3.277.852l3.258.928Z" transform="translate(531.543 434.256)" fill="#2b47be"/>
        <path id="Path_263" data-name="Path 263" d="M118.631,33.507c-1.689-.709-3.432-1.267-5.165-1.854L120.2,10.909c2.14.72,4.288,1.422,6.375,2.288Z" transform="translate(533.312 434.875)" fill="#2b47be"/>
        <path id="Path_264" data-name="Path 264" d="M123.348,35.5c-1.678-.729-3.315-1.553-5.021-2.215l8.279-20.179c2.1.824,4.131,1.823,6.194,2.738Z" transform="translate(535.038 435.657)" fill="#2b47be"/>
        <path id="Path_265" data-name="Path 265" d="M127.869,37.86c-.8-.449-1.578-.928-2.388-1.355l-2.444-1.251,9.771-19.5,3.013,1.546c1,.527,1.964,1.11,2.945,1.666Z" transform="translate(536.711 436.598)" fill="#2b47be"/>
        <path id="Path_266" data-name="Path 266" d="M132.21,40.486c-1.53-1-3.062-2.009-4.63-2.953l11.205-18.712c1.931,1.161,3.822,2.4,5.7,3.64Z" transform="translate(538.325 437.687)" fill="#2b47be"/>
        <path id="Path_267" data-name="Path 267" d="M136.309,43.426l-2.159-1.7-2.235-1.6L144.484,22.31l2.75,1.968,2.662,2.087Z" transform="translate(539.865 438.926)" fill="#2b47be"/>
        <path id="Path_268" data-name="Path 268" d="M140.173,46.625c-1.33-1.259-2.751-2.418-4.127-3.624l13.86-16.839c1.7,1.476,3.444,2.912,5.084,4.459Z" transform="translate(541.333 440.294)" fill="#2b47be"/>
        <path id="Path_269" data-name="Path 269" d="M143.771,50.078c-1.263-1.327-2.51-2.669-3.863-3.9L154.981,30.41c1.659,1.529,3.2,3.171,4.753,4.807Z" transform="translate(542.705 441.804)" fill="#2b47be"/>
      </g>
      <g id="Group_859" data-name="Group 859">
        <g id="Group_64" data-name="Group 64" transform="translate(687.517 478.4)" opacity="0.68">
          <g id="Group_63" data-name="Group 63">
            <g id="Group_62" data-name="Group 62" clip-path="url(#clip-path-23)">
              <path id="Path_270" data-name="Path 270" d="M147.071,53.77l-.847-1.08-.9-1.038-1.8-2.076,16.2-14.6,2.216,2.553,1.1,1.282,1.048,1.327Z" transform="translate(-143.526 -34.975)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_67" data-name="Group 67" transform="translate(692.007 485.044)" opacity="0.68">
          <g id="Group_66" data-name="Group 66">
            <g id="Group_65" data-name="Group 65" clip-path="url(#clip-path-24)">
              <path id="Path_271" data-name="Path 271" d="M150.084,57.662c-1.08-1.477-2.078-3.017-3.245-4.43l17.243-13.355c1.427,1.747,2.674,3.629,3.994,5.458Z" transform="translate(-146.839 -39.877)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_70" data-name="Group 70" transform="translate(696.101 492.067)" opacity="0.68">
          <g id="Group_69" data-name="Group 69">
            <g id="Group_68" data-name="Group 68" clip-path="url(#clip-path-25)">
              <path id="Path_272" data-name="Path 272" d="M152.747,61.763c-.877-1.609-1.907-3.124-2.887-4.67l18.19-12.033c1.214,1.9,2.468,3.777,3.559,5.754Z" transform="translate(-149.86 -45.059)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_73" data-name="Group 73" transform="translate(699.749 499.455)" opacity="0.68">
          <g id="Group_72" data-name="Group 72">
            <g id="Group_71" data-name="Group 71" clip-path="url(#clip-path-26)">
              <path id="Path_273" data-name="Path 273" d="M155.1,66.012l-1.252-2.442c-.413-.817-.827-1.634-1.3-2.418L171.591,50.51c.576.97,1.091,1.975,1.6,2.98l1.54,3.015Z" transform="translate(-152.552 -50.51)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_76" data-name="Group 76" transform="translate(702.938 507.162)" opacity="0.68">
          <g id="Group_75" data-name="Group 75">
            <g id="Group_74" data-name="Group 74" clip-path="url(#clip-path-27)">
              <path id="Path_274" data-name="Path 274" d="M157.064,70.426c-.346-.847-.648-1.712-1.027-2.545l-1.132-2.5L174.688,56.2l1.393,3.086c.463,1.03.847,2.093,1.271,3.139Z" transform="translate(-154.905 -56.197)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_79" data-name="Group 79" transform="translate(705.658 515.142)" opacity="0.68">
          <g id="Group_78" data-name="Group 78">
            <g id="Group_77" data-name="Group 77" clip-path="url(#clip-path-28)">
              <path id="Path_275" data-name="Path 275" d="M158.7,74.943c-.6-1.729-1.134-3.48-1.792-5.188l20.417-7.669c.808,2.107,1.485,4.265,2.208,6.4Z" transform="translate(-156.912 -62.085)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_82" data-name="Group 82" transform="translate(707.866 523.36)" opacity="0.68">
          <g id="Group_81" data-name="Group 81">
            <g id="Group_80" data-name="Group 80" clip-path="url(#clip-path-29)">
              <path id="Path_276" data-name="Path 276" d="M159.919,79.571c-.211-.89-.4-1.786-.627-2.671l-.751-2.64,20.936-6.111.922,3.259c.285,1.092.52,2.2.781,3.295Z" transform="translate(-158.541 -68.149)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_85" data-name="Group 85" transform="translate(709.59 531.752)" opacity="0.68">
          <g id="Group_84" data-name="Group 84">
            <g id="Group_83" data-name="Group 83" clip-path="url(#clip-path-30)">
              <path id="Path_277" data-name="Path 277" d="M160.8,84.259c-.324-1.8-.609-3.61-.988-5.4l21.336-4.518c.469,2.208.831,4.437,1.217,6.66Z" transform="translate(-159.813 -74.341)" fill="#2b47be"/>
            </g>
          </g>
        </g>
        <g id="Group_88" data-name="Group 88" transform="translate(710.771 540.281)" opacity="0.68">
          <g id="Group_87" data-name="Group 87">
            <g id="Group_86" data-name="Group 86" clip-path="url(#clip-path-31)">
              <path id="Path_278" data-name="Path 278" d="M161.253,89c-.077-.912-.122-1.828-.222-2.738l-.347-2.724L182.3,80.634l.423,3.357c.123,1.121.187,2.246.279,3.369Z" transform="translate(-160.684 -80.634)" fill="#2b47be"/>
            </g>
          </g>
        </g>
      </g>
      <g  id="Group_857" data-name="Group 857">
        <path id="Path_137" data-name="Path 137" d="M179.367,94.2l.019-.759,12.543.19-.02.838Z" transform="translate(556.724 464.196)" fill="#2b47be"/>
        <path id="Path_140" data-name="Path 140" d="M179.085,99.629l.058-.758,6.412.493-.061.8Z" transform="translate(556.624 466.126)" fill="#2b47be"/>
        <path id="Path_141" data-name="Path 141" d="M178.476,105.04l.1-.755,6.368.89-.1.8Z" transform="translate(556.407 468.05)" fill="#2b47be"/>
        <path id="Path_142" data-name="Path 142" d="M177.519,110.4l.167-.743,6.3,1.286-.175.785Z" transform="translate(556.067 469.959)" fill="#2b47be"/>
        <path id="Path_143" data-name="Path 143" d="M176.215,115.7l.207-.733,6.207,1.681-.218.772Z" transform="translate(555.604 471.844)" fill="#2b47be"/>
        <path id="Path_144" data-name="Path 144" d="M174.592,120.9l.244-.721,6.091,2.067-.259.76Z" transform="translate(555.027 473.697)" fill="#2b47be"/>
        <path id="Path_145" data-name="Path 145" d="M172.658,126l.282-.707,5.947,2.445-.3.745Z" transform="translate(554.34 475.513)" fill="#2b47be"/>
        <path id="Path_146" data-name="Path 146" d="M170.388,130.951l.346-.679,5.782,2.814-.363.716Z" transform="translate(553.534 477.282)" fill="#2b47be"/>
        <path id="Path_147" data-name="Path 147" d="M167.814,135.75l.379-.66,5.595,3.169-.4.7Z" transform="translate(552.619 478.994)" fill="#2b47be"/>
        <path id="Path_148" data-name="Path 148" d="M164.959,140.386l.412-.64,5.387,3.512-.435.675Z" transform="translate(551.605 480.647)" fill="#2b47be"/>
        <path id="Path_149" data-name="Path 149" d="M161.821,144.829c.156-.2.314-.4.459-.606l5.158,3.841c-.152.22-.32.427-.484.638Z" transform="translate(550.49 482.238)" fill="#2b47be"/>
        <path id="Path_150" data-name="Path 150" d="M158.4,149.055l.5-.575,4.909,4.153-.523.606Z" transform="translate(549.274 483.75)" fill="#2b47be"/>
        <path id="Path_151" data-name="Path 151" d="M154.732,153.072l.524-.55,4.643,4.449-.553.58Z" transform="translate(547.972 485.187)" fill="#2b47be"/>
        <path id="Path_152" data-name="Path 152" d="M150.833,156.864l.552-.523,4.359,4.729-.581.55Z" transform="translate(546.586 486.543)" fill="#2b47be"/>
        <path id="Path_153" data-name="Path 153" d="M146.684,160.376l.6-.472,4.058,4.99-.629.5Z" transform="translate(545.112 487.809)" fill="#2b47be"/>
        <path id="Path_154" data-name="Path 154" d="M142.331,163.64l.619-.44,3.739,5.231-.653.465Z" transform="translate(543.566 488.98)" fill="#2b47be"/>
        <path id="Path_155" data-name="Path 155" d="M137.79,166.64l.641-.409,3.407,5.455-.676.431Z" transform="translate(541.953 490.057)" fill="#2b47be"/>
        <path id="Path_156" data-name="Path 156" d="M133.061,169.332l.676-.348,3.059,5.656-.713.369Z" transform="translate(540.272 491.035)" fill="#2b47be"/>
        <path id="Path_157" data-name="Path 157" d="M128.167,171.726l.694-.314,2.7,5.837-.732.331Z" transform="translate(538.534 491.897)" fill="#2b47be"/>
        <path id="Path_158" data-name="Path 158" d="M123.135,173.821l.709-.279,2.328,6-.748.293Z" transform="translate(536.746 492.654)" fill="#2b47be"/>
        <path id="Path_159" data-name="Path 159" d="M117.984,175.607l.724-.24,1.946,6.13-.763.251Z" transform="translate(534.916 493.303)" fill="#2b47be"/>
        <path id="Path_160" data-name="Path 160" d="M112.721,177.026l.741-.173,1.559,6.24-.782.183Z" transform="translate(533.047 493.831)" fill="#2b47be"/>
        <path id="Path_161" data-name="Path 161" d="M107.384,178.131l.749-.134,1.163,6.325-.79.141Z" transform="translate(531.15 494.237)" fill="#2b47be"/>
        <path id="Path_162" data-name="Path 162" d="M101.992,178.91l.755-.095.766,6.385-.8.1Z" transform="translate(529.234 494.528)" fill="#2b47be"/>
        <path id="Path_163" data-name="Path 163" d="M96.567,179.362l.758-.056.369,6.42-.8.058Z" transform="translate(527.308 494.702)" fill="#2b47be"/>
        <path id="Path_164" data-name="Path 164" d="M91.15,179.442l.759.018-.026,6.431-.8-.018Z" transform="translate(525.359 494.75)" fill="#2b47be"/>
        <path id="Path_165" data-name="Path 165" d="M85.822,179.212l.758.057-.421,6.417-.8-.061Z" transform="translate(523.326 494.669)" fill="#2b47be"/>
        <path id="Path_166" data-name="Path 166" d="M80.509,178.654l.755.1-.819,6.378-.8-.1Z" transform="translate(521.297 494.471)" fill="#2b47be"/>
        <path id="Path_167" data-name="Path 167" d="M75.235,177.77l.749.136-1.216,6.316-.79-.144Z" transform="translate(519.282 494.156)" fill="#2b47be"/>
        <path id="Path_168" data-name="Path 168" d="M70.025,176.534l.733.206-1.609,6.226-.774-.217Z" transform="translate(517.292 493.717)" fill="#2b47be"/>
        <path id="Path_169" data-name="Path 169" d="M64.9,174.96l.722.244-2,6.112-.762-.256Z" transform="translate(515.335 493.158)" fill="#2b47be"/>
        <path id="Path_170" data-name="Path 170" d="M59.885,173.073l.709.281-2.378,5.974-.747-.3Z" transform="translate(513.417 492.488)" fill="#2b47be"/>
        <path id="Path_172" data-name="Path 172" d="M55.682,170.882l.693.316-5.36,11.342-.766-.351Z" transform="translate(510.852 491.709)" fill="#2b47be"/>
      </g>
      <g id="Group_858" data-name="Group 858">
        <path id="Path_279" data-name="Path 279" d="M51.791,18.391l-.66.378L45.016,7.815l.73-.416Z" transform="translate(508.993 433.628)" fill="#2b47be"/>
        <path id="Path_282" data-name="Path 282" d="M55.784,14.564l-.693.316-2.777-5.8.73-.333Z" transform="translate(511.586 434.107)" fill="#2b47be"/>
        <path id="Path_283" data-name="Path 283" d="M60.7,12.446l-.709.279L57.583,6.764l.747-.3Z" transform="translate(513.458 433.298)" fill="#2b47be"/>
        <path id="Path_284" data-name="Path 284" d="M65.734,10.628l-.722.243-2.029-6.1.762-.256Z" transform="translate(515.376 432.604)" fill="#2b47be"/>
        <path id="Path_285" data-name="Path 285" d="M70.868,9.119l-.733.2L68.494,3.105l.774-.215Z" transform="translate(517.334 432.027)" fill="#2b47be"/>
        <path id="Path_286" data-name="Path 286" d="M76.1,7.967l-.749.136L74.1,1.794l.789-.144Z" transform="translate(519.325 431.586)" fill="#2b47be"/>
        <path id="Path_287" data-name="Path 287" d="M81.377,7.134l-.755.1L79.771.857l.8-.1Z" transform="translate(521.34 431.268)" fill="#2b47be"/>
        <path id="Path_288" data-name="Path 288" d="M86.693,6.622l-.758.057L85.481.264l.8-.06Z" transform="translate(523.369 431.073)" fill="#2b47be"/>
        <path id="Path_289" data-name="Path 289" d="M92.023,6.43l-.759.016L91.205.017l.8-.018Z" transform="translate(525.402 431)" fill="#2b47be"/>
        <path id="Path_290" data-name="Path 290" d="M97.441,6.6l-.758-.056L97.019.125l.8.057Z" transform="translate(527.349 431.044)" fill="#2b47be"/>
        <path id="Path_291" data-name="Path 291" d="M102.861,7.1l-.755-.095.735-6.389.8.1Z" transform="translate(529.275 431.219)" fill="#2b47be"/>
        <path id="Path_292" data-name="Path 292" d="M108.247,7.92l-.749-.134,1.132-6.33.79.142Z" transform="translate(531.19 431.517)" fill="#2b47be"/>
        <path id="Path_293" data-name="Path 293" d="M113.576,9.058l-.741-.173,1.526-6.246.782.183Z" transform="translate(533.087 431.938)" fill="#2b47be"/>
        <path id="Path_294" data-name="Path 294" d="M118.817,10.544l-.722-.241,1.915-6.139.762.255Z" transform="translate(534.955 432.479)" fill="#2b47be"/>
        <path id="Path_295" data-name="Path 295" d="M123.952,12.349l-.709-.279,2.3-6.005.748.293Z" transform="translate(536.785 433.155)" fill="#2b47be"/>
        <path id="Path_296" data-name="Path 296" d="M128.966,14.455l-.694-.314,2.67-5.851.73.332Z" transform="translate(538.571 433.945)" fill="#2b47be"/>
        <path id="Path_297" data-name="Path 297" d="M133.84,16.85l-.676-.35,3.03-5.672.713.369Z" transform="translate(540.31 434.847)" fill="#2b47be"/>
        <path id="Path_298" data-name="Path 298" d="M138.529,19.575l-.641-.409,3.379-5.471.676.431Z" transform="translate(541.987 435.865)" fill="#2b47be"/>
        <path id="Path_299" data-name="Path 299" d="M143.045,22.562l-.619-.44,3.712-5.25.653.464Z" transform="translate(543.6 436.994)" fill="#2b47be"/>
        <path id="Path_300" data-name="Path 300" d="M147.372,25.806l-.6-.472,4.032-5.009.627.5Z" transform="translate(545.145 438.221)" fill="#2b47be"/>
        <path id="Path_301" data-name="Path 301" d="M151.469,29.323l-.552-.523,4.334-4.75.581.552Z" transform="translate(546.616 439.544)" fill="#2b47be"/>
        <path id="Path_302" data-name="Path 302" d="M155.336,33.081l-.524-.55,4.62-4.472.553.58Z" transform="translate(548 440.968)" fill="#2b47be"/>
        <path id="Path_303" data-name="Path 303" d="M158.971,37.056l-.5-.576,4.89-4.177.523.607Z" transform="translate(549.301 442.477)" fill="#2b47be"/>
        <path id="Path_304" data-name="Path 304" d="M162.347,41.246c-.146-.207-.3-.412-.454-.61l5.139-3.865c.167.207.324.423.478.642Z" transform="translate(550.516 444.063)" fill="#2b47be"/>
        <path id="Path_305" data-name="Path 305" d="M165.433,45.649l-.412-.64,5.37-3.539.434.674Z" transform="translate(551.627 445.733)" fill="#2b47be"/>
        <path id="Path_306" data-name="Path 306" d="M168.25,50.223l-.378-.66,5.578-3.2.4.7Z" transform="translate(552.64 447.473)" fill="#2b47be"/>
        <path id="Path_307" data-name="Path 307" d="M170.785,54.956l-.344-.679,5.768-2.842.363.716Z" transform="translate(553.553 449.273)" fill="#2b47be"/>
        <path id="Path_308" data-name="Path 308" d="M172.982,59.852l-.282-.707,5.936-2.476.3.747Z" transform="translate(554.355 451.133)" fill="#2b47be"/>
        <path id="Path_309" data-name="Path 309" d="M174.874,64.869l-.244-.721,6.078-2.1.257.76Z" transform="translate(555.041 453.044)" fill="#2b47be"/>
        <path id="Path_310" data-name="Path 310" d="M176.453,69.99l-.206-.733,6.2-1.712.218.774Z" transform="translate(555.615 454.997)" fill="#2b47be"/>
        <path id="Path_311" data-name="Path 311" d="M177.7,75.2c-.041-.251-.107-.5-.16-.744l6.294-1.319c.056.262.125.52.168.785Z" transform="translate(556.076 456.982)" fill="#2b47be"/>
        <path id="Path_312" data-name="Path 312" d="M178.589,80.471l-.1-.755,6.364-.923.1.8Z" transform="translate(556.412 458.993)" fill="#2b47be"/>
        <path id="Path_314" data-name="Path 314" d="M179.152,85.913l-.058-.758,12.5-1.025.064.838Z" transform="translate(556.627 460.889)" fill="#2b47be"/>
      </g>

      <g className="outer-ring-phase-one-startup" id="Group_862" data-name="Group 862">
        <path id="Path_212" data-name="Path 212" d="M38.841,160.551l.6.47-3.966,5.062-.629-.495Z" transform="translate(505.379 488.039)" fill="#2b47be"/>
        <path id="Path_213" data-name="Path 213" d="M34.755,157.045l.573.5-4.272,4.807-.6-.526Z" transform="translate(503.819 486.793)" fill="#2b47be"/>
        <path id="Path_214" data-name="Path 214" d="M30.9,153.276l.526.549-4.56,4.533-.556-.579Z" transform="translate(502.349 485.455)" fill="#2b47be"/>
        <path id="Path_215" data-name="Path 215" d="M27.29,149.269l.5.575-4.833,4.241-.524-.6Z" transform="translate(500.969 484.031)" fill="#2b47be"/>
        <path id="Path_216" data-name="Path 216" d="M23.914,145.05l.469.6L19.3,149.582l-.493-.63Z" transform="translate(499.68 482.532)" fill="#2b47be"/>
        <path id="Path_217" data-name="Path 217" d="M20.8,140.624c.14.211.27.43.42.634L15.9,144.867c-.157-.216-.3-.445-.443-.668Z" transform="translate(498.491 480.959)" fill="#2b47be"/>
        <path id="Path_218" data-name="Path 218" d="M17.982,136l.381.659-5.538,3.272-.4-.7Z" transform="translate(497.414 479.315)" fill="#2b47be"/>
        <path id="Path_219" data-name="Path 219" d="M15.437,131.2l.347.678-5.73,2.919-.366-.714Z" transform="translate(496.441 477.613)" fill="#2b47be"/>
        <path id="Path_220" data-name="Path 220" d="M13.177,126.261l.312.694-5.9,2.555-.328-.732Z" transform="translate(495.579 475.857)" fill="#2b47be"/>
        <path id="Path_221" data-name="Path 221" d="M11.252,121.172l.245.721-6.05,2.179-.26-.76Z" transform="translate(494.843 474.049)" fill="#2b47be"/>
        <path id="Path_222" data-name="Path 222" d="M9.637,115.971l.209.733L3.67,118.5l-.22-.773Z" transform="translate(494.226 472.201)" fill="#2b47be"/>
        <path id="Path_223" data-name="Path 223" d="M8.334,110.681l.169.743-6.275,1.4-.179-.783Z" transform="translate(493.729 470.322)" fill="#2b47be"/>
        <path id="Path_224" data-name="Path 224" d="M7.351,105.321l.127.751-6.351,1.007-.134-.791Z" transform="translate(493.353 468.417)" fill="#2b47be"/>
        <path id="Path_225" data-name="Path 225" d="M6.729,99.911l.06.758-6.4.61-.062-.8Z" transform="translate(493.115 466.496)" fill="#2b47be"/>
        <path id="Path_226" data-name="Path 226" d="M6.428,94.481l.02.759L.02,95.452l-.02-.8Z" transform="translate(493 464.566)" fill="#2b47be"/>
        <path id="Path_227" data-name="Path 227" d="M6.451,89.1l-.02.759L0,89.682l.022-.8Z" transform="translate(493.001 462.577)" fill="#2b47be"/>
        <path id="Path_228" data-name="Path 228" d="M6.8,83.778l-.06.758L.333,83.958l.064-.8Z" transform="translate(493.118 460.544)" fill="#2b47be"/>
        <path id="Path_229" data-name="Path 229" d="M7.5,78.479l-.131.749-6.356-.974.138-.791Z" transform="translate(493.359 458.52)" fill="#2b47be"/>
        <path id="Path_230" data-name="Path 230" d="M8.53,73.23l-.171.743L2.077,72.6l.179-.783Z" transform="translate(493.738 456.515)" fill="#2b47be"/>
        <path id="Path_231" data-name="Path 231" d="M9.877,68.051l-.209.732L3.484,67.021l.22-.772Z" transform="translate(494.238 454.536)" fill="#2b47be"/>
        <path id="Path_232" data-name="Path 232" d="M11.535,62.962l-.247.721L5.227,61.535l.26-.76Z" transform="translate(494.857 452.591)" fill="#2b47be"/>
        <path id="Path_233" data-name="Path 233" d="M13.535,57.994l-.312.694L7.309,56.165l.328-.733Z" transform="translate(495.597 450.693)" fill="#2b47be"/>
        <path id="Path_234" data-name="Path 234" d="M15.835,53.163l-.347.678L9.744,50.951l.365-.716Z" transform="translate(496.462 448.847)" fill="#2b47be"/>
        <path id="Path_235" data-name="Path 235" d="M18.419,48.478l-.381.659-5.553-3.243.4-.694Z" transform="translate(497.436 447.058)" fill="#2b47be"/>
        <path id="Path_236" data-name="Path 236" d="M21.289,43.964q-.224.307-.426.63l-5.34-3.583q.213-.34.449-.664Z" transform="translate(498.516 445.334)" fill="#2b47be"/>
        <path id="Path_237" data-name="Path 237" d="M24.453,39.652l-.469.6-5.107-3.909.493-.63Z" transform="translate(499.707 443.688)" fill="#2b47be"/>
        <path id="Path_238" data-name="Path 238" d="M27.862,35.536l-.5.575-4.855-4.218.526-.606Z" transform="translate(500.997 442.115)" fill="#2b47be"/>
        <path id="Path_239" data-name="Path 239" d="M31.509,31.627l-.526.549L26.4,27.666l.556-.577Z" transform="translate(502.378 440.624)" fill="#2b47be"/>
        <path id="Path_240" data-name="Path 240" d="M35.415,27.974l-.573.5-4.3-4.785.6-.526Z" transform="translate(503.852 439.229)" fill="#2b47be"/>
        <path id="Path_241" data-name="Path 241" d="M39.528,24.562l-.6.47-3.99-5.043.629-.5Z" transform="translate(505.413 437.925)" fill="#2b47be"/>
        <path id="Path_12696" data-name="Path 12696" d="M44.753,22.72l-.621.439-7.159-10.3.687-.485Z" transform="translate(506.136 435.396)" fill="#2b47be"/>
        <path id="Path_12697" data-name="Path 12697" d="M48.424,166.792l.657.382-6.448,10.761-.726-.424Z" transform="translate(507.889 490.256)" fill="#2b47be"/>
        <path id="Path_12698" data-name="Path 12698" d="M43.125,163.8l.621.439-3.643,5.3-.655-.462Z" transform="translate(507.015 489.194)" fill="#2b47be"/>
      </g>
    </g>
    <g className="phase-zero-startup-circle-scale-out-outer" id="Group_871" data-name="Group 871" transform="translate(2.414)">
      <g id="Group_867" data-name="Group 867">
        <path id="Path_12699" data-name="Path 12699" d="M161.052,79.7a89.265,89.265,0,0,0-20.471-33.764l-1.564,1.5A87.075,87.075,0,0,1,159,80.393Z" transform="translate(542.389 447.321)" fill="#2b47be"/>
        <path id="Path_12700" data-name="Path 12700" d="M157,90.664c.671-.629,1.358-1.273,1.98-1.926l-.157-2.063.462-.037.172,2.244c-.661.7-1.418,1.388-2.122,2.057Z" transform="translate(548.776 461.78)" fill="#2b47be"/>
        <path id="Path_12701" data-name="Path 12701" d="M63,41.5l-.324.186L60.8,38.436c1.118-.651,2.236-1.3,3.4-1.866l.214.412-1.542.794-1.5.869Z" transform="translate(514.6 443.992)" fill="#2b47be"/>
        <path id="Path_12702" data-name="Path 12702" d="M191.383,112.124a87.6,87.6,0,0,0-3.662-22.1c-.229-.908-.577-1.778-.863-2.669-.313-.881-.571-1.781-.922-2.648-.7-1.733-1.33-3.5-2.144-5.184a86.883,86.883,0,0,0-19.26-27.4,91.008,91.008,0,0,0-8.546-7.287l-2.292-1.628-1.145-.812-1.185-.755L149,40.131l-2.435-1.4-1.217-.7-1.251-.637-2.5-1.282-2.557-1.153-1.277-.581-1.305-.515-2.609-1.031-2.655-.9c-1.756-.646-3.581-1.077-5.371-1.614a88.782,88.782,0,0,0-44.468-.1,89.087,89.087,0,0,0-20.772,8.34l-.552-.988a89.93,89.93,0,0,1,20.989-8.434,89.852,89.852,0,0,1,44.934.041l2.727.775,1.362.392,1.342.455,2.686.905,2.636,1.042,1.32.518,1.293.581,2.585,1.167,2.528,1.286c.844.426,1.689.852,2.5,1.343l2.461,1.412c.81.485,1.594,1.016,2.395,1.521,1.62.981,3.12,2.141,4.674,3.217a90.445,90.445,0,0,1,8.659,7.336,88.635,88.635,0,0,1,27.382,60.525Z" transform="translate(514.329 440.343)" fill="#2b47be"/>
        <path id="Path_12703" data-name="Path 12703" d="M88.54,31.534a83.494,83.494,0,0,0-26.417,9.383l-1.748-3.131A87.077,87.077,0,0,1,87.92,28Z" transform="translate(514.449 440.948)" fill="#2b47be"/>
      </g>
      <g id="Group_868" data-name="Group 868">
        <path id="Path_12704" data-name="Path 12704" d="M78.827,158.26a91.938,91.938,0,0,0,39.509-.832l-.516-2.1a89.786,89.786,0,0,1-38.566.812Z" transform="translate(521.005 486.182)" fill="#2b47be"/>
        <path id="Path_12705" data-name="Path 12705" d="M61.836,149.608l.682,2.664c.617.3,1.214.651,1.85.918l-.2.419c-.693-.289-1.34-.67-2.014-1q-.384-1.433-.729-2.841Z" transform="translate(514.822 484.151)" fill="#2b47be"/>
        <path id="Path_12706" data-name="Path 12706" d="M151.8,92.477l.011-.375h3.755l-.1,3.892-.463-.02.088-3.482Z" transform="translate(546.932 463.721)" fill="#2b47be"/>
        <path id="Path_12707" data-name="Path 12707" d="M61.773,169.621a86.454,86.454,0,0,0,20.962,7.835A91.284,91.284,0,0,0,93.8,179.334a93.374,93.374,0,0,0,11.237.4,91.987,91.987,0,0,0,11.193-.949,91.119,91.119,0,0,0,10.951-2.422A86.8,86.8,0,0,0,147.73,167.5c.824-.446,1.594-.981,2.385-1.48.781-.515,1.591-.988,2.353-1.534,1.515-1.1,3.079-2.135,4.524-3.329a87.475,87.475,0,0,0,22.025-25.249,89.986,89.986,0,0,0,5.028-10.029l1.026-2.61.515-1.305.447-1.33.9-2.656.766-2.7A86.973,86.973,0,0,0,190.868,93.1l1.133.018a88.2,88.2,0,0,1-3.2,22.411l-.771,2.727-.911,2.685-.451,1.344c-.161.443-.346.88-.516,1.319l-1.038,2.639a90.471,90.471,0,0,1-5.069,10.14,88.765,88.765,0,0,1-22.212,25.55,88.186,88.186,0,0,1-30.088,15.447l-2.728.77-2.763.636-1.38.321-1.4.248-2.791.5a92,92,0,0,1-11.306,1c-.947.015-1.895.066-2.842.058l-2.842-.075-1.42-.033-1.416-.11-2.833-.213a91.529,91.529,0,0,1-22.052-5.055c-1.746-.724-3.543-1.325-5.245-2.152l-2.585-1.168-2.522-1.3Z" transform="translate(514.895 464.076)" fill="#2b47be"/>
        <path id="Path_12708" data-name="Path 12708" d="M150.771,120.674a85.216,85.216,0,0,0,3.655-13.583A80.339,80.339,0,0,0,155.8,93.064l3.586.053a83.978,83.978,0,0,1-1.435,14.619,88.665,88.665,0,0,1-3.811,14.163Z" transform="translate(546.564 464.063)" fill="#2b47be"/>
      </g>
      <g id="Group_869" data-name="Group 869">
        <path id="Path_12709" data-name="Path 12709" d="M47.034,47.981a89.793,89.793,0,0,0-19.04,34.585l2.082.6A87.643,87.643,0,0,1,48.659,49.416Z" transform="translate(502.945 448.046)" fill="#2b47be"/>
        <path id="Path_12710" data-name="Path 12710" d="M58.641,37.409l-2.656-.747c-.588.359-1.155.751-1.71,1.159l-.264-.382c.6-.447,1.227-.865,1.865-1.259q1.437.386,2.834.794Z" transform="translate(512.188 443.854)" fill="#2b47be"/>
        <path id="Path_12711" data-name="Path 12711" d="M63.222,143.719l.324.186-1.88,3.251-1.682-.969-1.633-1.052.252-.392c.97.63,1.941,1.263,2.957,1.816Z" transform="translate(513.73 482.059)" fill="#2b47be"/>
        <path id="Path_12712" data-name="Path 12712" d="M68.551,37.306,66.186,38.82,63.9,40.45l-1.147.812-1.1.87-2.21,1.733-2.124,1.842-1.064.918-1.016.97L53.2,49.533,51.26,51.568l-.972,1.015-.92,1.061-1.842,2.122-1.737,2.209-.87,1.1L44.1,60.222l-1.63,2.288-1.518,2.362C39.9,66.423,39.05,68.094,38.09,69.7A87.773,87.773,0,0,0,27.4,112.824a87.48,87.48,0,0,0,11.685,42.855A88.532,88.532,0,0,0,70.242,187.4l-.581.972A89.357,89.357,0,0,1,28.815,90.551c.19-.927.468-1.831.725-2.74s.5-1.821.783-2.724l.909-2.685.458-1.342.522-1.317L33.251,77.1l1.171-2.582L35,73.229l.645-1.263,1.292-2.525a89.824,89.824,0,0,1,30.644-32.86Z" transform="translate(502.328 443.996)" fill="#2b47be"/>
        <path id="Path_12713" data-name="Path 12713" d="M44.947,132.264a85.608,85.608,0,0,0,21.377,18.23l-1.845,3.075a89.2,89.2,0,0,1-22.277-19Z" transform="translate(507.993 477.989)" fill="#2b47be"/>
      </g>
    </g>
  </g>
</svg>


    </div>
  );
}