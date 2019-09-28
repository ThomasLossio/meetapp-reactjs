import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <p>Meus meetups</p>
        <button type="button">
          <MdAddCircleOutline size={18} /> Novo meetup
        </button>
      </header>

      <ul>
        <li />
      </ul>
    </Container>
  );
}
