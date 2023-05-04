export type ConvertResponse = {
	request_id: string;
	success: boolean;
	billed: boolean;
	billed_units: number;
	error?: {
		code: string;
		status: number;
		message: string;
		link: string;
		docs_link: string | null;
		support_email: string;
	};
	data?: {
		file_size: number;
		url: string;
		expires_after: string;
		filename: string;
	};
};
