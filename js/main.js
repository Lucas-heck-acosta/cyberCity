$(document).ready(function() {

    
    setTimeout(function() {
        $('#modal').modal('show')
    }, 10000)


    $('#dropdownMenuButton').click(function() {
        $(this).toggleClass('rotate-down');
    });

    $('#dropdownMenu').on('hidden.bs.dropdown', function() {
        $('#dropdownMenuButton').removeClass('rotate-down');
    });


    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            }
        }
    })

    $('#confirmar').click(function(e) {
        if ($('form').valid())
        {
            $('#modal').modal('hide');
            toast = new bootstrap.Toast(document.getElementById('toast-succ'))
            toast.show()
        } 
        else
        {
            e.preventDefault();
            e.stopPropagation();
        }
    });
});

