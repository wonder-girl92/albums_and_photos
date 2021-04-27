import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAlbum} from "../reduxxx/actions";

function Album(props) {
    const dispatch = useDispatch();

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id))
    }

    const selected = useSelector(state => state.albums.selectedAlbumId)

    return (
        <li onClick={handleSelectAlbum}
            className={selected === props.album.id ? "selected" : ''}>
            <div className="album-title">
                {props.album.title}
            </div>
        </li>
    )
}

export default Album