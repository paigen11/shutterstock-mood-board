// client key and secret for shutterstock api access (non expiring key)
const client_id = 'd7408-17a74-f31d9-2b9dc-5656b-b20ac';
const client_secret = '41fac-9ecfd-7272d-1b1a6-08687-46567';

//shutterstock base url
const baseUrl = '@api.shutterstock.com/v2/';

//full documentation for query structuring: https://developers.shutterstock.com/images/apis/get/images/search
const images='images/search?query=';

//full documentation for query structuring: https://developers.shutterstock.com/videos/apis/get/videos/search
const videos='/videos/search?query=';

var searchTerm = 'placeholder';

const basicImageSearch = `https://${client_id}:${client_secret}${baseUrl}${images}${searchTerm}`;
const basicVideoSearch = `https://${client_id}:${client_secret}${baseUrl}${videos}${searchTerm}`;