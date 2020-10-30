import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if(!window.__POWERED_BY_QIANKUN__){
  // 默认独立运行
  render()
}

// if (window.__POWERED_BY_QIANKUN__) {
//   // eslint-disable-next-line no-undef
//   // 动态添加publicPath
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
// }

export async function bootstrap(){

}

export async function mount(){
    render()
}

export async function unmount(){
  ReactDOM.unmountComponentAtNode(document.getElementById('root')) 
}