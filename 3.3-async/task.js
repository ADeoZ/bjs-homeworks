class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Не передан параметр "id" для таймера');
        }
        if (this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error('Будильник с таким id таймера уже существует');
        } else {
            this.alarmCollection.push({
                id,
                time,
                callback
            });
        }
    }

    removeClock(id) {
        const alarmIndex = this.alarmCollection.findIndex(alarm => alarm.id === id);
        if (alarmIndex != -1) {
            this.alarmCollection.splice(alarmIndex, 1);
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        const timeNow = new Date();
        const hours = timeNow.getHours() < 10 ? `0${timeNow.getHours()}` : `${timeNow.getHours()}`;
        const minutes = timeNow.getMinutes() < 10 ? `0${timeNow.getMinutes()}` : `${timeNow.getMinutes()}`;
        return hours + ":" + minutes;
    }

    start() {
        function checkClock(alarm, timeNow) {
            if (alarm.time === timeNow) {
                alarm.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm, this.getCurrentFormattedTime())), 2000);
        }
    }
    
    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    
    printAlarms() {
        console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
        this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.id} заведён на ${alarm.time}`));
    }
    
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const clock = new AlarmClock();
    let timeNow = new Date();
    
    clock.addClock(timeZeroes(timeNow.getTime()), () => console.log('Звоним!'), 1);
        
    clock.addClock(timeZeroes(timeNow.getTime() + 60000), () => {
        console.log('Звоним и удаляем №2!'); 
        clock.removeClock(2);
        clock.printAlarms();
    }, 2);
    
    clock.addClock(timeZeroes(timeNow.getTime() + 120000), () => {
        console.log('Всё останавливаем и очищаем.'); 
        clock.clearAlarms();
        clock.printAlarms();
    }, 3);
    
    //clock.addClock(timeZeroes(timeNow.getTime()), () => console.log('Пробуем будильник с тем же id'), 1);
    //clock.addClock(timeZeroes(timeNow.getTime()), () => console.log('Без id'));
    
    clock.printAlarms();
    clock.start();
}
testCase();


function timeZeroes(timeMilliseconds) { //вспомогательная функция для testCase
    const time = new Date(timeMilliseconds);
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    return hours + ":" + minutes;
}

