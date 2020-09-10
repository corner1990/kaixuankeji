import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import CustomNavBar from '../../../components/navbar'
import ImgWrap from './components/img-wrap'
import TopWrap from './components/top-wrap'

import './index.scss'

const mapState = state => state.global
class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  render() {

    return (
      <View className='teacher-page'>
        <CustomNavBar title='首页' />
        <ImgWrap></ImgWrap>
        <TopWrap></TopWrap>
      </View>
    )
  }
}

export default connect(mapState)(Index)
