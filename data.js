import projects from './data/project_information';
import devices from './data/media_query_information'
import educationHistory from './data/education_information'
import workHistory from './data/work_information';
import color from './data/color_information';


//  https://drive.google.com/file/d/1Vcg_vjbJXtsQOBefBSj64ABCSFrZqy0B/view?usp=sharing

const ProfileInformation = {
    profilName: "Maruf",
    profileImage: "https://drive.google.com/uc?id=1Vcg_vjbJXtsQOBefBSj64ABCSFrZqy0B",
    designation: "Programmer and Web-developer",
    aboutInfo: "Passionate web/software Developer with 3+ years of experience blending the design with programming skills to deliver an immersive and engaging user experience through efficient development process, proactive feature optimization, and relentless debugging.",
};




const styles = {
    devices: devices,
    color: color,
    borderRadius: "10px",
    snippet: { centerDiv: `display: flex; align-items: "center"; justify-content: center;` }
};


const data = {
    info: {
        ProfileInformation: ProfileInformation,
        projects: projects,
        WorkAndEducation: {
            prompt: "Work and Education",
            studiedAt: educationHistory,
            workedAt: workHistory,
        }
    },
    styles: styles,
};


export { data as default }