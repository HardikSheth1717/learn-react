import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titleChangeHandler = event => {
        // setTitle(event.target.value);
        setFormData(prevState => {
            return {
                ...prevState,
                title: event.target.value
            }
        });
    };

    const amountChangeHandler = event => {
        // setAmount(event.target.value);
        setFormData(prevState => {
            return {
                ...prevState,
                amount: event.target.value
            }
        });
    };

    const dateChangeHandler = event => {
        // setDate(event.target.value);
        setFormData(prevState => {
            return {
                ...prevState,
                date: event.target.value
            }
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        // console.log(title, amount, date);
        const submitedData = {
            title: formData.title,
            amount: formData.amount,
            date: new Date(formData.date)
        }

        props.onSubmitNewExpense(submitedData);

        setFormData({
            title: '',
            amount: '',
            date: ''
        });
    };

    const cancelHandler = () => {
        props.onCancelNewExpense(false);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={formData.title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={formData.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={formData.date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={cancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;