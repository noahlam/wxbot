const u = require('./utils')
let g = require('./global')

const getUUID = require('./api/getUUID')
const getScanResult = require('./api/getScanResult')
const getSenseInfo = require('./api/getSenseInfo')
const initialize = require('./api/initialize')
const getFriendList = require('./api/getFriendList')
const getGroupList = require('./api/getGroupList')
const checkNewMessage = require('./api/checkNewMessage')
const sendMessage = require('./api/sendMessage')


async function start() {
  let uuid = await getUUID()
  let qrcodeURL = 'https://wx.qq.com/qrcode/' + uuid
  console.log('请打开地址扫码登录 ', qrcodeURL)
  let query = await getScanResult()
  let sense = await getSenseInfo(query)

  await initialize(sense)
  // getFriendList()
  // getGroupList()
  checkNewMessage()
}

start()
