import './styles/App.css';
import app from './firebase/firebase';
import Login from './components/auth/Login';

export default function App() {
  console.log('app ===', app);
  return (
    <div className='App container mx-auto px-4'>
      <h1 className='text-3xl font-bold underline'>Firebase</h1>

      <hr />
      <Login />
    </div>
  );
}
