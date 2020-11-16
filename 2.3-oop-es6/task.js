//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(curState) {
        if (curState < 0) {
            this._state = 0;
        } else if (curState > 100) {
            this._state = 100;
        } else {
            this._state = curState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

//Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] == value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        const needBook = this.findBookBy('name', bookName);
        if (needBook) {
            this.books.splice(this.books.indexOf(needBook), 1);
            return needBook;
        } else {
            return null;
        }
    }
}

//Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!(subject in this.subjects)) { //если нет предмета, создаём его
            this.subjects[subject] = [];
        }

        const gradeInt = Number.parseInt(grade);
        if (!isNaN(gradeInt) && gradeInt > 0 && gradeInt < 6) { //оценка должна быть числом между 1 и 5
            this.subjects[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }

        return this.subjects[subject].length;
    }

    getAverageBySubject(subject) {
        if (!(subject in this.subjects) || !this.subjects[subject].length) {
            return 0;
        }

        let sum = 0;
        for (let i = 0; i < this.subjects[subject].length; i++) {
            sum += this.subjects[subject][i];
        }

        return Math.round(sum / this.subjects[subject].length);
    }

    getTotalAverage() {
        let counter = 0;
        let sum = 0;

        for (let subItem in this.subjects) {
            for (let grades of this.subjects[subItem]) {
                sum += grades;
                counter++;
            }
        }

        if (counter == 0) {
            return 0;
        } else {
            return sum / counter;
        }
    }
}
