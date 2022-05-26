import { useState, useRef, useEffect } from "react";
import { Console, Input } from "./Terminal.styles";
import { Text } from '../Text_Component/Text'
import { visitUrlInNewTab } from "../../Utils/utility-functions";
import { AiFillHome, AiFillUpCircle } from 'react-icons/ai';
import data from "../../data";

export default function Terminal() {


    const [history, setHistory] = useState([]);
    const [input, setInput] = useState("");
    const [user, setUser] = useState({ name: "user", password: "" });
    let inputRef = useRef(null);


    useEffect(() => {
        inputRef.current.focus();
    }, [])


    function isValidGotoCommand(input) {
        let regex = /goto [a-zA-Z0-9]+/;
        return regex.test(input);
    }

    function isValidURL(input) {
        let regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        return regex.test(input);
    };

    // incomplete
    function getProjectUrl() {
        return 'project';
    }


    function executeCommands() {
        let output = {};

        if (isValidGotoCommand(input)) {
            let parameter = input.split(' ')[1];
            let url;
            if (!isValidURL(parameter)) url = parameter;
            else url = getProjectUrl()
            visitUrlInNewTab(url);
        }
        else if (input == '') {
            output = { isError: false, content: "" };
        }
        else if (input == 'clear') {
            setHistory([]);
            return;
        }
        else if (input == 'whoami') {
            output = { isError: false, content: `you are logged in as ${user.name}.` };
        }
        else {
            output = { isError: true, content: "is not a valid command" };
        }

        let newEntry = { input: input, output: output };
        setHistory([...history, newEntry]);

    }


    return (
        <>
            <Console onClick={() => { inputRef.current.focus() }}>
                <Text style={{ whiteSpace: "pre-line", padding: "10px", borderRadius: "0", position: "sticky", top: "0", backgroundColor: "#504b45" }}>
                    <AiFillHome color="#f37458" />
                    <span style={{ color: "#87d441", }}> grey-terminal@1.0.0 : </span>
                    enter
                    <span style={{ color: "#87d441", }}> help </span>
                    to know about the available commands
                </Text>

                {history.map((current, index) => (
                    <div key={index} style={{ paddingLeft: "10px" }}>
                        <Text style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>
                            <span style={{ color: "#87d441" }}> {user.name.concat(" ~$ ")} </span>
                            {current.input}
                        </Text>
                        <Text style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>
                            {
                                current.output.isError &&
                                <>
                                    <span style={{ color: "red" }}> {`Error: `} </span>
                                    <span style={{ color: "#87d441" }}> {`"${current.input}"`} </span>
                                </>
                            }
                            {
                                !current.output.isError &&
                                <span style={{ color: "#87d441" }}> {"> "} </span>
                            }
                            {current.output.content}
                        </Text>
                    </div>
                ))}

                <Text style={{ whiteSpace: "pre-line", wordBreak: "break-all" }}>
                    <span style={{ color: "#87d441", paddingLeft: "10px" }}> {user.name.concat("@grey-terminal ~$ ")} </span>
                    {input}
                </Text>

                <Input spellCheck="false"
                    value={input}
                    ref={inputRef}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            executeCommands();
                            setInput("");
                            inputRef.current.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    onChange={(event) => {
                        setInput(event.target.value)
                    }}
                />

            </Console>
        </>
    )
}



