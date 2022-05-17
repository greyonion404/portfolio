import styled from 'styled-components'
import data from '../../data'



let fontFamily = "'Yanone Kaffeesatz', sans-serif";

let getFontSize = (fontIndex) => {
    let fonts = ['xx-small', 'small', 'large', 'xx-large'];
    return fonts[fontIndex];
};

let Text = styled.p`
    cursor: pointer;
    padding: 10px;
    font-size: ${({size})=>(getFontSize(size))};
    font-family: ${fontFamily};
    text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
    color:  ${({ active }) => (active ? `${data.styles.color.text.lightest}` : `${data.styles.color.text.lighter}`)};
    border-radius: ${data.styles.borderRadius};;

    &:hover{
        text-decoration: ${({ underlineOnHover }) => (underlineOnHover ? "underline" : "none")};
    }
`
export { Text }