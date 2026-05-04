/* tslint:disable */
/* eslint-disable */

/**
 * The emulator instance exposed to JavaScript.
 *
 * Create one with `new EmulatorWasm()` from JS, then call `step_batch` in
 * a loop. See the module documentation for a full usage example.
 */
export class EmulatorWasm {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns `true` if the emulator encountered an unrecoverable fault.
     */
    is_fault(): boolean;
    /**
     * Returns `true` if the CPU has stopped for any reason.
     *
     * When this returns `true`, check [`is_restart`], [`is_poweroff`], or
     * [`is_fault`] to find out why.
     *
     * [`is_restart`]: EmulatorWasm::is_restart
     * [`is_poweroff`]: EmulatorWasm::is_poweroff
     * [`is_fault`]: EmulatorWasm::is_fault
     */
    is_halted(): boolean;
    /**
     * Returns `true` if the kernel issued a clean shutdown.
     */
    is_poweroff(): boolean;
    /**
     * Returns `true` if the kernel requested a reboot.
     *
     * The JavaScript caller should free the current instance and create a new
     * one: `emu.free(); emu = new EmulatorWasm();`
     */
    is_restart(): boolean;
    /**
     * Create a new emulator and load the embedded Linux kernel image.
     *
     * This allocates 64 MB of emulated RAM and copies the kernel into it.
     * On failure (e.g. kernel too large) a JavaScript `Error` is thrown.
     */
    constructor();
    /**
     * Send a keyboard byte to the emulator.
     *
     * Call this from the xterm.js `onData` callback:
     * ```js
     * term.onData(data => {
     *   for (let i = 0; i < data.length; i++) emu.send_key(data.charCodeAt(i));
     * });
     * ```
     */
    send_key(byte: number): void;
    /**
     * Execute up to `n` instructions and return any UART output as UTF-8.
     *
     * Returns an empty string if the CPU is already halted. The JavaScript
     * caller should check [`is_halted`] after each call and stop the loop
     * when it returns `true`.
     *
     * [`is_halted`]: EmulatorWasm::is_halted
     */
    step_batch(n: number): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_emulatorwasm_free: (a: number, b: number) => void;
    readonly emulatorwasm_is_fault: (a: number) => number;
    readonly emulatorwasm_is_halted: (a: number) => number;
    readonly emulatorwasm_is_poweroff: (a: number) => number;
    readonly emulatorwasm_is_restart: (a: number) => number;
    readonly emulatorwasm_new: () => [number, number, number];
    readonly emulatorwasm_send_key: (a: number, b: number) => void;
    readonly emulatorwasm_step_batch: (a: number, b: number) => [number, number];
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
