import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faAt,
  faGraduationCap,
  faBook,
  faIdCard,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ArticleTitle } from '../components';

export default function AboutMe() {
  return (
    <article className="flex flex-col justify-center items-center py-28 gap-12">
      <ArticleTitle>ABOUT ME</ArticleTitle>

      <div className="flex justify-center items-center flex-wrap max-w-4xl gap-16">
        {/* Name */}
        <div className="flex flex-col justify-center items-center gap-2 w-56">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faUser} size="lg" />
            <h3 className="text-xl font-bold text-gray-800">Name</h3>
          </div>
          <p className="text-gray-500">함희주</p>
        </div>

        {/* Education */}
        <div className="flex flex-col justify-center items-center gap-2 w-56">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
            <h3 className="text-xl font-bold text-gray-800">Education</h3>
          </div>
          <p className="text-gray-500">충북대학교 전자공학부</p>
        </div>

        {/* Email */}
        <div className="flex flex-col justify-center items-center gap-2 w-56">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <h3 className="text-xl font-bold text-gray-800">Email</h3>
          </div>
          <a
            className="text-gray-500 hover:underline hover:text-gray-400 transition-all"
            href="mailto:litsmainjof@gmail.com"
          >
            <FontAwesomeIcon icon={faAt} size="sm" /> litsmainjof
          </a>
        </div>

        {/* GitHub */}
        <div className="flex flex-col justify-center items-center gap-2 w-56">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <h3 className="text-xl font-bold text-gray-800">GitHub</h3>
          </div>
          <a
            className="text-gray-500 hover:underline hover:text-gray-400 transition-all"
            href="https://github.com/hhejo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hhejo의 깃허브 <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
          </a>
        </div>

        {/* Blog */}
        <div className="flex flex-col justify-center items-center gap-2 w-56">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faBook} size="lg" />
            <h3 className="text-xl font-bold text-gray-800">Blog</h3>
          </div>
          <a
            className="text-gray-500 hover:underline hover:text-gray-400 transition-all"
            href="https://hhejo.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hhejo의 블로그 <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
          </a>
        </div>

        {/* Resume */}
        <div className="flex flex-col justify-center items-center gap-2 w-56">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faIdCard} size="lg" />
            <h3 className="text-xl font-bold text-gray-800">Resume</h3>
          </div>
          <a
            className="text-gray-500 hover:underline hover:text-gray-400 transition-all"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            함희주의 이력서 <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
          </a>
        </div>

        {/* <Info title="Email" content="litsmainjof@gmail.com" />
        <Info title="Education" content="충북대학교 전자공학부" />
        <Info title="GitHub" content="github.com/hhejo" />
        <Info title="Blog" content="hhejo.github.io" />
        <Info title="Resume" content="노션링크예정" /> */}
      </div>
    </article>
  );
}
