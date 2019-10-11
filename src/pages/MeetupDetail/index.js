import React from 'react';
import {
  MdModeEdit,
  MdDeleteForever,
  MdEvent,
  MdLocationOn,
} from 'react-icons/md';

import { Container, DateAndLocale } from './styles';

export default function MeetupDetail({ match }) {
  return (
    <Container>
      <header>
        <strong>Meetup de React Native</strong>
        <div>
          <button type="button">
            <MdModeEdit size={20} /> Editar
          </button>
          <button type="button">
            <MdDeleteForever size={20} /> Cancelar
          </button>
        </div>
      </header>

      <img
        src="https://miro.medium.com/max/1200/1*iW7i51bEZSnoPwGgWW93Kg.jpeg"
        alt="meetup"
      />

      <p>
        O Meetup de React Native é um evento que reúne a comunidade de
        desenvolvimento mobile utilizando React a fim de compartilhar
        conhecimento. Todos são convidados.
        <br />
        <br />
        Caso queira participar como palestrante do meetup envie um e-mail para
        organizacao@meetuprn.com.br
      </p>

      <DateAndLocale>
        <MdEvent size={20} color="#999" />
        <span>24 de junho, às 20h</span>
        <MdLocationOn size={20} color="#999" />
        <span>Rua Guilherme Gembala, 260</span>
      </DateAndLocale>
    </Container>
  );
}
