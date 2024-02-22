export default(element, image) =>{

  if(element.classList.contains('ionMd')) {
    image.style.width = '64px'
  return 'medium'
  }
   else if(element.classList.contains('ionLg')){
    image.style.width = '128px'
    return 'large'
   } else {
    image.style.width = '32px'
    return 'small'
   }
  }