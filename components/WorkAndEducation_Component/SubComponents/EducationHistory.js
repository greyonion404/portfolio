import { useState } from "react";
import data from "../../../data";
import { Text } from "../../Text_Component/Text";
import { ContainerChild, PromptContainer } from "../WorkAndEducation.styles";
import { AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai';
import { visitUrlInNewTab } from "../../../Utils/utility-functions";


function ImageOfLink({ link }) {
    if (link) return (
        <div style={{ width: "max-content", paddingTop: "20px", paddingBottom: "20px" }}>
            <img width={120} height={120} src={link} />
        </div>
    )
}


export default function EducationHistory() {
    let hasEducation = (data.info.WorkAndEducation.studiedAt.length === 0);
    let educationInstitutions = data.info.WorkAndEducation.studiedAt;
    const [showEducation, setShowEducation] = useState(false);

    const toggleEducationShown = () => {
        setShowEducation(!showEducation)
    }
    return (
        <>
            <PromptContainer onClick={toggleEducationShown}>
                <Text size={1} >
                    Education History:
                </Text>
                <Text underlineOnHover active>
                    {
                        showEducation ?
                            (<AiFillUpCircle color={data.styles.color.text.lighter} />) :
                            (<AiFillDownCircle color={data.styles.color.text.lighter} />)
                    }
                </Text>
            </PromptContainer>
            {
                hasEducation ? (<Text> No Educational instituitions to show as of yet ... </Text>) :
                    (
                        showEducation && educationInstitutions.map((current) =>
                            <ContainerChild key={current.id} onClick={() => { visitUrlInNewTab(current.websiteLink) }}>
                                <ImageOfLink link={current.imageLink} />
                                <Text active underlineOnHover>
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
