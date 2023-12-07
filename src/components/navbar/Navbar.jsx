function Navbar(props) {

   const { active, setActive } = props;
   

   return <>
      <div className={active ? 'menu menu-active' : 'menu'} onClick={() => setActive(false)}>

         
         <div className="menu__nav" onClick={e => e.stopPropagation()}>
            <div className="menu__close" onClick={() => setActive(false)}>&#10006;</div>
            <nav>
               <ul className="menu__list">
                  <li className="menu__item menu__item-active" onClick={() => setActive(false)}><a href="#">Главная</a></li>
                  <li className="menu__item" onClick={() => setActive(false)}><a href="#content">Про меня</a></li>
                  <li className="menu__item" onClick={() => setActive(false)}><a href="#portfolio">Портфолио</a></li>
                  <li className="menu__item" onClick={() => setActive(false)}><a href="#contact">Контакты</a></li>
               </ul>
            </nav>
            <div className="menu__social">
               <a href="https://github.com/ILFIR803" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px" height="25px">
                     <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" /></svg>
               </a>
               <a href="https://t.me/user_telega89" target="_blank">
                  <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z" fill="black" />
                  </svg>
               </a>
               <a href="https://instagram.com/ilfir_galiakhmetov?igshid=M2RkZGJiMzhjOQ%3D%3D&utm_source=qr" target="_blank">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M-6.01032e-07 6.25L-2.73196e-07 13.75C-1.22337e-07 17.2012 2.79875 20 6.25 20L13.75 20C17.2013 20 20 17.2012 20 13.75L20 6.25C20 2.79875 17.2012 -7.51891e-07 13.75 -6.01032e-07L6.25 -2.73196e-07C2.79875 -1.22337e-07 -7.51891e-07 2.79875 -6.01032e-07 6.25ZM13.75 1.875C16.1625 1.875 18.125 3.8375 18.125 6.25L18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125L6.25 18.125C3.8375 18.125 1.875 16.1625 1.875 13.75L1.875 6.25C1.875 3.8375 3.8375 1.875 6.25 1.875L13.75 1.875Z" fill="black" />
                     <path d="M5 10C5 12.7612 7.23875 15 10 15C12.7613 15 15 12.7612 15 10C15 7.23875 12.7612 5 10 5C7.23875 5 5 7.23875 5 10ZM13.125 10C13.125 11.7225 11.7225 13.125 10 13.125C8.27625 13.125 6.875 11.7225 6.875 10C6.875 8.2775 8.27625 6.875 10 6.875C11.7225 6.875 13.125 8.2775 13.125 10Z" fill="black" />
                     <path d="M5.29123 4.625C5.29123 4.25704 4.99295 3.95875 4.62499 3.95875C4.25703 3.95875 3.95874 4.25704 3.95874 4.625C3.95874 4.99296 4.25703 5.29125 4.62499 5.29125C4.99295 5.29125 5.29123 4.99296 5.29123 4.625Z" fill="black" />
                  </svg>
               </a>
               <a href="https://vk.com/i_galiakhmetov" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 23.396484 15.992188 C 22.338993 15.989762 21.396053 16.048857 20.552734 16.462891 A 1.0001 1.0001 0 0 0 20.550781 16.464844 C 20.139648 16.667406 19.849872 16.924692 19.619141 17.230469 C 19.503775 17.383357 19.385584 17.520601 19.322266 17.869141 C 19.290606 18.04341 19.272826 18.325815 19.455078 18.630859 C 19.637334 18.935904 20.003807 19.109362 20.238281 19.140625 C 20.401166 19.162305 20.768822 19.318796 20.802734 19.365234 A 1.0001 1.0001 0 0 0 20.804688 19.369141 C 20.804932 19.369474 20.947263 19.741144 20.988281 20.072266 C 21.029301 20.403387 21.027344 20.671875 21.027344 20.671875 A 1.0001 1.0001 0 0 0 21.029297 20.751953 C 21.029297 20.751953 21.087228 21.619511 21.048828 22.515625 C 21.033528 22.872778 20.987338 23.190517 20.939453 23.474609 C 20.583342 23.081448 20.058613 22.36946 19.300781 21.056641 C 18.460091 19.599445 17.791016 18.292969 17.791016 18.292969 C 17.755878 18.179145 17.631609 17.825025 17.146484 17.46875 C 16.616155 17.077877 16.103516 17.019531 16.103516 17.019531 A 1.0001 1.0001 0 0 0 15.908203 17 L 11.966797 17.001953 C 11.966797 17.001953 11.73048 16.988284 11.447266 17.027344 C 11.164051 17.066404 10.737588 17.098194 10.326172 17.585938 A 1.0001 1.0001 0 0 0 10.324219 17.587891 C 9.9565329 18.027228 9.9787721 18.512818 10.023438 18.787109 C 10.068098 19.061401 10.167969 19.269531 10.167969 19.269531 A 1.0001 1.0001 0 0 0 10.173828 19.28125 C 10.173828 19.28125 13.397717 26.059497 17.041016 30.050781 C 19.6867 32.948797 22.40224 32.998047 24.642578 32.998047 L 26.314453 32.998047 C 26.74128 32.998047 27.127368 32.981367 27.554688 32.732422 C 27.982005 32.483474 28.269531 31.87742 28.269531 31.457031 C 28.269531 31.016509 28.335301 30.670207 28.416016 30.492188 C 28.472777 30.36699 28.517715 30.321903 28.587891 30.285156 C 28.602729 30.294567 28.593147 30.289094 28.634766 30.318359 C 28.801234 30.435424 29.076122 30.702288 29.375 31.035156 C 29.972755 31.700892 30.651262 32.614044 31.5625 33.240234 C 32.215313 33.689229 32.831963 33.888608 33.300781 33.960938 C 33.594505 34.006254 33.82263 33.997525 33.984375 33.984375 L 37.71875 34 A 1.0001 1.0001 0 0 0 37.785156 33.998047 C 37.785156 33.998047 38.428614 34.005547 39.097656 33.605469 C 39.432178 33.405406 39.82672 33.026107 39.955078 32.472656 C 40.083436 31.919206 39.922118 31.34574 39.607422 30.822266 A 1.0001 1.0001 0 0 0 39.607422 30.820312 C 39.662072 30.910912 39.557942 30.724742 39.451172 30.550781 C 39.344399 30.376818 39.18937 30.142398 38.966797 29.851562 C 38.521651 29.269893 37.808682 28.45591 36.65625 27.382812 A 1.0001 1.0001 0 0 0 36.654297 27.382812 C 36.06897 26.838224 35.673719 26.452649 35.511719 26.238281 C 35.349719 26.023913 35.402852 26.136522 35.414062 26.082031 C 35.436492 25.97305 36.138984 24.959653 37.568359 23.050781 C 38.437249 21.888888 39.04704 21.016572 39.449219 20.291016 C 39.851397 19.565459 40.141394 18.937091 39.939453 18.167969 A 1.0001 1.0001 0 0 0 39.9375 18.164062 C 39.847853 17.826442 39.603007 17.515245 39.351562 17.345703 C 39.100119 17.176162 38.861732 17.109853 38.648438 17.068359 C 38.221848 16.985372 37.849591 17 37.503906 17 C 36.779144 17 33.563492 17.025391 33.298828 17.025391 C 32.986098 17.025391 32.468982 17.167635 32.240234 17.304688 C 31.665127 17.650771 31.5 18.105469 31.5 18.105469 A 1.0001 1.0001 0 0 0 31.470703 18.164062 C 31.470703 18.164062 30.807378 19.634988 29.953125 21.087891 C 29.08775 22.561617 28.448441 23.264508 28.0625 23.589844 C 28.05188 23.531984 28.053705 23.578967 28.046875 23.498047 C 28.012285 23.086503 28.050781 22.517823 28.050781 21.962891 C 28.050781 20.468376 28.177461 19.422397 28.109375 18.498047 C 28.075335 18.035872 27.989721 17.559283 27.685547 17.121094 C 27.381373 16.682905 26.875241 16.398229 26.375 16.277344 C 26.074849 16.204944 25.732712 16.016631 24.494141 16.003906 A 1.0001 1.0001 0 0 0 24.492188 16.003906 C 24.113419 16.000121 23.748982 15.992996 23.396484 15.992188 z M 24.472656 18.003906 C 25.568624 18.015166 25.295621 18.075496 25.904297 18.222656 C 26.093056 18.268266 26.04733 18.268009 26.042969 18.261719 C 26.038569 18.255419 26.094024 18.358529 26.115234 18.646484 C 26.157654 19.222384 26.050781 20.367405 26.050781 21.962891 C 26.050781 22.397958 25.998284 23.01881 26.052734 23.666016 C 26.107134 24.313221 26.267657 25.143803 27.041016 25.644531 C 27.407604 25.882157 27.833256 25.897136 28.197266 25.806641 C 28.561275 25.716141 28.891511 25.527659 29.238281 25.25 C 29.931821 24.694683 30.705387 23.757462 31.677734 22.101562 C 32.586549 20.555862 33.247595 19.08397 33.269531 19.035156 C 33.273824 19.031713 33.278168 19.02935 33.283203 19.025391 C 33.295692 19.025528 33.282755 19.025391 33.298828 19.025391 C 33.672165 19.025391 36.828668 19 37.503906 19 C 37.661534 19 37.718912 19.009502 37.84375 19.013672 C 37.80982 19.126937 37.84755 19.054692 37.699219 19.322266 C 37.388147 19.883459 36.814907 20.717455 35.966797 21.851562 C 34.573172 23.712692 33.7094 24.441966 33.455078 25.677734 C 33.327917 26.295619 33.566234 26.980509 33.916016 27.443359 C 34.265797 27.90621 34.707295 28.302745 35.292969 28.847656 C 36.377537 29.85756 37.013803 30.59128 37.378906 31.068359 C 37.561458 31.306899 37.676539 31.479197 37.748047 31.595703 C 37.819557 31.712209 37.801887 31.699918 37.894531 31.853516 C 37.955521 31.95573 37.933049 31.893348 37.943359 31.923828 C 37.823459 31.957628 37.678197 31.99832 37.669922 32 L 33.992188 31.984375 A 1.0001 1.0001 0 0 0 33.794922 32.003906 C 33.794922 32.003906 33.804122 32.014725 33.607422 31.984375 C 33.410689 31.954025 33.097805 31.868892 32.695312 31.591797 C 32.20955 31.257987 31.529526 30.441233 30.863281 29.699219 C 30.530159 29.328212 30.197938 28.971919 29.785156 28.681641 C 29.372375 28.391362 28.754711 28.118405 28.087891 28.328125 C 27.395667 28.545486 26.856849 29.085706 26.59375 29.666016 C 26.397906 30.097982 26.382045 30.54919 26.351562 30.998047 C 26.318372 31.000547 26.356563 30.998047 26.314453 30.998047 L 24.642578 30.998047 C 22.370916 30.998047 20.757894 31.155156 18.517578 28.701172 C 15.504086 25.39985 12.743119 19.907011 12.292969 19.001953 L 15.761719 19 C 15.822689 19.0234 15.953174 19.072395 15.960938 19.078125 A 1.0001 1.0001 0 0 0 15.964844 19.082031 C 15.83805 18.989351 15.970703 19.119141 15.970703 19.119141 A 1.0001 1.0001 0 0 0 16.011719 19.207031 C 16.011719 19.207031 16.699049 20.549836 17.568359 22.056641 C 18.421075 23.533829 19.042453 24.456619 19.642578 25.066406 C 19.942641 25.3713 20.245541 25.615827 20.650391 25.753906 C 21.05524 25.891985 21.578005 25.841335 21.929688 25.648438 C 22.648115 25.255167 22.744641 24.675101 22.861328 24.167969 C 22.978179 23.660124 23.024698 23.119131 23.046875 22.601562 C 23.089915 21.596958 23.029041 20.727518 23.025391 20.673828 C 23.025613 20.654998 23.030186 20.292437 22.972656 19.828125 C 22.913756 19.352676 22.848067 18.771361 22.417969 18.185547 L 22.416016 18.183594 C 22.413016 18.179494 22.40925 18.179781 22.40625 18.175781 C 22.974999 18.094211 23.461654 17.993803 24.472656 18.003906 z M 33.294922 18.984375 L 33.28125 19.015625 C 33.279135 19.016836 33.27981 19.014183 33.277344 19.015625 C 33.281572 19.007565 33.294922 18.984375 33.294922 18.984375 z" /></svg>
                     </a>

            </div>
         </div>

      </div>
   </>
};

export { Navbar };