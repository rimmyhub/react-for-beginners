import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  // 여러개의 to를 가질 수 있는 array생성, 기본값 비워져있음
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value); // 값 수정하기

  const onSubmit = (event) => {
    event.preventDefault(); // 자동으로 새로고침 하는걸 막음
    if (toDo === "") {
      // 만약에 todo가 비어있으면 그냥 리턴, 함수를 작동시키지 않게끔
      return;
    }
    // 빈 array에 submit이벤트 실행 시 값이 추가됨
    setToDos((currentArray) => [toDo, ...currentArray]);
    // input 비우기
    setToDo("");
  };

  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  // form은 submit 이벤트를 가지고 있어서 자동으로 새로고침됨
  // form 안의 버튼들을 모두 실행
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
