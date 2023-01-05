
import { NavLink } from 'react-router-dom';
import style from './dialogs.module.scss';


const Dialogs = (props) =>{
    return (
        <div className={style.dialogs__item}>
            {props.dialogs.map((item, key) => (
                <NavLink key={key} to = {'/dialogs/' + item.id} className = {style.link}>
                    {item.name}
                </NavLink>
            ))}
        </div>
    )
}


export default Dialogs;