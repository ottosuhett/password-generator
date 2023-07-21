import styles from "./Card.module.scss"
import Button from "../Button/Button"
import { useState } from "react";


export default function Card(){
    const [ psw, setPsw ] = useState("")
    const [ copyText , setCopyText ] = useState("Copy")
    let newPsw = "";
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","§","%","/","_","?","$"];
    const getPassword = () => {
        while(newPsw == ""){
            for(let i=0; i< 8;i++){
                let index = Math.floor(Math.random()* letters.length)
                newPsw += letters[index]
            }
        }
        setPsw(newPsw)
        setCopyText("Copy")
        newPsw = ""
    }
    function copy(){
        try{
            setCopyText("Copied")
            window.navigator.clipboard.writeText(psw)
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className={styles.mainContainer}>
            <div className={styles.detailsContainer}>
                <h1 className={styles.text}>Password Generator</h1>
                <div className={styles.btnContainer}>
                    <Button text="Generate" onClick={getPassword}/>
                    <Button text={copyText} onClick={copy}/>
                </div>
                <div>
                    <p className={styles.psw}>{psw}</p>
                </div>
            </div>
        </div>
    )
}