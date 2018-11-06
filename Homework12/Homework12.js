<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <title>Pavadinimas</title>
</head>
<body>

<!--SCRIPTS-->
<script>
    function convertMetersSecondsLastedToKmPerH(meters, secondsLasted) {
    return (meters / 1000) / (secondsLasted / 60 / 60);
}

    var arr = [
    ["2017-07-06 19:59:45", "LRS123", 5000, 118],
    ["2017-07-06 19:59:45", "LRS124", 6000, 119],
    ["2017-07-06 19:59:45", "LRS125", 7000, 120],
    ["2017-07-06 19:59:45", "LRS126", 8000, 121],
    ];

    for (var i = 0; i < arr.length; i++) {
    arr[i][arr.length] = convertMetersSecondsLastedToKmPerH(arr[i][2], arr[i][3]);
}

    var tableTbodyHtml = "";
    for (var k = 0; k < arr.length; k++) {
    tableTbodyHtml += "<tr>" +
        "<td>"+arr[k][0]+"</td>" +
        "<td>"+arr[k][1]+"</td>" +
        "<td>"+arr[k][2]+"</td>" +
        "<td>"+arr[k][3]+"</td>" +
        "<td>"+arr[k][4]+"</td>" +
        "</tr>";
}
    document.getElementById("tableTBody").innerHTML = tableTbodyHtml;





</script>

</body>
</html>