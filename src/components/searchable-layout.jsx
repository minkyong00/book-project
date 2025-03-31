import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import style from "./searchable-layout.module.css"

export default function SearchableLayout({ children }) {
  
  const router = useRouter();

  const [search, setSearch] = useState("");

  const q = router.query.q;

  useEffect(() => {
    setSearch(q || "")
  }, [q])

  const onChangeSearch = (e) => {
    setSearch(e.target.value);

  }

  const onKeyDown = (e) => {
    if(e.key === 'Enter'){
      onSubmit();
    }
  }

  const onSubmit = () => {
    //search값이 공백이거나 q의 값이 이미 서치값과 같으면 수행하지 않음
    if(!search || q === search) return;
    //search값이 변경이 됐다면
    router.push(`/search?q=${search}`);
  }

  return (
    <div>
      <div className={style.searchbar_container}>
        <input 
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요"
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}