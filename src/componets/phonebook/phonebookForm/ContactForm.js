import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit="">
        <label>
          Name:
          <input type="text" name="name" value="" />
        </label>
        <label>
          Number:
          <input type="number" name="modulesCount" value="" />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
