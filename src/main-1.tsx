import { render, delegateEvents, insert, template } from 'solid-js/web';
import { createSignal } from 'solid-js';

const appTemplate = template(`<div><h2>Count </h2><button>+</button><button>-</button></div>`, 8);

const App = () => {
  const [count, setCount] = createSignal(0);

  return (() => {
    const node = appTemplate.cloneNode(true);
    const h2 = node.firstChild!;
    const plusButton = h2.nextSibling!;
    const minusButton = plusButton.nextSibling!;

    insert(h2, count, null);

    (plusButton as any).$$click = () => setCount(count() + 1);

    (minusButton as any).$$click = () => setCount(count() - 1);

    return node;
  })();
};

render(App, document.getElementById('app')!);

delegateEvents(['click']);
