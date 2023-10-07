
import './App.css';

function Terinaryoperator(){
     const age = 15;
    const isGreen = true;


  
     return(
         <div className="App">
            {age >= 18 ? <h1>Over age</h1>: <h1> Under Age</h1>}
           
           <h1 style={{color : isGreen ? "green" :"red"}}>This has color</h1>

           
            </div>  // using terinary operator for conditional statements
     
     );
}

export default Terinaryoperator;