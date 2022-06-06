import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([])

  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [
        ...prevState,
        expense
      ];
    })
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
