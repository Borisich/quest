import React , { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Site extends Component {
  render() {
    return (
      <div className="wrapper">

      <h1>Добро пожаловать в архив мини-проектов начинающего программиста!</h1>
      <br/><br/>
      <div className="project">
        <div className="header">
          <a href="http://borisich.ru/Chess/public/">Сетевая игра "шахматы"</a>
        </div>
        <div className="description">
          Проект разрабатывался с использованием react для клиентской части, socket.io для клиент-серверного взаимодействия. Кроме самого
игорового поля имеется чат для общения игроков. Осуществляется проверка возможности каждого хода игрока, определение шаха и мата.
Отображаются съеденные фигуры каждого игрока. Отображается подсветка предыдущего хода соперника.
После каждого хода состояние игры записывается в базу данных, что дает возможность возобновлять игру при отключении игроков. Также
Игрок информируется об онлайн-статусе соперника. <span>Декабрь 2016 - февраль 2017.</span>
        </div>
        <div className="slider">
          <a data-fancybox="chess" href="img/chess/2.png"><img src="img/chess/2.png"/></a>
          <a data-fancybox="chess" href="img/chess/3.png"><img src="img/chess/3.png"/></a>
          <a data-fancybox="chess" href="img/chess/4.png"><img src="img/chess/4.png"/></a>
          <a data-fancybox="chess" href="img/chess/5.png"><img src="img/chess/5.png"/></a>
          <a data-fancybox="chess" href="img/chess/6.png"><img src="img/chess/6.png"/></a>
        </div>
        <div className="end"></div>
      </div>

      <div className="project">
        <div className="header">
          <a href="http://borisich.ru/ttt/public/">Сетевая игра "крестики-нолики"</a>
        </div>
        <div className="description">
          Проект является предшественником "шахмат". На нем познавались основы react и socket.io. <span>Октябрь-Ноябрь 2016.</span>
        </div>
        <div className="slider">
          <a data-fancybox="ttt" href="img/ttt/1.png"><img src="img/ttt/1.png"/></a>
          <a data-fancybox="ttt" href="img/ttt/2.png"><img src="img/ttt/2.png"/></a>
          <a data-fancybox="ttt" href="img/ttt/3.png"><img src="img/ttt/3.png"/></a>
        </div>
        <div className="end"></div>
      </div>

      <div className="project">
        <div className="header">
          <a href="http://mirt.spb.ru">Украшения для свадебного автомобиля</a>
        </div>
        <div className="description">
          Представляет собой одностраничное приложение, в котором реализован интернет-магазин. Выполнено на react. Функции "корзины" и
"последнего заказа" реализованы с использованием локального хранилища "localStore". За отправку формы заказа отвечает php-фрагмент кода.
Для функций быстрого просмотра и карусели изображений были использованы такие модули как 'react-slick', 'react-skylight'. Картинок нет,
т.к. проект находится в стадии наполнения. <span>Март-апрель 2017.</span>
        </div>
        <div className="slider">

        </div>
        <div className="end"></div>
      </div>

      <div className="project">
        <div className="header">
          <a href="http://borisich.ru/SnakeGame">Игра "змейка"</a>
        </div>
        <div className="description">
          Проект создавался при параллельном повторении/изучении основ JavaScript. Выполнен на чистом JS, без дополнительных библиотек.
Основными моментами при создании игры были:
-работа с объектами в JS. Сама змейка, точки, которые она собирает и ворота, через которые она проходит являются объектами JS;
-плотная работа с функциями setTimeout и setInterval, т.к. в игре присутсвует движение змейки в такт фоновой музыки;
-работа с формами, базой данных и PHP для сохранения установленных рекордов. <span>Май-Июнь 2016.</span>
        </div>
        <div className="slider">
          <a data-fancybox="snake" href="img/snake/1.png"><img src="img/snake/1.png"/></a>
          <a data-fancybox="snake" href="img/snake/2.png"><img src="img/snake/2.png"/></a>
          <a data-fancybox="snake" href="img/snake/3.png"><img src="img/snake/3.png"/></a>
        </div>
        <div className="end"></div>
      </div>

      <div className="project">
        <div className="header">
          <a href="http://borisich.ru/Cubes">3D кубы</a>
        </div>
        <div className="description">
          Этот проект создавался с целью поработать с 3Д возможностями JS с использованием библиотеки "three.js". Пользователь видит на экране
5 кубов, расположенных в пространстве, разных размеров, с разноцветными вершинами. При клике на вершину, все исходящие рёбра куба
окрашиваются в цвет вершины. Для обзора/масштабирования/перемещения в 3Д-пространстве используется мышь. Так же в коде используется
вспомогательная библиотека "OrbitControls.js". <span>Август 2016.</span>
        </div>
        <div className="slider">
          <a data-fancybox="cubes" href="img/cubes/1.png"><img src="img/cubes/1.png"/></a>
          <a data-fancybox="cubes" href="img/cubes/2.png"><img src="img/cubes/2.png"/></a>
          <a data-fancybox="cubes" href="img/cubes/3.png"><img src="img/cubes/3.png"/></a>
        </div>
        <div className="end"></div>
      </div>

      <div className="project">
        <div className="header">
          <a href="http://borisich.ru/ReactList">Простой список на React и Bootstrap</a>
        </div>
        <div className="description">
          Проект служил для изучения react и bootstrap. В частности, в нем применяется двустороннее взаимодействие родительского и дочернего компонента. <span>Ноябрь 2016.</span>
        </div>
        <div className="slider">
          <a data-fancybox="list" href="img/list/1.png"><img src="img/list/1.png"/></a>
          <a data-fancybox="list" href="img/list/2.png"><img src="img/list/2.png"/></a>
        </div>
        <div className="end"></div>
      </div>

      <div className="project">
        <div className="header">
          <a href="http://borisich.ru/PhpStore">Магазин на php</a>
        </div>
        <div className="description">
          Проект разрабатывался в 2013 году в качестве встраиваемого приложения на сайт строительной компании. Представляет собой простой
интернет-магазин электрических шкафов. Написан на html/php. Имеются формы поиска товаров, механизм добавления в корзину и оформления заказов.
При построении приложения использовалась архитектура MVC. К сожалению, оформление сайта компании не сохранилось. <span>Май 2013.</span>
        </div>
        <div className="slider">
          <a data-fancybox="phpstore" href="img/phpstore/1.png"><img src="img/phpstore/1.png"/></a>
          <a data-fancybox="phpstore" href="img/phpstore/2.png"><img src="img/phpstore/2.png"/></a>
          <a data-fancybox="phpstore" href="img/phpstore/3.png"><img src="img/phpstore/3.png"/></a>
          <a data-fancybox="phpstore" href="img/phpstore/4.png"><img src="img/phpstore/4.png"/></a>
        </div>
        <div className="end"></div>
      </div>

    </div>
    )
  }
}
