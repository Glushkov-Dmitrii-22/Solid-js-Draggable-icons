import { useMousePosition } from '@solid-primitives/mouse';
import { Component, createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import { Icons } from './components';

const App: Component = () => {
  const mouse = useMousePosition();

  const [loggedIn, setLoggedIn] = createSignal(false);

  const mouseX = () => mouse.x;
  const mouseY = () => mouse.y;
  const x = () => (loggedIn() ? `${mouse.x}` : { mouseX });
  const y = () => (loggedIn() ? `${mouse.y}` : { mouseY });
  return (
    <div onmouseleave={() => setLoggedIn(false)}>
      <div
        style={{
          position: 'relative',
        }}
      >
        <div style={{ position: 'fixed', bottom: '2rem' }}>
          X: {mouse.x} <p />
          Y: {mouse.x} <p />
          mouse event click: {String(loggedIn())}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          right: '0px',
          bottom: '0px',
          left: '-10px',
        }}
      >
        <span
          role="img"
          aria-label="Smail"
          onmousedown={() => setLoggedIn(true)}
          onmouseup={() => setLoggedIn(false)}
          style={{
            padding: '0.5rem',
            position: 'absolute',
            left: `${x()}px`,
            top: `${y()}px`,
            cursor: 'grab',
            display: 'flex',
          }}
        >
          <Icons />
        </span>
      </div>
    </div>
  );
};

render(() => <App />, document.getElementById('root')!);

export default App;
