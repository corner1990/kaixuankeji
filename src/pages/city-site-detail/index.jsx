import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheet } from 'taro-ui'
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
  backHistory = () => {}
  render() {
    return (<View className='CitySiteDetail'>
      <CustomNavBar
        title='站点名称'
        clickLeft={this.backHistory}
      />
      <Swiper />
      <SiteInfo />
      <SiteImgs />
      <AtActionSheet isOpened >
        <BookSite />
      </AtActionSheet>
    </View>)
  }
}

export default CitySitePage