import classes from "./Dashboard.module.css";
import {useRef} from 'react';

const DashBoard = (props) => {
  console.log(props.loanDetails);
  const payRef = useRef();


    function pay(updateLoan,evt){
        evt.preventDefault();
        console.log(payRef.current.value);
        props.payLoan(prevLoans=>{
            console.log(prevLoans,payRef.current.value,'^^^^^^^^^^^^^');
            return prevLoans.map(loan=>{
                if(loan === updateLoan){
                    console.log('@@@@@@@@@@@@@@@',payRef.current.value,')))))))))))))))))))))');
                    loan.paid = parseInt(payRef.current.value);
                };
            return loan;
            });
        });
    };



  const loanList = props.loanDetails.map((loanItem,i) => {
    return <li key={i}>
        <span>Amount: {loanItem.amount}</span>
        <span>DateIssued: {loanItem.loanIssueDate}</span>
        <span>Paid: {loanItem.paid}</span>
        <span><input type='number' min={0} ref={payRef}/><button onClick={pay.bind(null,loanItem)}>Pay</button></span>
    </li>;
  });
  return (
    <>
     <div className={classes.container}>
     <ul>
          {loanList}
      </ul>
     </div>
    </>
  );
};

export default DashBoard;
