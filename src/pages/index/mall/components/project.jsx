import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './project.scss'

/**
 * @desc 外层组件
 */
const CitySite = (props) => {
  console.log(props)
  let {title, card}=props;
  return (<View className='CitySiteWrap'>
    <View className='CitySiteTitleWrap'>
      <Text>{title}</Text>
      <View className='CitySiteMore'>
        更多
        <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
      </View>
    </View>
    {card}
  </View>)
}

export default CitySite 