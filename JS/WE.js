// // Page 5
// $(document).ready(function () {
// 	$('#shoppingTable').DataTable({
// 		"scrollY": "200px",
// 		"scrollCollapse": true,
// 	});

// 	$('.dataTables_length').addClass('bs-select');
// });

// Page 6

    $(document).ready(function(){
        $('#payment').hide();
        $('#billingPayemnt').on("click",function(){
            $('#billing').show();
            $('#payment').hide();
        });
        $('#paymentButton').on("click",function(){
            $('#billing').hide();
            $('#payment').show();
        });
    });