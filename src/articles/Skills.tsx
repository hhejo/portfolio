import { ArticleTitle, Badge } from '../components';

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
              <ul className="flex gap-1">
                <Badge>TypeScript</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Python</Badge>
                <Badge>C#</Badge>
                <Badge>C</Badge>
                <Badge>C++</Badge>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <ul className="flex gap-1">
              <Badge>Rust</Badge>
            </ul>
          </div>
        </div>

        {/* Client */}
        <div>
          <div className="flex items-center">
            <div className="w-36 text-2xl font-bold text-gray-700">Client</div>
            <div className="flex flex-col gap-1">
              <ul className="flex gap-1">
                <Badge>React</Badge>
                <Badge>Next</Badge>
                <Badge>Vite</Badge>
                <Badge>WebPack</Badge>
                <Badge>Vue</Badge>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <ul className="flex gap-1">
              <Badge>React Router</Badge>
              <Badge>Redux Toolkit</Badge>
              <Badge>Zustand</Badge>
              <Badge>TanStack Query</Badge>
              <Badge>Immer</Badge>
            </ul>
          </div>
        </div>

        {/* Server */}
        <div>
          <div className="flex items-center">
            <div className="w-36 text-2xl font-bold text-gray-700">Server</div>
            <div className="flex flex-col gap-1">
              <ul className="flex gap-1">
                <Badge>Express</Badge>
                <Badge>Django</Badge>
                <Badge>Flask</Badge>
                <Badge>ASP .NET Core</Badge>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <ul className="flex gap-1">
              {/* <Badge>Sequelize</Badge>
              <Badge>Mongoose</Badge> */}
              <Badge>JWT</Badge>
              <Badge>OAuth</Badge>
            </ul>
          </div>
        </div>

        {/* Database */}
        <div>
          <div className="flex items-center">
            <div className="w-36 text-2xl font-bold text-gray-700">Database</div>
            <div className="flex flex-col gap-1">
              <ul className="flex gap-1">
                <Badge>MySQL</Badge>
                <Badge>MongoDB</Badge>
                <Badge>SQLite</Badge>
                <Badge>Supabase</Badge>
                <Badge>Firebase</Badge>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <ul className="flex gap-1">
              <Badge>Sequelize</Badge>
              <Badge>Mongoose</Badge>
            </ul>
          </div>
        </div>

        {/* UI */}
        {/* <div className="flex items-center">
          <div className="w-36 text-2xl font-bold text-gray-700">UI</div>
          <ul className="flex gap-1">
            <Badge>Tailwind CSS</Badge>
            <Badge>SASS</Badge>
            <Badge>Styled Components</Badge>
            <Badge>Bootstrap</Badge>
            <Badge>MUI</Badge>
          </ul>
        </div> */}

        <div>
          <div className="flex items-center">
            <div className="w-36 text-2xl font-bold text-gray-700">UI</div>
            <div className="flex flex-col gap-1">
              <ul className="flex gap-1">
                <Badge>Tailwind CSS</Badge>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-36"></div>
            <ul className="flex gap-1">
              <Badge>SASS</Badge>
              <Badge>Styled Components</Badge>
              <Badge>Bootstrap</Badge>
              <Badge>MUI</Badge>
            </ul>
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
