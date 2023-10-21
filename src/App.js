import { useState, useEffect } from "react";

// 한번만 실행
function Hello() {
  function byFn() {
    console.log("bye :(");
  }

  function hiFn() {
    console.log("created :)");
    return byFn; //파괴될때도 실행하고 싶을때 return해야함
  }
  useEffect(hiFn, []);

  // useEffect(() => {
  //   console.log("created :)");
  //   return () => console.log("destroyed :("); //cleanup function
  //   // 나의 component(요소)가 없어질때 결과를 보낼 수 있음
  // }, []);
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
