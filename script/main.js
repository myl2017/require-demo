/**
 * Created by myl17 on 2017/9/11.
 * main是程序入口
 * hello是添加的依赖
 */
require(['./hello','./other'], function (x,y) {
    var elNode = document.createElement('h2')
    elNode.innerHTML = x.introduce
    elNode.style.color = 'red'
    document.body.appendChild(elNode)

    console.log(y)
})