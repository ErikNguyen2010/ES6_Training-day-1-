/*
    var: tự động hỗ trợ cơ chế hoisting (tự khai báo biến lên đầu file)
    let: ko hỗ trợ cơ chế hoisting. Trong cùng 1 scope ko thể khai bảo 2 biến trùng tên nhau duoc. Nếu khai báo biến cùng tên trên 1 scope khác thì let sẽ tự hiểu 2 biến phân biệt
    const: tính chất giống let, tuy nhiên ko thể gán lại giá trị.đối với object và array thì ko thể gán = object hoặc array khác mà chĩ có thể thay đổi đc thuoc tính của object, hoac phan tử của array
*/

let title = "cybersoft";
{
    let title = 'cyberlearn';
    console.log('title1', title);
}

console.log("title2", title);

var arrButton = document.querySelectorAll("button")
for (var i = 0 ; i <arrButton.length ; i++){
    let index = arrButton[i];
    let content = index.innerHTML
    index.onclick = function(){
        alert(content);
    }
}



/*
    Arrow function
    Arrow function ko ho tro hoisting
    đối với hàm chỉ có 1 tham số thì ko cần dóng mở () tham số
    đối với hàm chỉ có 1 lệnh return thì ko cần {return}

*/

let hello = name =>{
    console.log(name);
}


/*
    ngữ cảnh (context) của this:
    ngữ cảnh mặc định là window
    ngữ cảnh object: this là object đó
    ngữ cãnh function : this chính là function đó
    nếu sử dụng hàm cho phuong thuc trong es6 thì ta sử dụng arrow function vì arrow function ko hỗ trợ this
    => Doi voi prototype (kieu du lieu minh tự định nghĩa) hoặc method thì dùng function. còn lại đói với các hàm xử lý thông thường nên sử dụng arrow function

*/
console.log(this.innerHeight);
console.log(this.innerWidth);


let test = {
    id: 1,
    testt: 2,
    functionTest: function(){
        console.log(this.id);
        console.log(this.testt);
    }
}
test.functionTest()



function SinhVien (){
    this.maSinhVien = "";
    this.tenSinhVien = "";
    this.hienThiThongTin = function(){
        console.log(this.maSinhVien);
        console.log(this.tenSinhVien);
    };
}

let sv1 = new SinhVien();
sv1.tenSinhVien = "loc";
sv1.maSinhVien = "1";
sv1.hienThiThongTin();


let sv2 = new SinhVien();
sv2.tenSinhVien = "cac";
sv2.maSinhVien = "2";
sv2.hienThiThongTin()


let hocVienCyber = {
    maHocVien: 1,
    tenHocVien: 'Nguyễn Loc',
    hienThiThongTin: function(){
        let HienThi = () => {
            console.log(this.maHocVien);
            console.log(this.tenHocVien);
        }
        HienThi();
    }
}
hocVienCyber.hienThiThongTin()


let arrColor = ['black', 'red', 'green', 'blue', 'orange', 'pink', 'yellow', 'pink']

let renderButton = () => {
    let html = '';
    for(let i = 0; i<arrColor.length; i++){
        let index = arrColor[i];

        html += `
            <button class="btn text-white ml-2" style ="background-color: ${index};" onclick = "thayMau('${index}')">${index}</button>
        `
    }
    document.querySelector('#colors').innerHTML = html;
}
renderButton(arrColor);

this.thayMau = (value) =>{
    document.querySelector("#home").style.color = value;
}



/*
    default parameter:
    tham số mac định của hàm: khi gọi hàm ko truyển giá trị thì hàm sẽ tụ lấy giá trị mac dinh de xử lý

*/

let hienThiThongTin = (hoTen = 'loc', namSinh = 2000, tuoi = 2022 - namSinh){
    console.log(hoTen);
    console.log(tuoi);
}

hienThiThongTin()
hienThiThongTin("loc", 1999)
hienThiThongTin("loc", 1999, 25)