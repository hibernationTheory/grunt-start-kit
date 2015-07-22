# grunt-start-kit
### A Set of files to get started with grunt for your project

- This is a starter kit for using Grunt, the structure is built in a way that separates each indiviual Grunt plugin into it's own file. (inside the folder: /grunt/)

- These files make use of Grunt templates for having variables determine some parameters of them.

- Grunfile.js has different modes of build for different purposes.

- The purpose is to have a scalable build environment already set to go.

###  Details

- grunt-copy to copy all your files from 'src' to 'dist'
- the file structure includes a module template which you can base your projects on.
- Includes babel, babelify and browserify to be able to make use of js modules.

#### Assemble

Assemble works with the files under the template folder and creates static html files from the handlebar layout, page and partials that are found under that folder. Just place your files under there, subfolders are allowed.

### to get started
- adjust your package.json (change the 'CHANGE-ME' sections)
- install and configure more plugins as necessary.

inspired by:
https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb

### useful links

- instrumental in getting babel / browserify to work

https://github.com/babel/babelify
https://www.npmjs.com/package/grunt-browserify