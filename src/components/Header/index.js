import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} width={64} height={64} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Thiago</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Thiago"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
