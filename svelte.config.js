import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import adapterNetlify from "@sveltejs/adapter-netlify"; // Import the netlify adapter

// The following lines for adapterNode and adapterStatic are commented out
// as we are now defaulting to adapter-netlify.
// import adapterNode from "@sveltejs/adapter-node";
// import adapterStatic from "@sveltejs/adapter-static";

// // https://svelte.dev/docs/kit/adapter-node
// let adapter = adapterNode();

// // https://svelte.dev/docs/kit/adapter-static
// if (process.env.ADAPTER === "static") {
//   adapter = adapterStatic({
//     strict: false,
//     fallback: "index.html",
//   });
// }

// Use adapterNetlify by default
let adapter = adapterNetlify({
  // Netlify Edge Functions are enabled by default
  // edge: true, 
  // To disable Edge Functions and use regular Netlify Functions:
  // edge: false,
  // split: false, // if you don't want to split functions
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter, // This will now use adapterNetlify by default

    // See https://svelte.dev/docs/kit/configuration#env
    env: {
      privatePrefix: "KW_SECRET_",
      publicPrefix: "KW_PUBLIC_",
    },
  },
};

export default config;
