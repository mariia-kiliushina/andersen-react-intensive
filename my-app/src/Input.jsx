import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.state = { foo: 'kjh' };
  }
  render() {
    return (
      <>
        <label htmlFor="name">Имя</label>
        <input id="name" type="text" placeholder="Введите имя" />;
      </>
    );
  }
}

export default Input;
