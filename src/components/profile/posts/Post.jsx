import {React} from 'react';
import style from './Post.module.scss'



const Post = (props) => {
    
        return (
            <div>
                {props.posts.map(el => (
                <div key={el.id} className={style.post}>
                    <img className={style.img} src={el.ava} alt="" />
                    <span className={style.user}>{el.User}</span>
                    <span className={style.text}>{el.text}</span>
                </div>
                ))}
            </div>    
        )
}

export default Post;