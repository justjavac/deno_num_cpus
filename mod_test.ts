import { assert } from "https://deno.land/std@0.68.0/testing/asserts.ts";

import numCpus from "./mod.ts";

Deno.test("cpus is greater than 1", function () {
  assert(numCpus() >= 1);
});
