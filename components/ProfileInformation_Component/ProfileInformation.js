import data from "../../data";
import { Text } from "../Text_Component/Text";
import { ProfileContainer, ProfileMain, ProfileTextContainer, ProfileImageContainer, ProfileImage } from "./ProfileInformation.styles";


export default function ProfileInformation() {

    return (
        <>
            <ProfileContainer>
                <ProfileMain>
                    <ProfileTextContainer>
                        <Text size={4} active> {data.info.profileInformation.profilName} </Text>
                        <Text size={2} style={{ marginBottom: "20px" }}> {data.info.profileInformation.designation} </Text>
                        <Text size={1}>{data.info.profileInformation.aboutInfo}</Text>
                    </ProfileTextContainer>
                    <ProfileImageContainer>
                        <ProfileImage src={data.info.profileInformation.profileImage} />
                    </ProfileImageContainer>
                </ProfileMain>
            </ProfileContainer>
        </>
    )
}
