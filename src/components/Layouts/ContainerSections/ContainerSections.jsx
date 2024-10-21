import React from 'react'
import "../../Styles/HomeStyle/containerSection.css";

export const ContainerSection = ({children}) => {
  return (
    /* <section>
      <h1>{text}</h1>
    </section> */

    <>
    <div className="containerDivHome"> {children}
        <div className="firtsDiv">
          <img src="../../../assets/images/PhotoMe.jpeg" alt="Foto de perfil" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            odit ducimus sed, saepe architecto a modi tenetur quaerat iusto
            nemo. Doloremque totam distinctio delectus? Tenetur magni voluptas
            ea error fugiat? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eos mollitia deserunt consequatur est accusantium vero cumque
            impedit adipisci aspernatur? Ex velit qui ratione hic, incidunt
            itaque quo assumenda at tenetur?
          </p>
        </div>

        <div className="secondDiv">
          <h2>Mi familia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, dolorum quam qui, magnam eveniet ipsam saepe suscipit
            doloremque odit excepturi rerum consequatur nisi eaque inventore
            nihil cumque perspiciatis autem. Maiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Animi saepe, illo culpa dolor sequi
            tenetur at tempore asperiores nam exercitationem natus maxime eaque
            ad dolores voluptatibus ipsum eos quisquam? Tempore!
          </p>
        </div>
      </div>

      <div className="treeDiv">
        <h2>Mis Estudios</h2>
        <div className="containerSection">
          <section className="containerStudy">
            <article>
              <h3>Tecnico en Sistemas</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit praesentium dolorum magni doloremque voluptatem
                dolorem dicta soluta similique illum!
              </p>
            </article>

            <article>
              <h3>Reparacion de Celulares</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident magnam quas, placeat eveniet recusandae sunt dolorem
              </p>
            </article>

            <article>
              <h3>Curso Desarrollo Web</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate vero quis rerum minima aspernatur! Nostrum placeat
                tempora veniam?
              </p>
            </article>
          </section>
          
          <img src="#" alt="foto" />
        </div>
      </div>
    </>
  )
}
