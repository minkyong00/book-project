import style from "./[id].module.css"

const mockData = {
    "id" : 1,
    "title" : "프론트엔드 입문자를 위한 리액트의 정석 with 타입스크립트",
    "subTitle" : "리액트와 타입스크립트를 결합하여 효율적인 웹 개발 학습",
    "description" : "리액트와 타입스크립트를 결합하여 효율적인 웹 개발 학습\n객체지향프로그래밍 개념과 원리를 학습하여 실무 개발자되기",
    "author" : "이창현",
    "publisher" : "길벗캠퍼스",
    "coverImgUrl" : "https://image.yes24.com/goods/143823236/L"
};

export default function Page() {
  
  const {id, title, subTitle, description, author, publisher, coverImgUrl} = mockData;

  return <div className={style.container}>
    <div 
      className={style.cover_img_container}
      style={{ backgroundImage: `url('${coverImgUrl}')` }}
    >
      <img src={coverImgUrl} />
    </div>
    <div className={title}>{title}</div>
    <div className={subTitle}>{subTitle}</div>
    <div className={author}>{author} | {publisher}</div>

    <div className={style.description}>{description}</div>
  </div>
}