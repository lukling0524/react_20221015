/*
    클래스형 컴포넌트
        -클래스 문법에 맞춰 작성하는 컴포넌트
        - 원래 함수형 컴포넌트에서 상태값 관리와 생명주기에 따른 처리가 안됐을 때 사용했다.
        - React.Component를 상속받아야 함
        - render() 함수 안에서 jsx를 반환해야 한다
        - this.props로 property를 전달받을 수 있다 ( 전달받은 property 참조할 수 있다) 
            ㄴ 지금 예제에서 this.props.count를 넣었는데 이 count는 app에서 동일하게 count라는 프로퍼티로 넣어서 값 입력
 */

/* 생명주기 */
import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  state = {
    count: this.props.initCount,
  };

  //클래스 내부에 함수 작성시에는 function 사용 x
  onIncrease() {
    this.setState({ count: this.state.count + 1 });
  }

  onDecrease() {
    this.setState({ count: this.state.count - 1 });
  }
  componentDidMount() {
    //초기값 설정, API통신 초기 데이터 받아오기, 라이브러리 연동
    // MOUNT는 render 뒤에 일어남
    console.log("component : 2. did mount");
  }

  componentDidUpdate() {
    console.log("component : 3. did update");
    // 초기에는 실행x 상태값이나 props가 변경되었을 때 실행됨
    // 특정값이 변했을 때 실행할것들을 넣어 사용
  }

  componentWillUnmount() {
    console.log("component : 4. will unmount");
    //차지하고있는 자원을 뒷정리할 때 사용
  }
  //함수 작성은 render 위
  render() {
    console.log("component : 1. render");
    //렌더 될때마다 사용 (초기에도, 상태변화에도)
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onIncrease}>+1</button>
        <button onClick={this.onDecrease}>+1</button>
        {/* <button>Unmount</button> */}
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -1
        </button> */}
      </>
    );
  }
}

export default ClassCounter;
