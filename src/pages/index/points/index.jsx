import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from 'react-redux'
import PointsItem from './components/points-item'
import { setTab } from '../../../store/actions/global'


import './index.scss'

const mapState = state => state.global
/**
 * @desc 积分模块
 */
class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    clickLeft = () => {
      this.props.setTab(2)
    }

    toDetail = () => {
      Taro.navigateTo({ url: '/pages/articleDetail/index'})
    }

    createItem() {
      let arr = []
      for (let i = 0; i < 7; i++) {
        arr.push(<PointsItem key={i} />)
      }
      return arr
    }

    render() {

        return (
          <View className='points-list-wrap'>
            {this.createItem()}
          </View>
        )
    }
}

export default connect(mapState, { setTab })(Index)
