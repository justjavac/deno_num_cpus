import {
  assert,
} from "https://deno.land/std@0.68.0/testing/asserts.ts";

import num_cpus from "./mod.ts";

Deno.test("cpus is greater than 1", function () {
  assert(num_cpus() >= 1);
});
