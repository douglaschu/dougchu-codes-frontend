import styles from "./ProjectCard.module.css";
import type { Project } from "../data/projects";
import TechTag from "./TechTag";
import ProjectLinks from "./ProjectLinks";

type Props = {
    project: Project;
}

export default function ProjectCard({project}: Props) {
    const { title, description, image, imageAlt, url, repoUrl, blogUrl, tech, stack } = project;

    return (
        <li className={styles.card}>
            <div className="cardHeader">
                <p className={styles.stackTag}>{stack}</p>
            </div>
            <div className="cardBody">
                
            {image && (<img src={image} alt={imageAlt} className={`${styles.image} contain`} />)}
          
            <h4 className={styles.projectCardTitle}>{title}</h4>
            <p className={styles.description}>{description}</p>
            </div>
            <div className="cardFooter">
            <TechTag tech={tech} />
<ProjectLinks url={url} repoUrl={repoUrl} blogUrl={blogUrl} />
            </div>
        </li>
    )
}