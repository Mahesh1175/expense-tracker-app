import React,{useContext} from "react";
import "./style.css";
import TransactionContext from "./ContextFolder/TransactionContext";

const TransactionList = ()=> {
    const { removeAll } = useContext(TransactionContext);
    const {currTransaction} = useContext(TransactionContext);
   

   const transactionListFunction =(tran)=>{

      return(<li key={tran.id}> {tran.description} <span style={{ color:  tran.type === 'EXPENSE' ? 'red' : 'green'}}> 
               {tran.type === 'EXPENSE' ? '-':'+'}&#8377;{tran.amount} </span></li>);
     }
  
    return(
    <>
        {(currTransaction.length>0) ?(<h4 className="histotyheader">History <span ><button onClick={removeAll}>Clear all</button></span></h4>):null}
        
        <ul className="showtransactionlists">
        {  currTransaction.map((tran) => transactionListFunction(tran))}
        </ul>
    </>
    );

}
export default TransactionList;