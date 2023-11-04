// Array Utils 

export const countDate = (array,  day) => {
	console.log("Counting"); 
	const newArray  = array.filter(e => {
		
		const dateSplitted = e.date.split('-'); 
		return (String(parseInt(dateSplitted[dateSplitted.length - 1])) === String(parseInt(day))); 
		});
	console.log("Day: " + day + "_ "+ newArray.length); 
	return newArray.length; // Cantidad de elementos despues del filtro 
}