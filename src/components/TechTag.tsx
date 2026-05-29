import type { ComponentType, SVGProps } from "react";
import styles from "./TechTag.module.css";
import DotnetIcon from "../assets/icons/dotnet.svg?react";
import AngularIcon from "../assets/icons/angular.svg?react";
import AstroIcon from "../assets/icons/astro.svg?react";
import AutomatorIcon from "../assets/icons/robot.svg?react";
import AzureIcon from "../assets/icons/azure.svg?react";
import CssIcon from "../assets/icons/css.svg?react";
import DockerIcon from "../assets/icons/docker.svg?react";
import GolangIcon from "../assets/icons/go.svg?react";
import GraphAlgoIcon from "../assets/icons/topology-star-ring.svg?react";
import Html5Icon from "../assets/icons/html5.svg?react";
import MacOsIcon from "../assets/icons/macos-finder.svg?react";
import MdxIcon from "../assets/icons/markdown.svg?react";
import MlIcon from "../assets/icons/brain-cog.svg?react";
import PythonIcon from "../assets/icons/python.svg?react";
import RazorIcon from "../assets/icons/blazor.svg?react";
import ReactIcon from "../assets/icons/react.svg?react";
import RestAPIsIcon from "../assets/icons/plug-connected.svg?react";
import ShellIcon from "../assets/icons/powershell.svg?react";
import SqlIcon from "../assets/icons/sql.svg?react";
import TsIcon from "../assets/icons/typescript.svg?react";
import WebIcon from "../assets/icons/world.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";

type Props = {
    tech: string[];
}


const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    ".net": DotnetIcon,
    "angular": AngularIcon,
    "astro": AstroIcon,
    "automator": AutomatorIcon,
    "azure": AzureIcon,
    "css": CssIcon,
    "docker": DockerIcon,
    "golang": GolangIcon,
    "graph algorithms": GraphAlgoIcon,
    "html5": Html5Icon,
    "macos": MacOsIcon,
    "mdx": MdxIcon,
    "ml": MlIcon,
    "python": PythonIcon,
    "razor": RazorIcon,
    "react": ReactIcon,
    "rest apis": RestAPIsIcon,
    "shell": ShellIcon,
    "sql": SqlIcon,
    "typescript": TsIcon,
    "web": WebIcon,
    "github": GithubIcon,
};

export default function TechTag({tech}: Props) {
    return (
         <ul className={styles.tags}>                
                {tech.map((t) => {
                    const Icon = icons[t.toLowerCase()];
                    return (
                        <li key={t} className={styles.techTag}
                        data-tech={t.toLowerCase()}>
                            {Icon && <Icon className={styles.techIcon} aria-hidden="true" />}
                            {t}
                        </li>
                    );
                })}
            </ul>
    )
}