export default function dateFormatting(time: string) {
	const date = time.split('T')[0].split('-');

	return date[0] + '.' + date[1] + '.' + date[2];
}
export function dateTimeFormatting(time: string) {
	const date = time.split('T')[0].split('-');
	const hm = time.split('T')[1].split(':');
	return date[0] + '.' + date[1] + '.' + date[2] + ' ' + hm[0] + ':' + hm[1];
}
