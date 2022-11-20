import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FixedSideMenu from './FixedSideMenu';
import FixedTopMenu from './FixedTopMenu';
import reportWebVitals from './reportWebVitals';
import Content from './ContentPages';

// 以下ログインページ
const login = ReactDOM.createRoot(document.getElementById('login'));
login.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 以下トップページ 共通コンポーネント 固定サイドメニューバー
const DisplayFixedSideMenu = ReactDOM.createRoot(document.getElementById('DisplayFixedSideMenu'));
DisplayFixedSideMenu.render(
  <React.StrictMode>
    <FixedSideMenu />
  </React.StrictMode>
);

// 以下トップページ 共通コンポーネント 固定トップメニューバー
const DisplayFixedTopMenu = ReactDOM.createRoot(document.getElementById('DisplayFixedTopMenu'));
DisplayFixedTopMenu.render(
  <React.StrictMode>
    <FixedTopMenu />
  </React.StrictMode>
);

// 以下トップページ 共通コンポーネント 固定トップメニューバー
const DisplayContent = ReactDOM.createRoot(document.getElementById('DisplayContent'));
DisplayContent.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
