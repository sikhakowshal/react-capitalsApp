import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state

    const selectedObject = countryAndCapitalsList.filter(
      each => each.id === activeId,
    )

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="responsive-card">
            <h1 className="title">Countries And Capitals</h1>
            <div className="question-container">
              <select
                className="select-input"
                value={activeId}
                onChange={this.onChangeCapital}
              >
                {countryAndCapitalsList.map(eachCapital => (
                  <option
                    value={eachCapital.id}
                    className="option"
                    key={eachCapital.id}
                  >
                    {eachCapital.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="question"> is the capital of which country?</p>
            </div>
            <p className="country">{selectedObject[0].country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
