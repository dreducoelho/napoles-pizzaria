import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Mock do hatch para desenvolvimento local
window.hatch = {
  useStoredState: (key, initialValue) => {
    const [value, setValue] = React.useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });

    const setStoredValue = React.useCallback((newValue) => {
      try {
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
      }
    }, [key]);

    return [value, setStoredValue];
  },
  useUser: () => ({
    id: 'user_local',
    name: 'Usuário Local',
    color: '#9D5BD2'
  }),
  useCollaborators: () => []
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);