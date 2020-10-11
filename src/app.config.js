export default {
  pages: [
    'pages/city-site-detail/index',
    'pages/city-site/index',
    'pages/index/index',
    'pages/productDetail/index',
    'pages/teacherInfo/index',
    'pages/subscribe/index',
    'pages/collection/index',
    'pages/articleDetail/index',
    'pages/orderList/index',
    'pages/found/index',
    'pages/my/index',
    'pages/list/index',
    'pages/starTeacher/index',
  ],
  window: {
    navigationStyle: 'custom',
  },
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  }
}
