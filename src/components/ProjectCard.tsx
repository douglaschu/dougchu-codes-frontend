import styles from "./ProjectCard.module.css";
import type { Project } from "../data/projects";

type Props = {
    project: Project;
}

export default function ProjectCard({project}: Props) {
    const { title, description, image, imageAlt, url, repoUrl, blogUrl, tech, stack } = project;

    return (
        <li className={styles.card}>
            <img src={image} alt={imageAlt} className={styles.image} />
            <h4 className={styles.projectCardTitle}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <ul className={styles.tags}>
                <li className={styles.stackTag}>{stack}</li>
                {tech.map((t) => <li key={t} className={styles.techTag}>{t}</li>)}
            </ul>
            <ul className={styles.links}>
                {url && <li><a href={url}>Live</a></li>}
                {repoUrl && <li><a href={repoUrl}>Source</a></li>}
                {blogUrl && <li><a href={blogUrl}>Blog</a></li>}
            </ul>
        </li>
    )
}