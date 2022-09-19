/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24730153&pid=2d98125533774c3bba2280576ad0740e&tid=4c1164643ab048c4d83873c1d6faa680",
    "https://www.maimemo.com/share/page?uid=24730153&pid=2d98125533774c3bba2280576ad0740e&tid=4c1164643ab048c4d83873c1d6faa680",
    "https://www.maimemo.com/share/page?uid=24730153&pid=2d98125533774c3bba2280576ad0740e&tid=4c1164643ab048c4d83873c1d6faa680",
    "https://www.maimemo.com/share/page?uid=21056916&pid=2d98125533774c3bba2280576ad0740e&tid=569c49d1a1db98455c0528c8493655e3",
    "https://www.maimemo.com/share/page?uid=21056916&pid=2d98125533774c3bba2280576ad0740e&tid=569c49d1a1db98455c0528c8493655e3",
    "https://www.maimemo.com/share/page?uid=21056916&pid=2d98125533774c3bba2280576ad0740e&tid=569c49d1a1db98455c0528c8493655e3",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
