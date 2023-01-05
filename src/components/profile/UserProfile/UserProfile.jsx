import React from 'react';
// style
import style from './UserProfile.module.scss';


const UserProfile = (props) => {
        return (
        <div className={style.profile__box}>
            {props.userProfile.map((el)=>(
                <div key={el.id} className={style.profile} >
                    <img src={el.ava} alt="" />
                    <div className={style.profile__inf}>
                        <h3>{el.name}</h3>
                        <h5>{el.status}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserProfile;