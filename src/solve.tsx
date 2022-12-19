import { render, template } from 'solid-js/web';

import { Accessor, createSignal } from 'solid-js';

const GroupOfCount = (props: { count: Accessor<number> }) => {
  return (
    <div>
      <h1>Count: {props.count()}</h1>
      <h1>Count: {props.count()}</h1>
    </div>
  );
};

const App = () => {
  const [count, setCount] = createSignal(0);

  const sudoCount = () => count();

  console.log('App');

  return (
    <div>
      <GroupOfCount count={count} />
      <h2>{sudoCount()}</h2>
      <button onclick={() => setCount(count() + 1)}>+</button>
      <button onclick={() => setCount(count() - 1)}>-</button>
    </div>
  );
};

render(App, document.getElementById('app')!);
