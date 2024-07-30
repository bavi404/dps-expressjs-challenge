import { Request, Response } from 'express';
import { Project, Report } from '../models/project';

let projects: Project[] = [];

export const getProjects = (req: Request, res: Response) => {
  res.status(200).json(projects);
};

export const getProject = (req: Request, res: Response) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
};

export const createProject = (req: Request, res: Response) => {
  const newProject: Project = {
    id: `${projects.length + 1}`,
    name: req.body.name,
    description: req.body.description,
    reports: [],
  };
  projects.push(newProject);
  res.status(201).json(newProject);
};

export const updateProject = (req: Request, res: Response) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (project) {
    project.name = req.body.name || project.name;
    project.description = req.body.description || project.description;
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
};

export const deleteProject = (req: Request, res: Response) => {
  projects = projects.filter((p) => p.id !== req.params.id);
  res.status(204).send();
};

export const addReport = (req: Request, res: Response) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (project) {
    const newReport: Report = {
      id: `${project.reports.length + 1}`,
      content: req.body.content,
    };
    project.reports.push(newReport);
    res.status(201).json(newReport);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
};

export const getSpecialReports = (req: Request, res: Response) => {
  const reports: Report[] = [];
  projects.forEach((project) => {
    project.reports.forEach((report) => {
      const wordCounts = report.content.split(' ').reduce(
        (acc, word) => {
          acc[word] = (acc[word] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>
      );
      if (Object.values(wordCounts).some((count) => count >= 3)) {
        reports.push(report);
      }
    });
  });
  res.status(200).json(reports);
};
