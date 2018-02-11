// // use in index.html
var LANG = "ja"; // default lang

var LANG_SET = [{label: "日本語", value: "ja"}, {label: "English", value: "en"}];
// var DEFAULT_SRC_MSG = "現在地";
// var SRC_TEXT = {ja: "出発", en: "depart"};
// var DEST_TEXT = "到着";
// var SURROUNDINGS_TITLE = "周辺";
// var HISTORY_TITLE = "履歴";
// var SEARCH_TEXT = "検索";
// var SEARCH_CTR_TITLE = {src: "出発地", dest: "到着地"};
// var SEARCH_TYPE = {start: "出発", arrive: "到着"};
var TXT = {
  "ja": {
    "APP_NAME"          : "金沢ルート検索",
    "SRC_TEXT"          : "出発",
    "DEST_TEXT"         : "到着",
    "SHORT_SRC_TEXT"    : "発",
    "SHORT_DEST_TEXT"    : "着",
    "LANG_SETTING_LABEL": "言語設定",
    "CLOSE_LABEL"       : "閉じる",
    "SEARCH_CTR_TITLE"  : {"src": "出発地", "dest": "到着地"},
    "SEACH_INPUT_LABEL" : {"src": "出発地を入力", "dest": "到着地を入力"},
    "SURROUNDINGS_TITLE": "周辺",
    "HISTORY_TITLE"     : "履歴",
    "NO_HISTORY_MSG"    : "検索履歴なし",
    "SEARCH_TEXT"       : "検索",
    "DEFAULT_TIME" : "現在時刻",
    "PELPLE_LABEL": "人数",
    "P_UNIT" : "人",
    "SEARCH_TYPE" : {start: "出発", arrive: "到着"},
    "FAST_TEXT"        : "早",
    "DEFAULT_SRC_MSG" : "現在地",
    "DEFAULT_DEST_MSG" : "到着地を選択",
    "TRANSPORTATION_TEXT": {"walk": "徒歩", "bicycle": "自転車", "bus": "バス"},
    "FILTER_TEXT": "優先",
    "TIMELINE_TITLE": "経路一覧",
    "TIMELINE_DETAIL_TITLE" : "経路詳細",
    "MAP_TEXT": "地図",
    "SPOT_LABEL" : {"addr": "住所", "open": "営業時間", "fee": "料金", "desc": "概要"},
  },
  "en": {
    "APP_NAME"          : "Kanazawa Route Search",
    "SRC_TEXT"          : "Depart",
    "DEST_TEXT"         : "Arrive",
    "SHORT_SRC_TEXT"    : "D",
    "SHORT_DEST_TEXT"    : "A",
    "LANG_SETTING_LABEL": "Select Language",
    "CLOSE_LABEL"       : "Close",
    "SEARCH_CTR_TITLE"  : {"src": "Departure", "dest": "Destination"},
    "SEACH_INPUT_LABEL" : {"src": "input Departure", "dest": "input Destination"},
    "SURROUNDINGS_TITLE": "Surroungings",
    "HISTORY_TITLE"     : "History",
    "NO_HISTORY_MSG"    : "No History",
    "SEARCH_TEXT"       : "Search",
    "DEFAULT_TIME" : "Now",
    "PELPLE_LABEL": "People",
    "P_UNIT" : "",
    "SEARCH_TYPE" : {start: "Departure", arrive: "Arrive"},
    "FAST_TEXT"        : "F",
    "DEFAULT_SRC_MSG" : "Current Location",
    "DEFAULT_DEST_MSG" : "Select Destination",
    "TRANSPORTATION_TEXT": {"walk": "walking", "bicycle": "bicycle", "bus": "bus"},
    "FILTER_TEXT": "Filter",
    "TIMELINE_TITLE": "Routes",
    "TIMELINE_DETAIL_TITLE" : "Detail",
    "MAP_TEXT": "Map",
    "SPOT_LABEL" : {"addr": "Address", "open": "Open hour", "fee": "Fee", "desc": "Description"},

  }
};

var TRANSPORTATION = {"walk": true, "bicycle": true, "bus": true};
var SHOW_ROUTE = ["徒歩", "自転車"];  //経路を表示するtransportation
var DEFAULT_DEST_MSG = "到着地を選択";
var CONNECTION_FAILD_MSG = "電波の良いところでアプリを起動してください。";

var DEMO_INIT_FILE = {ja: "sample-ja.json", en: "sample-en.json"};
var DEMO = {
            "ja": [{dest: "金沢21世紀美術館", file:"sample1-ja.json"},{dest: "ひがし茶屋街", file:"sample2-ja.json"},{dest:"金沢駅(鼓門・もてなしドーム)",file:"sample3-ja.json"}],
            "en": [{dest: "21st Century Museum of Contemporary Art, Kanazawa", file:"sample1-en.json"},{dest: "Higashi Chaya Street", file:"sample2-en.json"},{dest:"Kanazawa station \(Komon gate hospitality dome\)",file:"sample3-en.json"}],
           };

var TP_ICON  = {walk: "fa-blind", bicycle: "fa-bicycle", bus: "fa-bus", goal: "fa-flag-o"};
var TP_COLOR = {
                  walk:    "#778899",
                  bicycle: "#a6cf22",
                  bus: {
                    "此花ルート": "#4f5187",
                    "Konohana route": "#4f5187",
                    "菊川ルート": "#821721",
                    "Kikukawa route": "#821721",
                    "材木ルート": "#0b6d34",
                    "Zaimoku route": "#0b6d34",
                    "長町ルート": "#b17117",
                    "Nagamachi route": "#b17117",
                  },
                  goal:    "black",
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
  .service('DecolateService', function(){
    var service = {};
    // tp = {"walk|bicycle|bus", "徒歩|此花ルート|自転車"}
    service.getTPColor = function(tp) {
      var tp_type = tp.type;
      if(tp_type === "bus") {
        var bus_route = tp.text;
        return TP_COLOR.bus[bus_route];
      } else {
        return TP_COLOR[tp_type];
      }
    };
    service.getTPIcon = function(tp_type) {
      return TP_ICON[tp_type];
    };

    return service;
  })
  .service('DataService', function($http) {
    var sample;
    var service = {};

    service.setSample = function(data){
      sample = data;
    };
    // search_type = "src or dest"
    service.getSurroundings = function(search_type, lang) {
      if (search_type === "src") {
        var surroundings = sample.surroundings.concat();
        surroundings.unshift({spot_name: TXT[lang].DEFAULT_SRC_MSG, distance: ""});
        return surroundings;
      } else {
        return sample.surroundings;
      }
    };
    service.setHistory = function(spot_name, lang) {
      console.log("@setHistory");
      if(spot_name === TXT[lang].DEFAULT_SRC_MSG) {
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
      console.log("@getHistory");
      var history = localStorage.getItem('history');
      if(history == null) {
        console.log('no history');
        return([]);
      } else {
        console.log('exist history' + history.split(','));
        return history.split(',');
      } 
    };
    service.getTimeLines = function() {
      return sample.timeline;
    };
    service.getSpotData = function(spot_name) {
      return sample.spotdata[spot_name];
    };
    // param = src, dest, lang
    // src, dest = spot name
    // lang = en or ja
    service.getData = function(param) {
      console.log("@getData");
      console.log(param);
      var DEMO_PATTERN = DEMO;
      var sample_file = DEMO_INIT_FILE[param.lang]; // default file is sample1.json
      angular.forEach(DEMO_PATTERN[param.lang], function(p){
        if(p.dest === param.dest) {
          console.log("hit sample data: " + p.file);
          sample_file = p.file;
        }
      });
      return $http({method: 'GET', url: sample_file}).
        success(function(data, status, headers, config) {
          // レスポンスが有効の場合に、非同期で呼び出されるコールバックです。
          console.log('success init data');
          service.setSample(data);
        }).
        error(function(data, status, headers, config) {
          // エラーが発生、またはサーバからエラーステータスが返された場合に、
          // 非同期で呼び出されます。
          alert(CONNECTION_FAILD_MSG);
          console.log("Error Code: 0");
        });
    };
    return service;
  })
  .controller('AppController', function($scope, $http, DataService) {
    $scope.lang_set = LANG_SET;
    $scope.type = "start"; // controll default search_type. start or arrive
    $scope.people_n = 1;

    langInit = function(lang) {
      console.log("set lang: " + lang);
      $scope.l = lang;
      txt = TXT[$scope.l];
      $scope.application_name = txt.APP_NAME;
      $scope.src_text = txt.SRC_TEXT;
      $scope.dest_text = txt.DEST_TEXT;
      $scope.lang_setting_label = txt.LANG_SETTING_LABEL;
      $scope.close_label = txt.CLOSE_LABEL;
      $scope.search_text = txt.SEARCH_TEXT;
      $scope.search = {src: txt.DEFAULT_SRC_MSG, dest: txt.DEFAULT_DEST_MSG};
      $scope.search_type = txt.SEARCH_TYPE;
      $scope.tp = TRANSPORTATION;
      $scope.p_unit = txt.P_UNIT;
      $scope.time = txt.DEFAULT_TIME;
      $scope.pelple_label = txt.PELPLE_LABEL;
      $scope.filter_text = txt.FILTER_TEXT;
      $scope.tp_text = txt.TRANSPORTATION_TEXT;
    };

    //init
    langInit(LANG); // default LANG = "ja"
    DataService.getData({lang: LANG});
    
    this.go_search = function(search_type) {
      navi.pushPage('search.html', {data: {search_type: search_type}});
    };
    this.setTime = function() {
      var time = new Date();

      // Datepicker Same handling for iPhone and Android
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
    changeLang = function(e) {
      $scope.l = e.target.value; // "ja" or "en"
      $scope.$apply(function(){
        langInit($scope.l);
        DataService.getData({lang: $scope.l});
      });
    };

    this.changeSearchType = function() {
      if($scope.type === 'start') {
        $scope.type = 'arrive';
      } else if($scope.type === 'arrive') {
        $scope.type = 'start';
      } else {
        $scope.type = 'arrive';
        console.log('invalid search type');
      }
    };
    this.go_timeline = function() {
      // if($scope.search.dest === DEFAULT_DEST_MSG) {
      //   alert("目的地を選択してください。")
      //   return;
      // }else if($scope.search.src === $scope.search.dest) {
      //   alert("目的地と到着地が同じです");
      //   return;
      // }
      modal.show();
      promise = DataService.getData({src:$scope.search.src, dest:$scope.search.dest, lang:$scope.l});
      promise.then(function(response){
        setTimeout(function() {
          modal.hide();
          navi.pushPage('timeline.html');
        }, 0);          
      });
    };
  })
  .controller('SearchController', function($scope, DataService) {
    var search_type = navi.topPage.data.search_type; // src or dest
    this.title = TXT[$scope.l].SEARCH_CTR_TITLE[search_type];
    this.input_label = TXT[$scope.l].SEACH_INPUT_LABEL[search_type];
    this.surroundings_title = TXT[$scope.l].SURROUNDINGS_TITLE;
    this.history_title = TXT[$scope.l].HISTORY_TITLE;
    this.no_history_msg = TXT[$scope.l].NO_HISTORY_MSG;

    this.ViewSurroundings = "surroundings"; // use in if
    this.ViewHistory = "history";  // use in if
    this.check = this.ViewSurroundings;  // set default need to hardcoard
    this.surroundings_style = {display: 'inline'};
    this.history_style = {display: 'none'};


    console.log("set data");
    this.surroundings = DataService.getSurroundings(search_type, $scope.l);
    this.history = DataService.getHistory();

    console.log("toggle view");
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

    console.log("@setSpot");
    this.setSpot = function(spot_name) {
      $scope.search[search_type] = spot_name;
      DataService.setHistory(spot_name, $scope.l);
      navi.popPage();
    };
  })
  .controller('TimeLineController', function($scope, DecolateService, DataService) {
    this.title= TXT[$scope.l].TIMELINE_TITLE;
    this.search_type = $scope.search_type[$scope.type];
    this.short_src_text = TXT[$scope.l].SHORT_SRC_TEXT;
    this.short_dest_text = TXT[$scope.l].SHORT_DEST_TEXT;

    this.time        = $scope.time;
    this.src         = $scope.search.src;
    this.dest        = $scope.search.dest;
    this.people_n    = $scope.people_n;
    this.fast_text   = TXT[$scope.l].FAST_TEXT;
    this.result      = DataService.getTimeLines();

    this.getTPColor = function(style, tp) {
      var hash = {};
      var color = DecolateService.getTPColor(tp);
      hash[style] = color; 
      return hash;
    };

    this.getTPIcon = function(tp) {
      return DecolateService.getTPIcon(tp.type);
    };

    this.go_timelineDetail = function(timeline_detail) {
      navi.pushPage('timeline_detail.html', {data: {timeline_detail: timeline_detail}});
    };
  })
  .controller('TimeLineDetailController', function($scope, DecolateService, DataService) {
    this.title = TXT[$scope.l].TIMELINE_DETAIL_TITLE;
    this.detail = navi.topPage.data.timeline_detail;
    this.map_text = TXT[$scope.l].MAP_TEXT;
    var waypoint = this.detail.waypoint;
    
    function getSrcLocation() {
      return {name: TXT[$scope.l].DEFAULT_SRC_MSG, lat: 36.578268, lng: 136.648035};
    }

    this.getTPColor = function(style, tp) {
      var hash = {};
      var color = DecolateService.getTPColor(tp);
      hash[style] = color; 
      return hash;
    };

    this.getTPIcon = function(tp) {
      return DecolateService.getTPIcon(tp.type);
    };

    this.showRoute = function(tp) {
        var tp_text = tp.text;
        if(SHOW_ROUTE.indexOf(tp_text) !== -1) {
          return true;
        }
    };
    // wapoint_index: 0,1,...n
    this.go_map = function(w_index){
      console.log("@go_map");
      var srcLocation; // {name: spot_name, lat: latitude, lng: longitude}
      var waypoints = [];
      if(w_index === 0) {
        if(this.detail.start.spot_name === TXT[$scope.l].DEFAULT_SRC_MSG) {
          srcLocation = getSrcLocation();
        } else {
          var start = this.detail.start;
          srcLocation = {name: start.spot_name, lat: start.lat, lng: start.lng};
        }
      } else {
        var i = w_index - 1;
        console.log("SRC: waypoint["+ i + "]:" + JSON.stringify(waypoint[i]));
        srcLocation = {name: waypoint[i].spot_name, lat: waypoint[i].lat, lng: waypoint[i].lng};
      }
      console.log("DEST: waypoint["+ w_index + "]:" + JSON.stringify(waypoint[w_index]));
      var destLocation = {name: waypoint[w_index].spot_name, lat: waypoint[w_index].lat, lng: waypoint[w_index].lng};
      if(waypoint[w_index].transportation.type === "bus") {
        waypoints = waypoint[w_index].passed_bus_stop;
        console.log("type is bus, num of bus stop is : " + waypoints.length);
      }
      navi.pushPage('map.html', {data: {src: srcLocation, dest: destLocation, waypoints: waypoints}});
    };
    this.go_spot = function(spot_name) {
      navi.pushPage('spot.html', {data: {spot_name: spot_name}});
    };
  })
  .controller('MapController', function() {
    console.log("@MapController");
    var srcLatLng = navi.topPage.data.src;
    var destLatLng = navi.topPage.data.dest;
    var w = navi.topPage.data.waypoints;
    this.map_url = "http://maps.google.com/maps?saddr=" + srcLatLng.lat + "," + srcLatLng.lng + "&daddr=" + destLatLng.lat + "," + destLatLng.lng;
    console.log("waypoint: " + w.length + ":" + JSON.stringify(w));
    console.log(srcLatLng.name +","+ srcLatLng.lat + ","+ srcLatLng.lng);
    console.log(destLatLng.name +","+ destLatLng.lat+ ","+ destLatLng.lng);
    
    var waypoints = [];
    if(w.length > 0) {
      console.log("create waypoints");
      angular.forEach(w, function(p){
        waypoints.push({location: new google.maps.LatLng(p.lat, p.lng)});
      });      
    }
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
        waypoints: waypoints,
        // waypoints: [ // 経由地点(指定なしでも可)
        //     { location: new google.maps.LatLng(35.630152,139.74044) },
        //     { location: new google.maps.LatLng(35.507456,139.617585) },
        // ],
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
      }, function(response, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert(CONNECTION_FAILD_MSG + ': code: ' + status);
        }
      });
    }

    this.goExMap = function(url) {
      window.open(url, '_system', 'location=yes');
      return false;
    };
  })
  .controller('SpotController', function($scope, DataService) {
    this.label = TXT[$scope.l].SPOT_LABEL;
    var spot_name = navi.topPage.data.spot_name;
    this.data = DataService.getSpotData(spot_name);
  });
ons.ready(function() {
  console.log("Onsen UI is ready!");
  ons.platform.select('android');
});


// // icon value
// // transportation
// walk        = "fa-blind";
// bicycle     = "fa-bicycle";
// bus         = "fa-bus";
// goal        = "fa-flag-o";
// // information
// rain          = "./images/rain.svg";
// light_rain    = "./images/light_rain.svg";
// snow          = "./images/snow.svg";
// traffic_jam   = "./images/traffic_jam.svg";
// no_bicycle    = "./images/no_bicycle.svg";
// may_no_bicycle = "./images/may_no_bicycle.svg";