(() => {
  const app = document.getElementById('app');

  const div = document.createElement('div');
  const plus = document.createElement('button');
  const reset = document.createElement('button');
  const minus = document.createElement('button');
  const h1 = document.createElement('h1');
  const h1Total = document.createElement('h1');

  const price = 50;
  let count = new Proxy(
    { value: 0 },
    {
      get(target: { [key: string]: number }, key: string) {
        return target[key];
      },
      set(target: { [key: string]: number }, key: string, value: number) {
        target[key] = value;
        h1.innerText = `Count: ${value}`;
        h1Total.innerText = `Total: ${value * price}`;
        return true;
      },
    }
  );

  plus.innerText = '+';
  minus.innerText = '-';
  reset.innerText = 'reset';
  h1.innerText = `Count: ${count.value}`;
  h1Total.innerText = `Total: ${count.value * price}`;

  div.appendChild(h1);
  div.appendChild(h1Total);
  div.appendChild(plus);
  div.appendChild(minus);
  div.appendChild(reset);

  app?.appendChild(div);

  plus.onclick = () => {
    count.value++;
  };

  minus.onclick = () => {
    count.value--;
  };

  reset.onclick = () => {
    count.value = 0;
  };
})();
