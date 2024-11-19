import axios, { AxiosInstance } from "axios";

const githubService: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Authorization': `Bearer ${process.env.VUE_APP_GITHUB_KEY}`,
        'Accept': 'application/vnd.github.v3+json',
    },
});

export interface Repo {
    id: number
    name: string
    html_url: string
    description: string | null
    logo_url?: string
}

export interface CommitResponse {
    commit: {
        message: string
        author: {
            date: string
        }
    },
    html_url: string
}


const checkLogo = async (repoName: string): Promise<string | null> => {
    const logoUrl = `https://raw.githubusercontent.com/FerrazRezende/${repoName}/refs/heads/main/logo.png`

    try {
        const response = await fetch(logoUrl)
        return response.ok ? logoUrl : null
    } catch (error) {
        console.error(`Erro ao verificar a logo para ${repoName}:`, error)
        return null
    }
};

export const getUserReposwithLogo = async (): Promise<Repo[]> => {
    const response = await githubService.get<Repo[]>('/users/FerrazRezende/repos');
    const repos = response.data;

    const reposWithLogo = await Promise.all(
        repos.map(async (repo) => {
            const logo = await checkLogo(repo.name);
            return logo ? { ...repo, logo_url: logo } : null;
        })
    );

    return reposWithLogo.filter((repo) => repo !== null) as Repo[];
};

export const getRepoCommits = async (repoName: string): Promise<{ message: string; date: string, html_url: string }[]> => {
    const response = await githubService.get<CommitResponse[]>(`/repos/FerrazRezende/${repoName}/commits`);

    return response.data.map((commit) => ({
        html_url: commit.html_url,
        message: commit.commit.message,
        date: commit.commit.author.date,
    }));
};

export default githubService;
