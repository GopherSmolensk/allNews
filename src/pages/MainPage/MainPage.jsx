import NewsBanner from "../../components/NewsBanner/NewsBanner"
import s from "./MainPage.module.css"

const MainPage = () => {
    return ( 
            <main className={s.main}>
                <NewsBanner />
            </main>
    )    
}   

export default MainPage