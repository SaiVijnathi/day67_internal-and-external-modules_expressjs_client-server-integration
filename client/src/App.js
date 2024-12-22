import './App.css';
import {useState} from 'react';

function App() {

  let [products,setProducts] = useState([]);
  
  let onButtonClick = async()=>{

    let reqOptions = {
      method:"GET",
    }
    let JSONData = await fetch("http://localhost:8888/appleproducts",reqOptions);
    let JSOData = await JSONData.json();
    setProducts(JSOData);
    console.log(JSOData);
  }

  return (
    <div className="App">
      <button onClick={()=>{
        onButtonClick();
      }}>Get Products</button>
      <br/>

      {products.map((ele,i)=>{
        return (
          <div key={i} className='productsDiv'>
            <img src={`http://localhost:8888${ele.image}`} alt={ele.name}/>
            <h2>{ele.name}</h2>
            <p>Price: ₹ {ele.price}</p>
            <p>Rating: {ele.rating}</p>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
