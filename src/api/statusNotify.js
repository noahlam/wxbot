const u = require('../utils')
const g = require('../global')

// 非必要 暂缓实现
async function statusNotify() {
  let url = `https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxstatusnotify?lang=zh_CN&pass_ticket=${g.senseData.pass_ticket}`
  let body = {
    BaseRequest: { Uin: g.senseData.wxuin, Sid: g.senseData.wxsid, Skey: g.senseData.skey, DeviceID: g.DeviceID },
    Code: 3,
    FromUserName: g.username,
    ToUserName: g.username,
    ClientMsgId: new Date().getTime() + '' + (9000 * Math.random() + 1000)
  }
}

module.exports = getAutoReply
