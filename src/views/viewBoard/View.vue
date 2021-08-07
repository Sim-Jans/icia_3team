<template>
  <div class="ShopList">
    <div id="layoutSidenav_content">
      <main>
        <!--메인 이름, 지도, 가게 리스트 -->
        <div class="container-fluid px-4">
          <!--메인 이름 WHAT POO -->
          <h1 class="mt-4">WHAT POO</h1>
          <div class="row">
            <!--지도 -->
            <div class="col-xl-6">
              <div class="card mb-4">
                <div class="card-header">
                  지도
                </div>
                <kakao></kakao>
              </div>
            </div>
            <!--가게 리스트 -->
            <div class="col-xl-6">
              <div class="card mb-4">
                <div class="card-header">
                  Chart
                </div>
                <div class="list-group">
                  <ShopList></ShopList>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 메뉴 리스트 시작-->
        <div class="card mb-4">
          <div class="card-header">
            <div id="submap">여기입니다.</div>
            <!-- 리스트-->
            <div class="card-body">
              <!-- 검색-->
              <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <Menu></Menu>
            </div>
          </div>
        </div>

      </main>
    </div>
    <hr>
    
    
    
  </div>
</template>

<script>
import Kakao from  '../../components/map/Kakao.vue';
import ShopList from  '../../components/shop/ShopList.vue';
import Menu from  '../../components/shop/Menu.vue';


export default {
  components: {
    Kakao,
    ShopList,
    Menu
  }
}
</script>

<style>

</style>