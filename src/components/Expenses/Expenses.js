import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = props => {
    const [year, setYear] = useState('2022');

    const yearFilterHandler = newYear => {
        setYear(newYear);
    };

    const filteredExpenses = props.expenses.filter(x => x.date.getFullYear().toString() === year);
    
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={year} onSelectYear={yearFilterHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;