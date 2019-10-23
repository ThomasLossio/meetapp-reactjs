import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';
import api from '~/services/api';

import DateTimeInput from './DateTimeInput';
import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Nome é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  date: Yup.date()
    .min(new Date(), 'Não é possível cadastrar datas passadas')
    .required('Data é obrigatório'),
  localization: Yup.string().required('Localização é obrigatório'),
});

export default function MeetupEditAdd({ params }) {
  async function handleSubmit(data) {
    const { id } = params;

    if (id) {
      console.tron.log('Edição');
    } else {
      const response = await api.post('meetup', {
        body: schema,
      });
      console.tron.log(response);
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" multiline placeholder="Descrição completa" />
        <DateTimeInput name="date" />
        <Input name="localization" placeholder="Localização" />
        <button type="submit">
          {' '}
          <MdAddCircleOutline size={18} /> Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
