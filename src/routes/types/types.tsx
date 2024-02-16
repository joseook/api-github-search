// types.tsx
export type UserProps = {
    avatar_url: string;
    bio: string;
    login: string;
    location: string;
    followers: number,
    following: number,
    public_repos: number
  };
  
  export type Repository = {
    id: number;
    name: string;
    html_url: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
    language?: string;
    forks_count?: number;
    stargazers_count?: number;
    watchers_count?: number;
    license?: {
      name: string;
      spdx_id: string;
      url: string;
    };
    // Outras propriedades conforme necessário
  };
  
  