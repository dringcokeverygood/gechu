export default function dateFormatting(time: string) {
	const date = time.split('T')[0].split('-');

	return date[0] + '.' + date[1] + '.' + date[2];
}
