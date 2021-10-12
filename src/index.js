import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './components/Square';

class Board extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       squares: Array(9).fill(null),
    //       xIsNext: true,
    //     };
    //   }
    renderSquare(i) {
        return (<Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />);
    }

    render() {
        // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // const winner = calculateWinner(this.state.squares);
        // let status;
        // if (winner) {
        // status = 'Winner: ' + winner;
        // } else {
        // status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }

        return (
            <div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
            );
        }
}

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }
    handleClick(i) {
        // 创建了一个副本
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
        return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
      }
      jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
      }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
        <div className="game">
            <div className="game-board">
            <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
            <div>{ status }</div>
            <ol>{ moves }</ol>
            </div>
        </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

// ========================================
    
// <Game />,
// class Clock extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             date: new Date()
//         }
//         this.a = 14;
//         /* 建议使用这种方式 */
//         this.tick = this.tick.bind(this);
//     }
//     componentDidMount () {
//         // this.timer = setInterval(
//         //     () => {
//         //         this.tick()
//         //     }, 1000
//         // );
//     }
//     componentWillUnmount () {
//         // clearInterval(this.timer);
//     }
//     tick () {
//         this.setState({
//             date: new Date()
//         });
//         this.a++;
//     }
//     render () {
//         return (
//             <div>
//             <h1 onClick={this.tick.bind(this, 'a')}>Hello, world! {this.a}</h1>
//             <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }
// function Clock (props) {
//     return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
// }
function NumberList(props) {
    const numbers = props.numbers;
    // 在 map() 方法中的元素需要设置 key 属性
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('提交的名字: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            名字:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交" />
        </form>
      );
    }
  }
ReactDOM.render(
    <NameForm  />,
    document.getElementById('root')
);
  