
import './App.css';

import  "./App.css"

function App() {

  const name = "kiran"
  const salary = 50000
  const post = "junior engineer"
  const employee= (
   <div>
    {name}
    {salary}
    {post}
   </div>
  )
  return ( 
  <div className='App'>
    <h1>{employee}</h1>
<Job name="krishna" salary = {3000}  jobdescription= "juniorengineer" />
<Job name="krishnachaitanya" salary = {3000}  jobdescription= "juniorengineer" />
<Job name="varma" salary = {30000}  jobdescription= "seniorengineer" />

</div>
  );
}




const Job = (props) =>{
return (
<>

  <h1>{props.name}</h1>
  <h1>{props.salary}</h1>
  <h1>{props.jobdescription}</h1>
  </>
);
}

export default App;
