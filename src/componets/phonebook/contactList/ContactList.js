import React from 'react';
import ContactListIte from './contactListItem/ContactListItem';

export default function ContactList({ contactList }) {
  return (
    <ul className="list">
      <h2>Contacts</h2>
      {contactList.map(contact => (
        <ContactListIte {...contact} key={contact.id} />
      ))}
    </ul>
  );
}
