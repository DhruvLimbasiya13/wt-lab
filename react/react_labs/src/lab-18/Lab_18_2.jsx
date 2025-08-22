import React from "react";

function Facluty() {
    const facluties = [ {name:'padubhai',  subject: 'ds'}, {name:'zalabhai' , subject:'maths'} , {name:'punitdon' , subject:'maths'}]
return (
    <>
    <ul>
        {facluties.map((facluties,index)=>{
            return(
                <>
                <li key={index}>{facluties.name} teaches {facluties.subject}</li>
                </>
            )
        })}
    </ul>
    </>
    );
}

function Lab_18_2() {
    return (
    <div>
        <Facluty/>
    </div>
    );
}

export default Lab_18_2
