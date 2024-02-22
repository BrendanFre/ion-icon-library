export default (element, image) => {
  const newImage = image;
  if (element.classList.contains('ionMd')) {
    newImage.style.width = '64px';
    return 'medium';
  }
  if (element.classList.contains('ionLg')) {
    newImage.style.width = '128px';
    return 'large';
  }
  newImage.style.width = '32px';
  return 'small';
};
