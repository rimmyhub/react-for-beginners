import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);

  // 한 번만 실행됨
  useEffect(() => {
    console.log("CALL THE API");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      //keyword가 빈값이 아니라면 그때 키워드 검색, 길이가 5보다 길때
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  // keyword가 변화할때만, 변화할때 마다 코드 실행

  useEffect(() => {
    console.log("키워드가 변화할때마다 실행돼요");
  }, [keyword]);

  useEffect(() => {
    console.log("카운터가 변화할때 실행돼요");
  }, [counter]);

  useEffect(() => {
    console.log("카운터와 키워드가 변화할때 실행돼요");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
