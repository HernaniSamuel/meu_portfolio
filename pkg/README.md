# riscv-emulator

A RISC-V RV32IMA emulator written in Rust, capable of running a real Linux kernel and FreeRTOS. Compiles to WebAssembly for in-browser execution.

**[▶ Live Demo — Linux running in your browser](https://hernanisamuel.github.io/meu_portfolio/)**  
**[📖 API Documentation](https://hernanisamuel.github.io/riscv-emulator/riscv_emulator/index.html)**

---

## Features

- Full **RV32IMA** ISA — base integer, multiply/divide, atomics
- Machine-mode privileged spec: traps, CSRs, MRET, WFI, ECALL
- **CLINT** timer with accurate `mtime`/`mtimecmp` (fires real timer interrupts)
- **UART 16550** compatible console
- Boots a real **Linux 6.1.14** kernel (uClinux/nommu, Buildroot rootfs)
- Boots **FreeRTOS** bare-metal ELF images
- **ELF loader** with symbol table — bare-metal programs run directly
- **Disassembler** — objdump-compatible output with ABI register names and pseudoinstructions
- **Execution tracer** — compact per-instruction log with register diff
- **Single-step mode** — full register dump with change highlighting after each instruction
- **WebAssembly target** — kernel embedded at compile time, runs in any modern browser

---

## Quick start

### Prerequisites

- [Rust](https://rustup.rs/) 1.91+
- A kernel image (see [Credits](#credits) for the Linux image source)

### Build

```bash
git clone https://github.com/HernaniSamuel/riscv-emulator
cd riscv-emulator
cargo build --release
```

### Run Linux

```bash
cargo run --release -- -f operational-systems/Image
```

### Run a bare-metal ELF

```bash
cargo run --release -- -e operational-systems/freertos.elf
```

---

## Usage

```
riscv-emulator [OPTIONS] <--file <FILE> | --elf <FILE>>

Image options:
  -f, --file <FILE>       Raw Linux kernel image
  -e, --elf  <FILE>       RV32 bare-metal or FreeRTOS ELF

Linux options:
  -k, --cmdline <CMDLINE> Kernel command line
  -b, --dtb <FILE>        External DTB file, or 'disable'

Execution options:
  -m, --ram <BYTES>       RAM size in bytes  [default: 67108864 (64 MB)]
  -c, --count <N>         Instruction limit  [default: unlimited]
  -t, --time-divisor <N>  Slow down the emulated CPU  [default: 1]
  -l, --lock-time         Lock time base to instruction counter
  -p, --no-sleep          Disable WFI sleep (maximum throughput)
  -s, --single-step       Print full register state after each instruction
  -d, --fault-halt        Halt immediately on any fault

Analysis:
      --disasm            Disassemble ELF and exit (requires -e)
      --trace <FILE>      Write compact execution trace to file
```

### Examples

```bash
# Boot Linux with a custom kernel command line
./riscv-emulator -f Image -k "console=ttyS0 loglevel=8"

# Disassemble a FreeRTOS binary
./riscv-emulator --disasm -e freertos.elf

# Trace the first 50 000 instructions to a file
./riscv-emulator -e freertos.elf --trace trace.txt -c 50000

# Single-step through the first 20 instructions
./riscv-emulator -e freertos.elf -s -c 20
```

### Trace format

Each line of a `--trace` file records one instruction and the registers it modified:

```
80000000  02000117  auipc   sp, 0x2000                    sp=82000000
80000004  00010113  mv      sp, sp
80000014  510010ef  jal     ra, <main>                    ra=80000018
80001524  ff010113  addi    sp, sp, -16                   sp=81fffff0
```

The format is fixed-column and easy to parse with standard tools:

```python
for line in open("trace.txt"):
    parts = line.split()
    pc, ir, *rest = parts
    changes = [p for p in rest if "=" in p]
```

---

## WebAssembly

Build for the browser with [wasm-pack](https://rustwasm.github.io/wasm-pack/):

```bash
rustup target add wasm32-unknown-unknown
cargo install wasm-pack
wasm-pack build --target web --out-dir www/pkg
```

The kernel image is embedded at compile time with `include_bytes!`, so no server-side file I/O is needed. See [`src/wasm.rs`](src/wasm.rs) and the [API docs](https://hernanisamuel.github.io/riscv-emulator/riscv_emulator/wasm/index.html) for the JavaScript interface.

---

## Memory map

| Address | Peripheral |
|---------|-----------|
| `0x8000_0000` | RAM base (default 64 MB) |
| `0x1000_0000` | UART 16550 TX/RX |
| `0x1000_0005` | UART LSR |
| `0x1100_4000` | CLINT `mtimecmp` low |
| `0x1100_4004` | CLINT `mtimecmp` high |
| `0x1100_BFF8` | CLINT `mtime` low (read-only) |
| `0x1100_BFFC` | CLINT `mtime` high (read-only) |
| `0x1110_0000` | SYSCON (`0x5555` = poweroff, `0x7777` = restart) |

---

## Project structure

```
src/
├── lib.rs        Entry point — module declarations and crate-level docs
├── cpu.rs        CpuState, StepResult, Trap, CSR addresses
├── emulator.rs   Execution loop, image loading, single-step, trace
├── mmio.rs       UART, CLINT, SYSCON handlers; RAM load/store helpers
├── platform.rs   Platform trait + POSIX and Windows implementations
├── elf.rs        ELF32 parser and symbol table
├── disasm.rs     RV32IMA disassembler
├── wasm.rs       WebAssembly bindings (wasm32 only)
├── dtb.rs        Embedded default device tree blob
└── main.rs       CLI (clap)
```

---

## Credits

This project stands on the shoulders of prior work:

- **[mini-rv32ima](https://github.com/cnlohr/mini-rv32ima)** by [CNLohr](https://github.com/cnlohr) — the original C implementation and the source of the Linux kernel image (`operational-systems/Image`). Licensed under BSD/MIT/CC0.

- **[riscv-emulator-linux](https://github.com/HernaniSamuel/riscv-emulator-linux)** — a fork of mini-rv32ima that was refactored and used as the C reference for this Rust port.

- **[freertos-riscv-test](https://github.com/HernaniSamuel/freertos-riscv-test)** — the FreeRTOS test suite compiled to `operational-systems/freertos.elf`.

---

## License

MIT
