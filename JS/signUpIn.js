function openSignUpInForm(tab_id, tabcontent_id) {
    var i, tabcontent, tablinks;

    //anpassen, index von W3schools übernommen aber macht für 2 tabs wenig sinn
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabcontent_id).style.display = "block";


    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className = 'tab';
    }
    document.getElementById(tab_id).className = 'tab active';
}

/*
//code von https://www.templatemonster.com/blog/html5-css3-registration-forms/
für übungszwecke übernommen, funktioniert aktuell nicht
$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > section').not(target).hide();

    $(target).fadeIn(600);

});
*/