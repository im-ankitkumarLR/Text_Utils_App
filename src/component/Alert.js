import React from 'react'

export default function Alert(props) {



const capatilization =(word)=>{

   const lower= word.toLowerCase();

   return lower.charAt(0).toUpperCase() + lower.slice(1);


}


  return (
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">

  <strong>{capatilization(props.alert.typ)} </strong>:{props.alert.msg}
</div>
  )
}
