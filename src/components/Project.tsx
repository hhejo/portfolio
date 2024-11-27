import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Badge } from './Badge';
// import pugayoThumbnail from '../../public/images/pugayo.png';

interface Project {
  title: string;
  period: string;
  subtitle: string;
  descriptions: string[];
  techStack: string[];
  src: string;
  alt: string;
  githubLink: string;
  serviceLink: string;
}

export const Project = ({ project }: { project: Project }) => {
  const { title, period, subtitle, descriptions, techStack, src, alt, githubLink, serviceLink } =
    project;

  return (
    <div className="flex flex-col gap-4 w-1/2 max-w-lg p-4 border rounded-xl text-gray-700">
      {/* Thumbnail */}
      <div>
        <img className="w-full h-72 rounded-xl overflow-hidden" src={src} alt={alt} />
        {/* <div className="w-full h-72 rounded-xl overflow-hidden bg-gray-200"></div> */}
      </div>

      {/* Contents */}
      <div className="flex flex-col gap-1">
        {/* Title, Period */}
        <div className="flex justify-between items-center w-full pb-0.5 mb-2 border-b border-gray-300">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="block text-sm text-gray-400">{period}</span>
        </div>

        {/* Subtitle, Description */}
        <div>
          <h4 className="text-lg">{subtitle}</h4>
          <ul className="flex flex-col text-sm pl-2">
            {descriptions.map((d, i) => (
              <li className="" key={i}>
                · {d.trim()}
              </li>
            ))}
          </ul>
        </div>

        {/* GitHub Link, Service Link, Tech Stacks */}
        <div className="flex flex-col gap-3 text-sm text-gray-500">
          <div>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faGithub} />
              <a
                className="text-gray-400 hover:underline hover:text-gray-400 transition-all"
                href={`${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faLink} />
              <a
                className="text-gray-400 hover:underline hover:text-gray-400 transition-all"
                href={`${serviceLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
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
