import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Badge } from './Badge';
// import pugayoThumbnail from '../../public/images/pugayo.png';

interface Project {
  title: string;
  period: string;
  subtitle: string;
  isTeam: boolean;
  descriptions: string[];
  techStack: string[];
  src: string;
  alt: string;
  githubLink: string;
  serviceLink: string;
}

export const Project = ({ project }: { project: Project }) => {
  const {
    title,
    period,
    subtitle,
    isTeam,
    descriptions,
    techStack,
    src,
    alt,
    githubLink,
    serviceLink,
  } = project;

  return (
    <div className="flex flex-col gap-4 w-1/2 max-w-lg p-4 rounded-xl shadow-md text-gray-700 bg-white">
      {/* Thumbnail */}
      <div>
        <img
          className="w-full h-72 rounded-xl overflow-hidden object-cover bg-gray-200"
          src={src}
          alt={alt}
        />
      </div>

      {/* Contents */}
      <div className="flex flex-col gap-1">
        {/* Title, Period */}
        <div className="flex justify-between items-center pb-0.5 mb-2 border-b border-gray-300">
          <h3 className="text-2xl font-bold">{title}</h3>
          <span className="block text-sm text-gray-400">{period}</span>
        </div>

        {/* Subtitle, Description */}
        <div>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold text-gray-500">{subtitle}</h4>
            <Badge team={isTeam}>{isTeam ? '팀' : '개인'}</Badge>
          </div>
          <ul className="flex flex-col text-sm text-gray-600 p-1">
            {descriptions.map((d, i) => (
              <li className="" key={i}>
                · {d.trim()}
              </li>
            ))}
          </ul>
        </div>

        {/* GitHub Link, Service Link, Tech Stacks */}
        <div className="flex flex-col gap-3 text-sm text-gray-500">
          <div className="flex flex-col gap-px">
            <span className="flex items-center gap-1">
              <a
                className="flex gap-2 items-center border-b border-b-white hover:border-b hover:border-b-gray-400 transition-all"
                href={`${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                {title}
              </a>
            </span>
            <span className="flex items-center">
              <a
                // className="text-gray-400 hover:underline hover:text-gray-400 transition-all"
                className="flex gap-1 items-center border-b border-b-white hover:border-b hover:border-b-gray-400 transition-all"
                href={`${serviceLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
                서비스 링크
              </a>
            </span>
          </div>
          <ul className="flex justify-end gap-1">
            {techStack.map((t, i) => (
              <Badge key={i}>{t.trim()}</Badge>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
