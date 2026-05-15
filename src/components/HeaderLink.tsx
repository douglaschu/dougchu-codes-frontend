import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean; }

export default function HeaderLink({
    href,
    className,
    active = false,
    children,
    ...props
}: Props) {
    return (
        <a 
            href={href}
            className={[className, active ? 'active' : ''].filter(Boolean).join(' ')}
            {...props}
            >
                {children}
            </a>
    )
}