
$(function () {

    /**----------LocalStorage+JSON+Templ-----------*/

    const html = $('#test11').html();
    const bod = $('.wrapper');


    const test = {
        question: [
            {
                text: '1. Для чего используется конструкция try-catch в javascript?',
                answer: [
                    {text: 'Для обработки возможных ошибок', check: true},
                    {text: 'Для генерирования ошибок.', check: false},
                    {text: 'Для замены условного оператора if', check: false}
                ]
            },

            {
                text: '2. Какой формат передачи данных наиболее распостранен?',
                answer: [
                    {text: 'XML', check: false},
                    {text: 'JSON', check: true},
                    {text: 'TXT ', check: false}
                ]
            },

            {
                text: '3. С помощью какого объекта осуществляется доступ к локальному хранилищу в современных браузерах?',
                answer: [
                    {text: 'localStorage', check: true},
                    {text: 'LocalStorage', check: false},
                    {text: 'Storage', check: false}
                ]
            }
        ]
    };

    const content = tmpl(html, {
        data: test
    });

    bod.append(content);




/**-----------modalWindow-function-----------------*/



    localStorage.setItem('test', JSON.stringify(test));
    let page1 = localStorage.getItem('test');
    let myDat = JSON.parse(page1);
    console.log(myDat);


    /**------------get rightAnswers----------------*/

    let rightAnswers = [];
    for (let i = 0; i < myDat.question.length; i++) {
        for (let j = 0; j < myDat.question[i].answer.length; j++) {
            let currentAnswer = myDat.question[i].answer[j].check;
            rightAnswers.push(currentAnswer);
        }
    }
    console.log(rightAnswers);

    /**------------get Answers from checkbox----------------*/

    let givenAnswers = [];
    $('.class_modal').on('click', () => {

        $('input[type="checkbox"]').each(function () {
            if ($(this).prop('checked')) {
                givenAnswers.push(true);
            } else {
                givenAnswers.push(false);
            }
        });
        console.log(givenAnswers);


        /**------------matching answers and checkbox----------------*/

        const $result1 = 'Отличный результат!';
        const $result2 = 'Не правильно, попробуй еще раз.';
        let result1 = JSON.stringify(givenAnswers) === JSON.stringify(rightAnswers);
        if (result1 == true) {
            $('#modalText').html($result1);
        } else {
            $('#modalText').html($result2);

        }
        localStorage.clear();

        console.log(result1);

    });




    /**--------------------------Modal title-------------------------*/

    let form = $('.form');

    let modalWindow = () => {
        $('#modal').click((event) => { // лoвим клик пo ссылки с id="go"
            event.preventDefault(); // выключaем стaндaртную рoль элементa
            $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                function () { // пoсле выпoлнения предъидущей aнимaции
                    $('#modal_form')
                        .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                        .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                });
        });
        /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
        $('#modal_close, #overlay').on('click', function () { // лoвим клик пo крестику или пoдлoжке
            $('#modal_form')
                .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                    function () { // пoсле aнимaции
                        $(this).css('display', 'none'); // делaем ему display: none;
                        $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                        $('.form').each((index, element) => {
                            element.reset();
                            givenAnswers = [];
                        });
                    }
                );
            localStorage.clear();
            console.log(localStorage);

        });
    };
    modalWindow();

    


});
