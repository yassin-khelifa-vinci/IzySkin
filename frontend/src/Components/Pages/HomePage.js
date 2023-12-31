import image1 from '../../img/cover.jpg';
import image2 from '../../img/cover2.jpg';
import image3 from '../../img/cover3.jpg';

import Navigate from '../Router/Navigate';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
    const homePage = `
    <section class="grid-container-homepage"">
      <div class="grid-item-homepage">
          <img id="bg" src="${image1}" alt="homepage" class="homepage">
      </div>
      <div class="grid-item-homepage white-background">
          <div id ="homePage-info">
            <h1 class="display-5 fw-bold lh-1 mb-3">
              Établissez votre routine de peau personnalisée
            </h1>
            <p class="lead">
              Obtenez un plan quotidien conçu de manière unique en participant facilement à un questionnaire en 2 minutes.
              Notre équipe évaluera minutieusement vos préoccupations et élaborera le régime parfait spécialement pour vous.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-lg">Commencer</button>
            </div>
          </div>
      </div>
    </section>`;

  const main = document.querySelector('main');
  main.innerHTML = homePage;
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';

  changeBg();

  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    // console.log('On démarre le quizz!');
    Navigate('/quiz');
  });  
};

changeBg();
setInterval(changeBg, 3000);

function changeBg(){
  const images = [image1,image2, image3];

  const img = document.querySelector('#bg');
  if (img) {
    const bg = images[Math.floor(Math.random() * images.length)];
    img.src = bg;
  }
}

// Attendez que le document soit prêt
document.addEventListener("DOMContentLoaded", () => {
  // Réglez la position de défilement verticale sur 0
  window.scrollTo(0, 0);
});

if (sessionStorage.getItem('connected') === 'true') {
  const deco = document.getElementById('deco');
    deco.addEventListener('click', () => {
    sessionStorage.clear();
    Navbar();
    Navigate('/');
  });
}


export default HomePage;
