import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = props => {
    const newExpenseHandler = expense => {
        props.onAddNewExpense({
            ...expense,
            id: Math.random().toString()
        });
    };

    return <div className='new-expense'>
        <ExpenseForm onSubmitNewExpense={newExpenseHandler} />
    </div>
};

export default NewExpense;