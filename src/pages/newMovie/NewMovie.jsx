import React from 'react'
import './newMovie.scss'
import {useDispatch} from 'react-redux'
import { fetchCreatorMovieRequest } from '../../store/movie/movieActionCreator'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../../firebase'




const NewMovie = () => {
 const dispatch = useDispatch()
    const [img, setImg] = React.useState(null)
    const [imgSm, setImgSm] = React.useState(null)
    const [imgTitle, setImgTitle] = React.useState(null)
    const [movie, setMovie] = React.useState(null)
    const [trailer, setTrailer] = React.useState(null)
    const [video, setVideo] = React.useState(null)
    const [uploaded, setUploaded] = React.useState(0)

    const onHandleChange = (e) => {
        const value = e.currentTarget.value
        setMovie({ ...movie, [e.target.name]: value })
    }
    
    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const storageRef = ref(storage, `/items/${fileName}` + item.file.name);
            const uploadTask = uploadBytesResumable(storageRef, item.file);
            
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setMovie((prev) => {
                            return { ...prev, [item.label]: url };
                        });
                        setUploaded((prev) => prev + 1);
                    });
                }
            );
        });
    };
    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: img, label: "img" },
            { file: imgTitle, label: "imgTitle" },
            { file: imgSm, label: "imgSm" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchCreatorMovieRequest(movie))

    }
   
console.log(movie)
    return (
        <div className='newProduct'>
            <h1>Добавить фильм</h1>
            <form className='addProductForm'>
                <div className="addProductItem">
                    <label>Изоброжение</label>
                    <input type="file"
                        id='img'
                        name='img'
                        onChange={(e) => setImg(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Изоброжение с названием</label>
                    <input type="file"
                        id='imgTitle'
                        name='imgTitle'
                        onChange={(e) => setImgTitle(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Уменьшеное изоброжение</label>
                    <input type="file"
                        id='imgSm'
                        name='imgSm'
                        onChange={(e) => setImgSm(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Название</label>
                    <input type="text"
                        
                        name='title'
                        onChange={onHandleChange} />
                </div>
                <div className="addProductItem">
                    <label>Описание</label>
                    <input type="text"
                        
                        name='desc'
                        onChange={onHandleChange} />
                </div>
                <div className="addProductItem">
                    <label>Год</label>
                    <input type="text"
                       
                        name='year'
                        onChange={onHandleChange} />
                </div>

                <div className="addProductItem">
                    <label>Жанр</label>
                    <input type="text"
                        id='genre'
                        name='genre'
                        onChange={onHandleChange} />
                </div>
                <div className="addProductItem">
                    <label>Время просмотра</label>
                    <input 
                    type="text"
                       
                        name='duration'
                        onChange={onHandleChange} />
                </div>
                <div className="addProductItem">
                    <label>Есть серии?</label>
                    <select name="isSeries" id="isSeries" onChange={onHandleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Трейлер</label>
                    <input 
                    type="file"
                        name='trailer'
                        onChange={(e) => setTrailer(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Видео</label>
                    <input 
                    type="file"
                        
                        name='video'
                        onChange={(e) => setVideo(e.target.files[0])} />
                </div>

                {uploaded === 5
                    ? (<button onClick={handleSubmit}>Создать</button>)
                    : (<button onClick={handleUpload}>Загрузить</button>)}
            </form>
        </div>
    )
}

export default NewMovie
