"use client"
import {useState} from "react";

interface DataType{
    [index: string] : any
}

export default function Home(){
    const [data, setData] = useState<DataType>({});

    async function getData(){
        try{
            await fetch('/api')
                .then(res => res.json())
                .then(res => setData(prev => ({...prev, ...res})))
        }catch(error){
            setData(prev => ({...prev, error : error}))
        }
    }

    return(
        <div>
            <button id = "myButton" onClick={getData}>button</button>
            { Object.keys(data).map(item => (
                    <p>{item}</p>
                ))
            }
        </div>
    )
}