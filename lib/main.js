import main from '../public/vite.svg';

export default () => {
  console.log('This mod works');
  const testing = document.querySelector('.test');
  console.log('does it');
  const image = document.createElement('img');
  image.src = main;
  testing.appendChild(image);
}