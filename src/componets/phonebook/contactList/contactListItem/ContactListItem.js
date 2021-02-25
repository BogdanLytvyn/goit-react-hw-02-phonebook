import React from 'react';

export default function ContactListItem({ contacts, name, number }) {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
}
