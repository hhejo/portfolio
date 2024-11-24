import { ArticleTitle } from '../components/ArticleTitle';

export default function AboutMe() {
  return (
    <article className="flex flex-col justify-center items-center py-28 gap-12">
      <ArticleTitle>ABOUT ME</ArticleTitle>

      <div className="flex justify-between items-center flex-wrap w-full">
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">Name</span>
          <span className="text-gray-700 text-lg">함희주</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">Email</span>
          <span className="text-gray-700 text-lg">litsmainjof@gmail.com</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">Education</span>
          <span className="text-gray-700 text-lg">충북대학교 전자공학부</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">GitHub</span>
          <span className="text-gray-700 text-lg">hhejo</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">Blog</span>
          <span className="text-gray-700 text-lg">hhejo.github.io</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">Resume</span>
          <span className="text-gray-700 text-lg">노션링크ㄱㄱ</span>
        </p>
      </div>
    </article>
  );
}
