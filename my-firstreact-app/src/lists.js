
// function lists ()  {

//     const name  = ["kumar","kiran","vikram","varam"];

//     const users =[
//         {name: "ravi", age:21},
//         {name:"rajesh", age :31},
//         {name:"saikrishna", age:21}
//     ]
//     return (
//         <div className="lists">
//            {users.map((user, key)=> {
//                 return (
//                     <div>

//                         {user.name} {user.age} 
//                         </div>
//                 )
//            })}
//         </div>
//     );
// }


// function list (){
//     const users =[
//         {name: "ravibabu", age:21},
//         {name:"rajesh", age :31},
//         {name:"saikrishna", age:21}
//     ]

//     return (
//         <div className="user2">
//            {users.map((user1,key) =>{
//             return(
//                 <div>
//                     <User name={user1.name} age={user1.age} />
//                 </div>
//             )
//            })}

//         </div>
//     )
// }


// const User =  (props) => {
//     return(
//         <div>
//             {props.name} {props.age}
//         </div>
//     )
// }

// export default list


function planets (){


    const planets  =[
        {name: 'Mars',isGasPLANET: false},
        {name:"Earth",isGasPlanet: false},
        {name: "jupiter",isGasPlanet :true},
        {name:"Venus" , isGasPlanet:false},
        {name:"Neptune", isGasPlanet: true},
        {name:"Uranus", isGasPlanet: true}
    ];

    return(
        // <div className="plane">
        //     {planets.map((planet,key)=>{
        //         if(planet.isGasPlanet) return <h1> {planet.name}</h1>;
        //     })}
        // </div>
        <div className="plane">
        {planets.map((planet,key)=> planet.isGasPlanet && <h1> {planet.name}</h1>
        )}
    </div>
    )
}

export default planets