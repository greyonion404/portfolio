import styled from 'styled-components'
import data from '../../data'

let height = "70vh";
let width = " 65vw";

let BlogSnippetsContainer = styled.div`
    height: ${height};
    width:  ${width};
    margin: auto;
    background-color: ${data.styles.color.primary}; 
    margin-top: 2.5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow-y: scroll;
    padding: 10px;
    @media ${data.styles.devices.tablet} {
        grid-template-columns: 1fr;
        margin-top: .5vh;
        width: 100vw;
        height: 74vh;
    }
`

let opacity = 50;
let hoveredOpacity = 90;
let BlogSnippet = styled.div`
    cursor: pointer;
    height: max-content;
    text-align: center;
    width: 95%;
    background-color: black;
    background-color: ${`${data.styles.color.primaryMedium}${opacity}`};
    margin: auto;
    margin-bottom: 2vmin;
    margin-top: 2vmin;
    padding: 20px;
    border-bottom: 1px solid ${data.styles.color.text.lighter}20;

    &:hover{
        background-color: ${`${data.styles.color.primaryMedium}${hoveredOpacity}`};
        transition: cubic-bezier(0.86, 0, 0.07, 1);
        transform: scale(1.05);
    }
    
    @media ${data.styles.devices.tablet} {
        flex-direction: column-reverse;
        padding-left: 15px;
        width: 100%;
    }
`


export { BlogSnippetsContainer, BlogSnippet }