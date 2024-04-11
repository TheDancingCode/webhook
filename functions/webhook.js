exports.handler = async (request) => {
    console.log(await request.json());
    return {
      statusCode: 200,
      body: 'Hello world!',
    };
  };