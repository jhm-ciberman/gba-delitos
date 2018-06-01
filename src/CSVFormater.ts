import CrimeData from "./CrimeData";

export default class CSVFormater {

	private _weekDaysNames: string[] = [
		"Domingo",
		"Lunes",
		"Martes",
		"Miércoles",
		"Jueves",
		"Viernes",
		"Sábado",
	]

	private _monthsNames: string[] = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	]

	public getHeader(): string[] {
		return [
			"AÑO",
			"MES",
			"DIA DE LA SEMANA",
			"FECHA DEL HECHO",
			"FRANJA 24 HS",
			"HORA DEL HECHO",
			"USO DE ARMA",
			"USO DE MOTO",
			"LUGAR DEL HECHO",
			"ORIGEN DEL DATO",
			"TIPO DE DELITO",
			"CANTIDAD DE VEHICULOS",
			"LATITUD",
			"LONGITUD",
			"COMUNA",
			"BARRIO",
		]
	}
	public formatCrime(crime: CrimeData): string[] {
		const [anio, mes, dia] = crime.fecha.split("-").map(s => parseInt(s));
		const date = new Date(anio, mes, dia);
		return [
			anio.toString(), //"AÑO",
			this._monthsNames[mes - 1], //"MES",
			this._weekDaysNames[date.getDay()], //"DIA DE LA SEMANA",
			crime.fecha, //"FECHA DEL HECHO",
			crime.hora.split(":")[0], //"FRANJA 24 HS",
			crime.hora, //"HORA DEL HECHO",
			crime.uso_arma, //"USO DE ARMA",
			crime.uso_moto, //"USO DE MOTO",
			crime.lugar, //"LUGAR DEL HECHO",
			crime.origen_dato || "", //"ORIGEN DEL DATO",
			crime.tipo_delito, //"TIPO DE DELITO",
			crime.cantidad_vehiculos, //"CANTIDAD DE VEHICULOS",
			crime.latitud, //"LATITUD",
			crime.longitud, //"LONGITUD",
			crime.comuna, //"COMUNA",
			crime.barrio, //"BARRIO",
		]

	}
}