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
    $scope.items = [{
        id: 4,
        name: "A"
    },
        {
            id: 3 + 2/3,
            name: "A-"
        },
        {
            id: 3 + 1/3,
            name: "B+"
        },
        {
            id: 3,
            name: "B"
        },{
            id: 2 +2/3,
            name: "B-"
        },
        {
            id: 2 + 1/3,
            name: "C+"
        },
        {
            id: 2,
            name: "C"
        },
        {
            id: 1 + 2/3,
            name: "C-"
        },
        {
            id: 1 + 1/3,
            name: "D+"
        },
        {
            id: 1,
            name: "D"
        },
        {
            id: 0,
            name: "F"
        }




    ];
    $scope.selected_val = 3;

    $scope.status = {
        isopen: false,
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
        isopen11: false


    };

    $scope.toggled = function(open) {
        console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
}



element.append($compile(html)(scope));
for (var i = 0; i < scope.items.length; i++) {
    if (scope.items[i].id === scope.selectedItem) {
        scope.bSelectedItem = scope.items[i];
        break;
    }
}
scope.selectVal = function (item) {
    switch (attrs.menuType) {
        case "button":
            $('button.button-label', element).html(item.name);
            break;
        default:
            $('a.dropdown-toggle', element).html('<b class="caret"></b> ' + item.name);
            break;
    }
    scope.doSelect({
        selectedVal: item.id
    });
};
scope.selectVal(scope.bSelectedItem);
