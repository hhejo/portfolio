import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Info = ({
  children,
  category,
  content,
  link,
}: {
  children: JSX.Element;
  category: string;
  content: string;
  link: string;
}) => (
  <div className="flex flex-col justify-center items-center gap-2 w-56">
    <div className="flex justify-center items-center gap-2">
      {/* <FontAwesomeIcon icon={faGithub} size="lg" /> */}
      {children}
      <h3 className="text-xl font-bold text-gray-700">{category}</h3>
    </div>

    {link === '' ? (
      <span className="text-gray-500">{content}</span>
    ) : (
      <a
        className="text-gray-500 hover:underline hover:text-gray-400 transition-all"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content} <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
      </a>
    )}
  </div>
);
