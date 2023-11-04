

export default class Queue{
	constructor(list){
		this.i = 0; 
		this.n = list.length; 
		this.array = list; 
	}

	current(){
		return this.array[this.i]; 
	}
	next(){
		this.i = (this.i + 1) % this.n; 
		console.log(`Value of i: ${this.i}`); 
		return this.array[this.i]; 
	}

	prev(){	
		this.i = this.i <= 0 ? this.n - 1 : this.i - 1; 
		return this.array[this.i]; 
	}

	size(){
		return this.n; 
	}
}