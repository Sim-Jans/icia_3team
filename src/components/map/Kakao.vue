<template>
  <div id="map" style="width:100%;height:300px;">
    
  </div>
</template>

<script>
export default {
  mounted() {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript();
  },
  methods: {
    addKakaoMapScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/0feaa40f6d94ad4428a4f4f8a6cab340";
      document.head.appendChild(script);
    },
    initMap() {
      var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.43884057982199, 126.675102369038), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      };

      var map = new kakao.maps.Map(container, options); // eslint-disable-line no-unused-vars 
      //지도 생성 및 객체 리턴

      
    }
  }
};
</script>

<style>

</style>