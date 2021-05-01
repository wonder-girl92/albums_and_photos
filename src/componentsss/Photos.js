import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Photo from "./Photo";
import {setFilterText} from "../reduxxx/actions";
import {useParams} from "react-router-dom";

function Photos(props) {
    const photos = useSelector(state => state.photos.photos);

    const id = parseInt(useParams().id);

    const dispatch = useDispatch();

    const filter = useSelector(state => state.photos.filter)

    const filteredPhotos = photos
        .filter(photo => {
            if (photo.albumId === id && photo.title.indexOf(filter) > -1) {
                return true;
            }
        })

    const handleChangeFilter = (event) => {
        dispatch(setFilterText(event.target.value))
    }

    if (isNaN(id)) {
        return (
            <div className="no-album-selected">
                ⬅ВЫБЕРИТЕ НУЖНЫЙ АЛЬБОМ
            </div>
        )
    }

    return (
        <div className="photos">
            <div className="filter">
                <input type="text"
                       placeholder="Введите название фотографии..."
                       value={filter}
                       onChange={handleChangeFilter}
                />
            </div>
            <ul>
                {filteredPhotos.map(photo => {
                    return <Photo photo={photo} key={photo.id}/>
                })
                }
            </ul>
        </div>
    )
}

export default Photos