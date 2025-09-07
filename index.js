import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // redirect root / to registro-alumno
    //chatgpt weno pal pico no me digas como hacer la wea
    // serve static files from your repo
    return getAssetFromKV({ request });
  },
}; //thx chatgpt
