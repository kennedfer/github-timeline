export type GithubRepository = {
  name: string;
  description: string;
  created_at_millis: number;
  creation_year: number;
  date_string:string;
  html_url: string;
  color: string;
};

export type GithubUserInfo = {
  name: string;
  bio: string;
  avatar_url: string; //i decide to keep the json pattern
  repositories: GithubRepository[];
};
