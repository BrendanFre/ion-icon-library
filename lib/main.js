import svgJs from './javascript.svg';
import sizing from './sizing';

export default () => {

  if(jsIcon()) {
    return 'jsIcon'
  } else {return 'no jsIcon'}
}

const jsIcon = () => {
  const ionJs = document.querySelectorAll('.ionJs');
  if(ionJs.length > 0){
  ionJs.forEach((element) => {
    const imageJs = document.createElement('img');
    imageJs.src = svgJs;
    sizing(element, imageJs);
    element.replaceWith(imageJs);
}
)
return true
} else {return false}
};