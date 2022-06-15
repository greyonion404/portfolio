import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar_Component/Navbar'
import { ProjectContainer } from '../../components/ProjectSnippets_Component/ProjectSnippets.styles';
import { Text } from '../../components/Text_Component/Text';
import data from '../../data';
import ImageViewer from "react-simple-image-viewer";
import { AiOutlineExpandAlt } from 'react-icons/ai';


function SpecifiedText({ size, content, textAlign, width, paddingLeft }) {

    let style = {
        paddingLeft: paddingLeft,
        width: width,
        textAlign: textAlign,
    }
    return (
        <Text size={size} style={style}>
            {content}
        </ Text>
    );

}

function ModalOpenText({ size, content, textAlign, width, paddingLeft, onClick }) {

    let style = {
        paddingLeft: paddingLeft,
        width: width,
        textAlign: textAlign,
    }
    return (
        <Text size={size} style={style}>
            {content}
        </ Text>
    );

}


function createImageRenderArray(images) {
    let imageRendereArray = [];
    for (let i = 0; i < imageList.length; i++) {
        imageRendereArray.push({ source: images[i] });
    }
    return imageRendereArray;
}


function ImageViewerUI({ images }) {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);



    const openImageViewer = (index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    };

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    if (images && images.length !== 0) {

        let content = <>
            {"See all images that showcases this project. "}
            <AiOutlineExpandAlt color={data.styles.color.text.lighter} onClick={() => { openImageViewer(0) }} />
        </>

        return (
            <>


                <SpecifiedText
                    content={content}
                    size={2} width={"100%"} textAlign="left" paddingLeft={"5%"}

                />

                <img
                    style={{ width: "50%", marginLeft: "5%", marginTop: "20px", marginBottom: "10px" }}
                    src={images[0]}
                    onClick={() => { openImageViewer(0) }}
                />



                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        onClose={closeImageViewer}
                        disableScroll={false}
                        backgroundStyle={{ ibackgroundColor: "rgba(0,0,0,0.9)" }}
                        closeOnClickOutside={true}
                    />
                )}
            </>
        )
    }
}


export default function Project({ project }) {

    const { title, images, mainImage, description } = project;



    return (
        <>
            <Navbar />
            <ProjectContainer>
                <SpecifiedText content={title} size={2} width={"100%"} textAlign="center" />
                <img style={{ width: "90%", aspectRatio: "100/45", margin: "auto", marginBottom: "10px" }} src={mainImage} />
                <SpecifiedText content={"Description : "} size={2} width={"90%"} textAlign="left" paddingLeft={"5%"} />
                <SpecifiedText content={description} size={1} width={"90%"} textAlign="left" paddingLeft={"5%"} />
                <ImageViewerUI images={images} />
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