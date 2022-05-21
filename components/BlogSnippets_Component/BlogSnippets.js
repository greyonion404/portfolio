import Link from 'next/link';
import { BlogSnippet } from './BlogSnippets.styles';
import { Text } from '../Text_Component/Text';
import { useRouter } from 'next/router';
import { FaReadme, FaPenFancy, FaCalendar } from 'react-icons/fa';
import { formattedDate, urlForImage } from '../../Utils/utility-functions';




export default function BlogSnippets({ blogs }) {

    const router = useRouter();







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

