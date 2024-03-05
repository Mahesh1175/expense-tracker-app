import React,{useState,useContext} from "react";
import "./style.css";
import TransactionContext from "./ContextFolder/TransactionContext";

const Transactionfield = () =>{

const[amount,setAmount] = useState('');
const[description,setDescription] = useState('');
const[type,setType] = useState("INCOME");

const { addTransaction } = useContext(TransactionContext);


const addInfo=()=>{ 

  if(amount==='' || description===''){
    alert("Please fill the inputs!");
}
else if(amount<0){
  alert("Posive Numbers only!");
 setAmount('');
}
else{
  
  const info ={
    id:new Date().getTime().toString(),
    amount:+amount,
    description,
    type
  }
  addTransaction(info);

  setAmount('');
  setDescription('');

  }
  
}

    return(
        <>
          <div className="transaction-field">

              <div className="enter-amt">
                     <form>
                            <label >Amt:</label><br />
                            <input type="number" placeholder="Amount" name="amount" value={amount}
                             onChange={(event)=>{setAmount(event.target.value)}} 
                             required></input>
                     </form>
                </div>

                <div className="enter-desc">
                       <form>
                          <label >Desc:</label><br />
                          <input type="text" placeholder="Description" name="description" value={description}
                           onChange={(event)=>{setDescription(event.target.value)}} 
                           required></input>
                       </form>
                </div>

                <div className="choose-btn">
               
                    <div className="income-btn">
                        <input type="radio" 
                                name="type"
                                id="income-btn"
                                value="INCOME"
                                checked={type === "INCOME"}
                                onChange={(eve)=>{setType(eve.target.value)}}
                                ></input>
                        <label>Income</label>
                   </div>

                   <div  className="expense-btn">
                      <input  type="radio" 
                                name="type"
                                id="expense-btn"
                                value="EXPENSE"
                                checked={type === "EXPENSE"}
                                onChange={(eve)=>{setType(eve.target.value)}} 
                                ></input>
                       <label>Expense</label>
                    </div>
                
                </div>
  
                <div className="ac-choose-trans">
                    <button className="add-trans" type="button" onClick={addInfo}>Add Transaction</button>
                </div>
              
          </div>
  
        </>
    );
}
  
export default Transactionfield;