import React from 'react'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

/**
 * @desc 城市站点
 */
const FirstNews = () => {
  let src = 'https://ipxcdn.jfshare.com/ipxmall/694b422c540412a87eaeb17e65cb3a0f'
  return (<View className='FirstNewsWrap'>
    <View className='RightBox'>
      <View className='CardInfo'>你说本座一言堂，本座还真是不敢当！只不过为了司马副院长在桑梓大洲行事方便，副院长身份才一直秘而不宣。当然了，身份足够的人都知道这件事</View>
      <View className='CardOperation'>
        <View className='CardLikeCount'>
          <AtIcon value='heart' size='18' color='#D8D8D8'></AtIcon>
          4567
        </View>
        <View className='CardMsgCount'>
          <AtIcon value='message' size='18' color='#D8D8D8'></AtIcon>
          67
        </View>
      </View>
    </View>
    <Image src={src} className='CardImg' mode='aspectFill' />
  </View>)
}

export default FirstNews 