import styles from "./ProjectCard.module.css";
import WebIcon from "../assets/icons/world.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";

type Props = {
    url?: string;
    repoUrl?: string;
    blogUrl?: string;
}

export default function ProjectLinks({url, repoUrl, blogUrl}: Props) {
    return (
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
    )
}