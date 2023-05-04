import fetch, { Headers } from 'cross-fetch';

import {
	PDFENDPOINT_CONVERT_URL,
	PDFENDPOINT_HEALTH_URL,
	PDFENDPOINT_USAGE_URL,
	PDFENDPOINT_LIST_URL,
} from './constants.js';

import type { ConvertParameters } from './types/convert-parameters.js';
import type { ConvertResponse } from './types/convert-response.js';
import type { CreatedPdfsListParameters } from './types/created-pdfs-list-parameters.js';

export class PdfEndpointService {
	private requestHeaders: Headers;

	constructor(apiKey: string) {
		this.requestHeaders = new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${apiKey}`,
		});
	}

	/**
	 * This is the main endpoint you will be using with pdfEndpoint. This endpoint creates the pdf end returns the result.
	 */
	public async convert(parameters: ConvertParameters): Promise<ConvertResponse> {
		const response = await fetch(PDFENDPOINT_CONVERT_URL, {
			method: 'POST',
			headers: this.requestHeaders,
			body: JSON.stringify(parameters),
		});

		return response.json();
	}

	/**
	 * Want to now if our system are all good? Use this endpoint to get the current system status.
	 */
	public async checkHealth() {
		const response = await fetch(PDFENDPOINT_HEALTH_URL, {
			method: 'GET',
			headers: this.requestHeaders,
		});

		return response.json();
	}

	/**
	 * The usage endpoint returns your current api usage. Usage is always tied to current billing cycle and will reset after an invoice has been created and paid.
	 */
	public async getUsage() {
		const response = await fetch(PDFENDPOINT_USAGE_URL, {
			method: 'GET',
			headers: this.requestHeaders,
		});

		return response.json();
	}

	/**
	 * This endpoint lists your created PDFs from the latest to the oldest created PDF.
	 */
	public async getCreatedPdfsList(parameters: CreatedPdfsListParameters) {
		const urlParameters = new URLSearchParams(parameters as Record<any, any>);

		const response = await fetch(PDFENDPOINT_LIST_URL + `?${urlParameters.toString()}`, {
			method: 'GET',
			headers: this.requestHeaders,
		});

		return response.json();
	}
}
