import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import api from '~/services/api';

import DateTimeInput from './DateTimeInput';
import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Nome é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  date_and_hour: Yup.date()
    .min(new Date(), 'Não é possível cadastrar datas passadas')
    .required('Data é obrigatório'),
  localization: Yup.string().required('Localização é obrigatório'),
});

export default function MeetupEditAdd({ match }) {
  const { id } = match.params;
  const profile = useSelector(state => state.user.profile);

  async function handleSubmit(data) {
    console.tron.log(data);
    if (id) {
      console.tron.log(id);
    } else {
      const response = await api.post('meetups', {
        ...data,
        user_id: profile.id,
      });

      if (response.status === 200) {
        toast.success('Meetup criado com sucesso!');
      } else {
        toast.error('Algo deu errado, tente novamente mais tarde!');
      }
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" multiline placeholder="Descrição completa" />
        <DateTimeInput name="date_and_hour" />
        <Input name="localization" placeholder="Localização" />
        <button type="submit">
          {' '}
          <MdAddCircleOutline size={18} /> Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
