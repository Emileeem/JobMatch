import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import starcompleta from './starcompleta.png';
import startraco from './startraco.png';
import styles from './styles.module.scss';

const Star = ({ isActive, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Image className={styles.star} src={isActive ? starcompleta : startraco} />
    </button>
  );
};

Star.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Star;
