'use strict'

// sam local start-api
module.exports.handler = async (event) => {  
    const { body } = event
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: body
    }
}

module.exports.test = async (event) => {  
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: 'test response ' + Math.random()
    }
}