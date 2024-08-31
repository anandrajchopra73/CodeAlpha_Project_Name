let string = "";
console.log("JS is running");

document.getElementById("1").onclick = function() {OneFunction()};

    function OneFunction() {
       console.log(1);
       string = string + "1";
       document.getElementById("C_screen").innerHTML = string;
      }
      
      document.getElementById("2").onclick = function() {TwoFunction()};
      
      function TwoFunction() {
         console.log(2);
         string = string + "2";
         document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("3").onclick = function() {ThreeFunction()};

    function ThreeFunction() {
       console.log(3);
       string = string + "3";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("4").onclick = function() {FourFunction()};

    function FourFunction() {
       console.log(4);
       string = string + "4";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("5").onclick = function() {FiveFunction()};

    function FiveFunction() {
       console.log(5);
       string = string + "5";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("6").onclick = function() {SixFunction()};

    function SixFunction() {
       console.log(6);
       string = string + "6";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("7").onclick = function() {SevenFunction()};

    function SevenFunction() {
       console.log(7);
       string = string + "7";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("8").onclick = function() {EightFunction()};

    function EightFunction() {
       console.log(8);
       string = string + "8";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("9").onclick = function() {NineFunction()};

    function NineFunction() {
       console.log(8);
       string = string + "9";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("0").onclick = function() {ZeroFunction()};

    function ZeroFunction() {
       console.log(0);
       string = string + "0";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("+").onclick = function() {PlusFunction()};

    function PlusFunction() {
       console.log("+");
       string = string + "+";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("-").onclick = function() {SubFunction()};

    function SubFunction() {
       console.log("-");
       string = string + "-";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("*").onclick = function() {MulFunction()};

    function MulFunction() {
       console.log("*");
       string = string + "*";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("/").onclick = function() {DivFunction()};

    function DivFunction() {
       console.log("/");
       string = string + "/";
       document.getElementById("C_screen").innerHTML = string;
    }
 
document.getElementById("C").onclick = function() {ClrFunction()};

    function ClrFunction() {
       document.getElementById("C_screen").innerHTML = 0;
       console.log("C");
       string = "";
    }
 
document.getElementById("=").onclick = function() {ResFunction()};

    function ResFunction() {
       string = eval(string);
       document.getElementById("C_screen").innerHTML = string;
    }
 
 