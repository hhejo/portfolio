import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLanguage,
  faEye,
  // faServer,
  // faDatabase,
  // faPalette,
  // faCloud,
  // faBoxesStacked,
} from '@fortawesome/free-solid-svg-icons';
import { ArticleTitle, Badge } from '../components';
import skillsData from '../assets/skills-data.json';

export default function Skills() {
  const [language] = useState(skillsData.language);
  const [client] = useState(skillsData.client);

  return (
    <article className="w-full flex flex-col justify-center items-center py-32 gap-12 bg-gray-200">
      <ArticleTitle>SKILLS</ArticleTitle>

      <div className="flex flex-col gap-4 max-w-2xl px-2">
        {/* Language */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-2xl font-bold text-gray-700">
            <FontAwesomeIcon icon={faLanguage} size="lg" /> Language
          </div>
          <ul className="w-full flex justify-center items-center flex-wrap gap-1 p-2 rounded-lg bg-white">
            {language.map((l) => (
              <Badge>{l}</Badge>
            ))}
          </ul>
        </div>

        {/* Client */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-2xl font-bold text-gray-700">
            <FontAwesomeIcon icon={faEye} size="lg" /> Client
          </div>
          <ul className="w-full flex justify-center items-center flex-wrap gap-1 p-2 rounded-lg bg-white">
            {client.map((c) => (
              <Badge>{c}</Badge>
            ))}
          </ul>
        </div>

        {/* Server */}
        {/* <div>
          <div className="flex items-center">
            <div className="flex items-center gap-2 w-48 text-2xl font-bold text-gray-700">
              <FontAwesomeIcon icon={faServer} size="lg" /> Server
            </div>
            <div className="flex flex-col gap-1">
              <ul className="flex gap-1">
                <Badge>Node</Badge>
                <Badge>Express</Badge>
                <Badge>Django</Badge>
                <Badge>Flask</Badge>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-48"></div>
            <ul className="flex gap-1">
              <Badge>Swagger</Badge>
              <Badge>ASP .NET</Badge>
              <Badge>FastAPI</Badge>
              <Badge>NGINX</Badge>
            </ul>
          </div>
        </div> */}

        {/* Database */}
        {/* <div>
          <div className="flex items-center">
            <div className="flex items-center gap-2 w-48 text-2xl font-bold text-gray-700">
              <FontAwesomeIcon icon={faDatabase} size="lg" /> Database
            </div>
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
            <div className="w-48"></div>
            <ul className="flex gap-1">
              <Badge>Sequelize</Badge>
              <Badge>Mongoose</Badge>
            </ul>
          </div>
        </div> */}

        {/* UI */}
        {/* <div>
          <div className="flex items-center">
            <div className="flex items-center gap-2 w-48 text-2xl font-bold text-gray-700">
              <FontAwesomeIcon icon={faPalette} size="lg" /> UI
            </div>
            <div className="flex flex-col gap-1">
              <ul className="flex gap-1">
                <Badge>Tailwind CSS</Badge>
                <Badge>SASS</Badge>
                <Badge>Storybook</Badge>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-48"></div>
            <ul className="flex gap-1">
              <Badge>SASS</Badge>
              <Badge>Styled Components</Badge>
              <Badge>Bootstrap</Badge>
              <Badge>MUI</Badge>
            </ul>
          </div>
        </div> */}

        {/* Deployment ? Infra ? Dev Ops ? Hosting ? */}
        {/* <div>
          <div className="flex items-center">
            <div className="flex items-center gap-2 w-48 text-2xl font-bold text-gray-700">
              <FontAwesomeIcon icon={faCloud} size="lg" /> DevOps
            </div>
            <div className="flex flex-col gap-1">
              <ul className="flex gap-1">
                <Badge>Vercel</Badge>
                <Badge>Heroku</Badge>
                <Badge>AWS</Badge>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-48"></div>
            <ul className="flex gap-1">
              <Badge>Netlify</Badge>
            </ul>
          </div>
        </div> */}

        {/* ETC */}
        {/* <div>
          <div className="flex items-center">
            <div className="flex items-center gap-2 w-48 text-2xl font-bold text-gray-700">
              <FontAwesomeIcon icon={faBoxesStacked} size="lg" /> ETC
            </div>
            <div className="flex flex-col gap-1">
              <ul className="flex gap-1">
                <Badge>Git</Badge>
                <Badge>GitHub</Badge>
                <Badge>VIM</Badge>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-48"></div>
            <ul className="flex gap-1">
              <Badge>SASS</Badge>
              <Badge>Styled Components</Badge>
              <Badge>Bootstrap</Badge>
              <Badge>MUI</Badge>
            </ul>
          </div>
        </div> */}

        {/* VSCode ? PyCharm ? */}
      </div>

      {/* Details */}
      <div></div>
    </article>
  );
}
