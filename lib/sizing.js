export default(element, image) =>{

  if(element.classList.contains('ionMd')) {
    image.style.width = '64px'}
   else if(element.classList.contains('ionLg')){
    image.style.width = '128px'
   } else {
    image.style.width = '32px'
   }
  }