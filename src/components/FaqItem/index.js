import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  toggleItem = () => {
    const {isActive} = this.state
    this.setState({isActive: !isActive})
  }

  renderItem = () => {
    const {isActive} = this.state
    const {faqsListItem} = this.props
    const {answerText} = faqsListItem

    if (isActive) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderImage = () => {
    const {isActive} = this.state
    const imgUrl = isActive ? minusImage : plusImage

    return imgUrl
  }

  altText = () => {
    const {isActive} = this.state
    const altText = isActive ? 'minus' : 'plus'

    return altText
  }

  render() {
    const {faqsListItem} = this.props
    const {questionText} = faqsListItem
    return (
      <li className="list-item">
        <div className="style">
          <h1>{questionText}</h1>
          <button type="button" className="btn" onClick={this.toggleItem}>
            <img src={this.renderImage()} alt={this.altText()} />
          </button>
        </div>
        {this.renderItem()}
      </li>
    )
  }
}
export default FaqItem
