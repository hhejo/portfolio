import { Badge } from './Badge';

interface Project {
  title: string;
  period: string;
  subtitle: string;
  descriptions: string[];
  techStack: string;
  thumbnail: string;
  githubLink: string;
  serviceLink: string;
}

export const Project = ({ project }: { project: Project }) => {
  const { title, period, subtitle, descriptions, techStack, thumbnail, githubLink, serviceLink } =
    project;

  return (
    <div className="flex flex-col gap-4 w-1/2 max-w-lg p-4 border rounded-xl text-gray-700">
      {/* Thumbnail */}
      <div>
        {/* <img className="w-full h-72 rounded-xl overflow-hidden" src={thumbnail} alt="" /> */}
        <div className="w-full h-72 rounded-xl overflow-hidden bg-gray-200"></div>
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
          <ul className="flex flex-col text-sm">
            {descriptions.map((d, i) => (
              <li key={i}>{d.trim()}</li>
            ))}
          </ul>
        </div>

        {/* GitHub Link, Service Link, Tech Stacks */}
        <div className="flex flex-col gap-0.5 text-sm text-gray-500">
          <span className="block">{githubLink}</span>
          <span className="block">{serviceLink}</span>
          <ul className="flex justify-end gap-1">
            {techStack.split(',').map((t, i) => (
              <Badge key={i}>{t.trim()}</Badge>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
