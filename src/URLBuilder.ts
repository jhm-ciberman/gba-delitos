import * as url from "url";
import ReportDate from "./ReportDate";
import CrimeType from "./CrimeType";

export default class URLBuilder {

	public makeUrl(baseUrl: string, date: ReportDate, crime: CrimeType): string {
		const uri = new url.URL(baseUrl);
		const p = uri.searchParams;
		p.set("mes", date.month.toFixed(0));
		p.set("anio", date.year.toFixed(0));
		p.set("tipo", crime.id.toFixed(0));
		p.set("lugarHecho", "1");
		p.set("usoArma", "1");
		p.set("usoMoto", "1");
		return uri.toString();
	}
}



/*
https://mapa.seguridadciudad.gob.ar/api/index.php/reporte?
grupo=COMUNA
tipo=18
mes=6
anio=2017
detalle=false
lugarHecho=1
usoArma=1
usoMoto=1


// https://mapa.seguridadciudad.gob.ar/api/index.php/delito
tipo=18
mes=6
anio=2017

lugarHecho=1


// https://mapa.seguridadciudad.gob.ar/api/index.php/reporte
grupo=COMUNA
tipo=18
mes=6
anio=2017
detalle=true
lugarHecho=1

*/