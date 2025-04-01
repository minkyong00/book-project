import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import style from "./index.module.css";
import { useEffect } from "react";

// getServerSideProps는 next에서 약속된 함수
// 컴포넌트보다 먼저 실행이 되어서 컴포넌트에 필요한 데이터를 불러오는 함수
// (서버측에서 실행되는 함수)
export const getServerSideProps = () => {
  console.log("서버에서 실행되는 함수이므로 브라우저에 로그가 찍히지 않고 터미널에 찍힘")

  try {
    console.log(window.location);
  } catch (e) {
    console.log(e.message);
  }

  const data = "Hello";

  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {

  // 사전 랜더링으로 인해 서버에서 한번 그리고 클리아언트에서 한번 실행됨
  // 사전 랜더링 : 웹 페이지의 콘텐츠를 미리 생성하여 사용자가 요청하기 저에 준비해 두는 방식
  // 사전 랜더링 때문에 불필요한 요소를 두번 호출하는 문제가 있음
  // 사전 랜더링을 막기 위해 useEffect를 사용함
  console.log(data);

  try {
    console.log(window.location);
  } catch (e) {}

  //화면이 맨처음 호출되었을 때 호출함
  useEffect(() => {
    console.log("useEFfect는 브라우저에서 실행됨");
    //trycatch를 안감싸도 서버에서 실행이 안되기 때문에 useEffect로 작성한것은 문제가 없음
    console.log(window.location);
  }, [])

  return (
    <div className={style.container}>
      <section>
        <div>지금 추천하는 도서</div>
        {books.map((book, i) => <BookItem key={i} {...book} />)}
      </section>
      <section>
        <div>등록된 모든 도서</div>
        {books.map((book, i) => <BookItem key={i} {...book} />)}
      </section>
    </div>
  );
}

Home.getLayout = (page) => {
  return <SearchableLayout>{page}</SearchableLayout>
}