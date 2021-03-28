import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Statistics/styles.module.scss';

const Statistics = ({ statistical, title }) => {
  return (
    <section className={styles.statistics}>
      {<h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {statistical.map(({ id, label, percentage }) => {
          const randomColor =
            '#' + ((Math.random() * 0xffffff) << 0).toString(16);
          return (
            <li
              className={styles.item}
              key={id}
              style={{ backgroundColor: randomColor }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,

  statistical: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
