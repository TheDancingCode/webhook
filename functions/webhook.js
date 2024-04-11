export default async (req, context) => {
    console.log(await req.json());
  return new Response("Hello, world!");
};
