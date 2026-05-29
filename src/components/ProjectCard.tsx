import styles from "./ProjectCard.module.css";
import type { Project } from "../data/projects";
import TechTag from "./TechTag";
import WebIcon from "../assets/icons/world.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";


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
            <ul className={styles.links}>                
                {url && 
                (<li data-link="live">
                    <a className={styles.link} href={url}>
                    <WebIcon className={styles.linkIcon}
                     aria-hidden="true" />
                    Live &#62;</a>
                    </li>)}
                {repoUrl && (
                    <li data-link="source">
                        <a className={styles.link} href={repoUrl}>
                            <GithubIcon className={styles.linkIcon} aria-hidden="true" />
                            Source &#62;
                        </a>
                        </li>)}
                 {blogUrl && (
        <li data-link="blog">
            <a className={styles.link} href={blogUrl}>
                Blog
            </a>
        </li>
    )}
            </ul>
            </div>
        </li>
    )
}