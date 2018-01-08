// global value
walk        = "fa-blind";
bicycle     = "fa-bicycle";
bus         = "fa-bus";
goal        = "fa-flag-o";
rain        = "fa-umbrella";
traffic_jam = "fa-ban";
no_bicycle  = "fa-meh-o";
wp_color    = {
                walk: "#ccc",
              };

ons.bootstrap()
  .service('DataService', function() {
    var service = {};

    service.getSurroundings = function() {
      return [
        {spot_name: "兼六園", distance: "500m"},
        {spot_name: "近江町市場", distance: "600m"},
        {spot_name: "金沢駅", distance: "780m"},
        {spot_name: "金沢21世紀美術館", distance: "1km"},
        {spot_name: "金沢城", distance: "1.6km"},
        {spot_name: "西茶屋街", distance: "2km"}
      ];
    };
    service.getTimeLines = function() {
      return [
        {
          start_time      : "13:22",
          arrival_time    : "14:43",
          time_required   : "1時間21分",
          fee             : "520円",
          transportation  : [walk, bicycle, bus, goal],
          information     : [rain, traffic_jam, no_bicycle]
        },
        {
          start_time      : "13:22",
          arrival_time    : "14:43",
          time_required   : "1時間21分",
          fee             : "520円",
          transportation  : [walk, bus, goal],
          information     : [rain, no_bicycle]
        },
        {
          start_time      : "13:22",
          arrival_time    : "14:43",
          time_required   : "1時間21分",
          fee             : "520円",
          transportation  : [walk, goal],
          information     : []
        }
      ];
    };
    service.getTimeLineDetail = function() {
      return {
        time_required: "1時間21分",
        fee          : "520円",
        src          : "現在地",
        dest         : "兼六園",
        start        : {
          spot_name: "現在地",
          time     : "13:22",
        },
        waypoint: [
          {
            spot_name          : "経由地１",
            arrival_time       : "13:40",
            transportation     : walk,
            transportation_text: "徒歩",
            fee                : "210円",
            information_icon   : rain,
            information_text   : "雨天注意",
            time_required      : "10分",
            map_url            : "~~~"
          },
          {
            spot_name          : "経由地２",
            arrival_time       : "14:30",
            transportation     : bus,
            transportation_text: "城下町周遊バス右回りルート",
            fee                : "210円",
            information_icon   : traffic_jam,
            information_text   : "渋滞情報あり 5分の遅れ",
            time_required      : "50分",
            map_url            : "~~~",
          },
          {
            spot_name          : "兼六園",
            arrival_time       : "14:43",
            transportation     : bicycle,
            transportation_text: "自転車",
            fee                : "210円",
            information_icon   : rain,
            information_text   : "雨天注意",
            time_required      : "50分",
            map_url            : "~~~",
          }
        ]
      };
    };
    service.getSpotData = function() {
      return {
        name       : "兼六園",
        desc       : "兼六園は、石川県金沢市にある日本庭園である。国の特別名勝に指定されている。広さは約11.7ヘクタール。 17世紀中期、加賀藩により金沢城の外郭に造営された藩庭を起源とする江戸時代を代表する池泉回遊式庭園であり、岡山市の後楽園と水戸市の偕楽園と並んで日本三名園の一つに数えられている。",
        img        : "http://open-imagedata.city.kanazawa.ishikawa.jp/image/thumbnail/586", // or "images/dummy.png"
        address    : "〒920-0936 石川県金沢市兼六町1",
        location   : [36.562736 , 136.664166],
        open_hours : "10:00~12:00, 13:00~18:00",
        fee        : "大人200円 子供100円"
      };
    };
    return service;
  })
  .controller('AppController', function($scope) {
    $scope.application_name = "金沢乗換案内";
    $scope.search = {src: "出発地を選択", dest: "到着地を選択"};
    $scope.time = "現在時刻";


    $scope.people_n = 1;
    this.go_search = function(search_type) {
      navi.pushPage('search.html',  {data: {search_type: search_type}});
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
  }).controller('TimeLineDetailController', function(DataService) {
    this.detail = DataService.getTimeLineDetail();
})
.controller('SpotController', function(DataService) {
  this.data = DataService.getSpotData();
});
ons.ready(function() {
  console.log("Onsen UI is ready!");
});