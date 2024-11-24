import { ArticleTitle, Info } from '../components';

export default function AboutMe() {
  return (
    <article className="flex flex-col justify-center items-center py-28 gap-12">
      <ArticleTitle>ABOUT ME</ArticleTitle>
      <div className="flex justify-center items-center flex-wrap max-w-4xl gap-16">
        <Info title="Name" content="함희주" />
        <Info title="Email" content="litsmainjof@gmail.com" />
        <Info title="Education" content="충북대학교 전자공학부" />
        <Info title="GitHub" content="github.com/hhejo" />
        <Info title="Blog" content="hhejo.github.io" />
        <Info title="Resume" content="노션링크예정" />
      </div>
    </article>
  );
}
