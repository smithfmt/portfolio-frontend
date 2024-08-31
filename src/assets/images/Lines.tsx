import { useEffect } from "react";
function getOffset(el:HTMLElement) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
const Lines = () => {
    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            const graphic = document.getElementById("lines-graphic");
            if (!graphic) return;
            const paths = graphic.querySelectorAll("path");
            const graphicOffset = getOffset(graphic).top
            const { scrollY } = window;
            const graphicHeight = graphic.clientHeight;
            const graphicAnimationStart = graphicOffset-500;
            if (graphicAnimationStart<scrollY&&scrollY<graphicOffset+graphicHeight) {
                const newOffset =  12000-((scrollY-graphicAnimationStart)/graphicHeight * 12000);
                console.log({newOffset})
                paths.forEach(path => path.style.strokeDashoffset = `${newOffset}`);
                
            }
        })
    }, [])
    return (
        <svg id="lines-graphic" className="max-w-full" viewBox="0 0 1812 3600" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
            <path d="M487 0V548.689C487 559.482 482.638 569.817 474.905 577.347L384.595 665.286C376.862 672.815 372.5 683.151 372.5 693.944V942.481C372.5 952.357 368.847 961.883 362.244 969.227L204.419 1144.75C196.832 1153.18 186.02 1158 174.675 1158H43" stroke="currentColor" stroke-width="34"/>
            <path d="M602 0V1057.53C602 1068.24 597.702 1078.5 590.07 1086.02L385.183 1287.84C377.55 1295.35 373.252 1305.62 373.252 1316.33V2141.02C373.252 2151.33 369.269 2161.25 362.133 2168.7L151.119 2388.91C143.984 2396.36 140 2406.27 140 2416.58V3426" stroke="currentColor" stroke-width="34"/>
            <path d="M698 0V1211.86C698 1222.72 693.585 1233.11 685.769 1240.65L596.065 1327.17C588.249 1334.71 583.834 1345.1 583.834 1355.96V1780.38C583.834 1791.91 578.854 1802.88 570.172 1810.48L496.348 1875.07C487.666 1882.66 482.686 1893.64 482.686 1905.17V2386.08C482.686 2397.72 477.62 2408.77 468.809 2416.37L368.877 2502.55C360.066 2510.15 355 2521.21 355 2532.84V2780" stroke="currentColor" stroke-width="34"/>
            <path d="M790 0V812.819C790 823.037 793.911 832.868 800.93 840.295L933.07 980.105C940.089 987.531 944 997.362 944 1007.58V1415.76C944 1426.38 939.772 1436.57 932.249 1444.08L858.751 1517.39C851.228 1524.9 847 1535.09 847 1545.71V1960.47C847 1969.44 850.014 1978.15 855.559 1985.2L935.441 2086.76C940.986 2093.81 944 2102.52 944 2111.49V2415" stroke="currentColor" stroke-width="34"/>
            <path d="M900 0V673.178C900 683.894 904.3 694.162 911.935 701.68L1072.56 859.842C1080.2 867.36 1084.5 877.628 1084.5 888.344V1531.02C1084.5 1541.83 1088.88 1552.19 1096.63 1559.72L1313.87 1770.66C1321.62 1778.19 1326 1788.54 1326 1799.35V2415" stroke="currentColor" stroke-width="34"/>
            <path d="M984 0V575.844C984 586.693 988.406 597.076 996.209 604.613L1200.29 801.761C1208.09 809.299 1212.5 819.682 1212.5 830.53V1460.66C1212.5 1470.99 1216.5 1480.93 1223.67 1488.38L1464.83 1739.19C1472 1746.64 1476 1756.58 1476 1766.91V2397.01C1476 2407.58 1480.18 2417.72 1487.64 2425.22L1740 2679" stroke="currentColor" stroke-width="34"/>
            <path d="M1094 0V543.002C1094 553.864 1098.42 564.259 1106.24 571.798L1318.76 776.702C1326.58 784.241 1331 794.636 1331 805.498V1193.69C1331 1204.44 1335.33 1214.74 1343.01 1222.26L1561.34 1436.08C1568.81 1443.4 1578.86 1447.5 1589.32 1447.5H1766" stroke="currentColor" stroke-width="34"/>
            <circle cx="355" cy="2780" r="36" fill="currentColor"/>
            <circle cx="944" cy="2424" r="36" fill="currentColor"/>
            <circle cx="1326" cy="2424" r="36" fill="currentColor"/>
            <circle cx="1740" cy="2679" r="36" fill="currentColor"/>
            <circle cx="1776" cy="1448" r="36" fill="currentColor"/>
            <circle cx="140" cy="3434" r="36" fill="currentColor"/>
            <circle cx="36" cy="1158" r="36" fill="currentColor"/>
        </svg>
    )};
export default Lines;
