// // global value
// // transportation
// walk        = "fa-blind";
// bicycle     = "fa-bicycle";
// bus         = "fa-bus";
// goal        = "fa-flag-o";
// // information
// rain          = "./images/rain.svg";
// snow          = "./images/snow.svg";
// traffic_jam   = "./images/traffic_jam.svg";
// no_bicycle    = "./images/no_bicycle.svg";
// may_no_bicycle = "./images/may_no_bicycle.svg";
var APP_NAME = "金沢乗換案内";

var show_route = ["徒歩", "自転車"];  //経路を表示するtransportation
var DEFAULT_SRC_MSG = "現在地";
var DEFAULT_DEST_MSG = "到着地を選択";
var DEFAULT_TIME = "現在時刻";

var DEMO_INIT_FILE = "sample.json";

var DEMO = [{dest: "金沢21世紀美術館", file:"sample1.json"},{dest: "ひがし茶屋街", file:"sample2.json"},{dest:"金沢駅(鼓門・もてなしドーム)",file:"sample3.json"}];
var TP_ICON = {walk: "fa-blind", bicycle: "fa-bicycle", bus: "fa-bus"};
var TP_COLOR = {
                  walk:    {background-color: "#3399ff"},
                  bicycle: {background-color: "green"},
                  bus:     {background-color: "red"}
               };

// 重複を排除しながらunshiftする関数
function arrayExist(array, value) {
  // 配列の最後までループ
  for (var i =0, len = array.length; i < len; i++) {
    if (value == array[i]) {
      // 存在したら配列番号を返す
      return i;
    }
  }
  // 存在しない場合falseを返す
  return false;
}

ons.bootstrap()
  .service('DataService', function($http) {
    var sample;
    var service = {};

    service.setSample = function(data){
      sample = data;
      sample.surroundings.unshift({spot_name: DEFAULT_SRC_MSG, distance: ""});
    };

    service.getSurroundings = function() {
      return sample.surroundings;
    };
    service.setHistory = function(spot_name) {
      if(spot_name === DEFAULT_SRC_MSG) {
        return;
      }
      var history = localStorage.getItem('history');
      if(history == null) {
        localStorage.setItem('history', spot_name);
      } else {
        history = history.split(',');
        var n = arrayExist(history, spot_name);    
        if(n !== false) {
          history.splice(n, 1);
        }
        history.unshift(spot_name);
        localStorage.setItem('history', history);
      }
    };
    service.getHistory = function() { //return array
      var history = localStorage.getItem('history');
      if(history == null) {
        console.log('no history');
        return([]);
      } else {
        console.log('exist history');
        return history.split(',');
      } 
    };
    service.getTimeLines = function() {
      return sample.timeline;
    };
    service.getSpotData = function(spot_name) {
      return sample.spotdata[spot_name];
    };
    service.getData = function(param) {
      var DEMO_PATTERN = DEMO;
      var sample_file = DEMO_INIT_FILE; // default file is sample1.json
      angular.forEach(DEMO_PATTERN, function(p){
        if(p.dest === param.dest) {
          console.log("hit sample data: " + p.files);
          sample_file = p.file;
        }
      });
      return $http({method: 'GET', url: sample_file}).
        success(function(data, status, headers, config) {
          // レスポンスが有効の場合に、非同期で呼び出されるコールバックです。
          console.log(data);
          service.setSample(data);
        }).
        error(function(data, status, headers, config) {
          // エラーが発生、またはサーバからエラーステータスが返された場合に、
          // 非同期で呼び出されます。
          alert("電波の良いところでアプリを起動してください。");
          console.log("Error Code: 0");
        });
    };
    return service;
  })
  .controller('AppController', function($scope, $http, DataService) {
    $scope.application_name = APP_NAME;
    $scope.search = {src: DEFAULT_SRC_MSG, dest: DEFAULT_DEST_MSG};
    $scope.search_type = "出発";
    $scope.time = DEFAULT_TIME;
    $scope.people_n = 1;

    //init
    DataService.getData({});
    
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
      // if($scope.search.dest === DEFAULT_DEST_MSG) {
      //   alert("目的地を選択してください。")
      //   return;
      // }else if($scope.search.dest === $scope.search.dest) {
      //   alert("目的地と到着地が同じです");
      //   return;
      // }
      modal.show();
      promise = DataService.getData({src:$scope.search.src, dest:$scope.search.dest});
      promise.then(function(response){
        setTimeout(function() {
          modal.hide();
          navi.pushPage('timeline.html');
        }, 0);          
      });
    };
  })
  .controller('SearchController', function($scope, DataService) {
    var type = {src: "出発地", dest: "到着地"};
    var search_type = navi.topPage.data.search_type; // src or dest
    this.title = type[search_type];

    this.ViewSurroundings = "surroundings"; // use in if
    this.ViewHistory = "history";  // use in if
    this.check = this.ViewSurroundings;  // set default need to hardcoard
    this.surroundings_style = {display: 'inline'};
    this.history_style = {display: 'none'};


    // set data
    this.surroundings = DataService.getSurroundings();
    this.history = DataService.getHistory();

    this.changeView = function() {
        if (this.check === this.ViewSurroundings) {
          this.surroundings_style = {display: 'inline'};
          this.history_style = {display: 'none'};
        } else if(this.check === this.ViewHistory) {
          this.surroundings_style = {display: 'none'};
          this.history_style = {display: 'inline'};
        } else {
            console.log("no match:" + this.check);
        }
    };

    this.setSpot = function(spot_name) {
      $scope.search[search_type] = spot_name;
      DataService.setHistory(spot_name);
      navi.popPage();
    };
  })
  .controller('TimeLineController', function($scope, DataService) {
    this.search_type = $scope.search_type;
    this.time        = $scope.time;
    this.src         = $scope.search.src;
    this.dest        = $scope.search.dest;
    this.people_n    = $scope.people_n;
    this.result      = DataService.getTimeLines();
    this.go_timelineDetail = function(timeline_detail) {
      navi.pushPage('timeline_detail.html', {data: {timeline_detail: timeline_detail}});
    };
  })
  .controller('TimeLineDetailController', function(DataService) {
    this.detail = navi.topPage.data.timeline_detail;
    var waypoint = this.detail.waypoint;
    
    function getSrcLocation() {
      return {name: "現在地", lat: 36.578268, lng: 136.648035};
    }

    this.getTPColor = function(transportation_type) {
      return TP_COLOR[transportation_type];
    };
    this.getTPIcon = function(transportation_type) {
      return TP_ICON[transportation_type];
    };
    // show route if transportation_text exist in show_route
    this.showRoute = function(transportation_text) {
        if(show_route.indexOf(transportation_text) !== -1) {
          return true;
        }
    };
    // wapoint_index: 0,1,...n
    this.go_map = function(w_index){
      var srcLocation; // {name: spot_name, lat: latitude, lng: longitude}
      if(w_index === 0) {
        if(this.detail.start.spot_name === DEFAULT_SRC_MSG) {
          srcLocation = getSrcLocation();
        } else {
          var start = this.detail.start;
          srcLocation = {name: start.spot_name, lat: start.lat, lng: start.lng}
        }
      } else {
        var i = w_index - 1;
        srcLocation = {name: waypoint[i].spot_name, lat: waypoint[i].lat, lng: waypoint[i].lng};
      }
      var destLocation = {name: waypoint[w_index].spot_name, lat: waypoint[w_index].lat, lng: waypoint[w_index].lng};
      navi.pushPage('map.html', {data: {src: srcLocation, dest: destLocation}});
    };
    this.go_spot = function(spot_name) {
      navi.pushPage('spot.html', {data: {spot_name: spot_name}});
    };
  })
  .controller('MapController', function() {
    var srcLatLng = navi.topPage.data.src;
    var destLatLng = navi.topPage.data.dest;
    this.map_url = "http://maps.google.com/maps?saddr=" + srcLatLng.lat + "," + srcLatLng.lng + "&daddr=" + destLatLng.lat + "," + destLatLng.lng;
    console.log(srcLatLng.name +","+ srcLatLng.lat + ","+ srcLatLng.lng);
    console.log(destLatLng.name +","+ destLatLng.lat+ ","+ destLatLng.lng);
    
    this.goExMap = function(url) {
      window.open(url, '_system', 'location=yes');
      return false;
    };

    //Google mapの設定
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: srcLatLng,
    });
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);
    
    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      // var selectedMode = document.getElementById('mode').value;
      var selectedMode = "WALKING";
      directionsService.route({
        origin: srcLatLng,
        destination: destLatLng,
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
      }, function(response, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('通信に失敗しました。電波の良いところで再度お試しください。コード： ' + status);
        }
      });
    }
  })
  .controller('SpotController', function(DataService) {
    var spot_name = navi.topPage.data.spot_name;
    this.data = DataService.getSpotData(spot_name);
  });
ons.ready(function() {
  console.log("Onsen UI is ready!");
});
