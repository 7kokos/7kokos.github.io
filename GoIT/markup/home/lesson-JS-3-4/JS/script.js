var app = {

  createElement: function(params) {
    var element = document.createElement(params.tagName);

    if (params.inputType){
      element.setAttribute('type', params.inputType);
    }

    if (params.inputType){
      element.setAttribute('value', params.inputValue);
    }

    if (params.className){
      element.classList.add(params.className);
    }

    if (params.classNameSecond){
       element.classList.add(params.classNameSecond);
    }

    if (params.classNameThird){
       element.classList.add(params.classNameThird);
    }

    if (params.content){
      element.innerHTML = params.content;
    }

    if (params.parentElement){
      params.parentElement.appendChild(element);
    }

    return element;
  },


  generateQuestions: function (questionsAmount, answersAmount) {

    var k=0;

    for (var i = 0; i < questionsAmount; i++) {

      this.createElement({
        tagName: 'h4',
        content: (i + 1) + '. Вопрос №' + (i + 1),
        parentElement: document.querySelector('form')
      });


      for (var j = 0; j < answersAmount; j++) {
      this.createElement({
        tagName: 'div',
        className:'checkbox',
        classNameSecond:'col-lg-12',
        parentElement: document.querySelector('form')
      });
        // debugger;
        var label = this.createElement({
          tagName: 'label',
          content: 'Вариант ответа №' + (j + 1),
          parentElement: document.querySelectorAll('.checkbox')[k]
        });

        var checkbox = this.createElement({
          tagName: 'input',
          inputType: 'checkbox'
        });

        label.insertAdjacentElement('afterBegin', checkbox);
        k++; 
      }

    }

  },
  generateButton: function() {
    this.createElement({
      tagName: 'div',
      className: 'btn-lg',
      classNameSecond: 'text-center',
      parentElement: form
});


    this.createElement({
    tagName: 'input',
    inputType: 'submit',
    inputValue: 'Проверить мои результаты',
    className: 'btn',
    classNameSecond: 'btn-default',
    classNameThird: 'btn-lg',
    parentElement: document.querySelector('.btn-lg')
});

  }

};


var body = document.querySelector('body');

app.createElement({
  tagName: 'div',
  className: 'form-group',
  classNameSecond: 'container',
  parentElement: body
});


app.createElement({
  tagName: 'h2',
  className: 'text-center',
  content: 'Тест по программированию',
  parentElement: document.querySelector('.form-group')
});

var form = app.createElement({
  tagName: 'form',
  parentElement: document.querySelector('.form-group')
});



app.generateQuestions(3, 3);

app.generateButton();







