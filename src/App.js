import React, { useState } from 'react';
// import './App.css';


export default function App() {
  const[title, setTitle] = useState("");
  const[amount, setAmount] = useState("");
  const[date, setDate] = useState("");
  const[list, setList] = useState([]);

  

  const addSubmit = (event) =>{
    event.preventDefault();
    const toggle = {title,amount,date}
    if(title &&amount &&date){
      setList((ls)=>[...ls,toggle])
      setTitle("")
      setAmount("")
      setDate("")
    }
  }
  const onChange=(event)=>{
    setTitle(event.target.value)
  }
  const onChange1=(event)=>{
    setAmount(event.target.value)
  }
  const onChange2=(event)=>{
    setDate(event.target.value)
  }

  return (
          <>
          <div className="App container mt-5">
          <form className="row g-3 needs-validation" novalidate onSubmit={addSubmit}>
          <div className="col-md-5">
          <label for="validationCustom01" className="form-label" style={{fontSize:25, fontWeight:"bold"}}>Title</label>
          <input name ="name" value={title} onChange={onChange} type="text" className="form-control" id="validationCustom01" required/>
          </div>
          <div className="col-md-5">
          <label for="validationCustom02" className="form-label" style={{fontSize:25, fontWeight:"bold"}}>₹ Amount</label>
          <input name="number" value={amount} onChange={onChange1} type="number" className="form-control" id="validationCustom02"required/>
          </div>
          <div className="col-md-5">
          <label for="validationCustom03" className="form-label" style={{fontSize:25, fontWeight:"bold"}}>Date</label>
          <input name="date" value={date} onChange={onChange2} type="date" className="form-control" id="validationCustom02"required/>
          </div>
          <button className="btn btn-success" style={{borderRadius:8, width:200, height:40, margin:50}}>Add</button>
          </form>
          {/* <h2 className="offset-1 btn btn-success" style={{marginTop:80, fontSize:25, marginBottom:40}}>Added Data</h2> */}
          <div  style={{display:'flex',justifyContent:'space-evenly',lineHeight:3, fontSize:25,fontWeight:'bold', textDecoration:"underline",fontStyle:'italic'}}>
          <label>Title</label>
          <label>Amount</label>
          <label>Date</label>
          </div>
          {
          list.map((a)=>
          <div style={{display:'flex',justifyContent:'space-evenly', lineHeight:4,fontSize:20,fontStyle:'italic',textDecoration:'overline underline'}}>
          <label>{a.title}</label>
          <label>{a.amount}</label>
          <label>{a.date}</label>
          </div>)
          }
          </div>
          </> 
  )
};  

//export default App;