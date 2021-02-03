import { Plug } from "https://deno.land/x/plug/mod.ts";

export const PLUGIN_VERSION = "v0.1.1";
const releaseUrl =
  `https://github.com/justjavac/deno_plugin_num_cpus/releases/download/${PLUGIN_VERSION}`;

const options: Plug.Options = {
  name: "deno_plugin_num_cpus",
  urls: {
    linux: `${releaseUrl}/libdeno_plugin_num_cpus.so`,
    darwin: `${releaseUrl}/libdeno_plugin_num_cpus.dylib`,
    windows: `${releaseUrl}/deno_plugin_num_cpus.dll`,
  },
};

let pluginId: number | null = null;

/**
 * Load the plugin
 */
async function load() {
  unload();
  pluginId = await Plug.prepare(options);
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
 * ## Example
 * 
 * ```ts
 * ```
 */
export default function numCpus(): number {
  // deno-lint-ignore ban-ts-comment
  //@ts-ignore
  const { op_num_cpus: opNumCpus } = Deno.core.ops();
  // deno-lint-ignore ban-ts-comment
  //@ts-ignore
  const response: Uint8Array = Deno.core.dispatch(opNumCpus)!;
  return response[0];
}

await load();
