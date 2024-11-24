export default function Masthead() {
  return (
    <article className="flex flex-col justify-center items-center py-28 bg-gray-200 gap-12">
      <div className="flex flex-col justify-center items-center gap-4 text-4xl font-bold">
        <p>함희주</p>
        <p>개발자 포트폴리오</p>
      </div>

      <hr className="h-1 w-12 bg-gray-400" />

      <div className="flex flex-col justify-center items-center text-xl">
        <p>안녕하세요</p>
        <p>기술에 도전하는 개발자</p>
        <p>함희주입니다.</p>
      </div>

      <button className="w-32 h-12 bg-gray-600 text-white rounded-3xl">더 알아보기</button>
    </article>
  );
}
