import { formateDate } from "../../helpers/formateDate"

const Header = () => {
    return ( 
        <header>
            <h1>AllNEWS</h1>
            <p>{formateDate(new Date())}</p>
        </header>
    )    
}   

export default Header