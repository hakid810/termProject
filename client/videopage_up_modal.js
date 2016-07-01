// Template.viModal.events({
//     'click #btnViCom' : function (evt, tmpl) {
//         evt.preventDefault();
//         var user = Meteor.user();
//         if(!user()){
//             return alert('로그인 후 작성이 가능합니다.');
//         }
//
//         var obj = {};
//         //obj.inpUser = 사용자 id받아오기
//         obj.inpViTitle = $('#inpViTitle').val();
//         obj.inpViVi = $('#inpViVi').val();
//         obj.inpViText = $('#inpViText').val();
//
//         Boards.insert(obj);
//
//         window.close();
//     }
// });