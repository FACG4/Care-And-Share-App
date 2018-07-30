import React, {Component} from 'react';
import NavElement from './NavElement';

import './style.css';

class NavElements extends Component {
  render() {
    const urlList =[
      {
        id:1,
        url:'https://i.imgur.com/ku6FlQO.png',
        txt: 'Carers',
        link: '/',
      },
      {
        id:2,
        url:'https://i.imgur.com/RQwKc9P.png',
        txt: 'Profile',
        link: '/profile',
      },
      {
        id:3,
        url:'https://i.imgur.com/IuRRJGH.png',
        txt: 'Diaries',
        link: '/diaries',
      },
      {
        id:4,
        url:'https://i.imgur.com/38MpzcK.png',
        txt: 'Discussion',
        link: '/discussion',
      },
      {
        id:5,
        url:'https://i.imgur.com/Xhzptq4.png',
        txt: 'My Book',
        link: '/mybook',
      },
      {
        id:6,
        url:'https://i.imgur.com/juHwyfc.png',
        txt: 'Connection',
        link: '/connection',
      },
    ];
    return (
      <div className="navStyle">
        {urlList.map(item =>
          <span key={item.id}>
            <NavElement url={item.url} txt={item.txt} link={item.link}>
            </NavElement>
          </span>
        )}
      </div>
    );
  }
}

export default NavElements;
