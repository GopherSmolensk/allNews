import s from "./Image.module.css"

const Image = ({ image }) => {
    return ( 
            <div className={s.wrapper}>
                {/* Проверяем есть ли собственно картинка */}
                {image ? <img src={image} alt='news' className={s.image} /> : null}
            </div>
    )    
}   

export default Image