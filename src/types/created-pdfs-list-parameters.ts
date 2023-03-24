export type CreatedPdfsListParameters = {
	/**
	 * ISO Date
	 * @example "01-01-2022"
	 */
	from: string;

	/**
	 * ISO Date
	 * @example "24-12-2022"
	 */
	to: string;

	limit: number;
	page: number;
};
