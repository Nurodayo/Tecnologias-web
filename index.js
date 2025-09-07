import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // redirect root / to registro-alumno
    if (url.pathname === "/") {
      return Response.redirect(url.origin + "/registro-alumno/", 302);
    }

    // serve static files from your repo
    return getAssetFromKV({ request });
  },
}; //thx chatgpt
