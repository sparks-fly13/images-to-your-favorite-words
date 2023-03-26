import './ImageList.css'
import ImageShow from './ImageShow';

function ImageList({images}) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })

    return (
        <div className='images-container'>
            <p>Images will be displayed here.</p>
            <div className='image-list'>{renderedImages}</div>
        </div>
    )
}


export default ImageList;