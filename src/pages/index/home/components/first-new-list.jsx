import React from 'react'
import { View } from '@tarojs/components'
// import { AtButton } from 'taro-ui'

import FirstNew from './first-news'
import './index.scss'

/**
 * @desc 城市站点
 */
const FirstNewList = () => {
  return (<View className='FirstNewListWrap'>
    <FirstNew />
  </View>)
}

export default FirstNewList 