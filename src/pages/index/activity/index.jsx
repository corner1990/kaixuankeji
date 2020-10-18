import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import ArticleItem from './components/activity-item'
import { setTab } from '../../../store/actions/global'

import './index.scss'

const mapState = state => state.global
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
        arr.push(<ArticleItem key={i} />)
      }
      return arr
    }

    render() {
        
        return (
          <View className='activity-tab-wrap'>
            {/* <CustomNavBar title='发现' /> */}
            {this.createItem()}
            {/* <ArticleItem /> */}
          </View>
        )
    }
}

export default connect(mapState, { setTab })(Index)
