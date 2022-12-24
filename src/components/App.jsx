import { Component } from 'react';

import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'John Wick', number: '777-77-77' },
      { id: 'id-6', name: 'Wait Forme', number: '937-99-92' },
    ],
    filter: '',
  };

  onSubmit = newContact => {
    this.setState(prevState => {
      if (
        prevState.contacts.some(contact => {
          return contact.name === newContact.name;
        })
      ) {
        return alert(`${newContact.name} is already in contacts!`);
      }
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  onFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  onClickDeleteContact = event => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== event.target.id
        ),
      };
    });
  };

  render() {
    return (
      <>
        <Container>
          <ContactForm onSubmit={this.onSubmit} />
          <Filter onFilterChange={this.onFilterChange} />
          <ContactList
            onClickDeleteContact={this.onClickDeleteContact}
            filter={this.state.filter}
            contacts={this.state.contacts}
          />
        </Container>
      </>
    );
  }
}
