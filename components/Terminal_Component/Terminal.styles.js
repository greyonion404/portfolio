import styled from 'styled-components'
import data from '../../data.js'
import { Text } from '../Text_Component/Text'

let Console = styled.div`
    background: #090909;
    height: 100vh;
    width: 100vw;
    color: white;
    padding-bottom: 20%;
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

let HeadingText = styled(Text)`
    white-space: pre-line;
    padding: 10px;
    margin: auto;
    width: max-content;
    max-width: "100%";

    >span{
        color: #87d441;
    }

`
let Highlighted = styled.span`
    color: #87d441;
`
let Error = styled.span`
    color: #FF6347;
`


export { Console, Input, HeadingText, Highlighted, Error }

