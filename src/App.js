import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CharacterList from './components/CharacterList/CharacterList';
import Character from './pages/Character/Character';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:char_id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
