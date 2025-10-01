const port = process.env.PORT || 3000

const fs = require( 'fs' )
const novita_token = fs.readFileSync("ai.token", "utf8").trim()

const { Readable } = require( 'stream' )
const http = require( 'http' )
const url = require( 'url' )

http.createServer( async function( request, responce ) {
    const cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    }
    if( request.method === 'OPTIONS' ) {
        responce.writeHead( 204, cors_headers )
        responce.end()
        return
    }

	// our "routes"
    const {
		link,
		translate
	} = url.parse( request.url, true ).query
    console.log( translate, link, request.url, request.headers )

    if( link !== undefined && link.trim() != "" ) {
		const proxy_url = decodeURIComponent( link )
		const proxy_request = await fetch(proxy_url)

		const headers = Object.fromEntries( proxy_request.headers )
		delete headers[ 'content-encoding' ]
		headers[ 'access-control-allow-origin' ] = "*"
		if(proxy_url.includes("opennet.ru")) {
			if( headers[ 'content-type' ].includes("charset") == false) {
				headers[ 'content-type' ] += "; charset=utf-8"
			}
			headers[ 'content-type' ] = headers[ 'content-type' ].replace("utf-8", "koi8-r")
		}
		
		// responce.writeHead( proxy_request.status, headers )
		responce.writeHead( proxy_request.status, {
			'access-control-allow-origin': "*",
			'content-type': headers[ 'content-type' ]
		} )
		Readable.fromWeb( proxy_request.body ).pipe( responce, { end: true } )
		return
	}

	if( translate !== undefined && translate.trim() != "" ) {
		responce.writeHead(200, {
			'access-control-allow-origin': "*",
			'content-type': 'text/plain; charset=utf-8'
		} )

		const content = decodeURIComponent( translate )
		const translated = await translate_text(content)
		responce.write(translated)
		return responce.end()
	}

	return responce.end()
} ).listen( port )

async function translate_text(text) {
	const url = 'https://api.novita.ai/openai/v1/chat/completions';
	const data = {
		"model": "qwen/qwen3-next-80b-a3b-instruct",
		"messages": [
			{
				"role": "system",
				"content": "You are translater, You shold translate user input to russin language and answer only this"
			},
			{
				"role": "user",
				"content": text
			}
		],
		"response_format": { "type": "text" },
		"max_tokens": 16384,
		"temperature": 1,
		"top_p": 1,
		"min_p": 0,
		"top_k": 50,
		"presence_penalty": 0,
		"frequency_penalty": 0,
		"repetition_penalty": 1
	};

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: novita_token
		},
		body: JSON.stringify(data)
	};

	
	try {
	  const response = await fetch(url, options);
	  const data = await response.json();
	  console.log(data.choices[0].message.content);
	  return data.choices[0].message.content
	} catch (error) {
	  console.error(error);
	  return text
	}
}
