$(document).ready(function() {
    
    //hold itemNames for dropdown use
    var itemNames = [];;

    //query DB to get all of the item names back
    $.get('/api/items', function(data) {
        itemNames = data;
        console.log(itemNames);
    });

    //when dropdown is clicked render the item names from the DB
    $('.list-wrapper').on('show.bs.dropdown', '.dropdown',function () {
        for (var i = 0; i < itemNames.length; i++) {
            var item = $('<li>');
            item.append('<a href="#">' + itemNames[i].item_name + '</a>');
            console.log(item);
            $('.dropdown-menu').append(item);
        }
    });

    //remove content from dropdown to keep from duplicates being shown
    $('.list-wrapper').on('hide.bs.dropdown', '.dropdown', function () {
        $('.dropdown-menu').empty();
    });

    $('.list-wrapper').on('click', '#add-item-btn', function() {
        var newListItem = $('<div>');
        newListItem.addClass('list-item');
        var newDropDown = $('<div>');
        newDropDown.addClass('dropdown');
        newDropDown.append('<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Item <span class="caret"></span></button>');
        newDropDown.append('<ul class="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenu1"></ul>');
        newListItem.append(newDropDown);
        newListItem.append('<input type="text" name="" id="quantity-input" placeholder="Quantity" class="form-control" required >');
        newListItem.append('<input type="text" name="" id="price-per-textbox" placeholder="Price Per Item" class="form-control" disabled >');
        newListItem.append('<input type="text" name="" id="total-per-textbox" placeholder="Total" class="form-control" disabled >');
        newListItem.append('<button type="submit" class="btn btn-primary" id="add-item-btn">+</button>');
        $('.list-wrapper').append(newListItem);
    });
});