import svgJs from './javascript.svg';
import sizing from './sizing';

export default () => {
  const ionJs = document.querySelectorAll('.ionJs');
  console.log(ionJs)
  
  ionJs.forEach((element) => {
    const imageJs = document.createElement('img');
    console.log(typeof element);
    imageJs.src = svgJs;
    sizing(element, imageJs);
    element.replaceWith(imageJs);
  })
}