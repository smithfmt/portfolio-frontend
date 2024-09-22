import { getScrollOffset } from "@utils/utils";
import { useEffect } from "react";

const Lines = ({ id }: { id: string }) => {
    useEffect(() => {
        const scrollAnimation = () => {
            const graphic = document.getElementById(id);
            const parent = document.getElementById("experience-section");
            if (!graphic || !parent) return;
            const paths = graphic.querySelectorAll("path");
            const circles = graphic.querySelectorAll("circle");
            const graphicOffset = getScrollOffset(parent).top
            const { scrollY } = window;
            const graphicAnimationStart = graphicOffset-300;
            const scrollPosition = scrollY-graphicAnimationStart;
            const parentHeight = parent.scrollHeight;  
            
            if (graphicAnimationStart<scrollY&&scrollY<(graphicOffset+parentHeight+400)) {
                const newOffset =  4311-(scrollPosition/parentHeight * 4311);
                paths.forEach((path, i) => path.style.strokeDashoffset = `${newOffset - i%3*200}`);
                circles.forEach((circle) => {
                    const circleY = parseFloat(circle.getAttribute('cy') || '0');
                    const id = parseInt(circle.id);
                    if ((4311-(newOffset - id%3*200)) >= circleY) {
                        circle.style.fill = "currentColor";
                    } else {
                        circle.style.fill = "transparent";
                    };
                })
            }
        }
        scrollAnimation();
        document.addEventListener("scroll", scrollAnimation);
        return () => document.removeEventListener("scroll", scrollAnimation);
    }, []);
    return (
        <svg id={id} className="sticky md:top-0 lg:-top-32 w-full" viewBox="0 0 1812 4311" fill="none"color="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M487 -0.000976562V1123.78V1389.69C487 1400.48 482.638 1410.82 474.905 1418.35L384.595 1506.28C376.862 1513.81 372.5 1524.15 372.5 1534.94V1783.48C372.5 1793.36 368.847 1802.88 362.244 1810.23L204.419 1985.74C196.832 1994.18 186.02 1999 174.675 1999H43" stroke="currentColor" strokeWidth="34"/>
            <path d="M602 -0.000976562V536.635V1898.52C602 1909.24 597.702 1919.5 590.07 1927.02L385.183 2128.83C377.55 2136.35 373.252 2146.62 373.252 2157.33V2982.02C373.252 2992.33 369.269 3002.25 362.134 3009.7L151.119 3229.91C143.984 3237.36 140 3247.27 140 3257.58V4267" stroke="currentColor" strokeWidth="34"/>
            <path d="M698 -0.000976562V614.425V2052.86C698 2063.72 693.585 2074.11 685.769 2081.65L596.065 2168.17C588.249 2175.71 583.834 2186.1 583.834 2196.96V2621.38C583.834 2632.91 578.854 2643.88 570.172 2651.48L496.348 2716.07C487.666 2723.66 482.686 2734.64 482.686 2746.17V3227.08C482.686 3238.72 477.62 3249.77 468.809 3257.37L368.877 3343.55C360.066 3351.15 355 3362.21 355 3373.84V3621" stroke="currentColor" strokeWidth="34"/>
            <path d="M790 -0.000976562V414.364V1653.82C790 1664.04 793.911 1673.87 800.93 1681.29L933.07 1821.1C940.089 1828.53 944 1838.36 944 1848.58V2256.76C944 2267.38 939.772 2277.57 932.249 2285.08L858.751 2358.39C851.228 2365.9 847 2376.09 847 2386.71V2801.47C847 2810.44 850.014 2819.15 855.559 2826.2L935.441 2927.76C940.986 2934.81 944 2943.52 944 2952.49V3256" stroke="currentColor" strokeWidth="34"/>
            <path d="M900 0V344.964V1514.18C900 1524.89 904.3 1535.16 911.935 1542.68L1072.56 1700.84C1080.2 1708.36 1084.5 1718.63 1084.5 1729.34V2372.02C1084.5 2382.83 1088.88 2393.19 1096.63 2400.72L1313.87 2611.66C1321.62 2619.19 1326 2629.54 1326 2640.35V3256" stroke="currentColor" strokeWidth="34"/>
            <path d="M984 0V1137.41V1416.84C984 1427.69 988.406 1438.07 996.209 1445.61L1200.29 1642.76C1208.09 1650.3 1212.5 1660.68 1212.5 1671.53V2301.66C1212.5 2311.99 1216.5 2321.93 1223.67 2329.38L1464.83 2580.19C1472 2587.64 1476 2597.58 1476 2607.91V3238.01C1476 3248.58 1480.18 3258.72 1487.64 3266.21L1740 3520" stroke="currentColor" strokeWidth="34"/>
            <path d="M1094 0V281.5L1094 1384C1094 1394.86 1098.42 1405.26 1106.24 1412.8L1318.76 1617.7C1326.58 1625.24 1331 1635.63 1331 1646.5V2034.69C1331 2045.44 1335.33 2055.74 1343.01 2063.26L1561.34 2277.08C1568.81 2284.4 1578.86 2288.5 1589.32 2288.5H1766" stroke="currentColor" strokeWidth="34"/>
            <circle id="1" cx="355" cy="3621" r="36" fill="currentColor"/>
            <circle id="4" cx="944" cy="3265" r="36" fill="currentColor"/>
            <circle id="5" cx="1326" cy="3265" r="36" fill="currentColor"/>
            <circle id="3" cx="1740" cy="3520" r="36" fill="currentColor"/>
            <circle id="7" cx="1776" cy="2289" r="36" fill="currentColor"/>
            <circle id="2" cx="140" cy="4275" r="36" fill="currentColor"/>
            <circle id="1" cx="36" cy="1999" r="36" fill="currentColor"/>
        </svg>
    )};
export default Lines;
