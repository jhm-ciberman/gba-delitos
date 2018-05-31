import CrimeType from "./CrimeType";

export default class CrimeListBuilder {
	public static getList(): CrimeType[] {
		return [
			new CrimeType(18, "Homicidio Doloso"),
			new CrimeType(17, "Homicidio Seg Vial"),
			new CrimeType(16, "Lesiones Seg Vial"),
			new CrimeType(2, "Hurto (Sin violencia)"),
			new CrimeType(3, "Hurto Automotor"),
			new CrimeType(4, "Hurto De Autopartes"),
			new CrimeType(5, "Hurto De Bicicleta"),
			new CrimeType(6, "Hurto De Chapa Patente"),
			new CrimeType(7, "Hurto De Moto / Ciclomotor"),
			new CrimeType(8, "Hurto De Rueda"),
			new CrimeType(9, "Robo (Con violencia)"),
			new CrimeType(10, "Robo Automotor"),
			new CrimeType(11, "Robo De Autopartes"),
			new CrimeType(12, "Robo De Bicicleta"),
			new CrimeType(13, "Robo De Chapa Patente"),
			new CrimeType(14, "Robo De Moto / Ciclomotor"),
			new CrimeType(15, "Robo De Rueda"),
		]
	}
}