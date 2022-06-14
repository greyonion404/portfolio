import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar_Component/Navbar'
import { Text } from '../../components/Text_Component/Text';
import data from '../../data';






export default function Project({ project }) {

    const { title, slug, mainImage, description, shortDescription } = project;

    return (
        <>
            <Navbar />
            <Text>{JSON.stringify(project)}</Text>
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


// gets the props for the current homepage
export const getServerSideProps = async pageContext => {


    const slug = pageContext.query.slug;
    let project = findProjectWithSlug(projects, slug);
    let projects = data.info.projects;

    if (!slug) return { notFound: true };
    if (project) return { props: { project: project } };

    return { notFound: true };

};