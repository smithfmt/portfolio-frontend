import agentycs_logo from "@assets/images/gallery/agentycs_logo.png";
import agentycs_screenshot from "@assets/images/gallery/agentycs_screenshot.png";
import memlet_logo from "@assets/images/gallery/memlet_logo.png";
import memlet_screenshot from "@assets/images/gallery/memlet_screenshot.png";
import portfolio_logo from "@assets/images/gallery/portfolio_logo.png";
import portfolio_screenshot from "@assets/images/gallery/portfolio_screenshot.png";

interface Image {
    [key: string]: { src: string };
};

const cloudinary = (str: string, folder: string = "images") => {
    return { src: `https://res.cloudinary.com/dcrome1pq/image/upload/${folder}/${str}.png` };
};

export const Icons: Image = {
    React: cloudinary("React", "Icons"),
    NodeJS: cloudinary("Node", "Icons"),
    ExpressJS: cloudinary("Express", "Icons"),
    NextJS: cloudinary("Next", "Icons"),
    KeystoneJS: cloudinary("Keystone", "Icons"),
    Numpy: cloudinary("Numpy", "Icons"),
    Pandas: cloudinary("Pandas", "Icons"),
    Prefect: cloudinary("Prefect", "Icons"),
    GitHub: cloudinary("Github", "Icons"),
    Gitlab: cloudinary("Gitlab", "Icons"),
    Bitbucket: cloudinary("Bitbucket", "Icons"),
    Agile: cloudinary("Agile", "Icons"),
    UCL: cloudinary("UCL", "Icons"),
    Wincoll: cloudinary("Wincoll", "Icons"),
    Sentium: cloudinary("Sentium", "Icons"),
    Memlet: cloudinary("Memlet", "Icons"),
    BfG: cloudinary("BfG", "Icons"),
    LinkedIn: cloudinary("LinkedIn", "Icons"),
    Gmail: cloudinary("Gmail", "Icons"),
    Phone: cloudinary("Phone", "Icons"),
    BJS: cloudinary("BJS", "Icons"),
    BegReact: cloudinary("BegReact", "Icons"),
    AdvReact: cloudinary("AdvReact", "Icons"),
    LNode: cloudinary("LNode", "Icons"),
    GraphQL: cloudinary("GraphQL", "Icons"),
    CSS: cloudinary("CSS", "Icons"),
    PostgreSQL: cloudinary("PostgreSQL", "Icons"),
    Firebase: cloudinary("Firebase", "Icons"),
    Docker: cloudinary("Docker", "Icons"),
    Prisma: cloudinary("Prisma", "Icons"),
    Python: cloudinary("Python", "Icons"),
    Jira: cloudinary("Jira", "Icons"),
    JavaScript: cloudinary("JavaScript", "Icons"),
    Figma: cloudinary("Figma", "Icons"),
    HTML: cloudinary("HTML", "Icons"),
    JS: cloudinary("JS", "Icons"),
    ERPNext: cloudinary("ERPNext", "Icons"),
    TailwindCSS: cloudinary("Tailwind", "Icons"),
    Web: cloudinary("Web", "Icons"),
};

export const Images: Image = {
    Profile: cloudinary("Profile"),
    ProfileSmall: cloudinary("Profile-small"),
    bg1: cloudinary("bg1"),
    bg2: cloudinary("bg2"),
    bg3: cloudinary("bg3"),
    bg4: cloudinary("bg4"),
    bg5: cloudinary("bg5"),
    bg6: cloudinary("bg6"),
    bg7: cloudinary("bg7"),
    bgNew: cloudinary("bgNew"),
    mem1: cloudinary("mem1"),
    mem2: cloudinary("mem2"),
    mem3: cloudinary("mem3"),
    mem4: cloudinary("mem4"),
    mem5: cloudinary("mem5"),
    mem6: cloudinary("mem6"),
    mem7: cloudinary("mem7"),
    mem8: cloudinary("mem8"),
    mem9: cloudinary("mem9"),
    courses1: cloudinary("courses1"),
    courses2: cloudinary("courses2"),
    courses3: cloudinary("courses3"),
    courses4: cloudinary("courses4"),
    reactCourse: cloudinary("react-course"),
    sentium: cloudinary("sentium"),
    sentiumLogo: cloudinary("sentium-logo"),
    website: cloudinary("website"),
    websiteDesign: cloudinary("website-design"),
    WincollStock1: cloudinary("WincollStock1"),
    WincollStock2: cloudinary("WincollStock2"),
    IEUK: cloudinary("IEUK"),
    IEUK1: cloudinary("IEUK1"),
    IEUK2: cloudinary("IEUK2"),
    IEUK3: cloudinary("IEUK3"),
    IEUK4: cloudinary("IEUK4"),
    IEUK5: cloudinary("IEUK5"),
    IEUK6: cloudinary("IEUK6"),
    IBMCert: cloudinary("IBMCert"),
    IBMCapstone: cloudinary("IBMCapstone"),
    IBMLogo: cloudinary("IBMLogo"),
    LloydsLogo: cloudinary("LloydsLogo"),
};

export const GalleryImages = {
    agentycs_screenshot,
    agentycs_logo,
    memlet_screenshot,
    memlet_logo,
    portfolio_screenshot,
    portfolio_logo,
}