export type GithubRepository = {
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;
};

export type GithubUserInfo = {
  name: string;
  bio: string;
  avatar_url: string; //i decide to keep the json pattern
  repositories: GithubRepository[];
};
