import React from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtSlider } from 'taro-ui'
import './sub-list.scss'

const SubList = props => {
  let { current, setCurrent, change, setChange, className } = props
  let list = [
    'https://ipxcdn.jfshare.com/ipxmall/4f4e22a14e75d9d12803f16cd44c81e2',
    'https://ipxcdn.jfshare.com/ipxmall/839af10dfe0ae2d65258c406c982ee65',
    'https://ipxcdn.jfshare.com/ipxmall/eec20be67e97170e7fbdc6e2ef78b367'
  ]
  let len = list.length
  let step = 100 / len
  
  /**
   * @desc 创建子元素
   */
  const createItem = () => {
    return list.map((img, key) => (
      <SwiperItem key={key} onClick={() => itemHandleClick(key)}>
            <Image 
              src={img}
              className='sub-list-item'
              mode='aspectFit'
            />
      </SwiperItem>
    ))
  }
  const itemHandleClick = index => {
    setCurrent(index)
  }
  /**
   * @desc 处理swiper 回调
   * @param { object } e spier对象
   */
  const swiperChange = e => {
    let { current: index } = e.detail
    if (change === 'sub-list') {
      setCurrent(index)
    }
  }
  /**
   * @des 当值为change === sub-list 才会让子swiper修改父组件swiper
   */
  const touchStart = () => {
    setChange('sub-list')
  }
  let index = current + 1
  let currPage = index < len - 4 ? index : len - 4
  
  return (<View className={['sub-list', ...className]}>
    <View className='sub-list-swiper-wrap'>
      <Swiper
        className='sub-list-swiper'
        displayMultipleItems={3}
        current={currPage}
        onChange={swiperChange}
        onTouchStart={touchStart}
      >
        { createItem() }
      </Swiper>
    </View>
    <View className='index-bar'>
      {/* <AtSlider percent={25} isHidePercent color='#c51726' /> */}
      <AtSlider
        step={step}
        value={index * step}
        activeColor='#c51726'
        backgroundColor='#8c9192'
        blockColor='#c51726'
        blockSize={16}
      ></AtSlider>
      <View className='index-num'>第{index}页/共{len}页</View>
    </View>
  </View>)
}

export default SubList