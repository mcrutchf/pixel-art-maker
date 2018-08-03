// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
// HELP!!! Reference youtube | https://www.youtube.com/watch?v=unkPI17Ql80 **// // HELP!!! Reference youtube | https://www.youtube.com/watch?v=OtSiwcq67j4 **//
//receiving uncaught reference error $ not defined https://stackoverflow.com/questions/2075337/uncaught-referenceerror-is-not-defined **//
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    })
    
    function makeGrid(h, w) {
            
        $('tr').remove(); //remove existing table rows when submit button is hit
    
    // Your code goes here!
    
    //for loops to add grid boxes
    for (var r=1; r<=h; r++) { $('#pixelCanvas').append('<tr id=table' + r + '></tr>');  //loops rows

    for (var c=1; c<=w; c++) { $('#table' + r).append('<td></td>');  //loops columns
        }
    }

    //Color Picture
        $('td').click(function addColor() {
        color = $('#colorPicker').val();

         if ($(this).attr('style')){
       }
         else { $(this).attr('style', 'background-color:'+ color);   }
})
    }