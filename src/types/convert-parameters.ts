/**
 * @link https://pdfendpoint.com/docs/delivery-mode
 */

export enum DeliveryMode {
	/**
	 * The API returns a json response with a url to the generated PDF.
	 */
	json = 'json',

	/**
	 * The API returns a json response with a url to the generated PDF. Wrapped in a JSONP callback function. Has to be used with the callback parameter.
	 */
	jsonp = 'jsonp',

	/**
	 * The PDF document is displayed in the browser's built-in PDF viewer. Works like a normal download, but the browsers will display the PDF instead of downloading it.
	 */
	inline = 'inline',

	/**
	 * The service will make a POST request to the provided *webhook_endpoint* with the url to the PDF in a json object.
	 */
	webhook = 'webhook',

	/**
	 * The PDF document will be uploaded to an S3 bucket with the specified configuration.
	 */
	s3 = 's3',
}

export type S3Configuration = {
	/**
	 * Name of your S3 bucket if access has been provided to the pdfEndpoint AWS account. More secure and the recommended option.
	 */
	s3_bucket_name: string;

	/**
	 * AccessKeyID of your S3 bucket if not access rights have been provided to the pdfEndpoint AWS Account.
	 */
	s3_bucket_key: string;

	/**
	 * Secret of your S3 bucket if not access rights have been provided to the pdfEndpoint AWS Account.
	 */
	s3_bucket_secret: string;
};

export type ConvertParametersByDeliveryMode =
	| {
			delivery_mode?: DeliveryMode.jsonp;
			callback: string;
	  }
	| {
			delivery_mode?: DeliveryMode.webhook;
			webhook_endpoint: string;
	  }
	| ({
			delivery_mode?: DeliveryMode.s3;
	  } & S3Configuration)
	| {
			delivery_mode?: DeliveryMode.json;
	  }
	| {
			delivery_mode?: DeliveryMode.inline;
	  };

/**
 * @link https://pdfendpoint.com/docs#all-params-list
 */

export type CommonConvertParameters = {
	/**
	 * The full URL (including the **HTTPS-Protocol**) of the website you want to convert to a PDF document, e.g. https://example.com/invoice.html
	 */
	url?: string;

	/**
	 * Raw HTML code you would like to convert to a PDF document. Needs to include **html**, **head**, **title** and **body** tag.
	 */
	html?: string;

	/**
	 * Specify a PDF name of up to 180 characters.
	 * @default random
	 */
	filename?: string;

	/**
	 * JS code that will be injected as a script tag in the head section. Can be a URL or string.
	 */
	js?: string;

	/**
	 * CSS markup that will be injected as a style tag in the head section. Can be a URL or string.
	 */
	css?: string;

	/**
	 * If true and liquid_data has been set we will inject the data from the *liquid_data* object into all double curly-braces **{{key}}** tags
	 * @default false
	 */
	parse_liquid?: boolean;

	/**
	 * JSON object that holds the data to inject into the html
	 */
	liquid_data?: Record<string, unknown>;

	/**
	 * Token used to verify a request that is locked to a domain or specific html.
	 */
	secret_key?: string;

	/**
	 * Set to true in order to activate CSS @media print declarations
	 * @default false
	 */
	use_print_media?: boolean;

	/**
	 * Viewport size to render your html in.
	 * @link https://pdfendpoint.com/docs/document/page-setup#viewport
	 * @default "1440x900"
	 */
	viewport?: string;

	/**
	 * Adjust the HTML zoom factor
	 * @link https://pdfendpoint.com/docs/document/page-setup#zoom
	 * @default 1
	 */
	zoom?: number;

	/**
	 * Sets the orientation of the created pdf document
	 * @link https://pdfendpoint.com/docs/document/page-setup#orientation
	 * @default "vertical"
	 */
	orientation?: 'vertical' | 'horizontal';

	/**
	 * Pages to print. Can be one number (3), a range (1-5), a list (4, 5, 6) or a combination of both (1-3, 6, 7-20). If the number is higher than the real number of pages, that number will be ignored.
	 */
	print_pages?: string | number;

	/**
	 * Set to true in order to disable images
	 * @default false
	 */
	no_images?: boolean;

	/**
	 * Set to true in order to disable links
	 * @default false
	 */
	no_links?: boolean;

	/**
	 * Set to true in order to disable background graphics and colors
	 * @default false
	 */
	no_backgrounds?: boolean;

	/**
	 * Set to true in order to disable javascript
	 * @default false
	 */
	no_javascript?: boolean;

	/**
	 * Set to true in order to remove blank pages
	 * @default false
	 */
	no_blank_pages?: boolean;

	/**
	 * Set to true in order to disable css
	 * @default false
	 */
	no_css?: boolean;

	/**
	 * Set to true in order to remove ads
	 * @default false
	 */
	no_ads?: boolean;

	/**
	 * Set to true in order to disable forms
	 * @default false
	 */
	no_forms?: boolean;

	/* TODO: Describe remaining parameters */

	user_agent?: any;
	accept_lang?: any;
	accept_encoding?: any;
	page_size?: any;
	page_width?: any;
	page_height?: any;
	margin_top?: any;
	margin_bottom?: any;
	margin_left?: any;
	margin_right?: any;
	auth_user?: any;
	auth_password?: any;
	title?: any;
	author?: any;
	creator?: any;
	producer?: any;
	subject?: any;
	keywords?: any;
	encrypt?: any;
	owner_password?: any;
	user_password?: any;
	encryption_print_rights?: any;
	encryption_modify_rights?: any;
	encryption_copy_rights?: any;
	location_accuracy?: any;
	location_lat?: any;
	location_lng?: any;
	wait_for_selector?: any;
	wait_for_function?: any;
	wait_for_timeout?: any;

	/**
	 * If true we will wait for all network connections to close before rendering the html. If false we will wait until there are no more than two active connection in the last 500ms.
	 * @default false
	 */
	wait_for_network?: boolean;

	/**
	 * Scroll the whole page and load all images before rendering the pdf.
	 * @default false
	 */
	scroll_whole_page?: boolean;

	http_cookies?: any;
	http_headers?: any;
	watermark_text?: any;
	watermark_img?: any;
	watermark_font_size?: any;
	watermark_font_family?: any;
	watermark_font_color?: any;

	/**
	 * Set to true to make the watermark text bold.
	 * @default false
	 */
	watermark_font_bold?: boolean;

	/**
	 * Set to true to make the text style italic.
	 * @default false
	 */
	watermark_font_italic?: boolean;

	watermark_img_width?: any;
	watermark_img_height?: any;
	watermark_rotate?: any;
	watermark_opacity?: any;
	watermark_offset_x?: any;
	watermark_offset_y?: any;
	watermark_in_background?: any;
	header_html?: any;
	header_text?: any;
	header_align?: any;
	header_margin?: any;
	header_start_at?: any;
	footer_html?: any;
	footer_text?: any;
	footer_align?: any;
	footer_margin?: any;
	footer_start_at?: any;
};

export type ConvertParameters = CommonConvertParameters & ConvertParametersByDeliveryMode;
