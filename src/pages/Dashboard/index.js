import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, List, ContentList } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing', {
        params: { page: 1 },
      });

      response.data.map(meetup => {
        meetup.date_and_hour = format(
          parseISO(meetup.date_and_hour),
          "d 'de' MMMM', às' HH'h'",
          { locale: pt }
        );
      });

      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button">
          <MdAddCircleOutline size={18} /> Novo meetup
        </button>
      </header>

      <List>
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <ContentList>
              <strong>{meetup.title}</strong>
              <div>
                <p>{meetup.date_and_hour}</p>{' '}
                <MdChevronRight size={24} color="#fff" />
              </div>
            </ContentList>
          </li>
        ))}
      </List>
    </Container>
  );
}
