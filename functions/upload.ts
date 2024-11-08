interface Env {
  BUCKET: R2Bucket;
}

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const obj = await ctx.env.BUCKET.get("Gby3jXIWcA0lrYp.jpeg");
  if (obj === null) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(obj.body);
};
