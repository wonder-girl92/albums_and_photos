import React from 'react';

function Photo(props) {
    return (
        <li>
            <div className="just-photo"><img src={props.photo.thumbnailUrl}/></div>
            <div className="photo-title"> {props.photo.title} </div>
        </li>
    );
}

export default Photo