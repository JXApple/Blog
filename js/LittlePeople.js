/*
 * @Author: zengrongping
 * @Date: 2022-01-19 16:19:30
 * @LastEditTime: 2022-01-19 16:24:29
 * @LastEditors: zengrongping
 * @Description: 描述
 */

L2Dwidget.init({
  "model": {
    jsonPath:
      "https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json",
    "scale": 1
  }, "display": {
    "position": "right", "width": 110, "height": 150,
    "hOffset": 0, "vOffset": -20
  }, "mobile": { "show": true, "scale": 0.5 },
  "react": { "opacityDefault": 0.8, "opacityOnHover": 0.1 }
})