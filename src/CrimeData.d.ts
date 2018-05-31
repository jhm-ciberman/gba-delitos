export default interface CrimeData {
	id: string;
	tipoId: string;
	comunaId: string;
	comuna: string;
	barrioId: string;
	barrio: string;
	comisariaId: string | null;
	latitud: string;
	longitud: string;
	fecha: string;
	hora: string;
	uso_arma: string;
	uso_moto: string;
	lugar: string;
	origen_dato: string | null;
	tipo_delito: string;
	cantidad_vehiculos: string;
	cantidad_victimas: string;
}