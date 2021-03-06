const 魏书目录 = require('./魏书/目录')
const 魏书 = {}
for (卷名 of 魏书目录.三十卷) {
  const 卷 = require('./魏书/' + 卷名)
  魏书[卷名] = 卷.内容
}

const 蜀书目录 = require('./蜀书/目录')
const 蜀书 = {}
for (卷名 of 蜀书目录.十五卷) {
  const 卷 = require('./蜀书/' + 卷名)
  蜀书[卷名] = 卷.内容
}

const 吴书目录 = require('./吴书/目录')
const 吴书 = {}
for (卷名 of 吴书目录.二十卷) {
  const 卷 = require('./吴书/' + 卷名)
  吴书[卷名] = 卷.内容
}

exports.魏书目录 = function() {
  return 魏书目录.三十卷;
}

exports.魏书按卷内容 = function() {
  return 魏书;
}

exports.蜀书目录 = function() {
  return 蜀书目录.十五卷;
}

exports.蜀书按卷内容 = function() {
  return 蜀书;
}

exports.吴书目录 = function() {
  return 吴书目录.二十卷;
}

exports.吴书按卷内容 = function() {
  return 吴书;
}
