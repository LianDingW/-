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
    
    "https://www.maimemo.com/share/page?uid=24730153&pid=3e54cb43654d77c1fff76a444a64514c&tid=acaedfcec689143cf8fbd94bbe853610",
    "https://www.maimemo.com/share/page?uid=24730153&pid=3e54cb43654d77c1fff76a444a64514c&tid=acaedfcec689143cf8fbd94bbe853610",
    "https://www.maimemo.com/share/page?uid=24730153&pid=3e54cb43654d77c1fff76a444a64514c&tid=acaedfcec689143cf8fbd94bbe853610",
    "https://www.maimemo.com/share/page?uid=24730153&pid=d46b2b795b8dce2f1988c82a6d0fbda9&tid=b05f51e2115edb336500899e7d0ef3b7",
    "https://www.maimemo.com/share/page?uid=24730153&pid=d46b2b795b8dce2f1988c82a6d0fbda9&tid=b05f51e2115edb336500899e7d0ef3b7",
    "https://www.maimemo.com/share/page?uid=24730153&pid=d46b2b795b8dce2f1988c82a6d0fbda9&tid=b05f51e2115edb336500899e7d0ef3b7",
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
