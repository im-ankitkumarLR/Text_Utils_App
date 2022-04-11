  
// import { useState } from 'react';
import './App.css';
// import AboutUs from './component/AboutUs';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm'; 
import React, {useState} from 'react';
import Alert from './component/Alert';
// import { Routes ,Route } from 'react-router-dom';


// import React from "react";

// abhi ke liye hata dete hai issse 
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";  




function App() {


  const [Mode ,setMode] =useState('light')    // whether dark mode is enable or not 
  // const [Mode1 ,setMode2] =useState('light')    // whether dark mode is enable or not 
  const [oldModeText ,newModeText] =useState('dark')    // whether dark mode is enable or not 
  const [headingtext ,newheading] =useState('dark')    // whether dark mode is enable or not 
   
  // const [Text1 ,newText] =useState('dark')

  // const [headtext,newhead] =useState("Enable Dark Mode")
  // const [textclr,newtextclr] =useState('dark')

  const [newalert, setalert] = useState(null)
  
   const func6=(message,type)=>{
     
    setalert(
      {
        msg: message,
        typ: type
      },
      setTimeout(() => {
        setalert(null);
        
      }, 1000) 
  
    )


   }

// _________________________________________________________________________________________


   const check3=()=>{
     
  
    if(Mode==='light'){
    setMode('warning');
    document.body.style.backgroundColor='#C0C0C0';
    newModeText('dark');
    // newtextclr('light')
  
    }else if(Mode==='dark'){
    setMode('warning');
    document.body.style.backgroundColor='#C0C0C0';
    newModeText('dark');

    // newtextclr('light')
  }else if(Mode==='secondory'){
    setMode('warning');
    document.body.style.backgroundColor='#C0C0C0';
    newModeText('dark');

  }else if(Mode==='success'){
    setMode('warning');
    document.body.style.backgroundColor='#C0C0C0';
    newModeText('dark');
     
    }else{
  
      setMode('light');
      document.body.style.backgroundColor='white';
      newModeText('dark');
    }
   }
// _____________________________________________________________________________________________-


   const check2=()=>{
     
  
    if(Mode==='light'){
    setMode('success');
    document.body.style.backgroundColor='#808000';
    newModeText('light');
    // newtextclr('light')
  
    }else if(Mode==='warning'){
    setMode('success');
    document.body.style.backgroundColor='#808000';
    newModeText('light');
    // newtextclr('light')
     
  }else if(Mode==='dark'){
    setMode('success');
    document.body.style.backgroundColor='#808000';
    newModeText('light');

  }else if(Mode==='secondary'){
    setMode('success');
    document.body.style.backgroundColor='#808000';
    newModeText('light');
  }else{
  
      setMode('light');
      document.body.style.backgroundColor='white';
      newModeText('dark');
    }
   }

   // _________________________________________________________________________________________


 const check1=()=>{
     
  
  if(Mode==='light'){
  setMode('secondary');
  document.body.style.backgroundColor='#FFD700';
  newModeText('light');
  // newtextclr('light')

  }else if(Mode==='dark'){
  setMode('secondary');
  document.body.style.backgroundColor='#9C9977';
  newModeText('light');
  // newtextclr('light')

}else if(Mode==='warning'){
  setMode('secondary');
  document.body.style.backgroundColor='#9C9977';
  newModeText('light');
  // newtextclr('light')
  
}else if(Mode==='success'){
  setMode('secondary');
  document.body.style.backgroundColor='#9C9977';
  newModeText('light');
  
  }else{

    setMode('light');
    document.body.style.backgroundColor='white';
    newModeText('dark');
  }





 }
// _______________________________________________________________________________________________

 const func =()=>{
    if(Mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#000000';
   newModeText('light');
  //  newhead("Enable Dark Mode");

  //  func6("Light mode has been Enabled ", "Succes");
  
   newheading('light')

  }else if(Mode==='warning'){
    setMode('dark');
    document.body.style.backgroundColor='#000000';
    newModeText('light');
    newheading('light')
  }else if(Mode==='secondary'){
    setMode('dark');
    document.body.style.backgroundColor='#000000';
    newModeText('light');
    newheading('light')
  }else if(Mode==='success'){
    setMode('dark');
    document.body.style.backgroundColor='#000000';
    newModeText('light');
    newheading('light')

 }else{
   setMode('light');
   document.body.style.backgroundColor='#FFFFFF';
   newModeText('dark');
   newheading('dark')

  //  newhead("Disable Dark Mode");

  //  func6("Dark mode has been Enabled ", "Succes");

   

 }
 }

const funcWord=(v)=>{
   
  var matches = v.match(/\S+/g) ;
  return matches?matches.length:0;


}

  return (
    <>
       {/* <Router> */}
 

 
    
      <Navbar title="TextUtils"    clr1={oldModeText} modeVar={Mode} something={func} clr={oldModeText}    something1={check1}   something2={check2} something3={check3}   />


       <Alert alert={newalert}/> 
      <div className="container my-3">

      {/* <TextForm heading="Enter the Text To Analyse" heading2={headingtext} func6={func6} words={funcWord} /> */}
      
      {/* <Switch> */}

        {/* /user  -----> Component-1 */}
        {/* /user/Home  -----> Component -2(Expectations) but Componet -1(it will render ) if we will not use exact */}

          {/* <Route exact path="/about">
            <AboutUs/>
          </Route>
           
       
          <Route exact path="/">
           </Route>
        </Switch>
        </Router> */}

          <TextForm heading="Enter the Text To Analyse" heading2={headingtext} func6={func6} words={funcWord} /> 
      </div>

      {/* <AboutUs/> */}

 
       </>
    );
}

export default App;
