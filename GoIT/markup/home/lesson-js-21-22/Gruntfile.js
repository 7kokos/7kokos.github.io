module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	// 1. Вся настройка находится здесь
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'src/js/*.js' // Все JS в папке libs
					// Конкретный файл
				],
				dest: 'dest/js/build/production.js',
			}
			// 2. Настройка для объединения файлов находится тут
		},

		uglify: {
			build: {
				src: 'dest/js/build/production.js',
				dest: 'dest/js/build/production.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dest/img/'
				}]
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/scss',
					src: ['*.scss'],
					dest: 'src/css',
					ext: '.css'
				}]
			}
		},
		cssmin: { //описываем работу плагина минификации и конкатенации css.
			with_banner: {
				options: {
					banner: '/* My minified CSS Artem */' //комментарий который будет в output файле.
				},

				files: {
					'dest/css/style.min.css': ['src/css/*.css'] // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
				}
			}
		},
		jasmine: {
			test: {
				src: 'js/*.js',
				options: {
					vendor: [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
					],
					specs: 'spec/*.js'
				}
			}
		},
		jasmine_node: {
			options: {
				forceExit: true,
				match: '.',
				matchall: false,
				extensions: 'js',
				specNameMatcher: 'spec'
			},
			all: ['spec/']
		},
		babel: {
			options: {
				sourceMap: false,
				presets: ['es2015']
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/jses6',
					src: ['*.js'],
					dest: 'js',
					ext: '.js',
					extDot: 'first'
				}]
			}
		},
		watch: {
			babel: {
				files: ['src/**/*.js'],
				tasks: 'babel',
			},
			sass: {
				files: ['src/scss/*.scss'], //следить за всеми css файлами в папке src
				tasks: ['sass'], //при их изменении запускать следующую задачу
			},
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['src/css/*.css'], //следить за всеми css файлами в папке src
				tasks: ['cssmin'], //при их изменении запускать следующую задачу
				options: {
					spawn: false
				}
			},

			jasmine: {
				files: ['js/**/*.js', 'spec/**/*.js'],
				tasks: 'jasmine',
				options: {
					livereload: true
				}

			}
		}



	});

	// 3. Тут мы указываем Grunt, что хотим использовать этот плагин
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-jasmine-node');
	// grunt.loadNpmTasks('grunt-sass2scss');

	// 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'cssmin', 'babel', 'jasmine']);

};