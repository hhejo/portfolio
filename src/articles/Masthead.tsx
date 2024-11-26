export default function Masthead() {
  return (
    <article className="w-full flex flex-col justify-center items-center py-32 bg-gray-200 gap-12">
      <div className="flex flex-col justify-center items-center gap-8 text-6xl font-bold text-gray-700 tracking-wider">
        <span>함희주</span>
        <span>개발자 포트폴리오</span>
      </div>

      <hr className="h-1 w-12 bg-gray-400" />

      <div className="flex flex-col justify-center items-center text-xl text-gray-600">
        <span>안녕하세요</span>
        <span>다양한 배움을 추구하는 개발자</span>
        <span>함희주입니다.</span>
      </div>

      <button className="w-32 h-12 bg-gray-500 text-gray-50 rounded-3xl">더 알아보기</button>
    </article>
  );
}
