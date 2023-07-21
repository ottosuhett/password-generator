import styles from "./Button.module.scss"

function ButtonGen(props){
    return(
        <>  
            <button className={styles.btn} onClick={props.onClick}>{props.text}</button>
        </>
    )
}
export default ButtonGen;