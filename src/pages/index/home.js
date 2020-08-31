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
  state = {
    isTouch: false
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  touchstart = e => {
    e.stopPropagation()
    e.preventDefault()
    let { isTouch } = this.state
    if(isTouch) {
      this.setIsTouch()
    }
  }
  /**
   * @desc 控制是否页面可以滚动
   * @param { number | undefined } val 
   */
  setIsTouch = (isTouch = false) => {
    this.setState({ isTouch })
  }
  render () {
    let title = '首页'
    let { touchstart, setIsTouch } = this
    let { isTouch } = this.state

    return (
      <View className={`home ${isTouch ? 'hidden': ''}`} onTouchStart={touchstart} onTouchMove={touchstart}>
        <CustomNavBar title={title} />
        <MainProduct setIsTouch={setIsTouch} />
        <OrderNews />
        <NewsWarp />
      </View>
    )
  }
}

export default connect(mapState)(Home)
