extern crate deno_core;
extern crate num_cpus;

use deno_core::plugin_api::{Buf, Interface, Op, ZeroCopyBuf};

#[no_mangle]
pub fn deno_plugin_init(interface: &mut dyn Interface) {
  interface.register_op("num_cpus", op_num_cpus);
}

fn op_num_cpus(
  _interface: &mut dyn Interface,
  _zero_copy: &mut [ZeroCopyBuf],
) -> Op {
  let nums = num_cpus::get() as u8;
  let result: Buf = Box::new([nums]);
  Op::Sync(result)
}
