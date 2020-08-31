import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import Tabbar from '../../components/tabbar'
import Home from './home'
import Found from './found'
import User from './user'
import Endorsement from './endorsement'
import './index.scss'

const mapState = state => state.global
class Index extends Component {
  state = {
    components: [Home, Found, User, Endorsement]
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    let { tabIndex } = this.props
    let { components } = this.state
    let Com = components[tabIndex]
    
    return (
      <View className='layout'>
        <Com />
        <Tabbar />
      </View>
    )
  }
}

export default connect(mapState)(Index)
