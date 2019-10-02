import React from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, List, ContentList } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button">
          <MdAddCircleOutline size={18} /> Novo meetup
        </button>
      </header>

      <List>
        <li>
          <ContentList>
            <strong>Meetup de React Native</strong>
            <div>
              <p>24 de junho, às 20h</p>{' '}
              <MdChevronRight size={24} color="#fff" />
            </div>
          </ContentList>
        </li>
        <li>
          <ContentList>
            <strong>NodeJS Meetup</strong>
            <div>
              <p>17 de Julho, às 13h</p>{' '}
              <MdChevronRight size={24} color="#fff" />
            </div>
          </ContentList>
        </li>
        <li>
          <ContentList>
            <strong>Rocketseat Meetup</strong>
            <div>
              <p>30 de agosto, às 20h</p>{' '}
              <MdChevronRight size={24} color="#fff" />
            </div>
          </ContentList>
        </li>
        <li>
          <ContentList>
            <strong>React on the house!</strong>
            <div>
              <p>17 de Novembro, às 16h</p>{' '}
              <MdChevronRight size={24} color="#fff" />
            </div>
          </ContentList>
        </li>
      </List>
    </Container>
  );
}
