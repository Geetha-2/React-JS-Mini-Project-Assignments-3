import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, checkMatchImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnailImg = () => {
    checkMatchImage(id)
  }

  return (
    <li className="thumbnail-list-container">
      <button type="button" className="thumbnail-button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
          onClick={onClickThumbnailImg}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
