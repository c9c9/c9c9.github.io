require.config({
  timeout:20e3,
  paths:{
    dom:"../libs/dom.min.js?#1"
  }
});
require(['require','../libs/dom.min'],function () {
  var $data=$("#ACMD-DST");
  var launch=$data.attr('data-launch')||$data.attr('data-page');
  if(launch){
    require(launch,{baseUrl:''})
  }
})