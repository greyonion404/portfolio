import projects from './information/project_information';
import devices from './information/media_query_information'
import educationHistory from './information/education_information'
import workHistory from './information/work_information';
import color from './information/color_information';


const ProfileInformation = {
    profilName: "Grey Onion",
    profileImage: "https://picsum.photos/200",
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