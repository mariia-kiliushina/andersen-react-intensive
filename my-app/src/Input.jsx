import React from 'react';
import styles from './Input.module.css';
class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { inputLabel, type, isTextArea = false } = this.props;

    if (isTextArea) {
      return (
        <div className={styles.formInput}>
          <label htmlFor="name">{inputLabel}</label>
          <textarea
            id="name"
            className={styles.inputText}
            rows="7"
            // cols="77"
            placeholder={inputLabel}
            // value=""
          />
        </div>
      );
    }

    return (
      <div className={styles.formInput}>
        <label htmlFor="name">{inputLabel}</label>
        <input
          id="name"
          className={styles.inputText}
          type={type}
          placeholder={inputLabel}
          // value=""
        />
      </div>
    );
  }
}

export default Input;
