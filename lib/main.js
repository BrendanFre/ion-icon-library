import svgJs from './icons/javascript.svg';
import sizing from './sizing';
import svgHtml from './icons/html.svg';
import svgCss from './icons/css.svg';

const cssIcon = () => {
  const ionCss = document.querySelectorAll('.ionCss');
  if (ionCss.length > 0) {
    ionCss.forEach((element) => {
      const imageJs = document.createElement('img');
      imageJs.src = svgCss;
      sizing(element, imageJs);
      element.replaceWith(imageJs);
    });
    return 'css icon';
  } return 'no css';
};

const jsIcon = () => {
  const ionJs = document.querySelectorAll('.ionJs');
  if (ionJs.length > 0) {
    ionJs.forEach((element) => {
      const imageJs = document.createElement('img');
      imageJs.src = svgJs;
      sizing(element, imageJs);
      element.replaceWith(imageJs);
    });
    return 'js icon';
  } return 'no js icon';
};

const htmlIcon = () => {
  const ionHtml = document.querySelectorAll('.ionHtml');
  if (ionHtml.length > 0) {
    ionHtml.forEach((element) => {
      const imageJs = document.createElement('img');
      imageJs.src = svgHtml;
      sizing(element, imageJs);
      element.replaceWith(imageJs);
    });
    return 'html icon';
  } return 'no html icon';
};

export default () => {
  jsIcon();
  htmlIcon();
  cssIcon();
};
