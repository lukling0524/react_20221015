import "./App.css";
// import Counter from "./components/Counter";
// import MyComponent from "./components/MyComponent";
import InputText from "./components/InputText";
import UserList from "./components/UserList";

//function이 하나의 컴포넌트가 됨
function App() {
  // const text = "리액트";

  // const boxStyle = { backgroundColor: "red", color: "white" };
  return (
    //두개의 컴포넌트를 넣으면 오류가 뜸
    //div로 감싸면 여러개를 넣어도 오류 x

    /*

      jsx : JS로 UI를 작성할 때 직관적으로 표현하기 위해 사용

      1. jsx 문법에서는 반드시 태그가 closing 되어야 함 (두가지 case 전부 사용 가능) 
        => self closing : <MyComponent /> 
        => <MyComponent></MyComponent>
      2. 반드시 하나의 태그로 감싸야 된다, 부모 태그로 wrap 되는 구조를 방지하려면 fragment ( <></>  빈 태그) 사용
      3. JS값을 포함시킬 때는 {}안에 표현식을 넣는다. 
        => {text} (3) 중괄호 안에 JS 표현식 전부 삽입 가능 ex) 문자, 숫자, 계산식 etc..
      4. class는 className으로 사용
      5. inline style{{}} -> {js (3) {진짜 객체 사용}} , style 넣을 때 carmelcase 사용
        => <div className="box" style={{ backgroundColor: "red", color: "white" }}>
        => <div className="box" style={boxStyle}> // 스타일은 객체이기 때문에 따로 분리해서 사용 가능


    */

    <>
      {/* <MyComponent title="Component" active={true} />
      <MyComponent title="React" active={false} />
      <MyComponent active />
      <div className="box" style={boxStyle}>
        {text}
      </div> */}

      {/* <Counter />
      <Counter />
      <Counter /> */}

      {/* <InputText /> */}
      <UserList />
    </>
  );
}

export default App;
