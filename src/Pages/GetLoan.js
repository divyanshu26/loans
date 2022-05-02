import classes from './GetLoan.module.css';
import { useState, useRef } from 'react';

const GetLoan = (props)=>{
    console.log('loan');
    let [monthlyInstallment , setMonthlyInstallment] = useState(0);
    let [message, setMessage] = useState('');
    const amountRef = useRef();
    const termRef  = useRef();

    function calculateInstallment(evt){
        evt.preventDefault();
        let amount = amountRef.current.value;
        let term = termRef.current.value;
        console.log(amount,term);
        if(amount > 0 && term>0){
            setMessage(`Your monthly installment : ${((amount +(amount*term*(0.1/12)))/term).toFixed(1)} Rs`);
        }else{
            setMessage('Amount and Terms should be more than 0');
        }
    };

    function applyLoan(evt){
        evt.preventDefault();
        let amount = amountRef.current.value;
        let term = termRef.current.value;
        console.log(amount,term);
        if(amount > 0 && term>0){
            props.applyLoan(prevLoans=>{
                let obj ={
                    loanIssueDate:new Date().toLocaleDateString(),
                    amount : amountRef.current.value,
                    paid: 0,
                    
                };
                prevLoans.push(obj);
                console.log(prevLoans,typeof prevLoans,amountRef.current.value);
                return prevLoans
            });
            setMessage('applied successfully');
        }else{
            setMessage('Amount and Terms should be more than 0');
        }
        
    }
    return(
        <>
            <div className={classes.container}>
           <table>
               <tbody>
                   <tr>
                       <td>Loan Amount(INR)</td>
                       <td><input type='number' min={0} ref={amountRef}/></td>
                   </tr>
                   <tr>
                       <td>Annual Interest</td>
                       <td>10 %</td>
                   </tr>
                   <tr>
                       <td>Loan Term(in months)</td>
                       <td><input type='number' min={0} ref={termRef} /></td>
                   </tr>
                   <tr>
                       <td><button onClick={calculateInstallment}>Calculate</button></td>
                       <td><button onClick={applyLoan}>Apply</button></td>
                   </tr>
                   {message && <tr>{message}</tr>}
               </tbody>
           </table>
            </div>
        </>
    );
};


export default GetLoan;