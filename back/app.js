const port = process.env.PORT || 3000

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

    let { link } = url.parse( request.url, true ).query
    console.log( link, request.url, request.headers )

    if( link === undefined || link.trim() == "" ) {
        return responce.end()
    }

    const proxy_request = await fetch(decodeURIComponent( link ))
    const headers = Object.fromEntries( proxy_request.headers )
    delete headers[ 'content-encoding' ]
    headers[ 'access-control-allow-origin' ] = "*"
    
    responce.writeHead( proxy_request.status, {'access-control-allow-origin': "*"} )
    Readable.fromWeb( proxy_request.body ).pipe( responce, { end: true } )
} ).listen( port )
