import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  onClickDenomination = () => {
    const {denominationDetails, updateBalance} = this.props
    const {value} = denominationDetails
    updateBalance(value)
  }

  render() {
    const {denominationDetails} = this.props
    const {value} = denominationDetails

    return (
      <li className="denomination-item">
        <button
          type="button"
          className="denomination-button"
          onClick={this.onClickDenomination}
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
