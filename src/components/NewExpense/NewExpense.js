import { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = props => {
    const [addExpense, setAddExpense] = useState(false);
    let uiElements = null;

    const newExpenseHandler = expense => {
        props.onAddNewExpense({
            ...expense,
            id: Math.random().toString()
        });

        setAddExpense(false);
    };
    
    const cancelExpenseHandler = isCancel => {
        setAddExpense(isCancel);
    };

    const onAddNewExpenseClickHandler = () => {
        setAddExpense(true);
    };
    

    if (addExpense) {
        uiElements = <ExpenseForm 
        onSubmitNewExpense={newExpenseHandler}
        onCancelNewExpense={cancelExpenseHandler}
        />;
    } else {
        uiElements = (
            <div className='new-expense__middel__button'>
                <button type='button' onClick={onAddNewExpenseClickHandler}>Add New Expense</button>
            </div>
        )
    }

    return (
        <div className='new-expense'>
            {uiElements}
        </div>
    );
};

export default NewExpense;