import React, { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import CustomBackHistory from '../../components/backhistory'
import './index.scss'
import ImgView from './components/img-view'
import SubList from './components/sub-list'


export default class Index extends Component {
  state = {
    list: [
      'https://ipxcdn.jfshare.com/ipxmall/deb026ca8dfb9c1f6ec9f9d66dd58dec',
      'https://ipxcdn.jfshare.com/ipxmall/ebc492769034d45538e26c3813c95243',
      'https://ipxcdn.jfshare.com/ipxmall/2689f3603cd020087941c591d3b148eb',
      'https://ipxcdn.jfshare.com/ipxmall/deb026ca8dfb9c1f6ec9f9d66dd58dec',
      'https://ipxcdn.jfshare.com/ipxmall/ebc492769034d45538e26c3813c95243',
      'https://ipxcdn.jfshare.com/ipxmall/2689f3603cd020087941c591d3b148eb',
    ],
    current: 0,
    change: 'index',
    showslider: false
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  /**
   * @desc 控制是否展示slibar 和 navbar
   */
  setShowSlider = () => {
    let { showslider } = this.state
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.setState({
        showslider: !showslider
      })
    }, 100)
  }
  /**
   * @desc 处理item
   */
  createItem() {
    let { list } = this.state
    let { setShowSlider } = this
    return list.map((img, key) => (
      <SwiperItem key={key} onClick={setShowSlider}>
        <ImgView img={img} />
      </SwiperItem>
    ))
  }
  
  /**
   * @desc 处理swiper 回调
   * @param { object } e spier对象
   */
  swiperChange = e => {
    let { current } = e.detail
    this.setState({ current })
  }
  /**
   * @desc 子元素更新当前下标时使用
   * @param { number } current 
   */
  setCurrent = current => this.setState({ current, change: 'index' })
  setChange = change => this.setState({ change })
  /**
   * @desc 获取子列表
   */
  getSubList() {
    let { list, current, change, showslider } = this.state
    let { setCurrent, setChange } = this
    // 动态控制是否展示slider
    let className = []
    if (showslider) {
      className.push('show')
    }
    return <SubList
      list={list}
      current={current}
      setCurrent={setCurrent}
      change={change}
      setChange={setChange}
      className={className}
    />
  }
  touchStart = () => {
    this.setState({ change: 'index' })
  }
  render () {
    let { current } = this.state
    let { swiperChange, touchStart } = this
    return (
      <View className='list-page'>
        <CustomBackHistory
          style={{ position: 'fixed' }}
        ></CustomBackHistory>
        <Swiper
          className='list-swiper'
          onTouchStart={touchStart}
          current={current}
          onChange={swiperChange}
        >
          { this.createItem() }
        </Swiper>
        { this.getSubList() }
      </View>
    )
  }
}
