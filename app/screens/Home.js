import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import { Container } from '../components/Container'

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle={'light-content'} />
    <Text style={{color: '#fff'}}>hello/?????</Text>
  </Container>
)