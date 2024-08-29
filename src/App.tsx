import { useEffect, useState } from "react";
import "./App.css";
import UsernameInput from "./components/username-input/username-input";
import TimelineContainer from "./components/timeline/timeline-container/timeline-container";

const App = () => {
  const [githubUserInfo, setGithubUserInfo] = useState({});
  const [hasGithubInfo, setHasGithubInfo]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  useEffect(() => {
    if (Object.keys(githubUserInfo).length > 0) setHasGithubInfo(true);
  }, [githubUserInfo]);

  return (
    <>
      <div>
        <UsernameInput callback={setGithubUserInfo} />
        {hasGithubInfo && ( //conditional render
          <div>
            <h1>{githubUserInfo.name}</h1>
            <i>{githubUserInfo.bio}</i>
            <TimelineContainer repositories={githubUserInfo.repositories} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
