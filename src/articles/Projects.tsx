import { useState } from 'react';
import { ArticleTitle, Project } from '../components';
import projectsData from '../assets/projects-data.json';

export default function Projects() {
  const [projects] = useState(projectsData.projects);

  return (
    <article className="flex flex-col justify-center items-center py-28 gap-12">
      <ArticleTitle>PROJECTS</ArticleTitle>
      <div>개인 프로젝트 보기, 팀 프로젝트 보기</div>
      <div className="flex justify-center flex-wrap gap-8 max-w-6xl">
        {projects.map((p, i) => (
          <Project project={p} key={i} />
        ))}
      </div>
    </article>
  );
}
