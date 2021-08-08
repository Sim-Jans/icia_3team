<template>
    <h1>JOIN PAGING</h1>
    <div class="box">
    <form class="form-box">
       <table class="form-table">
           <tr>
               <td class="td-label">아이디</td>
               <td colspan="2"><input type="text" class="form-control" placeholder="아이디를 입력하세요." id="id"></td>
           </tr>
           <tr>
               <td class="td-label">비밀번호:</td>
               <td colspan="2"><input type="password" class="form-control" placeholder="비밀번호를 입력하세요." id="pwd1"></td>
           </tr>
           <tr>
               <td class="td-label">비밀번호 확인:</td>
               <td colspan="2"><input type="password" class="form-control" placeholder="비밀번호를 입력하세요." id="pwd2"></td>
           </tr>
           <tr>
               <td>이름:</td>
               <td colspan="2"><input type="text" class="form-control" placeholder="이름을 입력하세요." id="name"></td>
           </tr>
           <tr>
               <td>닉네임:</td>
               <td colspan="2"><input type="text" class="form-control" placeholder="닉네임을 입력하세요." id="nickname"></td>
           </tr>
           <tr>
               <td>핸드폰번호:</td>
               <td><select name="telecom" class="telecom1">
                        <option value="SKT" selected>SKT</option>
                        <option value="KT" selected>KT</option>
                        <option value="LGU+" selected>LGU+</option>
                    </select>
               </td>
                <td><input type="tel" class="form-control tel-control" placeholder="전화번호를 입력하세요." id="phone"></td>
           </tr>
           <tr>
               <td>이메일:</td>
               <td colspan="2"><input type="email" class="form-control" placeholder="이메일을 입력하세요." id="email"></td>
           </tr>
           <tr>
               <td>생년월일</td>
                <td colspan="2"><select name="user_birth_year" class="user_birth">
                        
                        <option value="20" >2001</option>
                        <option value="20" >2002</option>
                        <option value="20" >2003</option>
                        <option value="20" >2004</option>
                        <option value="20" >2005</option>
                        <option value="20" >2006</option>
                        <option value="20" >2007</option>
                        <option value="20" >2008</option>


                    </select>
                    년
                    <select name="user_birth_month" class="user_birth">

                        <option v-for=' n in 12 ' :value="n" :key="n">{{ n }}</option>
        
                    </select>
                    월
                    <select name="user_birth_day" class="user_birth">
                        
                        <option v-for=' n in 31 ' :value="n" :key="n">{{ n }}</option>

                    </select>
                    일
                </td>
           </tr>
           <tr>
               <td>주소</td>
               <td colspan="2"><input type="number" class="form-control" placeholder="전화번호를 입력하세요." id="phone"></td>
           </tr>
           <tr>
               <td>상세주소:</td>
               <td colspan="2"><input type="text" class="form-control" placeholder="주소를 입력하세요." id="address"></td>
           </tr>   
       </table>
        <div class="form-group form-check">
            <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> 일반회원
            <input class="form-check-input" type="checkbox"> 판매자
            </label>
        </div>
            <button @click.prevent="submit">회원가입</button>
        </form>
    </div>
</template>

<script>
export default {
    years: [
        
    ],
    methods: {
        submit () {
            return  location.href='/about'
        },
        /*
        yearadd () {
           `for(var i=0;i < 10; i++)
           {
               years.push(i)
               console.log("aa")
           }`
        }
        */
        
    },
    mounted () {
        console.log(this.years)
    }
        
    
    

}
</script>




<style>
    .box {width:450px; margin: 0px auto;}
    .form-table {margin-left: 20px;}
    .form-control{width:250px;}
    .form-check {margin-top: 10px;}
    button {margin-top: 10px; width: 60%; height: 30px; font-size: 20px; border: none; border-radius: 25px;}
    .telecom1 option {font-size: 13px;}
    .telecom1 {font-size: 13px; height: 35px; width:60px;}
    .tel-control {width:188px;}
    .user_birth {height: 35px; width:60px; font-size: 13px;}
</style>