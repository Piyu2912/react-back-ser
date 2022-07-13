const bollywoodList = require('../../module/bollywood.module');
const advisementList = require('../../module/advisement.module');

function mainList(req, res) {
    return res.status(200).json(bollywoodList);
}
function topList(req, res) {
    const arr = [];
    let itr = 5;
    while (itr--) {
        const ran = Math.floor(Math.random() * 15);
        arr.push(bollywoodList[ran]);
    }
    return res.status(200).json(arr);
}

function advisement(req, res) {
    const arr = [];
    let itr = 2;
    while (itr--) {
        const ran = Math.floor(Math.random() * 10);
        arr.push(advisementList[ran]);
    }
    return res.status(200).json(arr);
}

module.exports = { mainList, topList, advisement };
