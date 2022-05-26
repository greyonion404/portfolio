import styled from 'styled-components'
import data from '../../data.js'

let Console = styled.div`
    background: rgba(56, 4, 40, 0.9);
    height: 100vh;
    width: 100vw;
    color: white;
    padding-bottom: 5%;
    overflow-y: scroll;
    @media ${data.styles.devices.tablet} {
    }
`
let Input = styled.input`

    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: baseline;
    border: none;
    outline: none;
    background-color: transparent;
    color: transparent;
    white-space: pre-line;
    @media ${data.styles.devices.tablet} {
    }
`



export { Console, Input }