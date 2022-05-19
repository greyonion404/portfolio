import data from "../../data";
import { Text } from "../Text_Component/Text";
import { WorkAndEducationContainer } from "./WorkAndEducation.styles";
import WorkHistory from "./WorkHistory";
import EducationHistory from "./EducationHistory";


export default function WorkAndEducation() {

    return (
        <>
            <WorkAndEducationContainer>
                <Text size={2} active>{data.info.WorkAndEducation.prompt}</Text>
                <WorkHistory />
                <EducationHistory />
            </WorkAndEducationContainer>
        </>
    )
}



