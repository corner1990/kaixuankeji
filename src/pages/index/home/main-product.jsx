import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import { AtButton } from 'taro-ui'
import './main-product.scss'

export default class Index extends Component {
  state = {
    src: 'http://new-img1.bazaar.net.cn/bazaar/156/881/lixvO2ezpUxY.jpeg',
    dragInfo: {
      startY: 0,
      originY: 0
    }
  }
  
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  imgWarp = null
  /**
   * @desc 查看详情
   */
  viewDetail() {
    Taro.navigateTo({ url: '/pages/list/index'})
  }
  /**
   * @desc 触摸按下事件
   * @param {*} e 
   */
  touchStart = e => {
    e.stopImmediatePropagation() // 阻止事件冒泡
    e.preventDefault()
    let { dragInfo } = this.state
    let { cssTransform, imgWarp } = this
    let touch = e.touches[0]
    imgWarp.style.transition = 'none'
    dragInfo.originY = cssTransform(imgWarp, 'translateY')
    dragInfo.startY = touch.pageY
    console.log('dragInfo.originY', dragInfo.originY)
  }
  /***
   * @desc 触摸按下移动
   */
  touchMove = e => {
    e.stopImmediatePropagation() // 阻止事件冒泡
    e.preventDefault()
    let touch = e.changedTouches[0]
    let { cssTransform, imgWarp } = this
    let { dragInfo } = this.state

    let offsetY = dragInfo.startY - touch.pageY
    // let currY = cssTransform(imgWarp, 'translateY')
    // 如果开始的位置大于真正移动端坐标，向上滑动
    let val = 0
    if (dragInfo.originY >= 0 && dragInfo.startY > touch.pageY) {
      val = dragInfo.startY > touch.pageY ? dragInfo.originY - offsetY  : dragInfo.originY + offsetY
    } else if(dragInfo.originY <= -80 && dragInfo.startY < touch.pageY) {
      val = dragInfo.startY < touch.pageY ? dragInfo.originY - offsetY  : dragInfo.originY + offsetY
    }
    val = val <= -100 ? -100 : val >= 0 ? 0 : val
    
    // val = val > 0 ? 0 : val < -100 ? -100 : val
    dragInfo.translateY = cssTransform(imgWarp, 'translateY', val)
    this.setState({ dragInfo })
  }
  touchEnd = e => {
    e.stopImmediatePropagation() // 阻止事件冒泡
    e.preventDefault()
    let { cssTransform, imgWarp } = this
    imgWarp.style.transition = "transform .3s";
    let currY = cssTransform(imgWarp, 'translateY')
    let val = currY < -50 ? -100 : 10
    cssTransform(imgWarp, 'translateY', val)

  }
  /**
   * @des 动画
   * @param { objcet } style 保存需要设置的属性对象
   * @param { string } attr 需要设置的属性名称
   * @param { number } val 设置的属性
   * @returns { nunber | undefined } 返回属性或
   */
  cssTransform = (el, attr, val) => {
    if(!el.transform){
      el.transform = {};
    }
    
    if(val) {
      el.transform[attr] = val;
      var sVal = "";
      for(var s in el.transform){
        switch(s) {
          case "rotate":
          case "rotateX":
          case "rotateY":
          case "rotateZ":		
          case "skewX":
          case "skewY":
            sVal += s +"("+el.transform[s]+"deg) "
            break;
          case "translateX":
          case "translateY":
          case "translateZ":
            sVal += s +"("+el.transform[s]+"px) "
            break;
          case "scaleX":
          case "scaleY":
          case "scale":
            sVal += s +"("+el.transform[s]+") "
            break;	
        }
        el.style.transform= sVal;
        el.style.WebkitTransform = sVal;
        return el
      }
    } else {
      val  = el.transform[attr];
      if(typeof val == "undefined" ) {
        if(attr == "scale" || attr == "scaleX" || attr == "scaleY"  ) {
          val = 1
        } else {
          val = 0
        }
      }
      return val;
    }
  }

  render () {
    let { src } = this.state
    let { viewDetail, touchStart, touchMove, touchEnd } = this
    return (
      <View className='mian-product' onClick={viewDetail} >
        <View
          className='product-img-warp'
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
          ref={el => this.imgWarp = el}
        >
          <Image src={src} alt='img' srcset='' className='product-img' />
        </View>
        <View className='product-info-wrap' >
          <View className='product-info'>
            <View className='product-title'>
              <View>
                <Text>Thirty is just that.</Text>
              </View>
              <Text>三十而已</Text>
            </View>
            <View className='product-time'>
              <View>
                <Text>2020年</Text>
              </View>
              <Text>8月号</Text>
            </View>
          </View>
          <View className='buy-now'>
            <Text>试读</Text>
            <Text>|</Text>
            <Text>购买￥12.00</Text>
          </View>
        </View>
      </View>
    )
  }
}
