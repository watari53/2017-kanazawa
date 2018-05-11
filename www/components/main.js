// // use in index.html
var DEVICE_ID = "";
var LANG = "ja"; // default lang, or en
var LAMBDA_URL = "https://g336ju2rsd.execute-api.us-east-2.amazonaws.com/hello/hello-world";
var LANG_SET = [{label: "日本語", value: "ja"}, {label: "English", value: "en"}];
var SURROUND_SPOT_FILE = {
  "ja": "spot-ja.json",
  "en": "spot-en.json"
};

var SAMPLE_RESPONSE = "response.json";

var TXT = {
  "ja": {
    "APP_NAME"          : "金沢乗換ナビ",
    "SRC_TEXT"          : "出発",
    "DEST_TEXT"         : "到着",
    "SHORT_SRC_TEXT"    : "発",
    "SHORT_DEST_TEXT"    : "着",
    "LANG_SETTING_LABEL": "言語設定",
    "CLOSE_LABEL"       : "閉じる",
    "SEARCH_CTR_TITLE"  : {"src": "出発地", "dest": "到着地"},
    "SEACH_INPUT_LABEL" : {"src": "出発地を入力", "dest": "到着地を入力"},
    "NO_SRC_MSG"        : "出発地を選択してください。",
    "NO_DEST_MSG"       : "目的地を選択してください。",
    "SAME_SRC_DEST_MSG" : "目的地と到着地が同じです。",
    "CONNECTION_FAILED_MSG": "電波の良いところでアプリを起動してください。",
    "SURROUNDINGS_TITLE": "周辺",
    "HISTORY_TITLE"     : "履歴",
    "NO_HISTORY_MSG"    : "検索履歴なし",
    "SEARCH_TEXT"       : "検索",
    "PELPLE_LABEL": "人数",
    "P_UNIT" : "人",
    "SEARCH_TYPE" : {start: "出発", arrive: "到着"},
    "FAST_TEXT"        : "早",
    "DEFAULT_SRC_MSG"  : "出発地を選択",
    "DEFAULT_DEST_MSG" : "到着地を選択",
    "CURRENT_LOCATION_LABEL" : "現在地",
    "TRANSPORTATION_TEXT": {"walk": "徒歩", "bicycle": "自転車", "bus": "バス"},
    "FILTER_TEXT": "優先",
    "TIMELINE_TITLE": "経路一覧",
    "TIMELINE_DETAIL_TITLE" : "経路詳細",
    "MAP_TEXT": "地図",
    "SPOT_LABEL" : {"addr": "住所", "open": "営業時間", "fee": "料金", "desc": "概要"},
  },
  "en": {
    "APP_NAME"          : "Kanazawa NAVI",
    "SRC_TEXT"          : "Depart",
    "DEST_TEXT"         : "Arrive",
    "SHORT_SRC_TEXT"    : "D",
    "SHORT_DEST_TEXT"    : "A",
    "LANG_SETTING_LABEL": "Select Language",
    "CLOSE_LABEL"       : "Close",
    "SEARCH_CTR_TITLE"  : {"src": "Departure", "dest": "Destination"},
    "SEACH_INPUT_LABEL" : {"src": "input Departure", "dest": "input Destination"},
    "NO_SRC_MSG"        : "Please Select Departure",
    "NO_DEST_MSG"       : "Please Select Destination.",
    "SAME_SRC_DEST_MSG" : "src and dest is same.",
    "CONNECTION_FAILED_MSG": "connection failed",
    "SURROUNDINGS_TITLE": "Surroungings",
    "HISTORY_TITLE"     : "History",
    "NO_HISTORY_MSG"    : "No History",
    "SEARCH_TEXT"       : "Search",
    "PELPLE_LABEL": "People",
    "P_UNIT" : "",
    "SEARCH_TYPE" : {start: "Departure", arrive: "Arrive"},
    "FAST_TEXT"        : "F",
    "DEFAULT_SRC_MSG"  : "Select Departure",
    "DEFAULT_DEST_MSG" : "Select Destination",
    "CURRENT_LOCATION_LABEL" : "You Are Here",
    "TRANSPORTATION_TEXT": {"walk": "walking", "bicycle": "bicycle", "bus": "bus"},
    "FILTER_TEXT": "Filter",
    "TIMELINE_TITLE": "Routes",
    "TIMELINE_DETAIL_TITLE" : "Detail",
    "MAP_TEXT": "Map",
    "SPOT_LABEL" : {"addr": "Address", "open": "Open hour", "fee": "Fee", "desc": "Description"},
  }
};

var HISTORY_KEY = {"ja": "history_ja", "en": "history_en"};
var TRANSPORTATION = {"walk": true, "bicycle": true, "bus": true};

var TP_ICON  = {walk: "fa-blind", bicycle: "fa-bicycle", bus: "fa-bus", goal: "fa-flag-o"};
var TP_COLOR = {
                  walk:    "#778899",
                  bicycle: "#a6cf22",
                  bus: {
                    //ふらっとバス
                    "此花ルート": "#1e1e6a",
                    "Konohana route": "#1e1e6a",
                    "菊川ルート": "#821721",
                    "Kikukawa route": "#821721",
                    "材木ルート": "#0b6d34",
                    "Zaimoku route": "#0b6d34",
                    "長町ルート": "#b17117",
                    "Nagamachi route": "#b17117",
                    "兼六園シャトル": "#7d042f",
                    "KENROKUEN SHUTTLE": "#7d042f",
                    //城下町周遊バス
                    "右回りルート": "#d56c17",
                    "Right Loop": "#d56c17",
                    "左回りルート": "#388a34",
                    "Left Loop": "#388a34",
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

//距離の計算//
function getDistance(lat1, lng1, lat2, lng2) {
  function radians(deg){
    return deg * Math.PI / 180;
  }
  return 6378.14 * Math.acos(Math.cos(radians(lat1))* 
    Math.cos(radians(lat2))*
    Math.cos(radians(lng2)-radians(lng1))+
    Math.sin(radians(lat1))*
    Math.sin(radians(lat2)));
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
    var service = {};
    var history_separator = "::";
    var spot_for_surroundings = [];
    var response = {};

    // search_type = "src or dest"
    service.getSurroundings = function(search_type, location, lang) {
      console.log("@getSurroundings");
      var spots = spot_for_surroundings;
      var surroundings = [];
      if (search_type === "src" && location != null) {
        surroundings.unshift({spot_name: TXT[lang].CURRENT_LOCATION_LABEL, distance: 0});
      };
      angular.forEach(spots, function(spot, i) {
        var distance = "-";
        if (location != null) { // if gps enabled
          var distance = getDistance(location.lat, location.lng, spot.lat, spot.lng);
        }
        surroundings.push({spot_name: spot.spot_name, distance: distance});
      });
      return surroundings;
    };

    service.setHistory = function(spot_name, lang) {
      var sep = history_separator;
      var key = HISTORY_KEY[lang];
      console.log("@setHistory: key is " + key);
      if(spot_name === TXT[lang].CURRENT_LOCATION_LABEL) {
        return;
      }
      var history = localStorage.getItem(key);
      if(history == null) {
        localStorage.setItem(key, spot_name);
      } else {
        history = history.split(sep);
        var n = arrayExist(history, spot_name);    
        if(n !== false) {
          history.splice(n, 1);
        }
        history.unshift(spot_name);
        localStorage.setItem(key, history.join(sep));
      }
    };
    service.getHistory = function(lang) { //return array
      var sep = history_separator;
      var key = HISTORY_KEY[lang];

      console.log("@getHistory: key is" + key);
      var history = localStorage.getItem(key);
      if(history == null) {
        console.log('no history');
        return([]);
      } else {
        console.log('exist history');
        return history.split(sep);
      } 
    };

    // param = {lang: "ja" or "en"}
    service.setSpotForSearch = function(param) {
      console.log("@setSpotForSearch");
      var lang = param.lang;

      return $http({method: 'GET', url: SURROUND_SPOT_FILE[lang]}).
        success(function(data, status, headers, config) {
          // レスポンスが有効の場合に、非同期で呼び出されるコールバックです。
          console.log('success init data');
          spot_for_surroundings = data;
        }).
        error(function(data, status, headers, config) {
          // エラーが発生、またはサーバからエラーステータスが返された場合に、
          // 非同期で呼び出されます。
          alert(TXT[lang].CONNECTION_FAILED_MSG);
          console.log("Error Code: 0");
        });
    };

    service.postData= function(param) {
      console.log("@postData");
      var lang = param.lang;

       return $http({method: 'POST', url: LAMBDA_URL, data: param}).
        success(function(data, status, headers, config) {
          // レスポンスが有効の場合に、非同期で呼び出されるコールバックです。
          // console.log('success post data');
          // console.log('data:' + data);
          // console.log('status:' + status);
          // console.log('headers:' + headers);
          // console.log('config:' + config);
        }).
        error(function(data, status, headers, config) {
          // エラーが発生、またはサーバからエラーステータスが返された場合に、
          // 非同期で呼び出されます。
          alert(TXT[lang].CONNECTION_FAILED_MSG);
          // console.log('data:' + data);
          // console.log('status:' + status);
          // console.log('headers:' + headers);
          // console.log('config:' + config);
          // console.log("Error Code: 0");
        });
    };

    service.getSampleData = function() {
      console.log("@getSampleData");
      return $http.get(SAMPLE_RESPONSE).
        success(function(data) {
          console.log('success read sample data');
        }).
        error(function(err){
          console.log('faild to read sample data');
        });
    };

    service.setResponse = function(resp) {
      console.log("@setResponse");
      response = resp;
    };

    service.getResponse = function() {
      console.log("@getResponse");
      console.log(response);
      return response;
    };

    service.getSpotData = function(spot_name) {
      return response.spotdata[spot_name];
    };    

    return service;
  })
  .controller('AppController', function($scope, $http, DataService) {
    $scope.lang_set = LANG_SET;
    $scope.type = "start"; // controll default search_type. start or arrive
    $scope.people_n = 1; //default people_n
    $scope.time = new Date();
    $scope.location = {lat: null, lng: null};

    initLang = function(lang) {
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
      $scope.pelple_label = txt.PELPLE_LABEL;
      $scope.filter_text = txt.FILTER_TEXT;
      $scope.tp_text = txt.TRANSPORTATION_TEXT;
    };

    //init
    initLang(LANG); // default LANG = "ja"
    DataService.setSpotForSearch({lang: LANG});

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
      // console.log('Latitude: '          + position.coords.latitude          + '\n' +
      //             'Longitude: '         + position.coords.longitude         + '\n' +
      //             'Altitude: '          + position.coords.altitude          + '\n' +
      //             'Accuracy: '          + position.coords.accuracy          + '\n' +
      //             'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
      //             'Heading: '           + position.coords.heading           + '\n' +
      //             'Speed: '             + position.coords.speed             + '\n' +
      //             'Timestamp: '         + position.timestamp                + '\n');
      $scope.location.lat = position.coords.latitude;
      $scope.location.lng = position.coords.longitude;
      // $scope.location.lat = 36.558945;
      // $scope.location.lng = 136.652489;
    };
    // onError Callback receives a PositionError object
    //
    function onError(error) {
      console.log('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
      $scope.location = null;
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    
    this.go_search = function(search_type) {
      navi.pushPage('search.html', {data: {search_type: search_type}});
    };

    this.setTime = function() {
      var time = $scope.time;
      // Datepicker Same handling for iPhone and Android
      window.plugins.datePicker.show({
          date : time,
          mode : 'time', // date or time or blank for both
          allowOldDates : true
      }, function(returnDate) {
          var newTime = "";
          if(returnDate === "") {
            return;
          } else {
            newTime = new Date(returnDate);
          }
          // alert(newTime.toString());
          $scope.time = newTime;
          $scope.$apply();
      });
    };
    
    this.addition_subtraction = function(n) {
      $scope.people_n = $scope.people_n + n;
    };

    changeLang = function(e) {
      $scope.l = e.target.value; // "ja" or "en"
      $scope.$apply(function(){
        initLang($scope.l);
        DataService.setSpotForSearch({lang: $scope.l});
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
      if($scope.search.src === TXT[$scope.l].DEFAULT_SRC_MSG) {
        alert(TXT[$scope.l].NO_SRC_MSG);

        return;
      }else if($scope.search.dest === TXT[$scope.l].DEFAULT_DEST_MSG) {
        alert(TXT[$scope.l].NO_DEST_MSG);

        return;
      }else if($scope.search.src === $scope.search.dest) {
        alert(TXT[$scope.l].SAME_SRC_DEST_MSG);
        return;
      }
      modal.show();
      var send_data = {
        // "src": "金沢駅(鼓門・もてなしドーム)",
        // "dest" : "金沢21世紀美術館",
        // "time":"20180625 09:00",
        "user_id": DEVICE_ID,
        "src"      : $scope.search.src, // 現在地 or You Are Here , other spot name
        "dest"     : $scope.search.dest,
        "time"     : moment($scope.time).format("YYYYMMDD HH:mm"),
        "mode"     : $scope.type,
        "people_n" : $scope.people_n,
        "lang"     : $scope.l        
      };
      console.log("send_data: "+ JSON.stringify(send_data));
      if($scope.search.src == TXT[$scope.l].CURRENT_LOCATION_LABEL) {
        send_data.lat = $scope.location.lat;
        send_data.lng= $scope.location.lng;
      }
      promise = DataService.postData(send_data);
      // promise = DataService.getSampleData();
      promise.then(function(response){
        setTimeout(function() {
          DataService.setResponse(response.data);
          modal.hide();
          navi.pushPage('timeline.html', {data: {response: response.data}});
        }, 1500);          
      }).catch(function(e) {
        alert(TXT[$scope.l].CONNECTION_FAILED_MSG);
        modal.hide();
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
    this.surroundings = DataService.getSurroundings(search_type, $scope.location, $scope.l);
    this.history = DataService.getHistory($scope.l);

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
    
    this.roundDistance = function(dist) {
      if (dist < 1) {
        var d = (dist*100).toPrecision(2);
        return d + "m";
      } else if(dist < 10){
        return dist.ToPrecision(2) + "km";
      } else {
        return "+10km";
      }
    };
  })
  .controller('TimeLineController', function($scope, DecolateService, DataService) {
    // var data = navi.topPage.data.response;
    var data = DataService.getResponse();

    this.title= TXT[$scope.l].TIMELINE_TITLE;
    this.search_type = $scope.search_type[$scope.type];
    this.short_src_text = TXT[$scope.l].SHORT_SRC_TEXT;
    this.short_dest_text = TXT[$scope.l].SHORT_DEST_TEXT;

    this.time        = $scope.time;
    this.src         = $scope.search.src;
    this.dest        = $scope.search.dest;
    this.people_n    = $scope.people_n;
    this.fast_text   = TXT[$scope.l].FAST_TEXT;
    this.timeline      = data.timeline;

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
    
    this.getTPColor = function(style, tp) {
      var hash = {};
      var color = DecolateService.getTPColor(tp);
      hash[style] = color; 
      return hash;
    };

    this.getTPIcon = function(tp) {
      return DecolateService.getTPIcon(tp.type);
    };

    // wapoint_index: 0,1,...n
    this.go_map = function(w_index){
      console.log("@go_map");
      var srcLocation = {}; // {name: spot_name, lat: latitude, lng: longitude}
      var waypoints = [];
      if(w_index === 0) {
        if(this.detail.start.spot_name === TXT[$scope.l].CURRENT_LOCATION_LABEL) {
          srcLocation = {name: TXT[$scope.l].CURRENT_LOCATION_LABEL, lat: $scope.location.lat, lng: $scope.location.lng};

        } else {
          var start = this.detail.start;
          srcLocation = {name: start.spot_name, lat: start.lat, lng: start.lng};
        }
      } else {
        var i = w_index - 1;
        // console.log("SRC: waypoint["+ i + "]:" + JSON.stringify(waypoint[i]));
        srcLocation = {name: waypoint[i].spot_name, lat: waypoint[i].lat, lng: waypoint[i].lng};
      }
      // console.log("DEST: waypoint["+ w_index + "]:" + JSON.stringify(waypoint[w_index]));
      var destLocation = {name: waypoint[w_index].spot_name, lat: waypoint[w_index].lat, lng: waypoint[w_index].lng};
      if(waypoint[w_index].transportation.type === "bus") {
        waypoints = waypoint[w_index].passed_bus_stop;
        // console.log("type is bus, num of bus stop is : " + waypoints.length);
      }
      navi.pushPage('map.html', {data: {src: srcLocation, dest: destLocation, waypoints: waypoints}});
    };

    this.go_spot = function(spot_name) {
      navi.pushPage('spot.html', {data: {spot_name: spot_name}});
    };
  })
  .controller('MapController', function($scope) {
    console.log("@MapController");
    this.title = TXT[$scope.l].MAP_TEXT;
    var srcLatLng = navi.topPage.data.src;
    var destLatLng = navi.topPage.data.dest;
    var waypoints = [];
    var w = navi.topPage.data.waypoints;
    this.map_url = "http://maps.google.com/maps?saddr=" + srcLatLng.lat + "," + srcLatLng.lng + "&daddr=" + destLatLng.lat + "," + destLatLng.lng;
    // console.log("waypoint: " + w.length + ":" + JSON.stringify(w));
    // console.log(srcLatLng.name +","+ srcLatLng.lat + ","+ srcLatLng.lng);
    // console.log(destLatLng.name +","+ destLatLng.lat+ ","+ destLatLng.lng);
    
    if(8 < w.length ) {
      console.log("exceed max of waypoint");
    } else if(0 < w.length) {
      console.log("create waypoints");
      angular.forEach(w, function(p){
        waypoints.push({location: new google.maps.LatLng(p.lat, p.lng)});
      });      
      console.log("done create waypoints");
      // console.log(JSON.stringify(waypoints));
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
          alert(TXT[$scope.l].CONNECTION_FAILED_MSG + ': code: ' + status);
        }
      });
    }

    this.goExMap = function(url) {
      window.open(url, '_system', 'location=yes');
      return false;
    };
  })
  .controller('SpotController', function($scope, DataService) {
    console.log("@SpotController");
    this.label = TXT[$scope.l].SPOT_LABEL;
    var spot_name = navi.topPage.data.spot_name;
    this.data = DataService.getSpotData(spot_name);
  });
ons.ready(function() {
  monaca.getDeviceId(function(id){
     DEVICE_ID = id;
     console.log('Device ID: ' + DEVICE_ID);
  });
  ons.platform.select('android');
  console.log("Onsen UI is ready!");
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