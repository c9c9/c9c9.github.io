require.config({
  timeout:20e3
});
require(['require','../libs/dom.min','./index'],function () {
  var $data=$('#ACMD-DST');
  var launch=$data.attr('data-launch')||$data.attr('data-page');
  if(launch){
    require(launch)
  }
})