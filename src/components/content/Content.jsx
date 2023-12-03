

function Content() {
   return <>
      <section className="content" id="content">
         <div className="container">
            <div className="content__wrap">
               <div className="content__foto">
                  <img src='./img/album/foto1.jpg' alt="foto" />
               </div>
               <div className="content__wrapper">
                  <h1 className="content__title title">Про меня</h1>
                  <h2 className="content__subtitel subtitle">Меня зовут Ильфир</h2>
                  <span className="divider"></span>
                  <p className="content__text">
                     Привет. Меня зовут Ильфир Галиахметов и я живу в городе Ноябрьск расположенный в Ямало-Ненецком автономном округе.
                     К профессии программиста шёл долго,
                     проходя различные курсы, изучая литературу и просмотром обучающих роликов на различных интернет ресурсах. 
                     В настоящее время занимаюсь фрилансем и хочу взять на себя больше работы и повысить свои навыки веб-разработчика в IT-компании.<br />
                     p.s. кроме программирования занимаюсь кайтсерфингом.
                  </p>
               </div>
            </div>
         </div>
      </section>
   </>
}

export { Content }