const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// CORS middleware
const allowCrossDomain = (request, responce, next) => {
	responce.header(`Access-Control-Allow-Origin`, `*`);
	responce.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
	responce.header(`Access-Control-Allow-Headers`, `Content-Type`);
	responce.header(`Access-Control-Max-Age`, 86400);
	next();
};
app.use(allowCrossDomain);
app.get('/translate', async (request, responce) => {
	const {text, to_lang } = request.query
	const translated = await translate_text(text, to_lang)
	responce.send(translated)
})
app.get('/summary', async (request, responce) => {
	const {text, to_lang } = request.query
	const translated = await summary_text(text, to_lang)
	responce.send(translated)
})
app.get('/proxy', async (request, responce) => {
	const { link } = request.query
    if( link !== undefined && link.trim() != "" ) {
		const proxy_request = await fetch(link)
		const headers = Object.fromEntries( proxy_request.headers )
		delete headers[ 'content-encoding' ]
		headers[ 'access-control-allow-origin' ] = "*"
		if(link.includes("opennet.ru")) {
			if( headers[ 'content-type' ].includes("charset") == false) {
				headers[ 'content-type' ] += "; charset=utf-8"
			}
			headers[ 'content-type' ] = headers[ 'content-type' ].replace("utf-8", "koi8-r")
		}
		
		responce.writeHead( proxy_request.status, {
			'access-control-allow-origin': "*",
			'content-type': headers[ 'content-type' ]
		} )
		Readable.fromWeb( proxy_request.body ).pipe( responce, { end: true } )
	}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const fs = require( 'fs' )
const novita_token = fs.readFileSync("ai.token", "utf8").trim()
const { Readable } = require( 'stream' )

async function translate_text(text, to_lang) {
	const url = 'https://api.novita.ai/openai/v1/chat/completions';
	const data = {
		"model": "qwen/qwen3-next-80b-a3b-instruct",
		"messages": [
			{
				"role": "system",
				"content": `You are translater, You shold translate user input to ${to_lang} language and answer only this`
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
	//   console.log(data.choices);
	//   console.log(data.choices[0].message.content);
	  return data.choices[0].message.content
	} catch (error) {
	  console.error(error);
	  return text
	}
}

async function summary_text(text, to_lang) {
	const url = 'https://api.novita.ai/openai/v1/chat/completions';
	const data = {
		"model": "qwen/qwen3-next-80b-a3b-instruct",
		"messages": [
			{
				"role": "system",
				"content": `You are summariser, You shold summary user input to ${to_lang} language and answer only this (max length is two sentence)`
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
	//   console.log(data.choices[0].message.content);
	  return data.choices[0].message.content
	} catch (error) {
	  console.error(error);
	  return text
	}
}
