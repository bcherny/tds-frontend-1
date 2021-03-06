/**
 * TODO: Add typings and publish to DefinitelyTyped.
 */

declare module 'chart.piecelabel.js'

declare module 'mui-icons'

declare module 'mui-icons/cmdi/*'

declare module 'react-autocomplete'

/**
 * Globals
 */

/**
 * `_.chain(..)` gives a value of type `_.LoDashExplicitWrapper`. `chain` is
 * convenient because it lets us defer computations over collections and reap
 * the performance benefits of Lodash's loop fusion.
 *
 * We alias this type to `Lazy` and make it available globally for ease of
 * use and superior readability.
 */
type Lazy<T> = _.LoDashExplicitWrapper<T>
