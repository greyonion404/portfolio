import data from "../../data";
import { Text } from "../Text_Component/Text";

export default function WorkHistory() {

    let hasWorkplaces = (data.info.WorkAndEducation.workedAt.length === 0);
    return (
        <>
            <Text size={1} active>
                Work :
            </Text>
            {
                hasWorkplaces ? (<Text> No Workplaces to show as of yet ... </Text>) :
                    <>
                        oh no! work
                    </>
            }
        </>
    )

}
