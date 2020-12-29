import React from 'react'
import ReactDOM from 'react-dom'
const {
  BMap,
  BMAP_STATUS_SUCCESS,
  lastInfoBox,
  BMapLib,
  INFOBOX_AT_TOP,
  BMAP_ANCHOR_TOP_RIGHT
} = window;
export default class Map extends React.Component {

  componentDidMount() {
    var BMap = window.BMap
    var map = new BMap.Map("allmap"); // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设    置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用   
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);
    var geoc = new BMap.Geocoder();

    var styleOptions = {
      strokeColor: "red", //边线颜色。
      fillColor: "red", //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 3, //边线的宽度，以像素为单位。
      strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
      fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
      strokeStyle: 'solid' //边线的样式，solid或dashed。
    }
    //实例化鼠标绘制工具
    var drawingManager = new BMapLib.DrawingManager(map, {
      isOpen: false, //是否开启绘制模式
      enableDrawingTool: true, //是否显示工具栏
      drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
        offset: new BMap.Size(5, 5), //偏离值
      },
      circleOptions: styleOptions, //圆的样式
      polylineOptions: styleOptions, //线的样式
      polygonOptions: styleOptions, //多边形的样式
      rectangleOptions: styleOptions //矩形的样式
    });
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        
      }
      else {
        alert('failed' + this.getStatus());
      }
    });
  }

  render() {
    return (
      <div >
      <
        div id='allmap'
        style={
          {
            width: '85vw',
            height: '85vh'
          } 
        }
      /> 
      </div>
    )
  }
}
ReactDOM.render( <
        Map /> ,
  document.getElementById('root')
)