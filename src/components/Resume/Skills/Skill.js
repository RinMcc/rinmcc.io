import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ data, last }) => (
    <li className="skill-container">
        <h4 className="skill-title">{data.title}</h4>
    </li>
);

Skill.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Skill.defaultProps = {
  last: false,
};

export default Skill;
