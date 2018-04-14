the-support
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-support
[bd_travis_url]: http://travis-ci.org/the-labo/the-support
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-support.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-support
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-support.svg?token=
[bd_license_url]: https://github.com/the-labo/the-support/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/the-labo/the-support
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/the-labo/the-support.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/the-labo/the-support.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/the-labo/the-support
[bd_gemnasium_shield_url]: https://gemnasium.com/the-labo/the-support.svg
[bd_npm_url]: http://www.npmjs.org/package/the-support
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-support.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

JS support version checker

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-support --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const {TheSupport} = require('the-support')

async function tryExample () {
  const support = new TheSupport('public/bundle/**/*.js')

  await support.es5() // Throw error unless es5 compatible
}

tryExample().catch((err) => console.error(err))

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/10.API Guide.md.hbs" Start -->

<a name="section-doc-guides-10-a-p-i-guide-md"></a>

API Guide
-----

+ [the-support@1.0.2](./doc/api/api.md)
  + [create(args)](./doc/api/api.md#the-support-function-create)
  + [TheSupport](./doc/api/api.md#the-support-class)


<!-- Section from "doc/guides/10.API Guide.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-support/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
