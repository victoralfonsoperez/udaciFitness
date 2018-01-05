import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { timeTotring, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'

class History extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    fetchCalendarResults()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({entries}) => {
        if(!entries[timeTotring()]) {
          dispatch(addEntry({
            [timeTotring()]: getDailyReminderValue()
          }))
        }
      })
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

const mapStateToProps = entries => (
  {
    entries
  }
)

export default connect(mapStateToProps)(History)
