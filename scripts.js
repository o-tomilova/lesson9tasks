$(document).ready(function () {

// Скачть и подключить библиотеку к странице или к Codepen 
	//alert("Hi");
	$(".test").text("Hello World! jQuery works");

// Создать теги (p, div, span) и поменять им цвет 

	$("div p").css("backgroundColor", "green");
	$("div").css("backgroundColor", "blue");
	$("span").css("backgroundColor", "pink");

// Выбрать 2 зазных класса и задать им стили тля текста

	$(".classOne").css("color", "red");
	$(".classTwo").css("color", "white")
				.css("backgroundColor", "black")
				.css("fontSize", "20px");

// )Создать 2 блока один с элементами span   второй с таблицей,  выбрать блок в котором есть  span

	$("div:has(span)").css("backgroundColor", "red");
	$("div:has(span) span").css("backgroundColor", "");
	$("div:has(table)").css("backgroundColor", "");

// Создать форму на 3 поля и полям с атрибутом текст заменить значение внутри на jQuery

	$("input[type=text]").val("Введите значение");

// Создать список на 4 нумрованых пункта в нем 6 марерованых пункта. 
// Задать вложеному списку красный цвет,  все четные сделать  в верхнем регистре все эелементы после 3 разукрасить серым бекграундом
	
	$("ol ul").css("color", "red");
	$("ul li:even").css("textTransform", "upperCase");
	$("ul li:gt(3)").css("backgroundColor", "grey");

// Используя фитр :button задать обїект стилей для кнопки ( падинг, бекграунд, размер шрифта)

	$(":button").attr({
		style: "padding: 10px; background-color: green; font-size: 18px"
	});

// Создать елементы с классом и айди и выбрать их через селектор сделать текст в элементах аперкейс 

	$(".btn").css("textTransform", "upperCase");
	$("#idBtn").css("textTransform", "upperCase");

// Опредлить высоту списка с вложеным списком и вывести данные в блок

	var a = $("ol").height();
	$("#listHeight").html(a);

});