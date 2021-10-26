import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    handleEditing()
  }

  const handleEditing = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className="new-expense">
      {!isEditing ?
        <button
          onClick={handleEditing}>
          Add New Expense </button> :
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onEditing={handleEditing} />
      }
    </div>
  );
}

export default NewExpense;
