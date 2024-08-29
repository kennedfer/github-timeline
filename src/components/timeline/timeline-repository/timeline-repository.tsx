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
        <div>{repository.name}</div>
        <div>{repository.description}</div>
        <div>{repository.html_url}</div>
      </div>
    </li>
  );
};

export default TimelineRepository;
