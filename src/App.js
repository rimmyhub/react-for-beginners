import { useState, useEffect } from "react";

// 한번만 실행
function Hello() {
  //1-1. 1-1과 같음 사람들은 이 방식을 선호함
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  //1-2. 1-1과 같음
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

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
