import styles from './PostCard.module.css'

type Props = {
    title: string;
    pubDate: Date;
    description: string;
    url: string;
}

export default function PostCard({ title, pubDate, description, url }: Props) {
    const formattedDate = pubDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })


return (
    <li className={styles.card}>
        <a href={url}>
            <h2>{title}</h2>
        </a>
        <p className={styles.description}>{description}</p>
        <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
    </li>
)
}