import styled from 'styled-components'
import data from '../../data'





let WorkAndEducationContainer = styled.div`
    height: max-content;
    width: 65%;
    background-color: ${data.styles.color.primary}; 
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;

    @media ${data.styles.devices.tablet} {
        width: 100%;
        padding-left: 15px;
    }
`
let PromptContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${data.styles.color.text.lighter}20;
    padding: 20px;
    cursor: pointer;
`

let opacity = 50;
let hoveredOpacity = 90;
let ContainerChild = styled.div`
    height: max-content;
    width: 100%;
    padding: 30px;
    background-color: ${`${data.styles.color.primaryMedium}${opacity}`};
    border-bottom: 1px solid ${data.styles.color.text.lighter}20;
    margin: 10px;
    border-radius: ${data.styles.borderRadius};

    &:hover{
        background-color: ${`${data.styles.color.primaryMedium}${hoveredOpacity}`};
        transition: cubic-bezier(0.86, 0, 0.07, 1);
        transform: scale(1.015);
    }
`

export { WorkAndEducationContainer, PromptContainer, ContainerChild }