import $ from 'jquery'
require('../css/style.scss')
(function(){
  $('li:odd').css('backgroundColor','pink')
  $('li:even').css('backgroundColor','lightblue')
})()
console.log('xxx')

setTimeout(()=>{
  console.log('haha')
},100)