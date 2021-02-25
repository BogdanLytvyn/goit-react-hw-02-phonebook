import React, { Component } from 'react';
import ContactForm from './phonebook/phonebookForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div>
        <ContactForm />
      </div>
    );
  }
}
