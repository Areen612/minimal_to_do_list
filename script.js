$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        let task = $("#task").val();
        if (task === "") {
            alert("Please enter a task");
            return;
        }
        $("#list").append("<li class='task'><span class='task-text'>" + task +
            "</span><button class='complete'>Complete</button><button class='remove'>X</button></li>");
        $("#task").val("");
    });

    $(document).on("click", ".complete", function () {
        $(this).siblings(".task-text").toggleClass("completed");
    });

    $(document).on("click", ".remove", function () {
        $(this).parent().remove();
    });
});
