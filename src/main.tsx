import { createEffect, createSignal } from 'solid-js';

(() => {
  const app = document.getElementById('app');

  const div = document.createElement('div');
  const plus = document.createElement('button');
  const minus = document.createElement('button');
  const h1 = document.createElement('h1');
  const h1Total = document.createElement('h1');

  // useState
  const [count, setCount] = createSignal(0);

  plus.innerText = '+';
  minus.innerText = '-';

  div.appendChild(h1);
  div.appendChild(h1Total);
  div.appendChild(plus);
  div.appendChild(minus);

  plus.onclick = () => {
    setCount(count() + 1);
  };
  minus.onclick = () => {
    setCount(count() - 1);
  };

  createEffect(() => {
    h1.textContent = `Count: ${count()}`;
    h1Total.textContent = `Total: ${count() * 50}`;
  });

  app?.appendChild(div);
})();
