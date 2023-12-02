function Portfolio() {
   return <>
      <section className="portfolio" id="portfolio">
         <div className="container">
            <h2 className="title portfolio__title">
               Портфолио
            </h2>
            <h1 className="subtitle portfolio__subtitle">
               Мои работы
            </h1>
            <span className="divider portfolio__divider"></span>
            <div className="portfolio__items">
               <a href="http://ILFIR803.github.io/ubber/" target="_blank" className="portfolio__item"><img src="./img/portfolio/uber.jpg" alt="uber" /></a>
               <a href="http://ILFIR803.github.io/puls-public/" target="_blank" className="portfolio__item"><img src="./img/portfolio/pulse.jpg" alt="uber" /></a>
               <a href="http://ILFIR803.github.io/React_Movies/" target="_blank" className="portfolio__item"><img src="./img/portfolio/react.jpg" alt="uber" /></a>
               <a href="#" className="portfolio__item vertical"><img src="./img/portfolio/plans.jpg" alt="uber" /></a>
               <a href="http://ILFIR803.github.io/react-foods/" target="_blank" className="portfolio__item"><img src="./img/portfolio/react_food.jpg" alt="uber" /></a>
               <a href="http://ILFIR803.github.io/react-shop/" target="_blank" className="portfolio__item horizont"><img src="./img/portfolio/react_shop.jpg" alt="uber" /></a>

            </div>
         </div>
      </section>
   </>

}

export { Portfolio }