import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseDate = new Date().toISOString();
    const expenseType = 'Bike Service';
    const expenseAmount = 300.00;

    return (

        <div className='expense-item'>
            <div>{expenseDate}</div>
            <div className='expense-item__description'>
                <h2>{expenseType}</h2>
                <div className='expense-item__price'>$ {expenseAmount}</div>
            </div>
        </div>
    )
};

export default ExpenseItem;
