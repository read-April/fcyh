//       
//  obj 现在的位置    target  目标值
function animate(obj, target, callback) {
    // 先清除以前的定时器，只保留一个定时器  防止动画越走越快
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 把每步要走的步长写到定时器里  （目标值 - 现在的位置）/10
        // 把步长改为整数 出现小数容易达不到目的
        // var step=Math.ceil(target-obj.offsetleft)/10
        var step = (target - obj.offsetLeft) / 10;
        // 判断step是否大于0  若step大于0，Math.ceil往大数取整  若step小于0，Math.floor往小数取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 若是现在的位置等于目标值 则停止动画 本质就是停止计时器
            // clearInterval(timer);
            // 回调函数写在计时器停止后 让回调函数在动画移动停止后运行
            // 判断是否有回调函数 有就执行  没有就不执行
            if (callback) {
                //调用函数
                callback();
            }
        }
        // 现在的位置 = 现在的位置 + 移动的步长（或正或负）+ "px (单位)" ;
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}