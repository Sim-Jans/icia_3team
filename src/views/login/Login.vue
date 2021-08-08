<template>
    <div class="login-body">
    <section class="login-form">
        <h1>LOGIN PAGING</h1>
        <form action="">
            <div class="int-area">
                <input type="text" name="id" id="id">
                <label for="id">USER ID</label>
            </div>
            <div class="int-area">
                <input type="password" name="pw" id="pw">
                <label for="pw">PASSWORD</label>
            </div>
            <div class="btn-area">
                <button type="submit">LOGIN</button>
            </div>
        </form>
        <div class="caption">
            <span><router-link to="/join">아이디 찾기</router-link> |
            <router-link to="/join">비밀번호 찾기</router-link> |
            <router-link to="{name: 'Join'}">회원가입</router-link></span>
        </div>
    </section>
    </div>
</template>



<script>
export default {


}
</script>



<style>
    .login-body {display: flex; justify-content: center; align-items: center; height: 70vh;}
    .login-form {position: relative;}
    .login-form h1{font-size: 32px; text-align: center; margin-bottom: 60px;}

   .int-area { width: 350px; position: relative;}
   .int-area:first-child {margin-top: 0;}
   .int-area input {width: 100%; padding: 20px 10px 10px; background-color: transparent; border: none; 
   border-bottom: 1px solid black; font-size: 18px; outline: none;}
   
   .int-area label {position: absolute; left: 10px; top: 0px; font-size: 12px;
   }

    .btn-area {margin-top: 30px;}
    .btn-area button {width: 100%; height: 50px; font-size: 20px; border: none; border-radius: 25px;}

    .caption {
        margin-top: 20px;
        text-align: center;
        width: 300px;
    }
    .caption a {
        font-size: 15px; color: #999;
        text-decoration: none;
    }
    span {color: #999;}
   
</style>