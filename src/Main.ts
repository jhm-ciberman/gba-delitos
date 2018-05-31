import ReportDateListBuilder from "./ReportDateListBuilder";
import ReportDate from "./ReportDate";
import URLBuilder from "./URLBuilder";
import CrimeType from "./CrimeType";
import fetch from "node-fetch";
import CrimeData from "./CrimeData";
import * as fs from "fs";
import * as path from "path";
import CSVFormater from "./CSVFormater";

export default class Main {
	static async main() {

		const min = new ReportDate(2016, 1);
		const max = new ReportDate(2017, 6);
		const reportDateListBuilder = new ReportDateListBuilder();
		const datesList = reportDateListBuilder.getList(min, max);


		const baseUrl = "https://mapa.seguridadciudad.gob.ar/api/index.php/delito";
		const allCrimes = new CrimeType(1, "Todos los crímenes");
	
		const urlBuilder = new URLBuilder();
		const csvFormater = new CSVFormater();

		const outPath = path.resolve("gba-delitos.csv");
		const stream = fs.createWriteStream(outPath);
		stream.write(csvFormater.getHeader().map(s => `"${s}"`).join(","));

		let totalCrimes: number = 0;
		for (const date of datesList) {
			const url = urlBuilder.makeUrl(baseUrl, date, allCrimes);
			console.log(`Downloading data for month ${date.month}/${date.year}`);
			console.log(`URL: ${url}`);
			const crimes: CrimeData[] = await fetch(url).then(r => r.json());
			totalCrimes += crimes.length;

			console.log(`Found ${crimes.length} crimes (${totalCrimes} total)`);
			console.log(``);
			for (const crime of crimes) {
				const data = csvFormater.formatCrime(crime);
				stream.write("\n" + data.map(s => `"${s}"`).join(","));
			}
		}
		stream.end();

		console.log(`Ready!!`)
		console.log(`Output csv file is in: ${outPath}`);
		console.log(`Bye!`);
	}


}