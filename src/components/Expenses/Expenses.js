import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
    const [year, setYear] = useState('2022');

    const yearFilterHandler = newYear => {
        setYear(newYear);
    };

    let filteredExpenses = props.expenses.filter(x => x.date.getFullYear() == year);
    let expenseList = <p>No expense found.</p>;

    if (filteredExpenses.length > 0) {
        expenseList = filteredExpenses.map(element => {
            return <ExpenseItem
                key={element.id}
                title={element.title}
                amount={element.amount}
                date={element.date}
            />
        });
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={year} onSelectYear={yearFilterHandler} />
                {expenseList}
            </Card>
        </div>
    );
};

export default Expenses;