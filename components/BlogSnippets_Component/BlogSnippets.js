import Link from 'next/link';

import sanityClient from '@sanity/client';
import ImageBuilder from "@sanity/image-url";
import data from '../../data';
import { BlogSnippet } from './BlogSnippets.styles';
import { Text } from '../Text_Component/Text';
import { useRouter } from 'next/router';
import { FaReadme, FaPenFancy, FaCalendar } from 'react-icons/fa';



export default function BlogSnippets({ blogs }) {

    const router = useRouter();


    function urlForImage(source) {

        if (!source) return data.info.ProfileInformation.profileImage;

        const builder = ImageBuilder(sanityClient({
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
            apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
            useCdn: true,
        }));

        return builder.image(source).url();
    }

    const formattedDate = (dateString) => {
        let formatted = new Date(dateString).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
        return formatted;
    }


    return (
        <>
            {
                blogs.map((article, index) =>
                    <BlogSnippet key={article.slug.current} >
                        <Text active>{article.title}</Text>
                        <div>
                            <img width={200} height={120} style={{ marginBottom: "10px" }} src={urlForImage(article.mainImage)} />
                        </div>
                        <Text underlineOnHover onClick={() => { router.push(`/blogs/${article.slug.current}`) }}>
                            Read This Blog
                            {<FaReadme style={{ marginLeft: "8px", fontSize: "90%" }} />}
                        </Text>
                        <Text>
                            {article.authorName && <FaPenFancy style={{ marginRight: "4px", fontSize: "60%" }} />}
                            {article.authorName && article.authorName}
                            {<FaCalendar style={{ marginLeft: "20px", marginRight: "4px", fontSize: "60%" }} />}
                            {formattedDate(article.publishedAt)}
                        </Text>
                    </BlogSnippet>
                )
            }

        </>
    )
}

