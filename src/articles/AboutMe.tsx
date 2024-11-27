import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faGraduationCap,
  faBook,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ArticleTitle, Info } from '../components';

export default function AboutMe() {
  return (
    <article className="w-full flex flex-col justify-center items-center py-32 gap-12">
      <ArticleTitle>ABOUT ME</ArticleTitle>

      <div className="flex justify-center items-center flex-wrap max-w-4xl gap-16">
        {/* Name */}
        {/* <div className="flex flex-col justify-center items-center gap-2 w-56">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faUser} size="lg" />
            <h3 className="text-xl font-bold text-gray-800">Name</h3>
          </div>
          <p className="text-gray-500">함희주</p>
        </div> */}
        <Info category="Name" content="함희주" link="">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </Info>

        {/* Education */}
        {/* <div className="flex flex-col justify-center items-center gap-2 w-56">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
            <h3 className="text-xl font-bold text-gray-800">Education</h3>
          </div>
          <p className="text-gray-500">충북대학교 전자공학부</p>
        </div> */}
        <Info category="Education" content="충북대학교 전자공학부" link="">
          <FontAwesomeIcon icon={faGraduationCap} size="lg" />
        </Info>

        {/* Email */}
        {/* <div className="flex flex-col justify-center items-center gap-2 w-56">
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
        </div> */}
        <Info category="Email" content="litsmainjof@gmail.com" link="mailto:litsmainjof@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Info>

        {/* GitHub */}
        {/* <div className="flex flex-col justify-center items-center gap-2 w-56">
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
        </div> */}
        <Info category="GitHub" content="Hhejo의 깃허브" link="https://github.com/hhejo">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Info>

        {/* Blog */}
        {/* <div className="flex flex-col justify-center items-center gap-2 w-56">
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
        </div> */}
        <Info category="Blog" content="Hhejo의 학습 블로그" link="https://hhejo.github.io">
          <FontAwesomeIcon icon={faBook} size="lg" />
        </Info>

        {/* Resume */}
        {/* <div className="flex flex-col justify-center items-center gap-2 w-56">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faIdCard} size="lg" />
            <h3 className="text-xl font-bold text-gray-800">Resume</h3>
          </div>
          <a
            className="text-gray-500 hover:underline hover:text-gray-400 transition-all"
            href="https://www.notion.so/479338ef915044d88328b7a65198bab7"
            target="_blank"
            rel="noopener noreferrer"
          >
            함희주의 이력서 <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
          </a>
        </div> */}
        <Info
          category="Resume"
          content="함희주의 이력서"
          link="https://www.notion.so/479338ef915044d88328b7a65198bab7"
        >
          <FontAwesomeIcon icon={faIdCard} size="lg" />
        </Info>
      </div>
    </article>
  );
}
