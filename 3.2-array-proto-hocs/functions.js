//Задача 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    const arrTemp = []
    weapons.forEach(weapon => arrTemp.push(weapon.name));
    return arrTemp;
    //return weapons.map(weapon => weapon.name); //или так
}

function getCountReliableWeapons(strength) {
    return weapons.filter(weapon => weapon.durability > strength).length;
}

function hasReliableWeapons(strength) {
    return weapons.some(weapon => weapon.durability > strength);
}

function getReliableWeaponsNames(strength) {
    return weapons.filter(weapon => weapon.durability > strength).map(weapon => weapon.name);
}

function getTotalDamage() {
    return weapons.reduce((sum, weapon) => sum + weapon.attack, 0);
}

function getValuestCountToSumValues(arr, total) {
    const index = arr.reduce(function (sum, num, i) {
        sum.push(sum[i] + num);
        return sum;
    }, [0])
    .findIndex(num => num >= total);
    
    return index != -1 ? index : arr.length;
}
