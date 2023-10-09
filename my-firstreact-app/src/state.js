// The state is a bulit-in react object that is used to
//  contain data or informatio about the component  .a component state can  
//  change over time , whenever it changes, the component renders 

import { useState } from "react";

// function State (){
// const [age , setAge] = useState(0)

// const increaseAge = () =>{
//     setAge(age + 1);
// }

// return(
//     <div className="state">
//         {age}
//         <button onClick={increaseAge}>increase age</button>
//     </div>
// )
// }


// export default State;


            // ABOUT INPUT using hookstate

// function name(params) {

//     const [InputValue, setInputValue]= useState("");

//     const handleInputChange = (event) =>{
//         setInputValue(event.target.value)
//     }
// return(
    

//     <div className="name">
//         <input type ="value" onChange={handleInputChange}/>
//         {InputValue}
//     </div>
// )
// }

// export default name;


// function ShowText(){
//     const  [showText, setshowText] = useState(true);

//     return(
//         <div className="text">
//             <button onClick= { () => {setshowText(!showText)}}>SHOW/HIDE</button>
//             {showText && <h1>MY NAME IS TARUN</h1>}
//         </div>
//     );
// };


// export default ShowText;


            //  excercise

function App(){
    const[count , setCount] =useState(0);



    return (
        <div className="App">
                <button onClick={()=>{setCount(count +1)}}>increase</button>
                <button onClick={()=>{setCount(count - 1)}}>decrease</button>
                <button onClick={()=>{setCount(count * 0)}}>set zero</button>
                {count}
        </div>    )
}

export default App;