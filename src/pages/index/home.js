import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import CustomNavBar from '../../components/navbar'

import './home.scss'

import MainProduct from './home/main-product'
import OrderNews from './home/order-news'
import NewsWarp from './home/news-warp'

const mapState = state => state.global
class Home extends Component {
  
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  touchstart = e => {
    e.stopPropagation()
    e.preventDefault()
    console.log('说噢耶')
  }
  render () {
    let title = '首页'
    let { touchstart } = this

    return (
      <View className='home' onTouchStart={touchstart} onTouchMove={touchstart}>
        <CustomNavBar title={title} />
        <MainProduct />
        <OrderNews />
        <NewsWarp />
      </View>
    )
  }
}

export default connect(mapState)(Home)
