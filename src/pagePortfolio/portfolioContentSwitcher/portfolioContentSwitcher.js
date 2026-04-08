import './portfolioContentSwitcher.css'
import { useState } from 'react';

export default function PortfolioContentSwitcher() {

    const [projectDisplayButton, setProjectDisplayButton] = useState(false);

    const projectDisplayTitle = projectDisplayButton ? 'DESIGN PROCESS' : 'PROJECT SHOWCASE';

    const projectDisplayPagination = projectDisplayButton ? '2 / 2' : '1 / 2';

     const handleProjectDisplayButtonClick = () => {
        setProjectDisplayButton(!projectDisplayButton);
        
     }


    return (
        <div className="portfolio-content-switcher-container">
            <svg width="372.578" height="78.243" viewBox="0 0 372.578 78.243">
                <g className="portfolio-content-switcher-clickable-area" id="Group_1024" data-name="Group 1024" transform="translate(-124.525 -589.997)" onClick={handleProjectDisplayButtonClick}>
                    {/* background panel */}
                    <rect className="controlPanel-background portfolio-button-background" id="Rectangle_665" data-name="Rectangle 665" width="372.578" height="76" rx="38" transform="translate(124.525 592.24)" fill="rgba(43,71,190,0.22)"/>
                    <rect className="controlPanel-background portfolio-button-background flash-click" id="Rectangle_665" data-name="Rectangle 665" width="372.578" height="76" rx="38" transform="translate(124.525 592.24)" fill="#E55213"/>
                                        
                    <foreignObject width="300" height="50" transform="translate(130.165 615.638)">
                        <p className="controlPanel-pagination navBar-text-active">{projectDisplayTitle}</p>
                    </foreignObject>
                    {/*<text className="controlPanel-pagination navBar-text-active" id="Project_ShowCAse" data-name="Project ShowCAse" transform="translate(150.165 637.638)" fill="#e55213" font-size="27" font-family="Hansson-Stencil-MN"><tspan x="0" y="0">PROJECT SHOWCASE</tspan></text>*/}
                    
                    {/* Circle button */}
                    <g className="controlPanel-right-button portfolio-button">
                    <g id="Group_953" data-name="Group 953" transform="translate(427.204 660.702) rotate(-90)">
                    {/* background for circle button */}
                    <circle className="controlPanel-right-button-background" id="Ellipse_2" data-name="Ellipse 2" cx="22.5" cy="22.5" r="22.5" transform="translate(8.241 8.242)" fill="#2b47be"/>
                    {/* Arrows */}
                    <g className="controlPanel-right-button-arrows" id="Icon_material-round-double-arrow" data-name="Icon material-round-double-arrow" transform="translate(44.107 19.092) rotate(90)">
                        <path id="Path_12565" data-name="Path 12565" d="M14.046,12.258,6.332,1.47A3.484,3.484,0,1,0,.661,5.518l5.594,7.847L.661,21.213a3.491,3.491,0,1,0,5.69,4.048l7.714-10.788A1.923,1.923,0,0,0,14.046,12.258Z" transform="translate(10.893)" fill="#e55213"/>
                        <path id="Path_12566" data-name="Path 12566" d="M11.636,10.155,5.261,1.218A2.923,2.923,0,0,0,2.9,0,2.888,2.888,0,0,0,.548,4.571l4.634,6.5-4.634,6.5a2.892,2.892,0,1,0,4.714,3.353l6.39-8.937A1.593,1.593,0,0,0,11.636,10.155Z" transform="translate(0 2.294)" fill="#e55213"/>
                    </g>
                    {/* Border of circle button */}
                    <g className="controlPanel-right-button-circle-border" id="Group_780" data-name="Group 780" transform="translate(0 0)">
                        <path id="Path_12519" data-name="Path 12519" d="M.5,27.127A30.3,30.3,0,0,0,7.8,29.708a31.159,31.159,0,0,0,7.743.662A30.731,30.731,0,0,0,23.2,29.091a31.25,31.25,0,0,0,7.08-3.159A31,31,0,0,0,41.014,14.876,30.538,30.538,0,0,0,45.042.026L42.914,0q-.738.547-1.469,1.038A27.048,27.048,0,0,1,38.461,12.1a27.542,27.542,0,0,1-3.169,4.822,27.619,27.619,0,0,1-4.133,4.041c.02.588.043,1.213.019,1.8A28.461,28.461,0,0,1,17.044,28.14,28.718,28.718,0,0,1,2.122,25.556c-.23-.095-.446-.218-.668-.33l-.737-.375L0,24.441c.063.442.13.9.211,1.347s.182.887.285,1.339" transform="translate(16.441 31.094)" fill="#2b47be"/>
                        <path id="Path_12520" data-name="Path 12520" d="M29.557,20.323a25.72,25.72,0,0,0,7.071-8.447A25.658,25.658,0,0,0,39.512,1.282Q40.446.686,41.4,0l.12.091q-.924.666-1.833,1.248a25.881,25.881,0,0,1-2.9,10.617A25.874,25.874,0,0,1,29.7,20.429c.019.352.04.72.043,1.074s0,.711-.008,1.075A27.548,27.548,0,0,1,15.073,27.6,27.552,27.552,0,0,1,0,23.927l.087-.149a27.365,27.365,0,0,0,14.952,3.648A27.375,27.375,0,0,0,29.6,22.466c.013-.725.011-1.425-.038-2.144" transform="translate(16.928 30.764)" fill="#2b47be"/>
                        <path id="Path_12521" data-name="Path 12521" d="M13.864,0c-.278.168-.539.362-.8.55s-.532.371-.791.567c-.5.41-1.034.786-1.513,1.225a31.939,31.939,0,0,0-2.8,2.707l-.636.737L7,6.154l-.3.384L6.1,7.3,5.538,8.1l-.283.4-.262.41-.526.818-.485.843c-.164.28-.327.56-.467.853a30.043,30.043,0,0,0-2.7,7.261,31.78,31.78,0,0,0-.651,3.831,32.6,32.6,0,0,0-.144,3.9c.011.325.01.651.028.976l.075.971.035.486.062.483.122.965a31.558,31.558,0,0,0,2.107,7.459c.279.584.512,1.191.825,1.759l.442.866.486.842.241.423.264.409.524.82.564.793c.185.267.374.53.58.781l.6.766.636.738c.411.5.883.952,1.323,1.429a31.364,31.364,0,0,0,2.917,2.578c.5.415,1.043.772,1.568,1.154.263.191.545.352.815.531s.54.361.826.513l1.087-1.828c-.079-.587-.114-1.212-.151-1.8A27.408,27.408,0,0,1,11.5,44.885a27.685,27.685,0,0,1-3.617-4.5A26.819,26.819,0,0,1,3.856,29.663q-.777-.417-1.569-.888a29.274,29.274,0,0,1-.145-3.839,28.387,28.387,0,0,1,.347-3.818c.116-.627.211-1.259.372-1.876.127-.625.315-1.234.486-1.848A27.914,27.914,0,0,1,4.7,13.824,28.655,28.655,0,0,1,14.416,2.2c.2-.148.4-.29.618-.42.465-.3.923-.6,1.408-.867C15.6.558,14.753.274,13.864,0" transform="translate(0 5.048)" fill="#2b47be"/>
                        <path id="Path_12522" data-name="Path 12522" d="M2.162,27.432a25.06,25.06,0,0,0,3.771,10.3,26.326,26.326,0,0,0,3.455,4.333,25.684,25.684,0,0,0,4.307,3.488q.017.56.051,1.136c.023.383.065.749.106,1.133l-.14.061c-.089-.729-.129-1.484-.153-2.21A25.7,25.7,0,0,1,2,27.5q-.47-.241-.944-.5l-.476-.266L.12,26.457A27.521,27.521,0,0,1,3.1,11.228,27.834,27.834,0,0,1,13.834,0l.086.15A27.664,27.664,0,0,0,3.266,11.284,27.333,27.333,0,0,0,.288,26.389c.6.379,1.255.722,1.874,1.042" transform="translate(3.095 6.799)" fill="#2b47be"/>
                        <path id="Path_12523" data-name="Path 12523" d="M45.739,28.964a31.061,31.061,0,0,0-1.415-7.626,30.422,30.422,0,0,0-3.291-7.02,31.78,31.78,0,0,0-2.278-3.154l-.638-.735-.318-.369-.338-.351L36.789,9l-.706-.671A30.95,30.95,0,0,0,29.8,3.765,31.293,31.293,0,0,0,22.59.93,31.04,31.04,0,0,0,7.18,1.014c-.62.186-1.251.335-1.859.56-.306.106-.615.2-.919.313l-.9.358-.451.179-.442.2-.886.4-.865.445-.433.22L0,3.93,1.043,5.784c.55.226,1.1.495,1.632.764A26.9,26.9,0,0,1,13.743,3.6a27.233,27.233,0,0,1,11.32,1.881c.5-.323,1.024-.637,1.55-.917A28.482,28.482,0,0,1,43.557,28.339l.058.746c.033.552.029,1.107.052,1.661.686-.554,1.4-1.149,2.071-1.782" transform="translate(15.698 0)" fill="#2b47be"/>
                        <path id="Path_12524" data-name="Path 12524" d="M23.5,2.077A25.867,25.867,0,0,0,12.662.2a25.354,25.354,0,0,0-10.618,2.8c-.329-.177-.668-.356-1.01-.524S.352,2.152,0,2l.017-.151c.342.15.676.3,1.007.459s.664.338.985.511A25.5,25.5,0,0,1,12.654.023,26.018,26.018,0,0,1,23.522,1.9c.6-.406,1.2-.745,1.839-1.1a27.82,27.82,0,0,1,11.7,10.216A27.616,27.616,0,0,1,41.415,25.9h-.173a27.445,27.445,0,0,0-4.313-14.768A27.653,27.653,0,0,0,25.336.974c-.639.363-1.236.7-1.834,1.1" transform="translate(16.98 4.85)" fill="#2b47be"/>
                    </g>
                    </g>
                    </g>
                    {/* Pagination */}
                    <g className="controlPanel-border" id="Group_1023" data-name="Group 1023">
                    <path id="Path_12813" data-name="Path 12813" d="M53.664,0l-9.89,10.423H0l1.869,2.564H119.977L123.7,9.056H101.169L92.574,0Z" transform="translate(283.165 602.983) rotate(180)" fill="#2b47be"/>
                    <text id="_1_2" data-name="1 / 2" transform="translate(208.659 599.997)" fill="#e55213" font-size="12" font-family="Hansson-Stencil-MN"><tspan x="-14.304" y="0">{projectDisplayPagination}</tspan></text>
                    </g>
                </g>
            </svg>

        </div>
    )
}
