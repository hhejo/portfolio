import { ArticleTitle, SkillItem } from '../components';

export default function Skills() {
  return (
    <article className="flex flex-col justify-center items-center py-28 gap-12 bg-gray-200">
      <ArticleTitle>SKILLS</ArticleTitle>

      <div className="flex flex-col gap-4 max-w-4xl">
        {/* Language */}
        <div>
          <div className="flex items-center">
            <div className="w-36 text-2xl font-bold text-gray-700">Language</div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <SkillItem>TypeScript</SkillItem>
                <SkillItem>JavaScript</SkillItem>
                <SkillItem>Python</SkillItem>
                <SkillItem>C#</SkillItem>
                <SkillItem>C</SkillItem>
                <SkillItem>C++</SkillItem>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <div className="flex gap-1">
              <SkillItem>Rust</SkillItem>
            </div>
          </div>
        </div>

        {/* Client */}
        <div>
          <div className="flex items-center">
            <div className="w-36 text-2xl font-bold text-gray-700">Client</div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <SkillItem>React</SkillItem>
                <SkillItem>Next</SkillItem>
                <SkillItem>Vite</SkillItem>
                <SkillItem>WebPack</SkillItem>
                <SkillItem>Vue</SkillItem>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <div className="flex gap-1">
              <SkillItem>React Router</SkillItem>
              <SkillItem>Redux Toolkit</SkillItem>
              <SkillItem>Zustand</SkillItem>
              <SkillItem>TanStack Query</SkillItem>
              <SkillItem>Immer</SkillItem>
            </div>
          </div>
        </div>

        {/* Server */}
        <div>
          <div className="flex items-center">
            <div className="w-36 text-2xl font-bold text-gray-700">Server</div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <SkillItem>Express</SkillItem>
                <SkillItem>Django</SkillItem>
                <SkillItem>Flask</SkillItem>
                <SkillItem>ASP .NET Core</SkillItem>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <div className="flex gap-1">
              {/* <SkillItem>Sequelize</SkillItem>
              <SkillItem>Mongoose</SkillItem> */}
              <SkillItem>JWT</SkillItem>
              <SkillItem>OAuth</SkillItem>
            </div>
          </div>
        </div>

        {/* Database */}
        <div>
          <div className="flex items-center">
            <div className="w-36 text-2xl font-bold text-gray-700">Database</div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <SkillItem>MySQL</SkillItem>
                <SkillItem>MongoDB</SkillItem>
                <SkillItem>SQLite</SkillItem>
                <SkillItem>Supabase</SkillItem>
                <SkillItem>Firebase</SkillItem>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <div className="flex gap-1">
              <SkillItem>Sequelize</SkillItem>
              <SkillItem>Mongoose</SkillItem>
            </div>
          </div>
        </div>

        {/* UI */}
        {/* <div className="flex items-center">
          <div className="w-36 text-2xl font-bold text-gray-700">UI</div>
          <div className="flex gap-1">
            <SkillItem>Tailwind CSS</SkillItem>
            <SkillItem>SASS</SkillItem>
            <SkillItem>Styled Components</SkillItem>
            <SkillItem>Bootstrap</SkillItem>
            <SkillItem>MUI</SkillItem>
          </div>
        </div> */}

        <div>
          <div className="flex items-center">
            <div className="w-36 text-2xl font-bold text-gray-700">UI</div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <SkillItem>Tailwind CSS</SkillItem>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <div className="flex gap-1">
              <SkillItem>SASS</SkillItem>
              <SkillItem>Styled Components</SkillItem>
              <SkillItem>Bootstrap</SkillItem>
              <SkillItem>MUI</SkillItem>
            </div>
          </div>
        </div>

        {/* Deployment */}

        {/* ETC */}
        {/* 스웨거 */}
      </div>

      {/* Details */}
      <div></div>
    </article>
  );
}
