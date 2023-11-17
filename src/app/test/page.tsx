'use client';
import {useState} from "react";
import {ButtonNormal} from "@/app/components/button";

export default function Home(){
    const [state, setState] = useState(true);
    return (
        <div>
            {state
                ? <h1>스위치 켜짐</h1>
                : <h1>스위키 꺼짐</h1>
            }
            <ButtonNormal onClick={() => {setState(prev => !prev)}}/>
            <h1>test 페이지 입니다.</h1>
        </div>
    )
}