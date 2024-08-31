import { GithubRepository } from "../../../types/github/github-timeline-api.types";
import styles from "./timeline-repository.module.css";

const MONTHS: string[] = ["Janeiro", "Fevereiro", "Março", "Abril","Maio", "Junho", "Julho", "Agosto","Setembro","Outubro","Novembro","Dezembro"]

const TimelineRepository = ({
  repository,
}: {
  repository: GithubRepository;
}) => {
  const getFormattedDate = (dateString: string):string => {
    const date = new Date(Date.parse(dateString));
    const year = date.getFullYear();
    const indexMonth = date.getMonth();
    
    return `${year} - ${MONTHS[indexMonth]}`;
  }

  return (
    <li className={styles["timeline-repository-container"]}>
      <div className={styles["timeline-repository"]}>
        <span className={styles["timeline-repository__created_at"]}>{getFormattedDate(repository.created_at)}</span>
        <h2>{repository.name}</h2>
        <i>{repository.description}</i>
        <a target="_blank" href={repository.html_url}>Abrir repositorio</a>
      </div>
    </li>
  );
};

export default TimelineRepository;
