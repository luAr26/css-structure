import $ from 'jquery';

class SiteHeaderMobileMenu {
  constructor() {
    this.menuIcon = $('.jsMenuIcon');
    this.menuContent = $('.c-site-header__menu-content');
    this.events();
  }

  events() {
    this.menuIcon.on('click', this.toggleMenu.bind(this));
  }
  
  toggleMenu() {
    this.menuContent.toggleClass('c-site-header__menu-content--is-visible');
    this.menuIcon.toggleClass('c-site-header__menu-icon--close-x');
  }
}

export default SiteHeaderMobileMenu;