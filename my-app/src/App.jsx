import React from 'react';
import styles from './App.module.css';
import Input from './Input';
import Button from './Button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Создание анкеты</h1>
        <form className={styles.formWrapper}>
          <fieldset className={styles.groupedInputsWrapper}>
            <Input inputLabel="Имя" type="text" />
            <Input inputLabel="Фамилия" type="text" />
            <Input inputLabel="Дата рождения" type="date" />
          </fieldset>
          <fieldset className={styles.groupedInputsWrapper}>
            <Input inputLabel="Телефон" type="tel" />
            <Input inputLabel="Сайт" type="url" />
          </fieldset>
          <fieldset className={styles.groupedInputsWrapper}>
            <Input inputLabel="О себе" type="text" isTextArea={true} />
            <Input inputLabel="Стек технологий" type="text" isTextArea={true} />
            <Input inputLabel="Описание последнего проекта" type="text" isTextArea={true} />
          </fieldset>
          <div className={'buttonWrapper'}>
            <Button type="reset" buttonName="Отменить" />
            <Button type="submit" buttonName="Сохранить" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
