(() => {
  const app = document.getElementById('app');

  const div = document.createElement('div');
  const plus = document.createElement('button');
  const minus = document.createElement('button');
  const h1 = document.createElement('h1');

  const count = new Proxy(
    { value: 0 },
    {
      get(target: any, key) {
        return target[key];
      },
      set(target, key, value) {
        target[key] = value;
        h1.textContent = `Count: ${value}`;
        return true;
      },
    }
  );

  plus.innerText = '+';
  minus.innerText = '-';
  h1.innerText = `Count: ${count.value}`;

  div.appendChild(h1);
  div.appendChild(plus);
  div.appendChild(minus);

  app?.appendChild(div);

  plus.onclick = () => {
    count.value++;
  };

  minus.onclick = () => {
    count.value--;
  };
})();
