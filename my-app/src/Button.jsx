import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { buttonName, buttonFunction } = this.props;
    return (
      <button className={styles.myButton} onClick={() => buttonFunction()}>
        {buttonName}
      </button>
    );
  }
}

export default Button;
