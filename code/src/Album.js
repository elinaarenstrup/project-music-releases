import React from "react";
import "./album.css";
//console.log(Album);
//console.log(data.album.items[1]);

export const Album = props => {
  return (
    <div className="album-card">
      <div className="album-cover">
        <img className="album-img" src={props.image} alt="Album" />
        <div className="icons">
          <img className="icon-heart" src="icons/heart.svg" alt="Heart" />
          <img className="icon-play" src="icons/play.svg" alt="Play" />
          <img className="icon-dots" src="icons/dots.svg" alt="Dots" />
        </div>
      </div>

      <div className="album-info">
        <div className="album-title">
          <a href={props.albumURL}>{props.albumTitle}</a>
        </div>
      </div>

      <div className="album-info">
        <div className="album-title">
          <a href={props.albumURL}>{props.name}</a>
        </div>
        <div className="artist-name">
          <a href={props.albumURL}>{props.artists}</a>
        </div>
      </div>
    </div>
  );
};
