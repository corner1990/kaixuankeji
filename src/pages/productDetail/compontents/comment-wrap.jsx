import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, } from '@tarojs/components'

import './comment-wrap.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    const proImg = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3558004629,2960673834&fm=26&gp=0.jpg'
    const proImg2 = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1429173043,2149147547&fm=26&gp=0.jpg'
    const iconImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599668659666&di=b0055ecca72558b421b4ff271bf01014&imgtype=0&src=http%3A%2F%2Fdp.gtimg.cn%2Fdiscuzpic%2F0%2Fdiscuz_x5_gamebbs_qq_com_forum_201306_19_1256219xc797y90heepdbh.jpg%2F0'

    return (
      <View className='comment-wrap'>
        <View className='comment-num-wrap'>
          <Text>商品评价（233）</Text>
          <Text>查看所有评价 ></Text>
        </View>
        <View className='comment-item'>
          <View className='person-info'>
            <Image src={iconImg} className='icon-img'></Image>
            <View>
              <Text className='person-name'>Angle</Text>
            </View>
          </View>
          <View className='comment-text'>
            超级好用，价钱很划算，会回购！物流很快，客服态度很好，宝贝满分好评~~~~
          </View>
          <View className='pro-img-wrap'>
           <Image src={proImg2} className='pro-img'></Image>
          </View>
        </View>
        <View className='comment-item'>
          <View className='person-info'>
            <Image src={iconImg} className='icon-img'></Image>
            <View>
              <Text className='person-name'>Angle</Text>
            </View>
          </View>
          <View className='comment-text'>
            超级好用，价钱很划算，会回购！物流很快，客服态度很好，宝贝满分好评~~~~
          </View>
          <View className='pro-img-wrap'>
           <Image src={proImg2} className='pro-img'></Image>
          </View>
        </View>
        <View className='all-btn-wrap'>
          <View className='all-btn'>查看全部评价</View>
        </View>
      </View>
    )
  }
}
