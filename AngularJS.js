let app = angular.module('form', []);

app.controller('formValidation', formValidation)
app.controller('grindedIce', grindedIce)

function formValidation($scope) {
    
    $scope.salary = 0;
    $scope.total = 0;

    // $scope.age ={
    //     rate : 0.0
    // }

    $scope.ages = [
        {
            label: 'Dưới 25 tuổi',
            rate: 0.07
        },
        {
            label: 'Từ 25 tuổi đển 40 tuổi',
            rate: 0.1
        },
        {
            label: 'Trên 40 tuổi',
            rate: 0.15
        }
    ]
    
    $scope.age = $scope.ages[0]

    $scope.getBonus = function () {
        let total = 0;
        let gender = $scope.gender
        let age = $scope.age;

        total = $scope.salary;
        total += age.rate * total;

        if (gender == "0") {
            total += 200000
        }

        return total;
    }

    $scope.items = [
        {
            name: 'Đá bào sữa',
            price: 20000
        },
        {
            name: 'Đá bào Cam',
            price: 10000
        },
        {
            name: 'Đá bào Tokyo',
            price: 25000
        },
        {
            name: 'Đá bào Haha',
            price: 20000
        },
        {
            name: 'Đá bào Quýt',
            price: 10000
        },
    ]

    $scope.getAmount = function () {
        let amount = 0;
        for (let i = 0; i < $scope.items.length; i++) {
            amount += $scope.items[i].price * $scope.items[i].quantity;
        }
        return amount;
    }


}