import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export default function Masthead() {
  return (
    <article className="w-full flex flex-col justify-center items-center py-32 bg-gray-100 gap-12">
      <div className="flex flex-col justify-center items-center gap-8 font-bold text-gray-700 tracking-wider">
        <span className="text-4xl sm:text-6xl">함희주</span>
        <span className="text-4xl sm:text-6xl">개발자 포트폴리오</span>
      </div>

      <hr className="h-1 w-12 bg-gray-400" />

      <div className="flex flex-col justify-center items-center text-gray-600">
        <span className="sm:text-xl ">안녕하세요</span>
        <span className="sm:text-xl ">다양한 배움을 추구하는 개발자</span>
        <span className="sm:text-xl ">함희주입니다.</span>
      </div>

      {/* <button className="w-32 h-12 bg-gray-500 text-gray-50 rounded-3xl animate-bounce">
        더 알아보기
      </button> */}
      <button>
        <FontAwesomeIcon icon={faAnglesDown} className="text-gray-500 animate-bounce" size="2x" />
      </button>
    </article>
  );
}
