import React from 'react';
import NapolesPizzaria from './components/NapolesPizzaria';
import './index.css';

// Mock do objeto hatch para desenvolvimento local
const mockHatch = {
  useStoredState: (key, initialValue) => {
    const [value, setValue] = React.useState(() => {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    });
    
    React.useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
  },
  useUser: () => ({
    id: 'user_123',
    name: 'Usuário Teste',
    color: '#9D5BD2'
  }),
  useCollaborators: () => []
};

// Disponibilizar o hatch globalmente
window.hatch = mockHatch;

function App() {
  return (
    <div className="App">
      <NapolesPizzaria />
    </div>
  );
}

export default App;