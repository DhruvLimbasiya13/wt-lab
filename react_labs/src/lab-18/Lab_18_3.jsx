import React from "react";

function Students() {
    const Student = [ {name:'dhruv',  subject: 'ds'}, {name:'rucha' , subject:'maths'} , {name:'archana' , subject:'Dbms'} , {name:'labdhi' , subject:'Wt'}]
return (
    <>
    <ul>
        {Student.map((Student,index)=>{
            return(
                <>
                <li key={index}>{Student.name} studies {Student.subject}</li>
                </>
            )
        })}
    </ul>
    </>
    );
}

function Lab_18_3() {
    return (
    <div>
        <Students/>
    </div>
    );
}

export default Lab_18_3
