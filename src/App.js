import React from "react";
import Overview from "./Component/Overview";
import  Transactionfield from "./Component/Transactionfield";
import TransactionList from "./Component/TransactionList";
import TransactionState from "./Component/Context/TransactionState";


function App() {
 
  return(
    <>
  <TransactionState >
   <div className="container">
        <h2 className="header">Expense Tracker</h2>
        <Overview  />
        <Transactionfield />
        <TransactionList />
    </div>
  </TransactionState>
    
 </> 
  );
 
}


export default App;
