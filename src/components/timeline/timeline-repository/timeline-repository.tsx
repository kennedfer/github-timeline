import { useRef } from "react";
import { GithubRepository } from "../../../types/github/github-timeline-api.types";
import styles from "./timeline-repository.module.css";
import useIsVisible from "../../../hooks/isVisible";

const MONTHS: string[] = ["Janeiro", "Fevereiro", "Março", "Abril","Maio", "Junho", "Julho", "Agosto","Setembro","Outubro","Novembro","Dezembro"]

const TimelineRepository = ({
  repository,
}: {
  repository: GithubRepository;
}) => {

  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <li style={{
      '--background-color':repository.color
    }} className={styles["timeline-repository-container"]}>
      <div style={
      {
        background: repository.color,
        opacity: isVisible ? 1: 0
      }
    } 
    ref={ref}
    className={styles["timeline-repository"]}>
        <span  className={styles["timeline-repository__created_at"]}>{repository.date_string}</span>
        <h2>{repository.name}</h2>
        <i>{repository.description}</i>
        <a target="_blank" href={repository.html_url}>Abrir repositorio</a>
      </div>
    </li>
  );
};

export default TimelineRepository;
