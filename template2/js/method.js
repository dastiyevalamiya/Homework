// 1.1 length --- menimsedilen deyerin uzunlugunu ekrana eded kimi yazacaq. Index 1-den baslayacaq ve bosluqlari
//da nezere alacaq.

//const infoData = "Hello Matrix"
//document.write(infoData.length);

//############################################################################################################

// 1.2 eval() --- metn kimi yazilan yazilari js koduna cevirmek ucun istifade olunur.

//const infoData = "Hello Matrix";
//document.write(eval("infoData"));

//############################################################################################################

// 1.3 search() --- Cumlede olan sozun necenci indexden basladigini gosterir. Bu numunede Matrix sozu 6-ci 
//indexden baslayir. Ekranda 6 yazilir.

//const infoData = "Hello Matrix"
//const infoData1 = infoData.search("Matrix");
//document.write(infoData1);

//############################################################################################################

// 1.4 slice() --- deyiskenin icerisindeki melumatlari parametrler ile kopyalayir.

//var infoData = "Hello Matrix";
//document.write(infoData);

//############################################################################################################

// 1.5 substring() --- qeyd olunan intervaldaki metni ekrana yazir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.substring(3, 9);
//document.write(infoData1);

// 1.5.1 substr()

//const infoData = "Hello Matrix";
//const infoData1 = infoData.substr(-4,4);
//document.write(infoData1);

//############################################################################################################

// 1.6 concat() --- Bir dəyişkəni əsas sayaraq parametr hissəsinə yazılan dəyişkəni yenidən hazırlayır.

//const infoData = ['kitab', 'qelem'];
//const infoData1 = ['defter','albom', 'jurnal'];
//const infoData2 = infoData.concat(infoData1);
//document.write(infoData2);

//############################################################################################################

// 1.7 repeat() --- yazilan deyer qeder melumati tekrar yazir ekrana. 3 olsa 3 defe yazacaq.

//const infoData = "Hello Matrix!";
//const infoData1 = infoData.repeat(3);
//document.write(infoData1);

//############################################################################################################

// 1.8 toString() --- dəyişkənin içindəki dəyəri mətinləşdirir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.toString();
//document.write(infoData1);

//############################################################################################################

// 1.9 String() --- dəyişkənin içindəki dəyəri mütləq mətinləşdirir.

//const infoData = "Hello Matrix";
//const infoData1 = String(infoData);
//document.write(infoData1);

//############################################################################################################

//1.10 Number()




//############################################################################################################

//1.11 valueOf()




//############################################################################################################

//1.12 indexOf() --- cumledeki sozun necenci indexden basladigini ekrana yazir.

//const infoData = "Hello Matrix"
//const infoData1 = infoData.indexOf("Matrix");
//document.write(infoData1);

//1.12.1 lastIndexOf() --- medimsedilen deyerin necenci indexden basladigini gosterir. Bu numunede ello sozu 
//1-ci indexden basladigina gore ekranda 1 yazilacaq.

//const infoData = "Hello Matrix"
//const infoData1 = infoData.lastIndexOf("ello");
//document.write(infoData1);

//############################################################################################################

//1.13 startWith() --- cumlenin evvelindedirse true, yox eger cumlenin evvelinde deyilse false yazacaq.

//const infoData ="Hello Matrix"
//const infoData1 = infoData.startsWith("Hello");
//document.write(infoData1);

//1.13.1 endsWith() --- cumlenin sonundadirsa true, yox eger evvelindedirse false yazacaq.

//const infoData ="Hello Matrix"
//const infoData1 = infoData.endsWith("Hello");
//document.write(infoData1);

//const infoData ="Hello Matrix"
//const infoData1 = infoData.endsWith("Matrix");
//document.write(infoData1);

//############################################################################################################

//1.14 trim() --- artiq qoyulan bosluqlari tenzimleyir.

//const infoData ="    Hello    Matrix    ";
//const infoData1 = infoData.trim();
//document.write(infoData1);

//############################################################################################################

//1.15. includes() --- yazdigimiz soz eger varsa true yazacaq, yoxdursa false yazacaq.

//const infoData ="Hello Matrix"
//const infoData1 = infoData.includes("Matrix");
//document.write(infoData1);

//const infoData ="Hello Matrix"
//const infoData1 = infoData.includes("salam");
//document.write(infoData1);

//############################################################################################################

//1.16 match() --- eger yazdigimiz soz cumlenin icerisinde varsa ekranda hemen sozu yazacaq,
//yox eger yoxdursa ekranda null yazilacaq

//const infoData ="Hello Matrix"
//const infoData1 = infoData.match("Matrix");
//document.write(infoData1);

//const infoData ="Hello Matrix"
//const infoData1 = infoData.match("salam");
//document.write(infoData1);

//############################################################################################################

//1.17 replace()






//############################################################################################################

//1.18 split() --- cumledeki her 1 sozu bir array kimi qebul edir ve sozler arasinda bosluq evezine vergul qoyulur.

//let infoData = "Bu gun hava nece olacaq?";
//const myArray = infoData.split(" ");
//document.write(myArray);

//############################################################################################################

//1.19 localCompare --- Numuneye esasenizah verim. 1-ci numunede ekranda 0 yazilacaq, cunki butun herfler
//uygun olaraq bir-birine beraberdir. 2-ci numunede ekranda -1 yazilacaq, cunki uygun herfleri muqayise etsek 
//gorerik ki, c herfi e herfinden evvel gelir. 3-cu numunede ekranda 1 yazilacaq, cunki herfleri uygun olaraq
//muqayise etsek gorerik ki, e herfi c herfinden sonra gelir.

//1.const infoData = "abc";
   //const infoData1 = "abc";
   //const infoData2 = infoData.localeCompare(infoData1);
   //document.write(infoData2);

//2. const infoData = "abc";
   //const infoData1 = "abe";
   //const infoData2 = infoData.localeCompare(infoData1);
   //document.write(infoData2);   

//3.const infoData = "abe";
   //const infoData1 = "abc";
   //const infoData2 = infoData.localeCompare(infoData1);
   //document.write(infoData2);   

//############################################################################################################

//1.20 charAt() --- Bu numuneye gore ekranda index deyeri 7 olan herf gorunecek. Yeni ekranda a herfi yazilacaq

//const infoData = "Hello Matrix";
//const infoData1 = infoData.charAt(7);
//document.write(infoData1);

//1.20.1 charCodeAt() --- Bu numuneye gore ekranda index deyeri 7 olan herfin unicode-u yazilacaq. 
//Yeni a herfinin unicodu 97 olduguna gore ekranda 97 yazilacaq.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.charCodeAt(7);
//document.write(infoData1);

//1.20.2 fromCharCode() --- unicodu 97 olan herf yazilacaq ekranda. Yeni a herfi yazilacaq.

//const infoData = "Hello Matrix";
//const infoData1 = String.fromCharCode(97);
//document.write(infoData1);

//############################################################################################################

//1.21 encodeURI() --- menimsedilen melumatlari utf-8 formatin salir.

//const infoData = "Hello Matrix";
//document.write(encodeURI(infoData));

//1.21.1decodeURI() --- melumatlari utf-8 formatindan cixarir.

//const infoData = "Hello Matrix";
//document.write(decodeURI(infoData));

//############################################################################################################

//1.22 encodeURIComponent() --- menimsedilen melumatlari utf-8 formatin salir.

//const infoData = "Hello Matrix";
//document.write(encodeURIComponent(infoData));

//1.22.1 decodeURIComponent() --- menimsedilen melumatlari utf-8 formatindan cixarir.

//const infoData = "Hello Matrix";
//document.write(decodeURIComponent(infoData));

//############################################################################################################

//1.23 escape() --- menimsedilen deyerin butun simvollarini unicode formatina salir.

//const infoData = "Hello Matrix";
//document.write(escape(infoData));

//1.23.1 unescape() --- menimsedilen deyerin butun simvollarini unicode formatindan cixarir.

//const infoData = "Hello Matrix";
//document.write(unescape(infoData));

//############################################################################################################

//1.24 toUpperCase()  --- menimsedilen deyerin butun herflerini ekranda boyuk herfle yazir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.toUpperCase();
//document.write(infoData1);

//1.24.1 toLowerCase() --- menimsedilen deyerin butun herflerini ekranda kicik herfle yazir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.toLowerCase();
//document.write(infoData1);

//############################################################################################################

//1.25 toLocaleUpperCase() --- menimsedilen deyerin bütün simvollar daxil (UTF-8) hərflərini hamısını BÖYÜK hərf edir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.toLocaleUpperCase();
//document.write(infoData1);

//1.25.1 toLocaleLowerCase() --- menimsedilen deyerin bütün simvollar daxil (UTF-8) hərflərini hamısını KICIK hərf edir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.toLocaleLowerCase();
//document.write(infoData1);

//############################################################################################################

//1.26 sub() --- ekranda menimsedilen deyerindeyerini alt simvola cevirir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.sub();
//document.write(infoData1);

//1.26.1 sup() --- menimsedilen deyerin deyerini ust simvola cevirir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.sup();
//document.write(infoData1);

//############################################################################################################

//1.27 big() --- menimsedilen deyerin olcusunu boyuk edir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.big();
//document.write(infoData1);

//1.27.1 small() --- menimsedilen deyerin olcusunu kicik edir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.small();
//document.write(infoData1);

//############################################################################################################

//1.28 bold() --- menimsedilen deyeri ekranda qalin yazir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.bold();
//document.write(infoData1);

//1.28.1 italics() --- menimsedilen deyeri ekranda maili yazir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.italics();
//document.write(infoData1);

//1.28.2 strike() --- menimsedilen deyeri ekranda ustunden xett cekilmis formada yazir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.strike();
//document.write(infoData1);

//1.28.3 fixed() --- menimsedilen deyerin yazi tipini teletype yazi tipi formasina salir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.fixed();
//document.write(infoData1);

//############################################################################################################

//1.29 fontcolor() --- menimsedilen deyerin rengini deyisir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.fontcolor("red");
//document.write(infoData1);

//1.29.1 fontsize() --- menimsedilen deyerin olcusunu deyisir. 1-7 araliginda qiymet alir.

//const infoData = "Hello Matrix";
//const infoData1 = infoData.fontsize(7);
//document.write(infoData1);

//############################################################################################################

//1.30 anchor() --- dəyişkənin dəyərinə link xüsusiyyəti verir parametr hissəsi isə linkin  'name' hissənini doldurur.

//const infoData = "Google";
//document.write(infoData.anchor("send"));

//1.30.1 link() --- dəyişkənin dəyərinə link xüsusiyyəti verir parametr hissəsi isə linkin  'href' hissənini doldurur.

const infoData = "Google";
document.write(infoData.link("http://google.com"));
