import { ArticleTitle, Project } from '../components';

export default function Projects() {
  return (
    <article className="flex flex-col justify-center items-center py-28 gap-12">
      <ArticleTitle>PROJECTS</ArticleTitle>
      <div>개인 프로젝트 보기, 팀 프로젝트 보기</div>
      <div className="flex justify-center flex-wrap gap-8 max-w-6xl">
        <Project
          title="퍼가요 (PuGaYo)"
          period="2024-11 (1주)"
          subtitle="C# Windows Forms를 이용한 구글 검색기 데스크탑 앱"
          description="구글 검색을, 스크래핑, 파일저장, 리스트뷰"
          techStack="C#, Windows Forms"
          thumbnail="썸네일 링크"
          githubLink="깃허브 링크"
          serviceLink="배포 서비스 링크"
        />

        <Project
          title="무니 (MooNee)"
          period="2024-10 (1주)"
          subtitle="오프라인 웹 앱"
          description="가계부 작성하고 관리, 지출·수입 항목 작성하고 조회, 오오오오, 파일 내보내기"
          techStack="JavaScript, Vite, Tailwind CSS"
          thumbnail="썸네일 링크"
          githubLink="깃허브 링크"
          serviceLink="배포 서비스 링크"
        />

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
