import { ArticleTitle, Project } from '../components';

export default function Projects() {
  return (
    <article className="flex flex-col justify-center items-center py-28 gap-12">
      <ArticleTitle>PROJECTS</ArticleTitle>
      <div>개인 프로젝트 보기, 팀 프로젝트 보기</div>
      <div className="flex flex-col gap-4 max-w-5xl">
        <Project
          title="퍼가요 (PuGaYo)"
          period="2024-09 (1주)"
          subtitle="C# Windows Forms를 이용한 구글 검색기 데스크탑 앱"
          description="구글 검색을"
          techStack="C#, Windows Forms"
          thumbnail="썸네일 링크"
          githubLink="깃허브 링크"
          serviceLink="배포 서비스 링크"
        />
      </div>
    </article>
  );
}
