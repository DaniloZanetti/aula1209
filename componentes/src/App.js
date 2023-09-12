import OlaMundo from './components/OlaMundo';
import './App.css';
import Frases from './components/Frases';
import DigaMeuNome from './components/DigaMeuNome';
import DigaMinhaIdade from './components/DigaMinhaIdade';
import DigaMinhaProfissao from './components/DigaMinhaProfissao';

function App() {
  return (
    <div className="container">
      <h1>Olá Mundo!</h1>
      <h2>Olá Mundo 2!</h2>
      <OlaMundo/>
      <Frases/>
      <DigaMeuNome nome="José Otavio Valério Tizatto"/>
      <DigaMinhaIdade nome="Idade para ser o Amor da sua VIDA"/>
      <DigaMinhaProfissao nome="Ser Lindo"/>
      
    </div>
  );
}

export default App;
