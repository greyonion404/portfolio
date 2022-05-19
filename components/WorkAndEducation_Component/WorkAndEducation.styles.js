import styled from 'styled-components'
import data from '../../data'





let WorkAndEducationContainer = styled.div`
    height: max-content;
    width: 65%;
    background-color: ${data.styles.color.primary}; 
    margin: auto;
    margin-top: 10px;
    padding: 15px;
    padding-left: 30px;
    @media ${data.styles.devices.tablet} {
        width: 100%;
        padding-left: 15px;
    }
`

export { WorkAndEducationContainer }