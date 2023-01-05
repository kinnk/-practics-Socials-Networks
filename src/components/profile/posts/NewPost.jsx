import style from './NewPost.module.scss'

const NewPost = (props) => {
    let addPost = () =>{
        alert('he')
    }
    return (
        <div className={style.newPost}>
            <input className={style.newPost__text} type="text" placeholder='Что нового?'/>
            <div className={style.NewPost__btns}>
                <button onClick={addPost} className={style.newPost__btn}>Добавить запись</button>
                <button className={style.newPost__btn}>Удалить</button>
            </div>
        </div>
    )
}


export default NewPost;