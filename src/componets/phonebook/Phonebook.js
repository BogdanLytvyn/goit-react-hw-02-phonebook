import React, { Component } from 'react';
import Phonebook from './phonebookForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div>
        <Phonebook state={this.state} />
      </div>
    );
  }
}
