import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [ 'jafor', 'Alomgir', 'Salman', 'shovo']

  const products = [
    {name: 'photoshop', price:'$90.00'},
    {name: 'Illustrator', price: '$5.00'},
    {name: 'PDF Reader', price:'$9.00'}
  ]

  // const nayoukNames = nayoks.map(nayok => nayok);
  // console.log(nayoukNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am react person</p>
        <Counter></Counter>
        
        <ul>
          {
            nayoks.map(nayoks => <li>{nayoks}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            products.map(product =><Product product={product}></Product>)
          }
        <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li>
        <li>{nayoks[3]}</li>
        </ul>

        <Product name={products[0].name} price={products[0].price}></Product>
       <Users></Users>
        <Person name="Morshad" profession="Footboler"></Person>
        <Person name="Khan" profession="dorshuk"></Person>

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
 
  const handleIncrease = () => setCount(count +1);
  
 
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={() => setCount(count-1)}>Dicress</button>
      <button onClick={() => setCount(count +1)}>Incriss</button>
    </div>
  )
}


function Users(){
    const [users, setUsers] = useState([]);


    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    }, [])


    return(
     <div>
       <h3>Dynamic Users:{users.length}</h3>
        {
          console.log(users)
        }
       <ul>
         {
           users.map(user =><li>{user.phone}</li>)
         }
       </ul>
     </div> 
    )
}


function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'green',
    height:'200px',
    width:'200px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}



function Person(props){
  return (
    <div style={{border:'2px solid green', width:'400px', margin:'10px'}}>
      <h3>My Name {props.name}</h3>
  <p>My Profession {props.profession}</p>
    </div>
  )
}
export default App;
