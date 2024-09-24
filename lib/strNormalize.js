export function strNormalize(inputText) {
	let rawText = inputText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
	// Adding filtering out numbers; changing /\s+/ to /[\d\s]+/
	rawText = rawText.replace(/[\d\s]+/g, '');
	rawText = rawText.trim();
	rawText = rawText.replace(/[^a-zA-Z0-9 ]/g, '');
	rawText = rawText.toLowerCase();
	return rawText;
}