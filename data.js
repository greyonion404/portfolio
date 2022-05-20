const screenSize = {
    mobileSmall: '320px',
    mobileMedium: '375px',
    mobileLarge: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopLarge: '1440px',
    desktop: '2560px',
};

const data = {
    info: {
        ProfileInformation: {
            profilName: "Grey Onion",
            profileImage: "https://picsum.photos/200",
            designation: "Programmer and Web-developer",
            aboutInfo: "Passionate React Developer with 3+ years of experience blending the design with programming skills to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.",
        },
        WorkAndEducation: {
            prompt: "Work and Education",
            studiedAt: [
                {
                    id: 1,
                    institutionName: "North South University",
                    keyInformation: "BSc in CSE",
                    startTime: "20 Jan 2020",
                    endTime: "present",
                    websiteLink: null,
                    description: "I am doing my BSc in computer science and engineering at North South University.",
                },
                {
                    id: 2,
                    institutionName: "Bangladesh Agriculture Univesity College",
                    keyInformation: "Intermediate",
                    startTime: "19 Jan 2017",
                    endTime: "19 Jan 2019",
                    websiteLink: null,
                    description: "I have passed my HSC examination from Bangladesh Agriculture Univesity College, mymensingh.",
                },
                {
                    id: 3,
                    institutionName: "Mymensingh Zilla School",
                    keyInformation: "High-school",
                    startTime: "19 Jan 2010",
                    endTime: "19 Nov 2018",
                    websiteLink: null,
                    description: "I have passed my SSC examination from Mymensingh Zilla School",
                },
            ],
            workedAt: [
                {
                    id: 1,
                    role: "junior engineer",
                    workplaceName: "Amazon",
                    startTime: "20 Jan 2021",
                    endTime: "present",
                    websiteLink: "https://www.aboutamazon.com/workplace",
                    description: "I was offered and accepted a full-time offer with Amazon - a Software Development company in Georgia.",
                },
                {
                    id: 2,
                    role: "software developer",
                    workplaceName: "Google",
                    startTime: "12 Jan 2020",
                    endTime: "20 Jan 2021",
                    websiteLink: null,
                    description: "I was offered and accepted a full-time offer with Google - a Software Development company in Georgia.",
                },

            ],
        }
    },
    styles: {
        devices: {
            mobileS: `(max-width: ${screenSize.mobileSmall})`,
            mobileM: `(max-width: ${screenSize.mobileMedium})`,
            mobileL: `(max-width: ${screenSize.mobileLarge})`,
            tablet: `(max-width: ${screenSize.tablet})`,
            laptop: `(max-width: ${screenSize.laptop})`,
            laptopL: `(max-width: ${screenSize.laptopLarge})`,
            desktop: `(max-width: ${screenSize.desktop})`,
        },
        color: {
            dark: "#000000",
            light: "#FFFFFF",
            primary: "#23272A",
            primaryMedium: "#2C2F33",
            secondary: "#5865F2",
            secondaryMedium: "#404EED",
            text: {
                light: "#99AAB5",
                lighter: "#C0C0C0",
                lightest: "#FFFFFF",
                inverted: "#000000"
            }
        },
        borderRadius: "10px",
        snippet: {
            centerDiv: `display: flex; align-items: "center"; justify-content: center;`,
        }
    },
};


export { data as default }