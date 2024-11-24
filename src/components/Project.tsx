export const Project = ({
  title,
  period,
  subtitle,
  description,
  techStack,
  thumbnail,
  githubLink,
  serviceLink,
}: {
  title: string;
  period: string;
  subtitle: string;
  description: string;
  techStack: string;
  thumbnail: string;
  githubLink: string;
  serviceLink: string;
}) => (
  <div className="flex flex-col max-w-lg p-8 border rounded-xl text-gray-700">
    <img src={thumbnail} alt="" />
    <div className="flex justify-between items-center w-full">
      <h3 className="text-xl font-bold">{title}</h3>
      <span className="block text-sm text-gray-500">{period}</span>
    </div>
    <h4 className="text-lg font-bold">{subtitle}</h4>
    <ul>
      <li>{description}</li>
    </ul>
    <ul>
      <li>{techStack}</li>
    </ul>
    <span className="block">{githubLink}</span>
    <span className="block">{serviceLink}</span>
  </div>
);
