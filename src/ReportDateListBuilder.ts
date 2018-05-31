import ReportDate from "./ReportDate";

export default class ReportDateListBuilder {
	public getList(minDate: ReportDate, maxDate: ReportDate): ReportDate[] {
		let result = [];
		let year = minDate.year;
		let month = minDate.month;
		
		while (year < maxDate.year || (year == maxDate.year && month <= maxDate.month)) {
			result.push(new ReportDate(year, month));

			month++;
			if (month > 12) {
				year++; 
				month = 1;
			}
		}
		return result;
	}
}