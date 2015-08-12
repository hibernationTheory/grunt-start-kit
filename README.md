# grunt-start-kit
### A Grunt Scaffold to get you started with a proper Grunt setup.

- This is a starter kit (a scaffold to be precise) for using Grunt with your project. It provides you with a directory structure with plenty of useful Grunt plugins readily installed and structured in a way that makes it easy to scale your project. The structure is built in a way that separates each indiviual Grunt plugin into it's own file. (inside the folder: /grunt/). So you have a clear separation of Grunt plugin setup and content from the master Grunt config file allowing for a more modular setup.

The Grunt plugins that are installed so far are:
- assemble.js : Allows for easy compiling of handlebar files into corresponding html elements. Templating for the win.
- browserify.js : To use modules in your JS. It also uses 'babelify' to make use of this transpiler (allows you to use ES6 features in JS)
- contrib-copy: To copy the contents of a dir from one location to next. To be able to create a separation in between your source and distribution directory (which would include code in a different state like uglified, etc...).
- text-replace: Replace target string(s) in src files with target values.

### Getting Started
- after cloning from the repo do a npm install.
- (optional) adjust your package.json (change the 'CHANGE-ME' sections according to your needs)
- install and configure more plugins as necessary. You can use the already existing plugin js files under the 'grunt' folder to see how they need to be structured.
	- One thing you need to be careful is, whereas you can put a name of your liking as the first input to the grunt.config method (as long as you remember to call this plugin with this name), the grunt.loadNpmTasks in the same file need to use the full plugin name to work.
- After doing just add the name of task in your Gruntfile.js.
- You should be done! Just run the grunt <taskname> on command like. Like `grunt build`

### Details

#### Assemble

Assemble works with the files under the template folder and creates static html files from the handlebar layout, page and partials that are found under that folder. Just place your files under there, subfolders are allowed.

### Observations about Grunt or the Workflow

#### Doing one thing vs many things

- One thing that stood out when learning more about Grunt was that it's competitor Gulp apperantly is better at creating more atomic scripts that excel at doing one thing and one thing only. This starts to make more sense as I get familiar with more Grunt Plugins. For example looking at 'grunt-text-replace' it not only replaces text but also offers to copy the files to a dir which can already be handled by a Grunt copy plugin instead.

#### Code vs Config

- I think this might be due to configuration based nature of Grunt but also probably due to indivual plugins; things don't throw an error sometimes making debugging hard. Entering the wrong key name, like 'scr' instead of 'scr' will make your build not do anything with you scratching your head to figure it all out.


inspired by:
https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb

### useful links

- instrumental in getting babel / browserify to work

https://github.com/babel/babelify
https://www.npmjs.com/package/grunt-browserify