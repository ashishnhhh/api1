let auth_token;
$(document).ready(function(){
    $.ajax({
        type:"get",
        url:"http://localhost:4000/alldata",
        success: function(data){
            auth_token = data.getDistrict(data.auth_token)
        },
        error:function(error){
            console.log(err);
        },
    })

    $('#district').change(function(){
        console.log('District change');
        getCollegName();
    })
});



function getDistrict(auth_token){
    $.ajax({
        type:"get",
        url:"http://localhost:4000/alldata",
        success: function(data) {
            //getCollegeName(auth_token)
            data.array.forEach(element => {
                $('#district').append("<option value = '"+element.District_name+"'>"+element.District_name+"</option>")
            });
        },
        error:function(error) {
            console.log(err);
        }
    
    })
}