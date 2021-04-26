import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Photo from "./Photo";
import {setFilterText} from "../redux/actions";

function Photos(props) {
    const photos = useSelector(state => state.photos);
    const selectedAlbumId = useSelector(state => state.selectedAlbumId)

    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter)

    const filteredPhotos = photos
        .filter(photo => {
            if (photo.albumId === selectedAlbumId && photo.title.indexOf(filter) > -1) {
                return true;
            }
        })

    const handleChangeFilter = (event) => {
        dispatch(setFilterText(event.target.value))
    }

    if (selectedAlbumId === null) {
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