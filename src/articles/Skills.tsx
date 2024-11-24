import { ArticleTitle } from '../components';

export default function Skills() {
  return (
    <article className="flex flex-col justify-center items-center py-28 gap-12 bg-gray-200">
      <ArticleTitle>SKILLS</ArticleTitle>

      <div className="w-full px-28">
        {/* Language */}
        <div className="flex items-center">
          <div className="w-32">Language</div>
          <div className="flex gap-2">
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>C#</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="flex items-center">
          <div className="w-32">Frontend</div>
          <div className="flex gap-2">
            <span>React</span>
            <span>Next</span>
            <span>Redux-Toolkit</span>
            <span>Zustand</span>
          </div>
        </div>

        {/* Backend */}
        <div className="flex items-center">
          <div className="w-32">Frontend</div>
          <div className="flex gap-2">
            <span>Node</span>
            <span>Express</span>
            <span>Django</span>
            <span>Flask</span>
            <span>ASP .NET Core</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div></div>
    </article>
  );
}
