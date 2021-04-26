import React from 'react';
import Album from "./Album";
import {useSelector} from "react-redux";


function Albums(props) {
    const albums = useSelector(state => state.albums);


    return (
        <div className="albums">
            <ol>
                {albums.map(album => {
                    return <Album album={album} key={album.id}/>
                })}
            </ol>
        </div>
    );
}

export default Albums