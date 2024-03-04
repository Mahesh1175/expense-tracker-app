import React,{useState,useEffect} from "react";
import TransactionContext from "./TransactionContext";


const TransactionState = (props) =>{

    const getLocalStorage=()=>{
        const storeTransaction=localStorage.getItem("expense-tracker");
        if(storeTransaction){
            return (JSON.parse(storeTransaction));
        }
        else{
            return [];
        }
    }
    
    const[currTransaction,setcurrTransaction]=useState(getLocalStorage);
    
    
    const addTransaction=(data)=>{

        const randomArray = [...currTransaction,data];

        const totalBalance = randomArray.reduce((acc, curr) => {
            return curr.type === 'INCOME' ? acc + curr.amount : acc - curr.amount;
        }, 0);
       
          if(totalBalance >= 0 ){
            setcurrTransaction( [...currTransaction,data]  );
          }
          else{
            setcurrTransaction( [...currTransaction]);
            alert("Not enough balance!");
            }
    }
 
    const removeAll=()=>{
        setcurrTransaction([]);
    }

    useEffect(()=>{
        localStorage.setItem("expense-tracker",JSON.stringify(currTransaction))
      },[currTransaction]);


return (
    <>
    <TransactionContext.Provider value={{currTransaction,addTransaction,removeAll}}>
        {props.children}
    </TransactionContext.Provider>
    </>
);


}
export default TransactionState;