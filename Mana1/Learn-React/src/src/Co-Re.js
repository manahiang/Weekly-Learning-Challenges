
//import { userInfo } from "os";
//import React, { useEffect, useState } from "react";
//import react,{useEffect} from"react";
// function Card({loading,error,title,subtitle}){
//import { user, useState } from "react";
//import { useContext } from "react";



//import exp from "constants"


// let content
// if(error){content='Error'
// }else if(loading){content=<h3 style={styles.empty}>loading...</h3>}else{
//     content=(
//         <div>
//             <h1 style={styles.title}>{title}</h1>{subtitle?(
//                 <h2 style={styles.subtitle}>{subtitle}</h2>
//             ):(
//                 <h3 style={styles.empty}>No Subtitle</h3>
//             )}
//         </div>
//     )
// }
// return<div style={styles.card}>{content}</div>

// }
// function Card1(){
//     return(
//         <div>
//             <Card error={true}/>
//             <Card loading={true}/>
//             <Card loading={false} title={'Title'}subtitle={
//                 'Subtitle'}/>
//         </div>
//     )
// }
// const styles={
//     card:{
//         padding:'20px',
//         margin:'20px',
//         textAlign:'center',
//         color:'white',
//         backgroundColor:'steelblue',
//         border:'1px solid rgba(0,0,0,0.15)',
//     },
//     title:{fontSize:'18px',
//     lineHeight:'24px',},
//     subtitle:{fontSize:'14px',lineHeight:'18px'},
//     empty:{fontSize:'12px',lineHeight:'15px',opacity:'0.5',}

// }







//     return(
//         <div style={styles.card}>
//             <h1 style={styles.title}>{title}</h1>
//             {subtitle?
//             (
//                 <h2 style={styles.subtitle}>{subtitle}</h2>
//             ):(
//                 <h3 style={styles.empty}>No subtitles</h3>
//             )}
//         </div>
//     )
// }
// // function app(){
// //     return(
// //         <div>
// //             <Card title={'Title'}/>
// //             <Card title={'Title'} subtitle={'Subtitle'}/>
// //         </div>
// //     )
// // }
// const styles={
//     card:{
//         padding:'20px',
//         margin:'20px',
//         TextAlign:'center',
//         color:'white'
//         ,backgroundColor:'steelblue',
//         border:'1px solid rgba(0,0,0,0.15)'
//     }
// }





// function Card({title, subtitle}){
//     return(
//         <div style={styles.card}>
//             <h1 style={styles.title}>{title}</h1>
//             {subtitle && <h2 style={styles.subtitle}>
//                 {subtitle}</h2>}

//         </div>
//     )
// }
// function app (){
//     return(
//         <div>
//             <Card title={'Title'}/>
//             <Card title={'Title'}/>
//         </div>
//     )
// }

// const styles={
//     card:{
//         padding:'20px',
//         margin:'20px',
//         textAlign:'center',
//         color:'white',
//         backgroundColor:'steelblue',
//         border:'1px solid rgba(0,0,0,0.15)'

//     }
//     ,subtitle:{
//         fontSize:'14px',
//         lineHeight:'18px',
//     },
// }






// function Card({title, subtitle}){

//     return(
//         <div style={styles.card}>
//             <h1 style={styles.title}>{title}</h1>
//             {subtitle && <h2 style={styles.subtitle}>{subtitle}</h2>}
//         </div>
//     )
// }
// const app=()=>{

//         <div>
//             <Card title={'Title'}/>
//             <Card title={'Title'} subtitle={'Subtitle'}/>
//         </div>

// }

// const styles={
//     card:{
//         padding:'20px',margin:'20px',textAlign:'center',color:'white'
//         ,background:'steelblue',border:'1px solid rgba(0,0,0,0.15)'
//     }
//     ,subtitle:{
//         fontSize:'14px',lineHeight:'18px',
// }
// }
// export default Card1;
// export default Card; //for Conditionaly Rendering






// User-Input(Lessons)

// function UserInput(){
//     const [state, setState]=useState('')

//     return(
//         <div >
//             <h1 style={{textAlign:'center'}}>UserInput</h1>
//             <label htmlFor={'my-input'}>Last Name </label>
//             <input
//                 id={'my-input'}
//                 type={'text'}
//                 value={state}
//                 placehoder={'Type here'}
//                 onChange={event=>{setState(event.target.value)}}/><br/><br/>


// <label htmlFor={'my-input'}>First Name  </label>
//             <input
//                 id={'my-input'}
//                 type={'text'}
//                 value={state}
//                 placehoder={'Type here'}
//                 onChange={event=>{setState(event.target.value)}}/><br/><br/>

// <label htmlFor={'my-input'}>Phone Number </label>
//             <input
//                 id={'my-input'}
//                 type={'text'}
//                 value={state}
//                 placehoder={'Type here'}
//                 onChange={event=>{setState(event.target.value)}}/><br/><br/>
//         </div>
//     )
// }
// export default UserInput;






//Event(Lessons)

// function Count(){
//     const[count, setCount]=useState(10)
//     return(
//         <div style={{textAlign:'center',color:'red',fontFamily:'inherit'}}>
//         <button
//         onClick={()=>{setCount(count+10);}}>
//             Click now to Increment {count}</button><br/><br/>

// <button
//         onClick={()=>{setCount(count+10);}}>
//             Click now to Increment {count}</button>
//         </div>
//     )
// }
// export default Count;



// List and key





// function NumberList(props){
//     const numbers=props.numbers;
//     const ListItems=numbers.map((number)=><li>{number}</li>);
//     return(<ul>{ListItems}</ul>)
// }
// const numbers=[1,2,4,5,6];
// export default NumberList;





// function NumberList(props){
//     const numbers=props.numbers;
//     const ListItems=numbers.map((numbers)=>
//     <li key={number.toString()}>{numbers}</li>);
//     return(<ul>{ListItems}</ul>)
// }




// const data=[
//     {id:'a',name:'Devin'},
//     {id:'b',name:'Gabe'},
//     {id:'c',name:'Kim'}
// ]
// export default()=>(
//     <div>
//         {data.map(item=>(
//         <div key={item.id}>{item.name}>{item.name}</div>
//         ))}
//     </div>
// ) //error





// const Data=()=>[
//     {id:'a',name:'Devin'},
//     {id:'b',name:'Gabe'},
//     {id:'c',name:'Kim'}

// ]
// export default ()=>(
//     <div>
//         {Data.map(item=>(
//             <div key={item.id}>{item.name}</div>
//         ))}
//     </div>
// )   // error one problem


// function Car(props){
//     return<li>I am a {props.brand}</li>;

// }

// function Garage(){
//     const cars=['Ford','BMW','Audi'];
//     return(
//         <>
//         <h1>Who lives in my Garage?</h1>
//         <ul>
//             {cars.map((car)=><Car brand={car}/>)}
//         </ul>
//         </>
//     )
// }

// export default Garage;
//  //export default Car; //Successfully





// function Car(props){
//     return<li>I am a {props.brand}</li>
// }
//  function Garage(){
//     const cars=[
//         {id:1,brand:'Ford'},
//         {id:2,brand:'BMW'},
//         {id:3,brand:'Audio'}
//     ];
//     return(
//         <>

//         <h1>Who lives in my Garage?</h1>
//         <ul>
//             {cars.map((car)=><Car key={car.id}brand={car.brand}/>)}
//         </ul>
//         </>
//     )
//  }
// //export default Car;
// export default Garage; //Successfully





// list and key

// function Key(){
//     const data=[
//         {id:'a', name:'Devin'},
//         {id:'b', name:'Gabe'},
//         {id:'c',name:'Kim'}
//     ]
//     return(
//         <div>
//             {data.map(item=>(
//                 <div key={item.map}>{item.name}</div>
//             ))}
//         </div>
//     )
// }
// export default Key;





// Hook lesson
//useState
// function CountApp(){
//     const[count, setCount]=useState(0);
//     return(
//         <div>
//             <p>You clicked{count}times</p>
//             <button onClick={()=>setCount(count+1)}>
//                 Click me
//             </button>
//         </div>
//     )
// }

// export default CountApp;






// useState


// function FavoriteColor(){
//     const[color,setColor]=useState("red")

// return(
//     <>
//     <h1>My favorite color is{color}! </h1>
//     <button type="button" onClick={()=>setColor("blue")}>
//         blue
//     </button>
//     </>
// )
// }
// export default FavoriteColor;


//useEffect




// function Timer(){
//     const[count, setCount]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount((count)=>count+1);
//         },1000);
//     });
//     return <h1>I've rendered{count}times!</h1>;
// }
// export default Timer;

// useRef


//      function REF(){
//     const[inputValue, setInputValue]=useState("");
//     const previousInputValue=useRef("");
//     useEffect(()=>{previousInputValue.current=inputValue;},[inputValue]);
//     return(
//         <>
//         <input
//         type="text"
//         value={inputValue}
//         onChange={(e)=>setInputValue(e.target.value)}/>
//         <h2>Current Value:{inputValue}</h2>
//         <h2>previous Value:{previousInputValue.current}</h2>
//         </>
//     )
// }
// export default REF;




// function REF1(){
//     const[inputValeu1, setInputValue1]=useState("");
//     const PReinputvalue=useRef(" ")
//     useEffect(()=>{PReinputvalue.current=inputValeu1;},[inputValeu1]);
//     return(
//         <>
//         <input
//         type="text"
//         value={inputValeu1}
//         onChange={(e)=>setInputValue1(e.target.value)}/>
//         <h2>Current Value{inputValeu1}</h2>
//         <h2>PReinputvalue{PReinputvalue}</h2>
//         </>
//     )
// }
// export default REF1;






//UseRef

// function UseRef(){
//     const[inputValue,setInputValue]=useState("")
//     const count=useRef(0);

//     useEffect(()=>{count.current=count.current+1;});
//     return(
//         <>
//         <input
//             tyep="text"
//             value={inputValue}
//             onChange={(e)=>setInputValue(e.target.value)}/>
//             <h1>Render Count:{count.current}</h1>
//         </>
//     )
// }
// export default UseRef;



// function TestUseRef()
// {
//     //const[name,setName]=useState("");
//    // const[count, setCount]=useState(0)
//     const testref=useRef(9);
//     console.log(testref)
//     //const update=()=>{testref.current=testref.current+1;}
//     return(
//         <>
//         <h1>I refreshd{testref.current} times</h1>
//         <button onClick={()=>setName(name)}>update name</button>
//         </>
//     )
// }
// export default TestUseRef;








// function Test(){
//     const[count,setCount]=useState(0)
//     const[name,setname]=useState("Name");

//     return(
//         <>
//         <h1>My name is:{name}</h1>
//         <h1>Select below to count number{count}</h1>
//         <button onClick={()=>setname("Chanrith")}>ChangeName</button>
//         <button onClick={()=>setCount(count+4)}>CountNumber</button>
//         </>
//     )
// }
// export default Test;








//useContex



//import { useContext } from "react";
// function Title({theme}){
//     const style={
//         background:theme.primary,
//         color:theme.text,
//     }
//     return<h1 style={style}>Title</h1>
// }

// function Nested({theme}){
//     return<Title theme={theme}/>
// }
// function NestedTwice({theme}){
//     return<Nested theme={theme}/>
// }
// export default function Title1(){
//     const theme={primary:"dodgerblue",text:'white'}
//     return<NestedTwice theme={theme}/>
// }









//  function Title({theme}){const style={backgroundColor:'blue',color:'red'}
// return <h1 style={style}>Title</h1>
// }

// function Nested({theme}){
//     return<Title theme={theme}/>
// }
// function NestedTwice({theme}){
//     return<Nested theme={theme}/>
// }
// export default function Tittle1(){
//     const theme={primary:'dodgerblue',Text:'white'}
//     return<NestedTwice theme={theme}/>
// }





// function Caption ({styles}){
//     const style={background:'red',color:'blue',marginLeft:''}
//     return <h1 style={style}>Caption</h1>
// }
// function Mana1({styles}){
//     return<Caption styles={styles}/>
// }
// function Mana2({styles}){
//     return<Mana1 styles={styles}/>
// }
// export default function Finish(){
//     const styles={primary:'blue',Text:'white'}
//     return <Mana2 styles={styles}/>
// }










//use style in useContex




// function Title({title}){
//     const style={background:'red',color:'blue'}
//     return<h1 style={style}>Hello world</h1>
// }
// export default Title;







// import{useState} from "react";

// function Component1()
// {
//     const[user]=useState("Jesse Hall");
//     return
//     (
//         <>
//         <h1></h1>
//         <Component2 user={user}/>
//         </>
//     );

// }
// function Component2({user})
// {
//     return(<><h1>Component 2</h1><Component3 user={user}/></>)
// }


// function Component3({user}){
//     return(
//         <>

//         <h1>Component3</h1> <Component4 user={user}/>
//         </>
//     )
// }
// function Component4({user})
// {
//     return
//     (
//         <><h1>Component4</h1><Component5 user={user}/></>
//     )
// }
// function Component5({user})
// {
//     return(
//         <><h1>Component5</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//         </>
//     )
// }

// export default Component1;









// import{useContext,createContext,useState} from "react";

// const UserContext=createContext();

// function Component1()
// {
//     const[user]=useState['Jesse Hall'];

// return(
//     <UserContext.Provider value={user}>

// <h1>{`Hello ${user} `}</h1>
// <Component2/>
//     </UserContext.Provider>
// );


// }
// function Component2(){
//     return(
//         <>
//         <h1>Component2</h1>
//         <Component3/>
//         </>
//     )
// }
// function Component3(){
//     return(
//         <>
//         <h1>Component3</h1>
//         <Component4/>
//         </>
//     )
// }
// function Component4(){
//     return(
//         <>
//         <Component5/>
//         </>
//     )
// }
// function Component5(){
//     const user=useContext(UserContext);
//     return(
//         <>
//         <h1>Component5</h1>
//         <h2>{`Hello ${user} again`}</h2>
//         </>
//     )
// }
// export default Component1;




//fetch API 


// import React,{useEffect,useState} from "react";
// function Fapi (){
//     const[user,setUser]=useState([]);
//     const fetchData=()=>{
//         return fetch("https://jsonplaceholder.typicode.com/users")
//         .then((Response)=>Response.json())
//         .then((data)=>setUser(data));


//     }
//     useEffect(()=>{
//         fetchData();
//     },[])
//     return(
//         <div>
//             <h1 style={{color:'red',paddingLeft:'22px'}}>fetch API</h1>
//             <h3 style={{color:'green',paddingLeft:'22px'}}>There are the name of person</h3>
//             <ol style={{color:'blue'}}>
//                 {user && user.length>0 && user.map((userObj)=>(
//                     <li key={userObj.id}>{userObj.name}</li>
//                 ))}
//             </ol>
//         </div>
//     )
// } 
//     export default Fapi;


// import React, { useEffect } from 'react'
// import { useState,} from "react"

// function Effct() {

//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         <div>Hello</div>
//     },);
//     return (
//         <div onChange={(e)=>{index.target.value}}>
//             <h1>Count:{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Count</button>
//             <button >Delete</button>


//         </div>
//     )
// }

// export default Effct

// import './index.css';

// function Grid() {
//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h1>Learn Grid</h1>

//             {/* use columns with 1fr and rows with size */}

//             <div className='grid1'>
//                 <div className='grid-child1 b1'>Grid1</div>
//                 <div className='grid-child1 b2' >Grid2</div>
//                 <div className='grid-child1 b3'>Grid3</div>
//                 <div className='grid-child1 b4'>Grid4</div>
//                 <div className='grid-child1 b5'>Grid5</div>
//                 <div className='grid-child1 b6'>Grid6</div>
//                 <div className='grid-child1 b7'>Grid7</div>
//                 <div className='grid-child1 b8'>Grid8</div>
//             </div><hr />

//             {/* use comlumns with auto and rows with size */}

//             <div className='grid2'>
//                 <div className='grid-child2'>Grid1</div>
//                 <div className='grid-child2'>Grid2</div>
//                 <div className='grid-child2'>Grid3</div>
//                 <div className='grid-child2'>Grid4</div>
//                 <div className='grid-child2'>Grid5</div>
//                 <div className='grid-child2'>Grid6</div>
//             </div><hr />
//             <div className='grid3'>
//                 <div className='grid-child3 box1'>
//                     <div>
//                         <h1>Menu</h1>
//                         <div>Now you can allow the grid to your menu</div>
//                     </div>
//                 </div>
//                 <div className='grid-child3 box2'>
//                     <div>
//                         <div>
//                             <h1>Nevigation Bar</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='grid-child3 box3'>
//                     <div>
//                         <div>
//                             <h1>Form</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='grid-child3 box4'>
//                     <div>
//                         <div>
//                             <h1>Picture</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='grid-child3 box5'>
//                     <div>
//                         <div>
//                             <h1>Picture </h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='grid-child3 box6'>
//                     <div>
//                         <div>
//                             <h1>Picture</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Grid;





// import './index.css'
// function Grid() {
//     return (
//         <div>
//             <div>
//                 <h1>Learn The Grid</h1>
//                 <div className='Grid'>
//                     <div className='grid grid1'>Grid1</div>
//                     <div className='grid grid2'>Grid2</div>
//                     <div className='grid grid3'>Grid3</div>
//                     <div className='grid grid4'>Grid4</div>
//                     <div className='grid grid5'>Grid5</div>
//                     <div className='grid grid6'>Grid6</div>
//                     <div className='grid grid7'>Grid7</div>
//                 </div>

//             </div>
//         </div>
//     )
// }
// export default Grid;


//Media query







// import './index.css'

// function MQ(){
//     return(
//         <div>
//             <h1>Media query</h1>
//             <div className='container'>
//                 <div className='md md1'>1</div>
//                 <div className='md md2'>2</div>
//                 <div className='md md3'>3</div>
//                 <div className='md md4'>4</div>
//                 <div className='md md5'>5</div>
//                 <div className='md md6'>6</div>
//                 <div className='md md6'>7</div>
//                 <div className='md md6'>8</div>
//             </div>
//         </div>
//     )
// }
// export default MQ;



//Flexbox


// import'./index.css'

// function Flexbox(){
//     return(
//         <div>
//             <h1>Llexbox</h1>
//             <div className='container'>
//                 <div className='flex flex1'>flex1</div>
//                 <div className='flex flex2'>flex2</div>
//                 <div className='flex flex3'>flex3</div>
//                 <div className='flex flex4'>flex4</div>
//                 <div className='flex flex5'>flex5</div>
//                 <div className='flex flex6'>flex6</div>
//                 <div className='flex flex7'>flex7</div>
//                 <div className='flex flex8'>flex9</div>
//             </div>
//         </div>
//     )
// }
// export default Flexbox;



//flexbox1


import './index.css'

function Flexbox(){
    return(
        <div>
            <h1>flexbox</h1>
            <div className='container'>
                <div className='flex flex1'>flex1</div>
                <div className='flex flex2'>flex2</div>
                <div className='flex flex3'>flex3</div>
                <div className='flex flex4'>flex4</div>
                <div className='flex flex5'>flex5</div>
                <div className='flex flex6'>flex6</div>
                <div className='flex flex7'>flex7</div>
                <div className='flex flex8'>flex8</div>
            </div>
        </div>
    )
}
export default Flexbox;