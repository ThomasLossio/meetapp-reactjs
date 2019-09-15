import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <a href="/dashboard">
          <img src={logo} alt="Meetapp" />
        </a>

        <aside>
          <Profile>
            <div>
              <strong>Thomas Lossio</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
