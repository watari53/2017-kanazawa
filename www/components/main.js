// global value
// transportation
walk        = "fa-blind";
bicycle     = "fa-bicycle";
bus         = "fa-bus";
goal        = "fa-flag-o";
// information
rain          = "./images/rain.svg";
snow          = "./images/snow.svg";
traffic_jam   = "./images/traffic_jam.svg";
no_bicycle    = "./images/no_bicycle.svg";
may_no_bicycle = "./images/may_no_bicycle.svg";
wp_color    = {
                walk: "#ccc",
              };

ons.bootstrap()
  .service('DataService', function($http) {
    $http.get('data.json').then(function(response){
      sample = response.data;
    });
    var service = {};

    service.getSurroundings = function() {
      return sample.surroundings;
    };
    service.getTimeLines = function() {
      return sample.timeline;
    };
    service.getSpotData = function(spot_name) {
      return sample.spotdata[spot_name];
    };
    return service;
  })
  .controller('AppController', function($scope) {
    $scope.application_name = "金沢乗換案内";
    $scope.search = {src: "出発地を選択", dest: "到着地を選択"};
    $scope.time = "現在時刻";

    $scope.people_n = 1;
    this.go_search = function(search_type) {
      navi.pushPage('search.html', {data: {search_type: search_type}});
    };
    this.setTime = function() {
      var time = new Date();

      // Same handling for iPhone and Android
      window.plugins.datePicker.show({
          date : time,
          mode : 'time', // date or time or blank for both
          allowOldDates : true
      }, function(returnDate) {
          var newTime = new Date(returnDate);
          // alert(newTime.toString());
          $scope.time = newTime;
          $scope.$apply();
      });
    };
    this.go_timeline = function() {
      modal.show();
      setTimeout(function() {
        modal.hide();
        navi.pushPage('timeline.html');
      }, 0);
    };
  })
  .controller('SearchController', function($scope, DataService) {
    var type = {src: "出発地", dest: "到着地"};
    var search_type = navi.topPage.data.search_type; // src or dest
    this.title = type[search_type];
    this.surroundings = DataService.getSurroundings();
    this.setSpot = function(spot_name) {
      $scope.search[search_type] = spot_name;
      navi.popPage();
    };
  })
  .controller('TimeLineController', function(DataService) {
    this.search_type = "出発";
    this.time = "2018年2月17日 14:30";
    this.src = "現在地";
    this.dest = "兼六園";
    this.result = DataService.getTimeLines();
    this.go_timelineDetail = function(timeline_detail) {
      navi.pushPage('timeline_detail.html', {data: {timeline_detail: timeline_detail}});
    };
  }).controller('TimeLineDetailController', function(DataService) {
    this.detail = navi.topPage.data.timeline_detail;
    this.go_spot = function(spot_name) {
      navi.pushPage('spot.html', {data: {spot_name: spot_name}});
    }
  })
  .controller('SpotController', function(DataService) {
    var spot_name = navi.topPage.data.spot_name;
    this.data = DataService.getSpotData(spot_name);
  });
ons.ready(function() {
  console.log("Onsen UI is ready!");
});
