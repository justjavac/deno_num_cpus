# deno_num_cpus

[![tag](https://img.shields.io/github/release/justjavac/deno_num_cpus)](https://github.com/justjavac/deno_num_cpus/releases)
[![Build Status](https://github.com/justjavac/deno_num_cpus/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_num_cpus/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_num_cpus)](https://github.com/justjavac/deno_num_cpus/blob/master/LICENSE)

Get the number of CPUs available on the current system.

Sometimes the CPU will exaggerate the number of CPUs it contains, because it can use [processor tricks](https://en.wikipedia.org/wiki/Simultaneous_multithreading) to deliver increased performance when there are more threads. This crate provides methods to get both the logical and physical numbers of cores.

This information can be used as a guide to how many tasks can be run in parallel. There are many properties of the system architecture that will affect parallelism, for example memory access speeds (for all the caches and RAM) and the physical architecture of the processor, so the number of CPUs should be used as a rough guide only.

## Usage

```ts
import num_cpus from "https://deno.land/x/num_cpus/mod.ts";

num_cpus();
// => 8
```

run example:

```shell
deno run --unstable --allow-plugin "https://deno.land/x/num_cpus/example.ts"
```

## Flags

- `--unstable`
- `--allow-plugin`

### License

[deno_num_cpus](https://github.com/justjavac/deno_num_cpus) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
