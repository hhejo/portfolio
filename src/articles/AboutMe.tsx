export default function AboutMe() {
  return (
    <article className="flex flex-col justify-center items-center py-28 gap-12">
      <h2 className="text-4xl font-bold pb-2 border-b-2 border-b-sky-400">About Me</h2>
      <div className="flex justify-between items-center flex-wrap w-full">
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">이름</span>
          <span className="text-gray-700 text-lg">함희주</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">이메일</span>
          <span className="text-gray-700 text-lg">litsmainjof@gmail.com</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">학력</span>
          <span className="text-gray-700 text-lg">충북대학교 전자공학부</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">위치</span>
          <span className="text-gray-700 text-lg">서울특별시 금천구</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">생년월일</span>
          <span className="text-gray-700 text-lg">1994.05.08</span>
        </p>
        <p className="flex flex-col justify-center items-center w-1/3">
          <span className="">연락처</span>
          <span className="text-gray-700 text-lg">010-1234-5678</span>
        </p>
      </div>
    </article>
  );
}
