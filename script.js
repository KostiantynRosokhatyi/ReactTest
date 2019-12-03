class Worker{
	constructor(name, surname, rate, days) {
		this._name = name;
		this._surname = surname;
		this._rate = rate;
		this._days = days;
			}
	getSalary(){
		return this._days * this._rate;
	}
	getName(name){
		return this._name;
	}
	getSurname(surname){
		return this._surname;
	}
	getRate(rate){
		return this._rate;
	}
	setRate(rate){
		this._rate = rate;
	}
}
let worker = new Worker('Kris','Kristofer',10,31);

worker.setRate(20);

class MyString {

	constructor(mystring){
		this._mystring = mystring;
	}

	reverse(mystring){
		return this._mystring.split("").reverse().join("");
	}
}

let str = new MyString("Testing");
alert(str.reverse());
