const navigation = document.querySelector('.header__navigation');
const button = document.querySelector('.header__toggle');

const toggleNavigation = () => {
  navigation.classList.remove('no-js');
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (button.classList.contains('header__toggle--open')) {
      button.classList.add('header__toggle--closed');
      button.classList.remove('header__toggle--open');
      navigation.classList.remove('header__navigation--open');
    }
    else {
      button.classList.add('header__toggle--open');
      button.classList.remove('header__toggle--closed');
      navigation.classList.add('header__navigation--open');
    }
  })
}

export default toggleNavigation;
