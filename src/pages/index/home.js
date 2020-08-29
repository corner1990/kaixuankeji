import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'

import CustomNavBar from '../../components/navbar'

import './home.scss'

import MainProduct from './components/main-product'
import OrderNews from './components/order-news'
import NewsWarp from './components/news-warp'

const mapState = state => state.global
class Index extends Component {
  
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    let title = '首页'
    return (
      <View className='index'>
        <CustomNavBar title={title} />
        <MainProduct />
        <OrderNews />
        <NewsWarp />
      </View>
    )
  }
}

export default connect(mapState)(Index)
