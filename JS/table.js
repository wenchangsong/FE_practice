//新增数据函数
function addrow(){
   // var t = document.getElementById('table');
    //console.log(t);
    //获取插入的位置
    var length = table.rows.length;
    //console.log(height);
    var NewRow =table.insertRow(length);
    console.log(NewRow);
    
    //插入列节点对象
    var nameCol =NewRow.insertCell(0);
    var phoneCol =NewRow.insertCell(1);
    var actionCol =NewRow.insertCell(2);
    console.log(NewRow);
    
    //修改节点内容
    nameCol.innerHTML ='未命名';
    phoneCol.innerHTML ='无';
    actionCol.innerHTML ='  <button onclick="action(this)">编辑</button><button id="button2" onclick="del(this)">删除</button>';

}

function action(button){
//console.log(button);
var row =button.parentNode.parentNode;
var name =row.cells[0];
var phone =row.cells[1];

var inputName = prompt("请输入名字：");
var inputphone = prompt("请输入电话:");
if(inputName.trim() && inputphone.trim()){
name.innerHTML=inputName;
phone.innerHTML=inputphone;
}
}

//删除节点
function del(button){
//console.log(button);
var row = button.parentNode.parentNode;
//console.log(row);
row.parentNode.removeChild(row);
}