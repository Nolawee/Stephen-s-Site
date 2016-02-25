module.exports = function(grunt){
	// Project configuration. 
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			js: {
	    		src: ['assets/js/*.js'],
	    		dest: 'assets/js/website.js',
	    	},
	  	},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
};