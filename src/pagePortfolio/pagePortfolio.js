import './pagePortfolio.css'
import PortfolioProject from './portfolioProject/portfolioProject.js';
import { useState } from 'react';

export default function PagePortfolio() {

    const projectArray = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'];

    const [projects, setProjects] = useState(projectArray);

    const [activeProject, setActiveProject] = useState(projectArray[0]);

    const handleProjectClick = (project) => {
        setActiveProject(project);
    }

    function renderProjectList() {
    // This creates a temporary list for display without changing the 'projects' state
    return projects
        .filter(project => project !== activeProject)
        .map((project, index) => (
            <PortfolioProject 
                key={project} // Use the name as a key instead of index for better stability
                project={project} 
                handleProjectClick={handleProjectClick} 
            />
        ));
}

    return (
        <div className="pagePortfolio-container">
            <svg width="1353.989" height="754.493" viewBox="0 0 1353.989 754.493">
                <text style={{clipPath: 'rect(0 0 0 0)', animation: 'startUpRtoL 0.5s 1.5s ease-out forwards'}} transform="translate(68.04 100.25)" fill="#e55213" font-size="40" font-family="Hansson-Stencil-MN">{activeProject}</text>
                <g id="Group_962" data-name="Group 962" transform="translate(-94.483 -4524)">
                    {/* background panel */}
                    <path className="portfolio-background-panel" id="Path_12815" data-name="Path 12815" d="M13449.454,114.495l274.833.314,7.193,6.823,813.393-1.857,7.837,2.147,18.973-15.249,198.595.892,6.739,5.463.814,272.767-3.791,3.791V794.047l-47.08,14.012H14227.4l-20.3-20.3V707.037l-13.351-13.188h-745.785l-7.842-7.841V513.282l8.334-8.334V285.06h-7.378V121.632Z" transform="translate(-13337.504 4441)" fill="#2b47be" opacity="0.22"/>
                    
                    {/* bottom border */}
                    <g className="portfolio-panel-bottom-border" id="Group_960" data-name="Group 960" transform="translate(-9.505 4441)">
                        <path id="Path_12267" data-name="Path 12267" d="M547.443,47.96c-.088.1-.176.208-.264.307l-.009-.01c.088-.1.176-.2.273-.3" transform="translate(849.301 682.876)" fill="#2b47be"/>
                        <path id="Path_12276" data-name="Path 12276" d="M547.443,46.247c-.1-.109-.185-.208-.273-.3l.009-.01c.088.1.176.208.264.307" transform="translate(849.301 682.896)" fill="#2b47be"/>
                        <path id="Path_11538" data-name="Path 11538" d="M0,21.745,21.745,0H167.82l8.255,8.252h84.2L273.619,21.6Z" transform="translate(389.619 715.569) rotate(180)" fill="#2b47be"/>
                        <path id="Path_11539" data-name="Path 11539" d="M188.662,8.885h17.332L214.71,17.6h20.1l-4-3.995h-5.872l-9.385-9.388H192Z" transform="translate(425.563 731.061) rotate(180)" fill="#2b47be"/>
                        <path id="Path_11546" data-name="Path 11546" d="M442.7,14.044,429.894,26.855H68.346v1.268H430.42l12.811-12.811h88.913V14.044Z" transform="translate(812.791 736.386) rotate(180)" fill="#2b47be"/>
                        <path id="Path_11547" data-name="Path 11547" d="M54.819,25.093l7.3,7.3H132.99l13.319,13.319H274.724l32.8-32.8H264.761L251.97,25.707Z" transform="translate(1147.186 780.15)" fill="#2b47be"/>
                        <path id="Path_11548" data-name="Path 11548" d="M6.674,20.144,23.047,3.77H37.042L20.668,20.144Z" transform="translate(1374.819 782.576)" fill="#2b47be"/>
                        <path id="Path_11552" data-name="Path 11552" d="M20.779,27.953H201.964v1.008H20.361L0,8.6l.709-.711Z" transform="translate(878.864 779.574)" fill="#2b47be"/>
                        <path id="Path_11553" data-name="Path 11553" d="M96.225,15.347l6.741,6.738H15.539L8.768,15.317Z" transform="translate(953.593 792.713)" fill="#2b47be"/>
                        <path id="Path_11554" data-name="Path 11554" d="M45.884,20.144,29.51,3.77H15.516L31.889,20.144Z" transform="translate(870.729 784.69)" fill="#2b47be"/>
                        <path id="Path_11555" data-name="Path 11555" d="M18.666,0,18,.668,31.247,13.917h9.762v-.944h-9.37Z" transform="translate(866.265 801.427)" fill="#2b47be"/>
                        <path id="Path_11556" data-name="Path 11556" d="M207.727,6.037a3.019,3.019,0,1,0-3.019-3.019,3.018,3.018,0,0,0,3.019,3.019" transform="translate(188.094 698.659)" fill="#2b47be"/>
                        <path id="Path_11557" data-name="Path 11557" d="M213.779,6.037a3.019,3.019,0,1,0-3.019-3.019,3.018,3.018,0,0,0,3.019,3.019" transform="translate(195.289 698.659)" fill="#2b47be"/>
                        <path id="Path_11558" data-name="Path 11558" d="M219.83,6.037a3.019,3.019,0,1,0-3.019-3.019,3.019,3.019,0,0,0,3.019,3.019" transform="translate(202.484 698.659)" fill="#2b47be"/>
                        <path id="Path_11573" data-name="Path 11573" d="M6.674,20.144,23.047,3.77H37.042L20.668,20.144Z" transform="translate(1264.677 797.056) rotate(45)" fill="#2b47be"/>
                        <path id="Path_11574" data-name="Path 11574" d="M6.674,20.144,23.047,3.77H37.042L20.668,20.144Z" transform="translate(1237.677 797.056) rotate(45)" fill="#2b47be"/>
                        <path id="Path_11579" data-name="Path 11579" d="M184.666,8.8l6.832,7.243h23.151l16.142,16.142h9.055L235.594,8.8Z" transform="translate(642.229 680.338)" fill="#2b47be"/>
                        <path id="Path_11580" data-name="Path 11580" d="M14154.895,689.137l6.868,7.256h12.183l-7.256-7.256Z" transform="translate(-13342)" fill="#2b47be"/>
                        <path id="Path_11581" data-name="Path 11581" d="M14154.895,689.137l6.868,7.256h12.183l-7.256-7.256Z" transform="translate(-13356)" fill="#2b47be"/>
                        <path id="Path_11582" data-name="Path 11582" d="M14116.292,689.137l12.672,12.672h51.178l15.935,15.935v50.388" transform="translate(-13326 3)" fill="none" stroke="#2b47be" stroke-width="1"/>
                        <path id="Path_11583" data-name="Path 11583" d="M14121.8,689.137l9.926,9.926h43.386" transform="translate(-13326 2)" fill="none" stroke="#2b47be" stroke-width="1"/>
                        <rect id="Rectangle_405" data-name="Rectangle 405" width="194.25" height="0.944" transform="translate(1028.968 816.507)" fill="#2b47be"/>
                        <path id="Path_11591" data-name="Path 11591" d="M219.83,6.037a3.019,3.019,0,1,0-3.019-3.019,3.019,3.019,0,0,0,3.019,3.019" transform="translate(844.155 809.464)" fill="#2b47be"/>
                        <path id="Path_11612" data-name="Path 11612" d="M456.558,49.925H59.01L28.873,19.789l.654-.654L59.394,49H456.558Z" transform="translate(1408.052 803.324) rotate(-90)" fill="#2b47be"/>
                        <path id="Path_11613" data-name="Path 11613" d="M14223.768,712.522v56.587l26.437,26.436h93.029" transform="translate(-13328)" fill="none" stroke="#2b47be" stroke-width="1"/>
                        <path id="Path_11616" data-name="Path 11616" d="M14193.358,678.251h-394.9" transform="translate(-13328)" fill="none" stroke="#2b47be" stroke-width="1"/>
                        <path id="Path_11617" data-name="Path 11617" d="M219.83,6.037a3.019,3.019,0,1,0-3.019-3.019,3.019,3.019,0,0,0,3.019,3.019" transform="translate(675.938 709.503)" fill="#2b47be"/>
                        <path id="Path_11620" data-name="Path 11620" d="M13458.862,636.243V654.22l33.894,33.893h53.165" transform="translate(-13328)" fill="none" stroke="#2b47be" stroke-width="1"/>
                        <path id="Path_11621" data-name="Path 11621" d="M219.83,6.037a3.019,3.019,0,1,0-3.019-3.019,3.019,3.019,0,0,0,3.019,3.019" transform="translate(-88.967 632.659)" fill="#2b47be"/>
                        <path id="Path_11626" data-name="Path 11626" d="M14128.461,678.251h-330" transform="translate(-13548.93 9.862)" fill="none" stroke="#2b47be" stroke-width="1"/>
                        <path id="Path_12267-2" data-name="Path 12267" d="M547.443,47.96c-.088.1-.176.208-.264.307l-.009-.01c.088-.1.176-.2.273-.3" transform="translate(849.301 682.876)" fill="#2b47be"/>
                        <path id="Path_12276-2" data-name="Path 12276" d="M547.443,46.247c-.1-.109-.185-.208-.273-.3l.009-.01c.088.1.176.208.264.307" transform="translate(849.301 682.896)" fill="#2b47be"/>
                        <circle id="Ellipse_22" data-name="Ellipse 22" cx="4.5" cy="4.5" r="4.5" transform="translate(1423 770)" fill="#2b47be"/>
                    </g>

                    {/* top border */}
                    <g className="portfolio-panel-top-border" id="Group_961" data-name="Group 961" transform="translate(-9.505 4441)">
                        <path id="Path_11563" data-name="Path 11563" d="M0,0,11,11.1H45.345L34.461.213Z" transform="translate(1234.928 100.931)" fill="#2b47be"/>
                        <path id="Path_11564" data-name="Path 11564" d="M0,0,11,11.1H45.345L34.461.213Z" transform="translate(1274.853 100.931)" fill="#2b47be"/>
                        <path id="Path_11565" data-name="Path 11565" d="M0,0,11,11.1H45.345L34.461.213Z" transform="translate(1314.778 100.931)" fill="#2b47be"/>
                        <path id="Path_11566" data-name="Path 11566" d="M0,0,11,11.1H93.061L82.177.213Z" transform="translate(1354.703 100.931)" fill="#2b47be"/>
                        <path id="Path_11567" data-name="Path 11567" d="M0,3.777l6.679,6.679H62.544L69.7,3.3,14.27,0,0,2.371Z" transform="translate(1367.865 107.772)" fill="#2b47be"/>
                        <path id="Path_11571" data-name="Path 11571" d="M210.31,35.224H58.712l-3.5-4.83H24.5L0,.652.539,0,24.814,29.466H55.553l3.5,4.83H210.31Z" transform="translate(1216.645 87.901)" fill="#2b47be"/>
                        <path id="Path_11594" data-name="Path 11594" d="M154.861,0H433.329l6.98,6.978h171.07v3.317H438.933l-6.978-6.978H156.234Z" transform="translate(-35.609 111.474)" fill="#2b47be"/>
                        <path id="Path_11595" data-name="Path 11595" d="M103.647,0,96.5,7.151H7.137L0,.014Z" transform="translate(399.997 109.557)" fill="#2b47be"/>
                        <path id="Path_11597" data-name="Path 11597" d="M244.945,13.32l6.6-5.825H190.99l-6.631,5.854Z" transform="translate(8.34 95.468)" fill="#2b47be"/>
                        <path id="Path_11601" data-name="Path 11601" d="M0,0V.828H29.052l9.836,9.838H99.9v-.83H39.232L29.394,0Z" transform="translate(235.932 98.151)" fill="#2b47be"/>
                        <path id="Path_11602" data-name="Path 11602" d="M393.134,14.079,379.681,1.268H0V0H380.233l13.454,12.811H487.06v1.268Z" transform="translate(758.804 105.154) rotate(180)" fill="#2b47be"/>
                        <path id="Path_11603" data-name="Path 11603" d="M146.889,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(210.833 86.219)" fill="#2b47be"/>
                        <path id="Path_11604" data-name="Path 11604" d="M146.889,7.872l11.8,11.8h-13.11l-11.8-11.8Z" transform="translate(193.833 86.219)" fill="#2b47be"/>
                        <path id="Path_11605" data-name="Path 11605" d="M352.046,24.419H303.573L298.659,19.5H179.252L174.4,14.654l130.934-.222,4.252,4.83h37.3Z" transform="translate(917.621 100.699)" fill="#2b47be"/>
                        <path id="Path_11607" data-name="Path 11607" d="M14063.543,111.215" transform="translate(-13328)" fill="none" stroke="#707070" stroke-width="1"/>
                        <path id="Path_11628" data-name="Path 11628" d="M35.831,15.217H0V11.9H34.458L46.36,0,48.7,2.345Z" transform="translate(164.633 133.22) rotate(180)" fill="#2b47be"/>
                        <path id="Path_11629" data-name="Path 11629" d="M14193.358,678.251h-394.9" transform="translate(-13663.227 -551.856)" fill="none" stroke="#2b47be" stroke-width="1"/>
                        <path id="Path_11630" data-name="Path 11630" d="M14193.358,678.251h-394.9" transform="translate(-12982.717 -553.133)" fill="none" stroke="#2b47be" stroke-width="1"/>
                        <circle id="Ellipse_21" data-name="Ellipse 21" cx="4.5" cy="4.5" r="4.5" transform="translate(1211 83)" fill="#2b47be"/>
                        <circle id="Ellipse_23" data-name="Ellipse 23" cx="4.5" cy="4.5" r="4.5" transform="translate(110 115)" fill="#2b47be"/>
                        <path id="Path_12717" data-name="Path 12717" d="M13518.5,1301.5l-10.012,10.012v159.925h12.183V1575.71" transform="translate(-13404 -1182)" fill="none" stroke="#2b47be" stroke-width="1"/>
                    </g>
                </g>
                </svg>

                {/* {Project switcher} */}
                <div className="portfolio-project-list-container">
                    {/*<PortfolioProject project={projectArray[0]} handleProjectClick={handleProjectClick} />
                    <PortfolioProject project={projectArray[1]} handleProjectClick={handleProjectClick} />
                    <PortfolioProject project={projectArray[2]} handleProjectClick={handleProjectClick} />
                    <PortfolioProject project={projectArray[3]} handleProjectClick={handleProjectClick} />*/}
                    {
                        renderProjectList()
                    }
                </div>

        </div>
    )
}