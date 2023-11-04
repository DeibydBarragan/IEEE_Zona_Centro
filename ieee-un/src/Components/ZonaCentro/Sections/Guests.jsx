import React from "react";
import "../../../Styles/invitadosZC.sass"

import img1 from "./../../../Assets/zonaCentro/image_1.png"
import img2 from "./../../../Assets/zonaCentro/image_2.png"
import img3 from "./../../../Assets/zonaCentro/image_3.png"
import img4 from "./../../../Assets/zonaCentro/image_4.png"

export default  function Guests() {
  return (
    <div id="guests">
      <h2>Invitados</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo odio optio excepturi, quos neque iusto, ipsum et sed eaque rerum ducimus deleniti laudantium reprehenderit inventore modi eius in quisquam?
      Quos, ullam est. Asperiores voluptas nemo a ipsa suscipit minima pariatur facere quasi, quaerat enim officiis aliquam accusantium excepturi dignissimos tempora quos facilis laboriosam. Laudantium quia impedit quidem nam quam.</p>
      <div className="guestsFotos">
        <article>
          <img src={img1} alt="" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article>
          <img src={img2} alt="" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article>
          <img src={img3} alt="" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article>
          <img src={img4} alt="" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
      </div>
    </div>
  );
}