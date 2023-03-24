# pdfEndpoint service

Wrapper for more convenient use of the service.

pdfEndpoint docs - [pdfendpoint.com/docs](https://pdfendpoint.com/docs).

### Usage example

```ts
import { PdfEndpointService } from 'pdfendpoint';

const pdfEndpointService = new PdfEndpointService('MY_API_KEY')

await pdfEndpointService.convert({ ... })
```
