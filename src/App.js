import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const App = () => {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.75, date: new Date(2021, 7, 14) },
    { id: 'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 8, 5) }
  ];

  const addExpenseHandler = expense => {
    console.log('In app.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
