import {
  prepare,
  PerpareOptions,
} from "https://deno.land/x/plugin_prepare/mod.ts";

export const VERSION = "v0.1.5";
const releaseUrl =
  `https://github.com/justjavac/deno_num_cpus/releases/download/${VERSION}`;

const pluginOptions: PerpareOptions = {
  name: "deno_num_cpus",
  urls: {
    linux: `${releaseUrl}/libdeno_num_cpus.so`,
    darwin: `${releaseUrl}/libdeno_num_cpus.dylib`,
    windows: `${releaseUrl}/deno_num_cpus.dll`,
  },
};

let pluginId: number | null = null;

/**
 * Load the plugin
 */
async function load() {
  unload();
  pluginId = await prepare(pluginOptions);
}

/**
 * Free the plugin resource
 */
function unload(): void {
  if (pluginId !== null) Deno.close(pluginId);
  pluginId = null;
}

/**
 * Get the number of CPUs available on the current system.
 * 
 * Sometimes the CPU will exaggerate the number of CPUs it contains, because it
 * can use [processor tricks](https://en.wikipedia.org/wiki/Simultaneous_multithreading)
 * to deliver increased performance when there are more threads. 
 * This crate provides methods to get both the logical and physical numbers of cores.
 * 
 * This information can be used as a guide to how many tasks can be run in parallel.
 * There are many properties of the system architecture that will affect parallelism,
 * for example memory access speeds (for all the caches and RAM) and the physical
 * architecture of the processor, so the number of CPUs should be used as a rough guide only.
 */
export default function num_cpus(): number {
  //@ts-ignore
  const { num_cpus } = Deno.core.ops();
  //@ts-ignore
  const response = Deno.core.dispatch(num_cpus)!;
  return response[0];
}

await load();
