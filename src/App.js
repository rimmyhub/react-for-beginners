import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time"); //state가 변경될때마다 실행됨

  // 2.
  // 간략화 한 버전
  useEffect(() => {
    console.log("CALL THE API");
  }, []);

  // 1.
  // const iRunOnlyOne = () => {
  //   // 하지만 이 코드는 한 번만 실행됨 useEffect 때문
  //   console.log("i run only once");
  // };
  // useEffect(iRunOnlyOne, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
