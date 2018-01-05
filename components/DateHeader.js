import React from 'react'
import { Text } from 'react-native'
import { purple } from '../utils/colors'

const DateHeader = ({ date }) => (
  <Text style={{color: purple, fontSize: 25, padding: 2}}>
    {date}
  </Text>
)

export default DateHeader
