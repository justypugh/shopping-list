
// Adding Items to List
$('#js-shopping-list-form').on("submit", function(event) {        
    
    let userText = $("#shopping-list-entry").val();
    $(this).val("");
    $("ul").append("<li>" +
                        "<span class='shopping-item'>" + userText + "</span>" +
                        "<div class='shopping-item-controls'>" + 
                            "<button class='shopping-item-toggle'>" +
                                "<span class='button-label'>check</span>" + 
                            "</button>" + 
                            "<button class='shopping-item-delete'>" +
                                "<span class='button-label'>delete</span>" +
                            "</button>" + 
                        "</div>" +
                    "</li>")
    event.preventDefault();  
});

// Check or un-check
$(".shopping-item").removeClass("shopping-item__checked");
$("ul").on("click", ".shopping-item-toggle", function(event){    
    $(this).closest("li").toggleClass("shopping-item__checked");
});  



// Delete Item
$("ul").on("click", ".shopping-item-delete", function(event){
    $(this).closest("li").remove();
    event.stopPropagation();
});   