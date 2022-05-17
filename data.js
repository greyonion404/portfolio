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

        borderRadius: "10px",

        color:
        {
            dark: "#000000",
            light: "#FFFFFF",
            primary: "#23272A",
            primaryMedium: "#2C2F33",
            secondary: "#5865F2",
            secondaryMedium: "#404EED",
            text: {
                light: "#99AAB5",
                lighter: "#DBDBDB",
                lightest: "#FFFFFF",
                inverted: "#000000"
            }
        },

        snippet: 
        {
            centerDiv: `display: flex; align-items: "center"; justify-content: center;`
        }
    },



};
export { data as default }