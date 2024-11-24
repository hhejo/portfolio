import Nav from './components/Nav';
import Masthead from './articles/Masthead';

function App() {
  return (
    <>
      <Nav />
      <Masthead />
      <article>자기소개, 사진</article>
      <article>기술 스택</article>
      <article>아카이브, 링크 모음</article>
      <article>프로젝트</article>
      <article>커리어, 교육 목록</article>
    </>
  );
}

export default App;
