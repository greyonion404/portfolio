import data from "../../data";
import { Text } from "../Text_Component/Text";

export default function EducationHistory() {
    let hasEducation = (data.info.WorkAndEducation.studiedAt.length === 0);
    return (
        <>
            <Text size={1} active>
                Education :
            </Text>
            {
                hasEducation ? (<Text> No Educational instituitions to show as of yet ... </Text>) :
                    <>
                    </>
            }
        </>
    )
}
