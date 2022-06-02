import Link from 'next/link';
import { ProjectSnippet } from './ProjectSnippets.styles';
import { Text } from '../Text_Component/Text';
import { useRouter } from 'next/router';
import { FaReadme, FaCode } from 'react-icons/fa';



export default function ProjectSnippets({ projects }) {

    const router = useRouter();
    return (
        <>
            {
                projects.map((project, index) =>
                    <ProjectSnippet key={project.id} >
                        <Text style={{ textAlign: "left" }} active>
                        {<FaCode style={{ marginRight: "8px", fontSize: "90%" }} />}
                        {project.title}
                        </Text>
                        <div style={{ width: "max-content", paddingTop: "20px",paddingBottom: "20px"}}>
                            <img width={200} height={120} src={project.mainImage} />
                        </div>
                        <Text style={{ textAlign: "left" }}>
                            {project.shortDescription} . . .
                        </Text>

                        <Text style={{ textAlign: "left" }} underline
                            onClick={() => { router.push(`/projects/${project.slug}`) }}>
                            see more about this project
                            {<FaReadme style={{ marginLeft: "8px", fontSize: "90%" }} />}
                        </Text>

                    </ProjectSnippet>
                )
            }

        </>
    )
}

