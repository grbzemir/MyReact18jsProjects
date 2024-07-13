import PropTypes from 'prop-types';

function ImageItem({ image }) {

    console.log(image);
    return (

        <div>
        </div>);
}


ImageItem.propTypes = {
    image: PropTypes.object.isRequired,
    imagesPlaceHolder: PropTypes.array.isRequired
};


export default ImageItem;