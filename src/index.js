import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css'
import { addTask, state, subscribe, updateAddMessage, deleteTask } from './api/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = () => {
  root.render(
    <React.StrictMode>
      <App 
        state={state} 
        addTask={addTask} 
        updateAddMessage={updateAddMessage} 
        deleteTask={deleteTask} 
      />
    </React.StrictMode>
  );
}

rerenderTree()

subscribe(rerenderTree)