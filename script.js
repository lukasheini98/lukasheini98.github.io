const backend = document.querySelector('.backend');
const frontend = document.querySelector('.frontend');

const UPDATE = ({ x, y }) => {
  const BOUNDSb = backend.getBoundingClientRect()
  const posXb = x - BOUNDSb.x
  const posYb = y - BOUNDSb.y
  const ratioXb = posXb / BOUNDSb.width
  const ratioYb = posYb / BOUNDSb.height
  
  backend.style.setProperty('--ratio-x', ratioXb)
  backend.style.setProperty('--ratio-y', ratioYb)

  const BOUNDS = frontend.getBoundingClientRect()
  const posX = x - BOUNDS.x
  const posY = y - BOUNDS.y
  const ratioX = posX / BOUNDS.width
  const ratioY = posY / BOUNDS.height
  
  frontend.style.setProperty('--ratio-x-f', ratioX)
  frontend.style.setProperty('--ratio-y-f', ratioY)
}

const images = document.querySelectorAll('.link');
images.forEach((element) => {
  element.addEventListener("click", () => {
    if(element.id == "github"){
      document.getElementById("github_link").click();
    }
    else if(element.id == "linkedin"){
      document.getElementById("linkedin_link").click();
    }
  });
});

document.body.addEventListener('pointermove', UPDATE)