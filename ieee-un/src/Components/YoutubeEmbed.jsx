import React from 'react'

import "../Styles/youtubeEmbed.sass";

const YoutubeEmbed = (props) => {

  return (
    <div>
        <h3>YoutubeEmbed</h3>

        <h3>conocenos mas en nuestras clases </h3>
        <div className="video-responsive">
            <iframe
            src={`https://www.youtube.com/embed/${props.embedId}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            />
        </div> 
    </div>
  )
}

export default YoutubeEmbed