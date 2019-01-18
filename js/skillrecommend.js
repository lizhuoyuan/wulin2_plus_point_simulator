﻿/**
 * 三转以下职业技能推荐等级,当点击高职业时自动升级,保证可以直接进行三转职业的加点
 * 可以不设置,当不设置时按skill_id从低到高进行加点,直到达到职业最小技能点 三转以上职业也可以添加，这样在点击三转职业的时候就可以直接出现想要的技能
 * 当推荐等级大于最大等级时，自动变为最大等级
 */
var skillReco = [{
    name: "铁拳",
    reco: 5
}, {
    name: "罡气",
    reco: 8
}, {
    name: "轻功",
    reco: 3
}, {
    name: "养生主",
    reco: 5
}, {
    name: "烈风之伤",
    reco: 5
}, {
    name: "舍命一击",
    reco: 5
}, {
    name: "心剑通明",
    reco: 5
}, {
    name: "逍遥游",
    reco: 3
}, {
    name: "天崩地裂",
    reco: 5
}, {
    name: "御剑术",
    reco: 8
}, {
    name: "仙风护体",
    reco: 5
}, {
    name: "破魔真气",
    reco: 5
}, {
    name: "祈神咒",
    reco: 5
}, {
    name: "疾云步",
    reco: 3
}, {
    name: "化神咒",
    reco: 5
}, {
    name: "真元护体",
    reco: 5
}, {
    name: "力量",
    reco: 5
}, {
    name: "入魔",
    reco: 8
}, {
    name: "奔腾",
    reco: 3
}, {
    name: "暗魂",
    reco: 5
}, {
    name: "一闪",
    reco: 5
}, {
    name: "荼毒",
    reco: 5
}, {
    name: "深刺",
    reco: 8
}, {
    name: "迅捷",
    reco: 5
}, {
    name: "远行",
    reco: 5
}, {
    name: "战魂击",
    reco: 3
}, {
    name: "野性之魂",
    reco: 5
}, {
    name: "战魂统御",
    reco: 5
}, {
    name: "魔性之魄",
    reco: 5
}, {
    name: "灵击",
    reco: 2
}, {
    name: "缩地成寸",
    reco: 3
}, {
    name: "血咒",
    reco: 8
}, {
    name: "僵化之触",
    reco: 3
}, {
    name: "灵魂强化",
    reco: 5
}, {
    name: "坚毅",
    reco: 5
}, {
    name: "化石",
    reco: 5
}, {
    name: "祈灵咒",
    reco: 5
}, {
    name: "原灵之体",
    reco: 5
}, {
    name: "火山祝福",
    reco: 5
}, {
    name: "强击",
    reco: 5
}, {
    name: "鹰眼",
    reco: 5
}, {
    name: "灵巧",
    reco: 5
},
// 三转以上技能
{
    name: "神龙摆尾",
    reco: 8
}, {
    name: "战龙在野",
    reco: 5
}, {
    name: "剑刃风暴",
    reco: 5
}, {
    name: "黄龙天翔",
    reco: 3
}, {
    name: "亢龙诀",
    reco: 5
}, {
    name: "长风破浪",
    reco: 5
}, {
    name: "万剑归宗",
    reco: 5
}, {
    name: "吴钩霜雪明",
    reco: 5
}, {
    name: "新星陨灭",
    reco: 5
}, {
    name: "凝劲之术",
    reco: 3
}, {
    name: "虚空风暴",
    reco: 5
}, {
    name: "霸道天威阵",
    reco: 3
}, {
    name: "日月争辉",
    reco: 5
}, {
    name: "燃灯灵光咒",
    reco: 5
}, {
    name: "惊雷印",
    reco: 8
}, {
    name: "自然亲和",
    reco: 3
}, {
    name: "祈福之花",
    reco: 3
}, {
    name: "鲜血妖花",
    reco: 3
}, {
    name: "饕餮骨杖",
    reco: 5
}, {
    name: "毒炎蛇阵",
    reco: 5
}, {
    name: "祖巫之力",
    reco: 3
}, {
    name: "兽神真解",
    reco: 3
}, {
    name: "信风传承",
    reco: 5
}, {
    name: "般若曼佗罗图",
    reco: 5
}, {
    name: "健体强身咒",
    reco: 5
}, {
    name: "冰遁甲",
    reco: 5
}, {
    name: "雷神护体",
    reco: 5
}, {
    name: "狙击",
    reco: 1000000
}
];