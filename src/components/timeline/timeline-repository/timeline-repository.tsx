import { GithubRepository } from "../../../types/github/github-timeline-api.types";
import styles from "./timeline-repository.module.css";

const TimelineRepository = ({
  repository,
}: {
  repository: GithubRepository;
}) => {
  return (
    <li className={styles["timeline-repository-container"]}>
      <div className={styles["timeline-repository"]}>
        <h2>{repository.name}</h2>
        <i>{repository.description}</i>
        <a href={repository.html_url}>Abrir repositorio</a>
      </div>
    </li>
  );
};

export default TimelineRepository;
