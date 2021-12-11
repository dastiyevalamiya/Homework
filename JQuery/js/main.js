//jquery-nin strukturu, yeni skeleti

/*$(function () {

    $("button") // ne ile
    .click(function (){ // nece
        
        $("p") // neyi
        .hide() // edin
    })
});*/

//############################################################################################################

// Selectorlar

// $(this).hide() olduqda, yeni this-sozu yazdiqda buton ozune tesir edecek ve tekceozu silinecek. Yeni butona 
//basdigimiz zaman hide butonu silinecek.

/*$(function () {

    $("button").click(function (){
        $(this).hide()
    })
});*/


// $('*').hide() olduqda, yeni *-isaresi yazdiqda, butona basdigimiz zaman ne varsa hamisi silinecek. Yeni
//sehife bombos qalacaq.

/*$(function () {

    $("button").click(function (){
        $('*').hide()
    })
});*/


// $("h1").hide() olduqda, yeni h1 teqi icerisine ne yazmisiqsa, butona basdigimiz zaman o silinecek. 

/*$(function () {

    $("button").click(function (){
        $("h1").hide()
    })
});*/


// $("h1,p").hide() olduqda, h1 ve p teqleri icerisine ne yazmisiqsa, butona basdigimiz zaman onlar silinecek.

/*$(function () {

    $("button").click(function (){
        $("h1,p").hide()
    })
});*/


// $("#myList").hide() olduqda, id="myList" olan her shey silinecek. Biz bu numunemizde id-ni ul teqine
//verdiyimiz ucun butun ul teqi icerisinde olan butun li teqleri arasinda olan sozler butona basdigimiz zaman 
//silinecek.

/*$(function () {

    $("button").click(function (){
        $("#myList").hide()
    })
});*/


// $(".myListItem").hide() olduqda, class-i class="myListItem" olan her shey silinecek. Bu numunede 
//class="myListItem" sadece Qelem yazilan li teqinde oldugu ucun butona basdigimiz zaman sadece Qelem sozu 
//silinecek.

/*$(function () {

    $("button").click(function (){
        $(".myListItem").hide()
    })
});*/


// $("a[target='_blank']").hide() olduqda, butona basdigimiz zaman a teqi arasinda target-i target="_blank" olan
//link silinecek. Bizim bu numunemize gore butona basdigimiz zaman Test Link1 linki silinecek.

/*$(function () {

    $("button").click(function (){
        $("a[target='_blank']").hide()
    })
});*/


// $("a[target!='_blank']").hide() olduqda, butona basdigimiz zaman a teqi arasinda target-i target="_blank" 
//olandan basqa qalan linkler silinecek. Bizim bu numunemize gore butona basdigimiz zaman Test Link1 linki 
//qalacaq, Test Link2 linki silinecek. Cunki nida isaresinden istifade olunub ve nida nede istifade olunubsa,
//butona basdigimiz zaman ondan basqa hamisi silinecek.

/*$(function () {

    $("button").click(function (){
        $("a[target!='_blank']").hide()
    })
});*/


//##########################################################################################################

// JQuery ikinci hisse css haqqinda.


// $("p,h1").css("color", "red"); olduqda, butona basdigimiz zaman p ve h1 teqleri arasinda olan metnlerin rengi 
//qirmizi reng olacaq. Qeyd edek ki, bu yazilis tek css yazmaq ucundur.

/*$(function () {

    $("button").click(function (){
        $("p,h1").css("color", "red");
    })
});*/


// $("p,h1").css({"color":"red", "background":"green","font-size":"100px"}); - bu yazilis ise coxlu css yazmaq
//ucundur. Gorduyumuz kimi burada butona basmaqla h1 ve p teqleri arasinda yazdigimiz metnlerin hem rengini, 
//hem arxa fon rengini, hem de metnlerin yazi olcusunu deyise bildik.

/*$(function () {

    $("button").click(function (){
        $("p,h1").css({"color":"red", "background":"green","font-size":"100px"});
    })
});*/


// $("p,h1").addClass("green") - bu yazilis o demekdir ki, p ve h1 teqine bir class elave etdik (addClass).
//Butona basdigimiz zaman p ve h1 teqindeki yazilar yasil rengde olur. Bu yazilisda green sinifdir. Bu sinfi
//style.css faylinda teyin etdik ve bu sinfe adi kimi green rengi verdik. Sinfin adina red yazsaydiq, butona 
//basanda h1 ve p teqlerindeki metnler qirmizi rengde olacaqdir. Cunki red sinfine adi kimi red rengi vermisik.

/*$(function () {

    $("button").click(function (){
        $("p,h1").addClass("green")
    })
})*/


// Bu numunede biz html kodumuzda p teqine class="default" verdik. Style.css faylinda ise default sinfine reng
//olaraq blue rengini verdik. Yeni sehife acilan kimi p teqindeki metn default olaraq goy rengde olsun.
//$("p").removeClass("default") - biz bu kodu yazmaqla p teqine verdiyimiz default sinfindeki goy rengi sildik.
//Yeni sehife acilanda p teqindeki metnimiz goy rengde idi. Bu kodu yazib butona basanda p teqindeki melumat
//artiq goy yox qara rengde olacaq.

/*$(function () {

    $("button").click(function (){
        $("p").removeClass("default")
    })
})*/


//#########################################################################################################

// JQuery ucuncu hisse butonlar haqqinda.

// JQuery-de toggle iki isi bir clickde yerine yetirir. Yeni bu numunede butona 1 defe basdiqda p ve h1 
//teqindeki melumatlar qirmizi rengde olur. Butona yeniden basdiqda ise p ve h1 teqindeki melumatlardan qirmizi
//reng silinir ve default olaraq metnler qara rengde olur. 

/*$(function () {

    $("button").click(function (){
        $("p,h1").toggleClass("red")
    })
})*/


//mouseleave yazdiqda, oxu ancaq butonun ustunden cekende h1 ve p teqlerindeki mentin rengi qirmizi olur.

/*$(function () {

    $("button").mouseleave(function (){
        $("p,h1").toggleClass("red")
    })
})*/


//dblclick yazdiqda, butona yalniz iki defe ardicil olaraq basdiqda yazilarin rengi qirmizi olur.

/*$(function () {

    $("button").dblclick(function (){
        $("p,h1").toggleClass("red")
    })
})*/


//mouseenter yazdiqda, oxu yalniz butonun ustune getirende yazilarin rengi qirmizi olur. mouseoverle eyni isi
//gorur.

/*$(function () {

    $("button").mouseenter(function (){
        $("p,h1").toggleClass("red")
    })
})*/


// JQuery dorduncu hisse 


// JQuery-de toggle-in menasi odur ki, iki isi bir yerde gorur. Yeni 1 defe basanda yazilari yox edir, bir daha
// basanda ise yazilari geri getirir. Bu numunemizde butona bir defe basanda ekranda olan yazilar silinecek. 
//Butona bir daha basdiqda ise yazilar ekrana gelecek. Bu dongu her defe bele davam edecek.

/*$(function () {

    $("button").click(function (){
        $("p,h1").toggle()
    })
})*/


//Bu numunede toggle 3000 (3 saniye) verdiyimize gore butona basanda 3 saniyeye yazilar yox olacaq, yeniden 
//basanda ise 3 saniyeye yazilar geri gelecek.

/*$(function () {

    $("button").click(function (){
        $("p,h1").toggle(3000)
    })
})*/


// fadeOut yazdiqda, butona basdigimiz zaman ekrandaki yazilar itir. Bu numunede biz fadeOut(3000) yazdigimiza
//gore ekrandaki yazilar 3 saniye erzinde itecek. fadeIn ise yox etdiyimiz yazilari geri getirir.

/*$(function () {

    $("button").click(function (){
        $("p,h1").fadeOut(3000)
    })
})*/


// fadeToggle ise butona bir defe basdiqda yazilari yox edir, bir daha basdiqda ise yox olunan yazilari geri 
//getirir. Bu numunede fadeToggle 3 san verdiyimiz ucun yazilar 3 saniyeye yox olub, 3 saniyeye geri gelecek.

/*$(function () {

    $("button").click(function (){
        $("p,h1").fadeToggle(3000)
    })
})*/


// fadeTo ise butona basdigimiz zaman yazilarin rengini solduracaq. Bu numunede butona basdigimiz zaman yazilar
//3 saniye erzinde 0.4-e kimi bozaracaq ve ekranda bozarmis hali ile qalacaq.

/*$(function () {

    $("button").click(function (){
        $("p,h1").fadeTo(3000, 0.4)
    })
})*/


//callback funksiya 


// fadeToggle oldugu ucun butona basdigimizdan 1 saniye sonra hem yazilar itecek, hem de yuxaridan alert 
//gelecek. Sonra butona yeniden basdigimizdan 1 saniye sonra hem yuxaridan alert, hem de iten yazilar geri 
//gelecek.

/*$(function () {

    $("button").click(function (){
        $("p,h1").fadeToggle(1000, ()=>{
            alert("success")
        })
    })
})*/



















