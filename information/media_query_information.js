
const screenSize = {
    mobileSmall: '320px',
    mobileMedium: '375px',
    mobileLarge: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopLarge: '1440px',
    desktop: '2560px',
};

const devices = {
    mobileS: `(max-width: ${screenSize.mobileSmall})`,
    mobileM: `(max-width: ${screenSize.mobileMedium})`,
    mobileL: `(max-width: ${screenSize.mobileLarge})`,
    tablet: `(max-width: ${screenSize.tablet})`,
    laptop: `(max-width: ${screenSize.laptop})`,
    laptopL: `(max-width: ${screenSize.laptopLarge})`,
    desktop: `(max-width: ${screenSize.desktop})`,
};

export {devices as default};