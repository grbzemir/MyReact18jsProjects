import PropTypes from 'prop-types';

function ImageItem({ image }) {

    console.log(image);
    return (

        <div>
            <img className="imageListImg" src={image.urls.small} alt={image.alt_description} />
        </div>

    );
}


ImageItem.propTypes = {
    image: PropTypes.object.isRequired,
    imagesPlaceHolder: PropTypes.array.isRequired
};


export default ImageItem;