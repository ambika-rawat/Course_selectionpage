function selectCourse(courseName) {

    let message =
        "Course Selected Successfully: " + courseName;

    document.getElementById("result").innerHTML = message;

    alert(courseName + " has been selected!");
}