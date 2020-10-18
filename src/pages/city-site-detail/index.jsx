import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheet } from 'taro-ui'
import Taro from '@tarojs/taro'
import CustomNavBar from '../../components/navbar'
import Swiper from './components/swiper'
import SiteInfo from './components/site-info'
import SiteImgs from './components/site-imgs'
import BookSite from './components/book-site'

import './index.scss'
/**
 * @desc 城市工作站
 */
class CitySitePage extends React.Component{
  state = {
    bookShow: false
  }
  /**
   * @desc 返回
   */
  backHistory = () => {
    Taro.navigateBack()
  }
  /**
   * @desc 更新数据
   */
  update = (key, val) => {
    this.setState({
      [key]: val
    })
  }
  render() {
    return (<View className='CitySiteDetail'>
      <CustomNavBar
        title='站点详情'
        clickLeft={this.backHistory}
      />
      <Swiper />
      <SiteInfo update={this.update} />
      <SiteImgs />
      <AtActionSheet
        isOpened={this.state.bookShow}
      >
        <BookSite update={this.update} />
      </AtActionSheet>
    </View>)
  }
}

export default CitySitePage