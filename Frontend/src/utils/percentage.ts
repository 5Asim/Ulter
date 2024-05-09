export default function percentage(value: number, standard: number): number {
	if (standard === 0) {
		throw new Error("Standard value cannot be zero as it causes division by zero.");
	}
      
	// Calculate the percentage difference
	const result = ((standard - value) / standard) * 100;
      
	// Format result to two decimal places and convert it back to a number
	return parseFloat(result.toFixed(4));
      }
      