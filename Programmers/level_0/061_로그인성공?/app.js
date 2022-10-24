function solution(id_pw, db) {
  let result = "fail";
  db.map((data) => {
    let checkedId = id_pw[0] === data[0];
    let checkedPw = id_pw[1] === data[1];
    if (checkedId && checkedPw) {
      return (result = "login");
    } else if (checkedId && !checkedPw) {
      return (result = "wrong pw");
    }
  });
  return result;
}

// 예외처리 난관
// 아이디O 비밀번호O / 아이디O 비밀번호X 일 때 조건만 주면 나머지(아이디X 비밀번호O 또는 아이디X 비밀번호X) 일 때 fail 나오게 하면 되는게 아닐까? 생각해서 마지막 else if 조건 주지 않고 else return fail 했을 때 나머지 통과했는데 첫번째 케이스 실패

// else if 조건 지옥...
// 이렇게 하면 테스트 케이스 1 통과하고
// function solution (id_pw, db) {
//   let result ='';
//   db.map(data => {
//       let checkedId = id_pw[0] === data[0]
//       let checkedPw = id_pw[1] === data[1]
//      if(checkedId && checkedPw) {
//          return result = 'login'
//      } else if (checkedId && !checkedPw || !checkedId && checkedPw) {
//          return result = 'wrong pw'
//      } else {
//          return result = 'fail'
//      }
//   })
//   return result
// }

// 이건 테스트 케이스 1 통과 못함
// function solution (id_pw, db) {
//   let result ='';
//   db.map(data => {
//       let checkedId = id_pw[0] === data[0]
//       let checkedPw = id_pw[1] === data[1]
//      if(checkedId && checkedPw) {
//          return result = 'login'
//      } else if (checkedId && !checkedPw) {
//          return result = 'wrong pw'
//      } else {
//          return result = 'fail'
//      }
//   })
//   return result
// }
