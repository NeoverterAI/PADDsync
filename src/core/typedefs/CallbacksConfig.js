/**
 * @typedef {object} PADDsync.Types.Core.CallbacksConfig
 * @since 3.0.0
 *
 * @property {PADDsync.Types.Core.BootCallback} [preBoot=PADDsync.Types.Core.NOOP] - A function to run at the start of the boot sequence.
 * @property {PADDsync.Types.Core.BootCallback} [postBoot=PADDsync.Types.Core.NOOP] - A function to run at the end of the boot sequence. At this point, all the game systems have started and plugins have been loaded.
 */
