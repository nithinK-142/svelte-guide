import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
 
export default {
  kit: {
    // default options are shown
    adapter: adapter({
      edge: false,
      split: false
    })
  },
  preprocess: vitePreprocess()
};