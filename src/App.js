
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.75, date: new Date(2021, 7, 14) },
    { id: 'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 8, 5) }
  ];
  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
