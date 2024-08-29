import { useState } from "react";
import { GithubUserInfo } from "../../types/github/github-timeline-api.types";
import styles from './username-input.module.css'

const UsernameInput = ({callback}: {callback: React.Dispatch<React.SetStateAction<GithubUserInfo>>}) => {
  const [username, setUsername]:[string, React.Dispatch<React.SetStateAction<string>>] = useState("");

  const handleUsernameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.target.value);
  }

  const searchuser = async (evt) => {
    evt.target.disabled = true;
    const data:Response = await fetch("http://localhost:3000/github/"+username);
    const githubUserInfo = await data.json();

    callback(githubUserInfo);
    
    evt.target.disabled = false;
  }

  return <div className={styles["input-container"]}>
    <input className={styles.input} onChange={handleUsernameChange} type="text" />
    <button value={username} onClick={searchuser}>Buscar</button>
  </div>;
}

export default UsernameInput;