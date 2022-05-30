import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
    const [year, setYear] = useState('');

    const yearFilterHandler = newYear => {
        console.log(newYear);
        setYear(newYear);
        setTimeout(() => {
            console.log(year);
        }, 2000);
    };

    return (
        <div>
            <ExpenseFilter onSelectYear={yearFilterHandler} />
            <Card className='expenses'>
                <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date} />
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date} />
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date} />
                <ExpenseItem
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date} />
            </Card>
        </div>
    );
};

export default Expenses;