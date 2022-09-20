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
    
    "https://www.maimemo.com/share/page?uid=24730153&pid=6bcbd7dbbd10fe2c28e523429c767eb9&tid=1b70579df1bd724e986c3f4ce607602b",
    "https://www.maimemo.com/share/page?uid=24730153&pid=6bcbd7dbbd10fe2c28e523429c767eb9&tid=1b70579df1bd724e986c3f4ce607602b",
    "https://www.maimemo.com/share/page?uid=21056916&pid=6bcbd7dbbd10fe2c28e523429c767eb9&tid=23949dc89f6e6bcc3f18bf347d4c0c9d",
    "https://www.maimemo.com/share/page?uid=21056916&pid=6bcbd7dbbd10fe2c28e523429c767eb9&tid=23949dc89f6e6bcc3f18bf347d4c0c9d",
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
