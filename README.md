<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# anyOwnBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether at least one own property of a provided object passes a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-any-own-by
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var anyOwnBy = require( '@stdlib/utils-any-own-by' );
```

#### anyBy( collection, predicate\[, thisArg ] )

Tests whether at least one own property of a provided [`object`][mdn-object] passes a test implemented by a `predicate` function.

```javascript
function isNegative( value ) {
    return ( value < 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': -24,
    'e': 12
};

var bool = anyOwnBy( obj, isNegative );
// returns true
```

If a `predicate` function returns a truthy value, the function **immediately** returns `true`.

```javascript
function isPositive( value ) {
    if ( value < 0 ) {
        throw new Error( 'should never reach this line' );
    }
    return ( value > 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': -24,
    'e': 12
};

var bool = anyOwnBy( obj, isPositive );
// returns true
```

The invoked `function` is provided three arguments:

-   **value**: property value.
-   **key**: property key.
-   **obj**: input object.

To set the function execution context, provide a `thisArg`.

```javascript
function verify( value ) {
    this.sum += value;
    this.count += 1;
    return ( value > 0 );
}

var obj = {
    'a': -1,
    'b': -2,
    'c': 3,
    'd': -14
};

var context = {
    'sum': 0,
    'count': 0
};

var bool = anyOwnBy( obj, verify, context );
// returns true

var mean = context.sum / context.count;
// returns 0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an empty object, the function returns `false`.

    ```javascript
    function verify() {
        return true;
    }
    var bool = anyOwnBy( {}, verify );
    // returns false
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var anyOwnBy = require( '@stdlib/utils-any-own-by' );

function threshold( value ) {
    return ( value > 0.94 );
}

var bool;
var obj = {};
var keys = [ 'a', 'b', 'c', 'd', 'e' ];
var i;
for ( i = 0; i < keys.length; i++ ) {
    obj[ keys[ i ] ] = randu();
}

bool = anyOwnBy( obj, threshold );
// returns <boolean>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-any-by`][@stdlib/utils/any-by]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-any-in-by`][@stdlib/utils/any-in-by]</span><span class="delimiter">: </span><span class="description">test whether at least one property in an object passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/object-every-own-by`][@stdlib/object/every-own-by]</span><span class="delimiter">: </span><span class="description">test whether all own properties of an object pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-some-own-by`][@stdlib/utils/some-own-by]</span><span class="delimiter">: </span><span class="description">test whether some `own` properties of a provided object satisfy a predicate function for at least `n` properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-any-own-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-any-own-by

[test-image]: https://github.com/stdlib-js/utils-any-own-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-any-own-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-any-own-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-any-own-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-any-own-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-any-own-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-any-own-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-any-own-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-any-own-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-any-own-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-any-own-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-any-own-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-any-own-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-any-own-by/main/LICENSE

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/any-by]: https://github.com/stdlib-js/utils-any-by

[@stdlib/utils/any-in-by]: https://github.com/stdlib-js/utils-any-in-by

[@stdlib/object/every-own-by]: https://github.com/stdlib-js/object-every-own-by

[@stdlib/utils/some-own-by]: https://github.com/stdlib-js/utils-some-own-by

<!-- </related-links> -->

</section>

<!-- /.links -->
