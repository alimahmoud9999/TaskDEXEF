$(function () {

    // Hide Side Bar
    $('.side-nave .bars').on('click', function () {
        $('.side-nave .list-nav').css('display', 'none');
        $('.side-nave').animate({
            width: 0,
        });

        $('.navbar').animate({
            width: '100%',
        });
        $('.navbar .bars').css('display', 'block');
    });
    // Show Side Bar
    $('.navbar .bars').on('click', function () {
        $('.navbar').animate({
            width: '93%',
        });
        $('.side-nave .list-nav').css('display', 'block');
        $('.side-nave').animate({
            width: '7%',
        });
        $('.navbar .bars').css('display', 'none');

    });

    // Serch SlideDown

    $('.navbar .fa-search').on('click', function (e) {
        e.stopPropagation();
        $('.serch').slideDown();
    });
    $('.serch .fa-close').on('click', function () {
        $('.serch').slideUp();
    })

    //Add Class Active Week summary list

    $('.box-content ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //Change Data Value in Total Item
    $('.box-content ul li').on('click', function () {
        let total = $('.total h1');
        let data = $(this).data('item');
        total.text(data);

    });
    //Show Top 
    $('.click').on('click',function(){
        $('.ovaerlay').fadeIn();
    });
     $('.fa-close').on('click',function(){
        $('.ovaerlay').fadeOut();
    });

    //Add Class Active In Tabs Section Top
    $('.tabs li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Hid & show Tabs Content
    $('.tabs-content:not(:first)').hide(); // Hide All Tabs Content Not The First
    $('.tabs li').on('click', function () {
        let id = $(this).attr('id'); // Get Id
        $('.tabs-content').hide(); //Hid All Tabs Content
        $('#' + 'top-' + id).show(); //Show Tab Content
    });
    
});



//Add Items in Sales Invoice Table 

let invoice = document.getElementById('invoice'),
    customer = document.getElementById('customer'),
    sold = document.getElementById('sold'),
    total = document.getElementById('total'),
    btn = document.getElementById('submit'),
    tbody = document.getElementById('tbody');


btn.addEventListener('click', function () {
    // Creat Elment 
    let tr = document.createElement('tr'),
        tdinvoice = document.createElement('td'),
        tdcustomer = document.createElement('td'),
        tdsold = document.createElement('td'),
        tdtotal = document.createElement('td'),
        ////
        tdspan = document.createElement('td'),
        span = document.createElement('span');
    /// 

    // Append Input Value
    tdinvoice.textContent = "#" + invoice.value;
    tdcustomer.textContent = customer.value;
    tdsold.textContent = sold.value;
    tdtotal.textContent = total.value + " AED";
    //Append In html Dom
    tbody.appendChild(tr);
    tr.appendChild(tdinvoice);
    tr.appendChild(tdcustomer);
    tr.appendChild(tdsold);
    tr.appendChild(tdtotal);
    tr.appendChild(tdspan);
    tdspan.appendChild(span);

    //Rest Input Value 
    invoice.value = "";
    customer.value = "";
    sold.value = "";
    total.value = "";

});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu', 'June'],
        datasets: [{
            label: '',
            backgroundColor: '#fff',
            borderColor: '#0184fe85',
            data: [0, 10, 20, 10, 20, 10]
        }]
    }
});