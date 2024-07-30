export interface Project {
  id: string;
  name: string;
  description: string;
  reports: Report[];
}

export interface Report {
  id: string;
  content: string;
}
