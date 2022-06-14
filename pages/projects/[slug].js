import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar_Component/Navbar'
import { ProjectContainer } from '../../components/ProjectSnippets_Component/ProjectSnippets.styles';
import { Text } from '../../components/Text_Component/Text';
import data from '../../data';





export default function Project({ project }) {

    const { title, slug, mainImage, description, shortDescription } = project;

    return (
        <>
            <Navbar />
            <ProjectContainer>
                <Text size={2} style={
                    {
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%",
                        textAlign: "center"
                    }
                }>
                    {title}
                </Text>
                <img style={{ width: "90%", aspectRatio: "100/45", margin: "auto", marginBottom: "10px"}} src={mainImage} />

                <Text style={
                    {
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "90%",
                    }
                }>
                    {description}
                </Text>
            </ProjectContainer>


        </>
    )
}


const findProjectWithSlug = (projects, slug) => {
    if (projects) {
        for (let i = 0; i < projects.length; i++)
            if (projects[i].slug === slug) return projects[i];
    }

    return null;
}


// gets the props for the current page
export const getServerSideProps = async pageContext => {


    const slug = pageContext.query.slug;
    let projects = data.info.projects;
    let project = findProjectWithSlug(projects, slug);

    if (!slug) return { notFound: true };
    if (project) return { props: { project: project } };

    return { notFound: true };

};