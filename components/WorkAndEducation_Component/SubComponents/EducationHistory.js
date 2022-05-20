import { useState } from "react";
import data from "../../../data";
import visitUrlInNewTab from "../../../Utils/VisitUrlInNewTab";
import { Text } from "../../Text_Component/Text";
import { ContainerChild, PromptContainer} from "../WorkAndEducation.styles";




export default function EducationHistory() {
    let hasEducation = (data.info.WorkAndEducation.studiedAt.length === 0);
    let educationInstitutions = data.info.WorkAndEducation.studiedAt;
    const [showEducation, setShowEducation] = useState(false);

    const toggleEducationShown = () => {
        setShowEducation(!showEducation)
    }
    return (
        <>
            <PromptContainer>
                <Text size={1} >
                    Education :
                </Text>
                <Text underlineOnHover onClick={toggleEducationShown}>
                    {
                        (showEducation ? "hide" : "view")
                    }
                </Text>
            </PromptContainer>
            {
                hasEducation ? (<Text> No Educational instituitions to show as of yet ... </Text>) :
                    (
                        showEducation && educationInstitutions.map((current) =>
                            <ContainerChild key={current.id} onClick={() => { visitUrlInNewTab(current.websiteLink) }}>
                                <Text active>
                                    {current.institutionName}
                                </Text>
                                <Text>
                                    {current.keyInformation}{" ("}{current.startTime}{" - "}{current.endTime}{")"}
                                </Text>
                                <Text>{current.description}</Text>
                            </ContainerChild>
                        )
                    )
            }
        </>
    )
}
