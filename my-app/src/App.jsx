import React from 'react';
import './App.css';
import Input from './Input';
import Button from './Button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Создание анкеты</h1>
        <form>
          <Input text="Имя" />
          <Input text="Имя" />
          <Input text="Имя" />
          <Input text="Имя" />
          <Button type="submit">Сохранить</Button>
        </form>
      </div>
    );
  }
}

export default App;
