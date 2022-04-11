import React, {useState} from 'react'


export default function TextForm(props) {

  const [text, setText] = useState('');
//  text="New text"; Wrong way to change the state  

const func = ()=>{
   
  let newText= text.toUpperCase();
   setText(newText);
   props.func6("Converted to UpperCase", "Succes");
  }
  const func2 = ()=>{
    let newText= text.toLowerCase();
     setText(newText);
     props.func6("Converted to LowerCase", "Succes");
     
    }
    const func3 = ()=>{
      let newText= "";
       setText(newText);
       props.func6("Clear All Text", "Succes");
          

      }

      const func5 = ()=>{  
         let newText =document.getElementById("myBox")   
          newText.select();    
           navigator.clipboard.writeText(newText.value);   
           props.func6("Coppied All Text", "Succes");
          }

const func4 = ()=>{
   let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.func6("Removed Extra Spaces", "Succes");
}
  const handleOnChange = (event)=>{
     
    setText(event.target.value);
  
  }



  return (
     <> 
      <div className='container mb-5' >
            <h2 className={`text-${props.heading2}`}>{props.heading}</h2>
              
             <div className="mb-3" >
              <textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox" 
              style={{backgroundColor:props.Mode==='light'?'beige':'beige'}} rows="10"  ></textarea>
             </div>
          <button type="button" className="btn btn-danger" onClick={func}>Convert to UpperCase</button>
          <button type="button" className="btn btn-dark mx-3" onClick={func2}>Convert to LowerCase</button>
          <button type="button" className="btn btn-success mx-3" onClick={func3}>Clear All Text</button>
          <button type="button" className="btn btn-warning" onClick={func4}>Remove Extra Spaces</button>
          <button type="button" className="btn btn-secondary mx-3" onClick={func5}>Copy  All Text</button>
    </div>
    
    <div className="container2 " style={{backgroundColor: props.Mode==='light'?'beige':'beige'}}>
   
     <h2 style={{paddingTop:10}} >Text Summary </h2>
     <p >{props.words} Words and  {text.length} Characters</p>
     <p>{0.004*text.split(" ").length} Minutes Read</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
    

</>

  )
}
