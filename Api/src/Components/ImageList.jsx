import PropTypes from 'prop-types';

function ImageList({ imagesPlaceHolder }) {
    return (

        <div className='imageList'>

            {imagesPlaceHolder.map((image, index) => {

                return <ImageList key={index} image={image} />
            })}

        </div>);
}


ImageList.propTypes = {
    imagesPlaceHolder: PropTypes.array.isRequired
};

export default ImageList;

