import React, { useState } from "react";
import "./styles.css";

// useCounterフックを定義、カウンターの初期値を引数に渡す
const useCounter = (initialCount) => {
  // count は状態変数
  // setCount は状態変数を更新する関数
  // count の初期値は引き渡される initialCount をセット
  const [count, setCount] = useState(initialCount);

  // 1ずつカウントアップする countAdd関数の宣言
  // 現在の count を引数で受け取ることができる
  const countAdd = () => setCount((prevCount) => prevCount + 1);

  // 1ずつカウントダウンする countSub関数を宣言
  // 現在の count を引数で受け取ることができる
  const countSub = () => setCount((prevCount) => prevCount - 1);

  // 状態変数 count の状態を初期値 initialCountに戻す関数
  const countReset = () => setCount(initialCount);

  // useCounter関数の戻り値は count, countAdd, countSub, countReset
  return { count, countAdd, countSub, countReset };
};

// CounterTextコンポーネントを定義
// count を props としとぇ現在のカウント数を受け取る
const CounterText = ({ count }) => <p>現在のカウント数:{count}</p>;

const Counter = () => {
  // useCounter() の初期値に 0 をセット
  // useCounterフックを利用
  const { count, countAdd, countSub, countReset } = useCounter(0);

  return (
    <div className="counterContainer">
      {/* useCounterフックで定義した現在の値 count */}
      <CounterText count={count} />

      {/* useCounterフックで定義した関数 countAdd */}
      <button onClick={countAdd}>ボタン +1</button>

      {/*useCounterフックで定義した関数 countSub */}
      <button onClick={countSub}>ボタン -1</button>

      {/* useCounterフックで定義した関数 countReset */}
      <button onClick={countReset}>リセット</button>
    </div>
  );
};

export default function App() {
  return <Counter />;
}
