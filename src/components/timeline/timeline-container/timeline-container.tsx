import { GithubRepository } from "../../../types/github/github-timeline-api.types";
import TimelineRepository from "../timeline-repository/timeline-repository";
import style from "./timeline-container.module.css";

const TimelineContainer = ({
  repositories,
}: {
  repositories: GithubRepository[];
}) => {
  return (
    <div className={style["timeline-container"]}>
      {repositories.map((repository) => (
        <TimelineRepository repository={repository} />
      ))}
    </div>
  );
};

export default TimelineContainer;
