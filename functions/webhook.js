export default async (req, context) => {
    console.log(req.headers);
    console.log(await req.json());
  return new Response("Hello, world!");
};
