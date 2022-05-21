import { useState, useEffect } from 'react';

import BlockContent from '@sanity/block-content-to-react';

import Navbar from '../../components/Navbar_Component/Navbar'
import { BlogContainer } from '../../components/BlogSnippets_Component/BlogSnippets.styles';
import { Text } from '../../components/Text_Component/Text';
import { formattedDate, urlForImage } from '../../Utils/utility-functions';






export default function Blog({ blog }) {
    { blog && console.log(blog) }
    const { title, mainImage, body } = blog;

    return (
        <>
            <Navbar />
            <BlogContainer>
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
                <img style={{ width: "90%", aspectRatio: "100/45", margin: "auto" }} src={urlForImage(mainImage)} />
                {body &&
                    <BlockContent className={"sanity-container"}
                        blocks={body}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        imageOptions={{ fit: 'max' }}
                    />}
            </BlogContainer>
        </>
    )
}




// gets the props for the current homepage
export const getServerSideProps = async pageContext => {


    const slug = pageContext.query.slug;
    if (!slug) return { notFound: true };

    const sanityQuery = encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"]{
        title,
        mainImage,
        publishedAt,
        authorName,
        keywords,
        description,
        body[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
          }
    }`);
    const backendURL = `${process.env.NEXT_PUBLIC_SANITY_URL}${sanityQuery}`;
    try {
        const response = await fetch(backendURL).then(response => response.json());
        const blog = response.result[0];
        if (!blog) return { notFound: true };
        return { props: { blog: blog } };
    }
    catch (err) {
        return { notFound: true };
    }
};