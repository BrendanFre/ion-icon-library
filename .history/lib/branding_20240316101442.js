import github from './icons/github.svg'



const github = () => {
  const ionGh = document.querySelectorAll('.ionGh');
  if (ionGh.length > 0) {
    ionGh.forEach((element) => {
      const imageJs = document.createElement('img');
      imageJs.src = github;
      sizing(element, github);
      element.replaceWith(github);
    }
    )
  }
}

    export default() => {
      github()
    }