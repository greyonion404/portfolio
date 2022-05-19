import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import data from "../../data";
import { Text } from "../Text_Component/Text";
import { ProfileContainer, ProfileMain, ProfileTextContainer, ProfileImageContainer, ProfileImage } from "./ProfileInformation.styles";


export default function ProfileInformation() {

    return (
        <>
            <ProfileContainer>
                <ProfileMain>

                    <ProfileTextContainer>
                        <Text size={4} active> {data.info.home.profilName} </Text>
                        <Text size={2} style={{ marginBottom: "20px" }}> {data.info.home.designation} </Text>
                        <Text size={1}>{data.info.home.aboutInfo}</Text>
                    </ProfileTextContainer>
                    <ProfileImageContainer>
                        <ProfileImage src={data.info.home.profileImage} />
                    </ProfileImageContainer>

                </ProfileMain>
            </ProfileContainer>
        </>
    )
}
