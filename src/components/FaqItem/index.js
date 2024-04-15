// Write your code here.

import {Component} from 'react'

import './index.css'

const PLUS_ICON =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const MINUS_ICON =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleIconBtn = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <>
          <hr className="horizontal-line" />
          <p className="answer-text">{answerText}</p>
        </>
      )
    }
    return null
  }

  renderIconBtn = () => {
    const {isActive} = this.state
    const iconImage = isActive ? MINUS_ICON : PLUS_ICON
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button type="button" className="button" onClick={this.onToggleIconBtn}>
        <img src={iconImage} alt={altText} className="icon" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="list-iem">
        <div className="heading-and-icon-container">
          <h1 className="heading">{questionText}</h1>
          {this.renderIconBtn()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
