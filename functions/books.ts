interface Env {
  BUCKET: R2Bucket;
}

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const req = ctx.request;
  const url = new URL(req.url);
  const key = url.pathname.slice(1);

  switch (req.method) {
    case "PUT": {
      await ctx.env.BUCKET.put(key, req.body);
      return new Response(`Put!`);
    }
    case "GET": {
      const obj = await ctx.env.BUCKET.get(key);
      if (obj === null) {
        return new Response("Not found", { status: 404 });
      }
      return new Response(obj.body);
    }
    case "DELETE": {
      await ctx.env.BUCKET.delete(key);
      return new Response("Deleted!");
    }
    default: {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: {
          Allow: "PUT, GET, DELETE",
        },
      });
    }
  }
};
