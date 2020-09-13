import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Picker } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import CustomNavbar from '../../components/navbar'
import BannerWrap from './compontents/banner-wrap'
import CommentWrap from './compontents/comment-wrap'
import DetailWrap from './compontents/detail-wrap'

import './index.scss'

/**
 * @desc 商品详情页
 */
export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      selector: ['美国', '中国', '巴西', '日本'],
      selectorChecked: '美国',
      timeSel: '12:01',
      dateSel: '2018-04-22'
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  clickLeft = () => {
    Taro.navigateBack()
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  render() {

    let adcSrc = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2723253439,2190704268&fm=26&gp=0.jpg'

    return (
      <View className='article-detail'>
        <CustomNavbar title='发现' color='#333' clickLeft={this.clickLeft}></CustomNavbar>
        <BannerWrap></BannerWrap>
        <View className='product-info-wrap'>
          <View className='product-title'>SK2神仙水 超级好用 </View>
          <View className='product-price'>￥899 </View>
        </View>
        <View>
          <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
            <AtList>
              <AtListItem
                title='规格'
                extraText={this.state.selectorChecked}
              />
            </AtList>
          </Picker>
        </View>
        <CommentWrap></CommentWrap>
        <DetailWrap></DetailWrap>

      </View>
    )
  }
}
