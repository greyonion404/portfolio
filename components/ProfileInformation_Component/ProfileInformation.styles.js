import styled from 'styled-components'
import data from '../../data'

let height = "40vh";
let width = " 100vw";

let ProfileContainer = styled.div`
    ${data.styles.snippet.centerDiv}
    height: max-content;
    width:  ${width};
    background-color: ${data.styles.color.primaryMedium}; 
    padding-top: 10px;
`
let ProfileMain = styled.div`
    padding: 15px;
    padding-left: 30px;
    height: max-content;
    width: 65%;
    background-color: ${data.styles.color.primary}; 
    display: flex;
    @media ${data.styles.devices.tablet} {
        flex-direction: column-reverse;
        padding-left: 15px;
        width: 100%;
    }
`
let ProfileTextContainer = styled.div`
 
    background-color: ${data.styles.color.primary}; 
    width: 60%;
    min-width: 60%;
    max-width: 60%;
    margin-bottom: 30px;
    @media ${data.styles.devices.tablet} {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
    }
`
let ProfileImageContainer = styled.div`
    ${data.styles.snippet.centerDiv}
    background-color: ${data.styles.color.primary}; 
    width: 40%;
    min-width: 40%;
    max-width: 40%;
    @media ${data.styles.devices.tablet} {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`
let ProfileImage = styled.img`
    margin-top: 5vh;
    margin-left: auto;
    margin-right: 20%;
    height: 15vh;
    aspect-ratio: 1;
    border-radius: 50%;
    @media ${data.styles.devices.tablet} {
        margin: 0;
    }
`

export { ProfileContainer, ProfileMain, ProfileTextContainer, ProfileImageContainer, ProfileImage }