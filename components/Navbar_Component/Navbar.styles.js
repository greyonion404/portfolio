import styled from 'styled-components'
import data from '../../data'


const navbarHeight = "10vh";
const navbarWidth = "100vw";


let NavUnder = styled.div`
    height: ${navbarHeight};
    width:  ${navbarWidth};
`

let NavbarContainer = styled.div`
    ${data.styles.snippet.centerDiv}
    position: fixed;
    top: 0;
    left: 0;
    height: ${navbarHeight};
    width:  ${navbarWidth};
    background-color: ${data.styles.color.primaryMedium}; 
`

let NavbarMain = styled.div`
    ${data.styles.snippet.centerDiv}
    height: 100%;
    width: 80%;
    background-color: ${data.styles.color.primary};
    padding: 15px;

    @media ${data.styles.devices.tablet} {
        width: 100%;
    }
`

let linkHoverColorOpacity = 50;
let fontFamily = "'Yanone Kaffeesatz', sans-serif";
let NavLink = styled.p`
    padding: 10px;
    font-size: xx-large;
    cursor: pointer;
    font-family: ${fontFamily};
    // {active == true : if the page is in the current link}
    text-decoration: ${({ active }) => (active ? "underline" : "none")};
    color:  ${({ active }) => (active ? `${data.styles.color.text.lightest}` : `${data.styles.color.text.lighter}`)};
    border-radius: ${data.styles.borderRadius};;

    &:hover{
        background-color: ${`${data.styles.color.secondary}${linkHoverColorOpacity}`};
        color: ${data.styles.color.text.lightest};
    }
    
    


`
export { NavUnder, NavbarContainer, NavbarMain, NavLink }