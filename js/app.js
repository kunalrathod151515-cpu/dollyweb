function login(){
 let u=document.getElementById('user').value.toLowerCase();
 let p=document.getElementById('pass').value;
 if(u=='admin'){location.href='admin.html';}
 else if(u=='manager'){location.href='manager.html';}
 else if(u=='kitchen'){location.href='kitchen.html';}
 else if(u=='waiter'){location.href='waiter.html';}
 else{document.getElementById('msg').innerText='Use: admin / manager / kitchen / waiter';}
}
