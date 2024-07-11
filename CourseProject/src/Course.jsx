import React from 'react';
import PropTypes from 'prop-types';


function Course({ image, title, description }) {
  // console.log(props);
  // const title = props.title;
  // const description = props.description;
  // const { title, description } = props;

  return (
    <div>
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

Course.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

};

export default Course;  
