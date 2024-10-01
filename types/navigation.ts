export enum NavigationItemEnum {
  Home = 'home',
  About = 'about',
  Experience = 'experience',
  Tech = 'tech',
  Contact = 'contact'
}

export interface NavigationType {
  id: string;
  name: string;
  url: string;
}
