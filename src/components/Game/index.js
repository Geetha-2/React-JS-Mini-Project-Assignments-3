import {Component} from 'react'

import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'

import './index.css'

class Game extends Component {
  constructor(props) {
    super(props)
    const {tabsList, imagesList} = props

    this.state = {
      activeTabId: tabsList[0].tabId,
      matchImageId: imagesList[0].id,
    }
  }

  checkMatchImage = id => {
    const {matchImageId} = this.state
    const {increaseScore, stopGame} = this.props

    if (matchImageId === id) {
      increaseScore()
      this.changeMatchImage()
    } else {
      stopGame()
    }
  }

  changeMatchImage = () => {
    const {imagesList} = this.props

    const randomIndex = Math.floor(Math.random() * imagesList.length)
    this.setState({
      matchImageId: imagesList[randomIndex].id,
    })
  }

  clickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  getMatchImageUrl = () => {
    const {imagesList} = this.props
    const {matchImageId} = this.state

    const matchImageObject = imagesList.find(each => each.id === matchImageId)

    return matchImageObject.imageUrl
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {activeTabId} = this.state

    const matchImageUrl = this.getMatchImageUrl()

    const filteredImages = imagesList.filter(
      each => each.category === activeTabId,
    )

    return (
      <div className="app-container">
        <img src={matchImageUrl} alt="match" className="images" />

        <ul className="tabs-container">
          {tabsList.map(each => (
            <TabItem
              key={each.tabId}
              tabDetails={each}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === each.tabId}
            />
          ))}
        </ul>

        <ul className="images-container">
          {filteredImages.map(each => (
            <ThumbnailItem
              key={each.id}
              imageDetails={each}
              checkMatchImage={this.checkMatchImage}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Game
