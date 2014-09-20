angular.module('kittensApp', ['ui.bootstrap']);
function CarouselDemoCtrl($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 500 + slides.length;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }
}

function DropdownCtrl($scope) {


    $scope.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

<!-- This is the array for the credits-->
    $scope.credits = [
        0,
        1,
        2,
        3,
        4,
        5
    ];
<!--This is the grades and corresponding percent of credits you earned array-->
    $scope.grades = [
        {
            grade: 'A',
            id: 4
        },
        {
            grade: 'A-',
            id: 3 + 2 / 3
        },
        {
            grade: 'B+',
            id: 3 + 1 / 3
        },
        {
            grade: 'B',
            id: 3
        },
        {
            grade: 'B-',
            id: 2 + 2 / 3
        },
        {
            grade: 'C+',
            id: 2 + 1 / 3
        },
        {
            grade: 'C',
            id: 2
        },
        {
            grade: 'C-',
            id: 1 + 2 / 3
        },
        {
            grade: 'D+',
            id: 1 + 1 / 3
        },
        {
            grade: 'D',
            id: 1
        },
        {
            grade: 'F',
            id: 0
        }
    ];
<!-- This determines if a button is clicked open or naaaaah -->
    $scope.statuses = {
        isopen1: false,
        isopen2: false,
        isopen3: false,
        isopen4: false,
        isopen5: false,
        isopen6: false,
        isopen7: false,
        isopen8: false,
        isopen9: false,
        isopen10: false,
        isopen11: false,
        isopen12: false

    }

<!-- This is the courses array, it is what is changed by the selectGrade and selectCredit functions-->
    $scope.courses = [
        {
            grade: "",
            id: 0,
            credit: 0
        },
        {
            grade: "",
            id: 0,
            credit: 0
        },
        {
            grade: "",
            id: 0,
            credit: 0
        },
        {
            grade: "",
            id: 0,
            credit: 0
        },
        {
            grade: "",
            id: 0,
            credit: 0
        },
        {
            grade: "",
            id: 0,
            credit: 0
        }

    ];

<!-- This is a function that, when used with data-ng-click, changes the grade and id in the courses array-->
    $scope.selectGrade = function (course, grade) {
        course.grade = grade.grade;
        course.id = grade.id;
    };
<!-- This is a function that, when used with data-ng-click, changes the credit in the courses array-->
    $scope.selectCredit = function (course, credits) {
        course.credit = credits;
    };



<!-- This calculates the GPA, if no classes and credits are entered, it tells to enter in a class and credit-->
    $scope.GPA = function() {
        var currentCredits = 0;
        var currentGradePoints = 0;
        for (i=0; i < $scope.courses.length; i++){
            currentCredits = $scope.courses[i].credit + currentCredits;
            currentGradePoints = ($scope.courses[i].id * $scope.courses[i].credit) + currentGradePoints;
        }
        var GPA = currentGradePoints /  currentCredits;

        if (GPA >= 0) {
            return Math.round(GPA * 1000)/1000;
        } else {
            return "Enter in a class and a credit for that class."
        }



    }
}


