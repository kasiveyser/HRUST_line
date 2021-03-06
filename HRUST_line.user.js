// ==UserScript==
// @name HRUST_line
// @description Упражнения Хруста в виде линейки на странице списка игр.
// @author kasiveyver
// @license MIT
// @version 1.0
// @match http://klavogonki.ru/gamelist/*
// @grant none
// ==/UserScript==

var setRace = { type: "practice", timeout: 5};//  Параметры заезда

var imgLink = {//   Ссылки на картинки
  ex1: null,
  ex2: "http://jpegshare.net/images/46/06/460654ead4d8cb281a97f11cff2b0433.jpg",
  ex3: "http://jpegshare.net/images/c4/ad/c4adf88133a0198489afff1fd6bc2428.jpg",
  ex4: "http://jpegshare.net/images/fe/73/fe73f29a9ba75b32ef7d607628235e56.jpg",
  ex5: "http://jpegshare.net/images/63/48/63485cb35c9b5bcde2ec20da7fdcdecf.jpg",
  ex6: "http://jpegshare.net/images/66/a5/66a5f8a25add9be52fb6c2eaf9d136f4.png",
  ex7: "http://jpegshare.net/images/ce/f8/cef8529431e5b13d53599962623732b2.jpg",
  ex8: "http://jpegshare.net/images/5a/42/5a4258433eadd0e19e2db8e716f8711f.gif",
  ex9: "http://jpegshare.net/images/b7/2b/b72bf5c8cf86feb9a08a6dbdcd4d3411.jpg",
  ex10: "http://jpegshare.net/images/d6/7e/d67e9cd8ab338bb9a2857ac4aaac12f2.jpg",
  ex11: "http://jpegshare.net/images/1b/3b/1b3b0cbab3084e047d075849ac312549.jpg",
  ex12: "http://jpegshare.net/images/b3/b3/b3b3f27f038143fd6d72770026a1735e.png",
  ex13: "http://jpegshare.net/images/df/3e/df3e88479521d6f77b8ff7c6b9b73ad7.jpg",
  ex14: "http://jpegshare.net/images/41/4e/414e24480d56ebc2d44106793a627933.jpg",
  ex15: "http://jpegshare.net/images/3b/a2/3ba24b46fb1bae9895d6c238d1b8a882.jpg",
  ex16: "http://jpegshare.net/images/c8/20/c820b0846070509118c2517d052d55c3.jpg",
  ex17: "http://jpegshare.net/images/64/bc/64bc13a50789053b24516a88bb2d80c0.jpg",
  ex18: "http://jpegshare.net/images/f7/b8/f7b878bce5e3e0a2a0cb9678d8381c7d.jpg",
  ex19: "http://jpegshare.net/images/75/4d/754d7fcbea8967e265439318903c41ef.gif",
  ex20: "http://jpegshare.net/images/32/f4/32f49a7fa7f399a87513c389b806d6fe.gif",
  ex21: "http://jpegshare.net/images/5e/b7/5eb7c160e6cb456fc4c54271fe3b37af.png",
  ex22: "http://jpegshare.net/images/50/fe/50fea6640e821c5785af3b73a8d3228e.jpg",
  ex23: "http://jpegshare.net/images/12/7f/127fbf6fde45ed0b0a23bf31affad382.jpg",
  ex24: "http://jpegshare.net/images/ac/af/acaf104c4c73db165e0c98f1807901a6.jpg",
  normal: "http://cs7010.vk.me/c312729/v312729578/5ac4/jBohmQ1ndrQ.jpg"
}


window.onload = function() {
divs = document.createElement('div');

divs.innerHTML = '<p style="margin: 0; background: #fff; padding-bottom: 10px;">\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13571&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src="http://flamber.ru/files/photos/1146224120/1149261961_c_s.jpg" alt="Упражнение 1" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13572&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex2 + ' alt="Упражнение 2" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13573&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex3 + ' alt="Упражнение 3" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13574&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex4 + ' alt="Упражнение 4" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13583&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex5 + ' alt="Упражнение 5" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13584&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex6 + ' alt="Упражнение 6" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13585&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex7 + ' alt="Упражнение 7" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13654&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex8 + ' alt="Упражнение 8" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13656&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex9 + ' alt="Упражнение 9" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13659&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex10 + ' alt="Упражнение 10" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13661&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex11 + ' alt="Упражнение 11" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13663&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex12 + ' alt="Упражнение 12" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=13664&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex13 + ' alt="Упражнение 13" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=16346&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex14 + ' alt="Упражнение 14" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=16759&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex15 + ' alt="Упражнение 15" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=16762&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex16 + ' alt="Упражнение 16" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=17495&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex17 + ' alt="Упражнение 17" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=17497&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex18 + ' alt="Упражнение 18" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=17498&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex19 + ' alt="Упражнение 19" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=17499&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex20 + ' alt="Упражнение 20" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=32013&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex21 + ' alt="Упражнение 21" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=32014&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex22 + ' alt="Упражнение 22" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=32015&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex23 + ' alt="Упражнение 23" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=voc&amp;voc=32016&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C/"><img src=' + imgLink.ex24 + ' alt="Упражнение Заключительное" width="4%"></a>\
<a href="http://klavogonki.ru/create/?gametype=normal&amp;type=' + setRace.type + '&amp;level_from=1&amp;level_to=9&amp;timeout=' + setRace.timeout + '&amp;submit=%D0%9D%D0%B0%D1%87%D0%B0%D1%82%D1%8C"><img src=' + imgLink.normal + ' width="4%"></a>\
<br></p>';

var list = document.getElementsByClassName("gamelist-create")[0];
list.insertBefore(divs, list.children[0]);
}
