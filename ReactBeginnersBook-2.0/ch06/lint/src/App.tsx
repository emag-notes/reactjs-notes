import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const logoOptions = {
    alt: 'logo',
    className: 'App-logo',
    src: logo,
  };
  const title = 'こんにちはReact';
  const targets = ['World', 'Kanae', 'Yukina'];

  return (
    <div className="App">
      <header className="App-header">
        <img
          alt={logoOptions.alt}
          className={logoOptions.className}
          src={logoOptions.src}
        />
        {title && <p>{title}</p>}
        {targets.map(target => (
          <p key={target}>Hello, {target}</p>
        ))}
      </header>
    </div>
  );
};

export default App;
