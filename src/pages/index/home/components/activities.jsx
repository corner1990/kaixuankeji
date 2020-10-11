import React from 'react'
import { View } from '@tarojs/components'
// import { AtButton } from 'taro-ui'

import Activitie from './activitie-card'
import './index.scss'

/**
 * @desc 城市站点
 */
const Activities = () => {
  return (<View className='ActivitiesWrap'>
    <Activitie />
    <Activitie />
    <Activitie />
    <Activitie />
  </View>)
}

export default Activities 