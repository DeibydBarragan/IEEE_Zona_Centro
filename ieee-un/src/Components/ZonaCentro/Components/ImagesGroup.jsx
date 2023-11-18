import Row from "react-bootstrap/Row";
import React from "react";

export default function ImagesGroup({ images, alt, reverse}) {
  return Array.from({ length: Math.ceil(images.length/5) }, (_, index) => index).map((row) => (
    <Row className={`gap-2 justify-content-center mt-4 mb-2 ${((!reverse && (row !== 0 && row%2 !== 0)) || (reverse && (row === 0 || row%2 === 0))) && "flex-row-reverse" }`}>

      {Array.from({length: 3}, (_, index) => index).map((col) => (
        <div className={`col col-${col === 0 ? "5" : "3"}`}>
          {
            col === 0 && row * 5 < images.length ?
              <img src={images[row * 5]} alt={alt}/>
            : <>
              {row * 5 + 2 * col - 1 < images.length && <img src={images[row * 5 + 2 * col - 1]} alt={alt}/>}
              {row * 5 + 2 * col < images.length && <img src={images[row * 5 + 2 * col]} alt={alt}/>}
            </>
          }
        </div>
      ))}
    </Row>
  ))
}