import { formateDate } from "../../helpers/formateDate"
import s from "./Header.module.css"

const Header = () => {
    return ( 
            <header className={s.header}>
                <h1 className={s.title}>AllNEWS</h1>
                <p className={s.date}>{formateDate(new Date())}</p>
            </header>
    )    
}   

export default Header