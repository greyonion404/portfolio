import { useState, useRef, useEffect } from "react";
import { Console, Error, HeadingText, Highlighted, Input } from "./Terminal.styles";
import { Text } from '../Text_Component/Text'
import { visitUrlInNewTab } from "../../Utils/utility-functions";
import { FaTerminal, FaDesktop } from 'react-icons/fa';


export default function Terminal() {


    const [history, setHistory] = useState([]);
    const [input, setInput] = useState("");
    const [user, setUser] = useState({ name: "user", password: "" });
    let inputRef = useRef(null);
    let currentCommandIndex = 0;


    useEffect(() => {
        inputRef.current.focus();
    }, [])


    useEffect(() => {
        currentCommandIndex = history.length;
    }, [history])

    function scrollToView(reference) {
        reference.current.scrollIntoView({ behavior: "smooth" });
    }

    function keydownAction(event) {

        if (event.key == "Enter") {
            event.preventDefault();
            executeCommands();
            setInput("");
            scrollToView(inputRef);
        }
        if (event.key == "ArrowUp") {
            if (history.length !== 0 && currentCommandIndex > 0) currentCommandIndex--;
            if (history.length !== 0) setInput(history[currentCommandIndex].input);
        }
        if (event.key == "ArrowDown") {
            if (currentCommandIndex < history.length - 1) currentCommandIndex++;
            if (history.length !== 0 && currentCommandIndex < history.length) setInput(history[currentCommandIndex].input);
        }
    }

    function inputUpdateAction(event) {
        setInput(event.target.value)
    }

    function pageclickedAction() {
        inputRef.current.focus();
        scrollToView(inputRef);
    }


    function isValidGotoCommand() {
        let regex = /goto [a-zA-Z0-9]+/;
        return regex.test(input);
    }

    function isValidURL(input) {
        console.log(input);
        return input.includes('http');
    }
    // incomplete
    function getProjectUrl(keyword) {
        return 'project';
    }

    function gotoAction() {
        let parameter = input.split(' ')[1];
        let url = isValidURL(parameter) ? parameter : getProjectUrl(parameter);
        let content = `visiting ${url}`;
        addHistoryEntry(false, content);
        visitUrlInNewTab(url);
    }

    function addHistoryEntry(isError, content) {
        let newEntry = { input: input, output: { isError, content } };
        setHistory([...history, newEntry]);
    }

    function addError(isError) {
        if (isError) addHistoryEntry(isError, "is not a valid command");
    }

    function whoamiAction() {
        let content = `you are logged in as ${user.name}.`;;
        addHistoryEntry(false, content);
    }


    function clearAction() {
        setHistory([]);
    }


    let commands = [
        {
            keyword: '',
            validation: isValidGotoCommand,
            action: gotoAction,
        },
        {
            keyword: 'clear',
            validation: () => { return false },
            action: clearAction,
        },
        {
            keyword: 'whoami',
            validation: () => { return false },
            action: whoamiAction,
        },
    ]



    function executeCommands() {
        if (input === '') {
            addHistoryEntry(false, "");
            return;
        }
        let isError = true;
        for (let command of commands) {
            if (command.keyword === input || command.validation(input)) {
                command.action();
                isError = false;
            }
        }
        addError(isError);
    }



    return (
        <>
            <Console onClick={pageclickedAction}>


                <div style={{ position: "sticky", top: "0", width: "100vw", backgroundColor: "#070707", padding: "10px" }}>

                    <HeadingText>
                        <FaDesktop style={{ width: "100%" }} />
                        <span> grey-terminal@1.0.0 : </span> enter <span> help </span> to know about the available commands
                    </HeadingText>
                </div>


                <div style={{ paddingLeft: "10px" }}>
                    {history.map((current, index) => (
                        <div key={index}>
                            <Text style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>
                                <Highlighted> {user.name.concat(" ~$ ")} </Highlighted> {current.input}
                            </Text>
                            <Text style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>
                                {
                                    current.output.isError &&
                                    <>
                                        <Error> {`Error: `} </Error>
                                        <Highlighted> {`"${current.input}"`} </Highlighted> {current.output.content}
                                    </>
                                }
                                {

                                    !current.output.isError &&
                                    <>
                                        <FaTerminal color={"#87d441"} style={{ marginRight: "10px" }} />
                                        {current.output.content}
                                    </>
                                }
                            </Text>
                        </div>
                    ))}

                    <Text style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>
                        <Highlighted> {user.name.concat("@grey-terminal ~$ ")} </Highlighted>
                        {input}
                    </Text>

                </div>


                <Input spellCheck="false"
                    value={input}
                    ref={inputRef}
                    onKeyDown={keydownAction}
                    onChange={inputUpdateAction}
                />

            </Console>
        </>
    )
}



