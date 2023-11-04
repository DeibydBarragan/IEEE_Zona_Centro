
export const getWeekDay = (year, month, day) => {
	const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]; 
	const date = new Date(year, month, day); 
	return days[date.getDay()]; 
}

export const numberToMonth = (month) => {

	const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
	if (month < 0 || month > months.length)
		throw('Elige un mes adecuado'); 
	return months[month]; 
}


export const djangoToDate = (djangoDate) => {
	let date =  new Date(djangoDate); 
	// Agregar un día ya que existe un desfase al hacer la conversión. 
	date.setDate( date.getDate() + 1 );
	return date; 
}

export const numberOfDaysInMonth = (year, month) => {
	const date = new Date(year, month, 0).getDate(); 
	return date; 
}

export const formatHour = (unformatHour) => {
	return unformatHour.split(':').slice(0,2).join(':'); 
}