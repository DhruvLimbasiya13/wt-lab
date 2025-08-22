import React from 'react'

function MapDemo(){
    const arr=['apple','banana','kiwi']
    return(
        <>
        {arr.map((fruits,index)=>{
            return(
                <>
                <li key={index}>{fruits}</li>
                </>
            )
        })}
        </>
    )
}

export default function Lab_18_1() {
  return (
    <div>
        <ul>
            <MapDemo/>
        </ul>
    </div>
  )
}
