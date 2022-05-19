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
        home: {
            profilName: "Grey Onion",
            profileImage: "https://picsum.photos/200",
            designation: "Programmer and Web-developer",
            aboutInfo: "Passionate React Developer with 3+ years of experience blending the design with programming skills to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.",
        },
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