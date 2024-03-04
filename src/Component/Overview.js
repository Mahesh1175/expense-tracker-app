import React,{useContext, useEffect, useState} from "react";
import "./style.css";
import TransactionContext from "./ContextFolder/TransactionContext";

const Overview = () =>{

    const  {currTransaction}  = useContext(TransactionContext);
  
    const [expense,setExpense]=useState(0);
    const [income,setIncome]=useState(0);
    
    const balance= income - expense;

    const calculate =()=>{
        let exp=0;
        let inc=0;

        const funcall=(tra)=>{
            if(tra.type=== "INCOME"){
                (inc=inc+tra.amount);
            }
                                    
            else{
                if(tra.type ==="EXPENSE"){
                        (exp=exp+tra.amount);    
                }
            }
        }
        currTransaction.map((tra) => {funcall(tra)});
               
        setIncome(inc);
        setExpense(exp);

    }
    useEffect(()=>calculate(),[currTransaction]);
 

    return(
        <>
            <div className="overview-field">
                <div className="acc-balance">Balance:<br /> &#8377;{ balance} </div>
                <div className="income-expense">
                    <div id="income">Income: &#8377;{ income}</div>
                    <div id="expense">Expense: &#8377;{ expense}</div>

                </div>
            </div>
        </>
    );

}
export default Overview;