module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'src/js/jquery.jcarousel.js',
                    'src/js/jcarousel.basic.js',
                    'src/js/isotope.pkgd.min.js',
                    'src/js/tmpl.js',
                    'src/js/script.js',
                     'src/js/*.js'// Все JS в папке libs
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
                    banner: '/* My minified CSS Artem */'  //комментарий который будет в output файле.
                },
 
                files: {
                    'dest/css/style.min.css' : ['src/css/*.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
                }
            }
        },
        watch: {
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
    // grunt.loadNpmTasks('grunt-sass2scss');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat','uglify', 'imagemin','sass','cssmin']);

};