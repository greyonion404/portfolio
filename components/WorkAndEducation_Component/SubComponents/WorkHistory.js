import { useState } from "react";
import data from "../../../data";
import visitUrlInNewTab from "../../../Utils/VisitUrlInNewTab";
import { Text } from "../../Text_Component/Text";
import { ContainerChild, PromptContainer } from "../WorkAndEducation.styles";


// for later use
// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

export default function WorkHistory() {

    let hasWorkplaces = (data.info.WorkAndEducation.workedAt.length === 0);
    let workPlaces = data.info.WorkAndEducation.workedAt;
    const [showWork, setShowWork] = useState(false);

    const toggleWorkShown = () => {
        setShowWork(!showWork)
    }
    return (
        <>
            <PromptContainer>
                <Text size={1} >
                    Work :
                </Text>
                <Text underlineOnHover onClick={toggleWorkShown}>
                    {
                        (showWork ? "hide" : "view")
                    }
                </Text>
            </PromptContainer>


            {
                hasWorkplaces ? (<Text> No Workplaces to show as of yet ... </Text>) :
                    (
                        showWork && workPlaces.map((current) =>
                            <ContainerChild key={current.id} onClick={() => { visitUrlInNewTab(current.websiteLink) }}>
                                <Text active>
                                    {current.role}{" @ "}{current.workplaceName}
                                </Text>
                                <Text >{current.startTime}{" - "}{current.endTime}</Text>
                                <Text>{current.description}</Text>
                            </ContainerChild>
                        )
                    )
            }
        </>
    )

}
