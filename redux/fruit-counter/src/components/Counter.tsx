import * as React from 'react';

interface Props {
  name: string;
  count: number;
  price: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Counter({name, count, price, onIncrement, onDecrement}: Props) {
  return (
    <div>
      <h3>{name} の個数</h3>
      <button onClick={onIncrement}>プラス</button>
      <div>{count} 個</div>
      <div>{count * price} 円</div>
      <button onClick={onDecrement}>マイナス</button>
    </div>
  );
}

export default Counter;