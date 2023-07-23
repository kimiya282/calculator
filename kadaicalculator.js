var result = "";/*データ入れ*/
var is_calc = false;/*=で計算したかどうか*/

/*要素を抽出*/
window.onload = function () {
  result = document.getElementById('result');
};

function ac_click(){/*AC入力キー*/
  result.value = "0";
  is_calc = false;
}

function calc_period(){/*.ピリオドを何回も押させないための関数*/
    if(result.value.indexOf(".")<0)result.value += ".";/*indexOf(見つからなければ-1を返すので０以下にすることで 0にすることで0の次に小数点を打つことができる)*/
  document.getElementById("result").innerHTML = result.value;
}


// 数字キー押下時
function num_click(btn){
  if(is_calc)  result.value = "0";
  is_calc = false;  

  if(result.value =="0" && btn == "0"){　/*0の時に０のボタンを押した時*/
    result.value = "0";
  }else if(result.value == "0" && btn == "."){/*0の時に.を押した場合*/
    result.value = "0.";
  }else if(result.value == "0"){
    result.value = btn;/*入力値を設定*/
  }else{
    result.value += btn;/*入力値を追加*/
  }
}

function num_click00(btn){ /*calc_run00(00の実装機能のボタンの中身)*/
       if (result.value == "0") {/*resultの中身が０だった場合*/
				result.value = ""+btn;/*入力された数字を文字列化する*/
			} else {
				    result.value +="00";/*00を入力させる*/
			}
    document.getElementById("result").innerHTML =btn;/*resultに表示させる*/
}

// 演算子キー押下
function ope_click(btn){
  if(is_calc)  is_calc = false;/*=のキーを非活性化*/
  
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + btn;/*直前が演算式の場合、演算子を切り替える*/
  } else {
    result.value += btn; /*数字を入力*/
  }
}

// =キークリック
function equal_click(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);/*最後の式が=だった場合取り除く*/

  var newResult = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();/*計算結果を表示*/
  if(newResult == Infinity || Number.isNaN(newResult)){　/*無限数か数字が出ない場合はエラー*/
    result.value = "Error";
  }else{
    result.value = newResult;/*newResultの値をresult.valueに設定し計算結果を表示*/
    is_calc = true;
  }
}

function is_ope_last(){/*計算式の最後が演算子だった場合*/
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));/*文字列で返す*/
}

/*const displayresult=document.getElementById("displayresult");/*計算結果を表示させる*/
/*
var ans = 0;/*計算*/
/*var num = "0";/*文字列*/
/*var key = "";/*１つ前の入力キーを記憶するための変数*/
/*var kigou = "";/*記号キー*/

/*function calc_run(btn){/*数字を入力*/
/*    if(!isNaN(btn)){
        if(!isNaN(key)){
            
            if(num=="0"){
                num =""+ btn;
            }else{
                num += ""+btn;
            }
    }else{
        num= ""+btn;
    }
    document.getElementById("displayresult").innerHTML = num;
}else{
        if(!NaN(key)){
       }
     kigou = btn;
      document.getElementById("type").innerHTML = kigou;
    }
     key = btn;
}
    


function calc_run00(btn){/*calc_run00(00の実装機能のボタンの中身)*/
 /*   if (num == "0") {
				num = ""+btn;
			} else {
				    num +="00";
			}

    document.getElementById("displayresult").innerHTML =num;
}

function calc_period(){
    if(num.indexOf(".")<0)num += ".";/*indexOf(見つからなければ-1を返すので０以下にすることで 0にすることで0の次に小数点を打つことができる)*/
/*    document.getElementById("displayresult").innerHTML = num;
}

function is_ope_last(){
  return ["+","-","×","÷"].includes(num.value.toString().slice(-1));
}
function operator(btn){
    if(is_ope_last()){
        num.value = num.value.slice(0,-1) + btn;
    }else{
     num.value+=btn;   
    }
}
*/

