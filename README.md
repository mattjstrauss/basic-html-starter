# A basic HTML starter project with Sass and Gulp.js

## Project Languages
1. HTML5
2. Sass
3. jQuery

## Project Utilities (Optional)
1. [Bootstrap Framework (Grid Only)](https://getbootstrap.com/docs/4.0/layout/grid/): A free and open-source front-end web framework for building responsive, mobile-first websites and web applications.
2. [Eric Meyers reset](https://meyerweb.com/eric/tools/css/reset/) and [Normalize.css](https://necolas.github.io/normalize.css/): Makes browsers render all elements more consistently and in line with modern standards.
3. [Modernizer](https://modernizr.com/): A collection of superfast tests – or “detects” as we like to call them – which run as your web page loads, then you can use the results to tailor the experience to the user.
4. [TweenMax by Greensock](https://greensock.com/tweenmax): Built for convenience, TweenMax provides a single JavaScript file that contains everything you will commonly need for animating DOM elements.
5. [SVG for Everybody](https://jonathantneal.github.io/svg4everybody/): SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.

### Working with [Gulp.js](https://gulpjs.com/)
1. Dependencies [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm)
> npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.
2. Check that you have node and npm installed by running `node -v` and `npm -v` in your terminal
3. If the commant is not found install them using the links above and if it doesn't work in your project's folder, try installing them globally using your `sudo` commant

### Gulp Core Files
1. gulp.js
2. package.js
3. Node_modules (not created until gulp is installed by following below)

### Gulp Usage
1. To install you position yourself in the project folder by traversing via terminal using the cd command and install using npm by running the command below:<br />
`$ npm install`

2. To initially process javascript, sass and any gulp tasks found in the gulp.js file by running the command below:<br />
`$ gulp`

3. To watch javascript, sass and any gulp tasks found in the gulp.js file by running the command below:<br />
`$ gulp watch`

4. To add SVG’s to spritemap, drop any svg into the /src/svg folder. The name of the svg will become the id of the svg.<br />
> Make any changes such as fill="currentColor" to the svg inside of the /src/svg folder and Gulp will process.

### Gulp Task File Structure:

1. JavaScript<br />
`/src/lib/*.js` -> `/js/lib` -- Any standalone JavaScript file. Usually for polyfills or large libraries independent of the projects unique scripts.<br />
`/src/plugins/*.js` -> `/js/plugins.js` -- All files get concat, and minified into one plugins.js<br />
`/src/partials/*.js -> `/js/scripts.js` -- All files get concat, and minified into one scripts.js<br />

2. CSS<br />
`/src/css/*` -> `/css/style.css` -- All files get concat into one style.css<br />
`/src/css/base`<br />
`/src/css/components`<br />
`/src/css/utilities`style.scss <br />

3. SVG<br />
`/src/svg/*.svg` -> `/img/spritemap.svg`<br />

Include SVG’s using via the code below:
``` html
<svg>
      <use xlink:href="PATH/img/spritemap.svg#FILE-NAME"></use>
<svg>
```
The FILE-NAME above should not include .svg at the end of it just as it is above.

### Ignored from this repository are the following
- *~
- *.keep
- .DS_Store
- .sass-cache
- _assets
- node_modules
- bkp
- bkp/
- bkp/*
- css/config.rb
- scss/.sass-cache
- scss/.sass-cache/*
