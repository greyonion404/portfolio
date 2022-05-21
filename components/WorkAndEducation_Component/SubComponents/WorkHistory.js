import { useState } from "react";
import data from "../../../data";
import { Text } from "../../Text_Component/Text";
import { ContainerChild, PromptContainer } from "../WorkAndEducation.styles";
import { AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai';
import { visitUrlInNewTab } from "../../../Utils/utility-functions";

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
                <Text underlineOnHover active onClick={toggleWorkShown}>
                    {
                        showWork ?
                            (<AiFillUpCircle color={data.styles.color.text.lighter} />) :
                            (<AiFillDownCircle color={data.styles.color.text.lighter} />)
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
