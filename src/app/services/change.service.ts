import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  constructor() { }

  // store:any[];

 from_ENG_to_ARB(word:any):any{
    
   switch(word){

    // case "a":  return '' ;break;
    // case "b":  return '' ;break;
    // case "c":  return '';break;
    // case "d":  return '';break;
    // case "e":  return '';break;
    // case "f":  return '';break;
    // case "g":  return '';break;
    // case "h":  return '';break;
    // case "i":  return '';break;
    // case "j":  return '';break;
    // case "k":  return '';break;
    // case "l":  return '';break;
    // case "m":  return '';break;
    // case "n":  return '';break;
    // case "o":  return '';break;
    // case "P":  return '';break;
    // case "q":  return '';break;
    // case "r":  return '';break;
    // case "s":  return '';break;
    // case "t":  return '';break;
    // case "u":  return '';break;
    // case "v":  return '';break;
    // case "w":  return '';break;
    // case "x":  return '';break;
    // case "y":  return '';break;
    // case "z":  return '';break;

    // case "A":  return '';break;
    // case "B":  return '';break;
    // case "C":  return '';break;
    // case "D":  return '';break;
    // case "E":  return '';break;
    // case "F":  return '';break;
    // case "G":  return '';break;
    // case "H":  return '';break;
    // case "I":  return '';break;
    // case "J":  return '';break;
    // case "K":  return '';break;
    // case "L":  return '';break;
    // case "M":  return '';break;
    // case "N":  return '';break;
    // case "O":  return '';break;
    // case "P":  return '';break;
    // case "Q":  return '';break;
    // case "R":  return '';break;
    // case "S":  return '';break;
    // case "T":  return '';break;
    // case "U":  return '';break;
    // case "V":  return '';break;
    // case "W":  return '';break;
    // case "X":  return '';break;
    // case "Y":  return '';break;
    // case "Z":  return '';break;
    
// THE HEYS FROM ENG TO ARB

    case "`":  return 'ذ';break;
    case "q":  return 'ض';break;
    case "w":  return 'ص';break;
    case "e":  return 'ث';break;
    case "r":  return 'ق';break;
    case "t":  return 'ف';break;
    case "y":  return 'غ';break;
    case "u":  return 'ع';break;
    case "i":  return 'ه';break;
    case "i":  return 'ه';break;
    case "o":  return 'خ';break;
    case "p":  return 'ح';break;
    case "[":  return 'ج';break;
    case "]":  return 'د';break;

    case "a":  return 'ش';break;
    case "s":  return 'س';break;
    case "d":  return 'ي';break;
    case "f":  return 'ب';break;
    case "g":  return 'ل';break;
    case "h":  return 'ا';break;
    case "j":  return 'ت';break;
    case "k":  return 'ن';break;
    case "l":  return 'م';break;
    case ";":  return 'ك';break;
    case "'":  return 'ط';break;
    case "\ ":  return '\ ';break;

    case "\ ":  return '\ ';break;
    case "z":  return 'ئ';break;
    case "x":  return 'ء';break;
    case "c":  return 'ؤ';break;
    case "v":  return 'ر';break;
    case "b":  return 'لا';break;
    case "n":  return 'ى';break;
    case "m":  return 'ة';break;
    case ",":  return 'و';break;
    case ".":  return 'ز';break;
    case "/":  return 'ظ';break;

// THE SHIFTKEYS FROM ENG TO ARB

    case "~":  return ' ّ';break;
    case "Q":  return ' َ';break;
    case "W":  return ' ً';break;
    case "E":  return ' ُ';break;
    case "R":  return ' ٌ';break;
    case "T":  return ' لإ';break;
    case "Y":  return 'إ';break;
    case "U":  return '‘';break;
    case "I":  return '÷';break;
    case "O":  return '×';break;
    case "P":  return '؛';break;
    case "{":  return '<';break;
    case "}":  return '>';break;

    case "A":  return ' ِ';break;
    case "S":  return ' ٍ ';break;
    case "D":  return ' ]';break;
    case "F":  return ' [';break;
    case "G":  return ' لأ';break;
    case "H":  return ' أ';break;
    case "J":  return ' ـ ';break;
    case "K":  return ' ، ';break;
    case "L":  return '/';break;
    case ":":  return ' :';break;
    case '"':  return '"';break;
    case "|":  return '|';break;

    case "|":  return '|';break;
    case "Z":  return '~';break;
    case "X":  return ' ْ';break;
    case "C":  return '}';break;
    case "V":  return '{';break;
    case "B":  return 'لآ';break;
    case "N":  return 'آ';break;
    case "M":  return '’';break;
    case "<":  return ',';break;
    case ">":  return '.';break;
    case "?":  return '؟';break;
    case " ":  return ' ';break;

    //without shift

    case "1":  return '1';break;
    case "2":  return '2';break;
    case "3":  return '3';break;
    case "4":  return '4';break;
    case "5":  return '5';break;
    case "6":  return '6';break;
    case "7":  return '7';break;
    case "8":  return '8';break;
    case "9":  return '9';break;
    case "0":  return '0';break;
    case "-":  return '-';break;
    case "=":  return '=';break;
    case "/":  return '/';break;
    case "*":  return '*';break;
    case "-":  return '-';break;
    case "+":  return '+';break;
    case "":  return '';break;


//with shift
    case "!":  return '!';break;
    case "@":  return '@';break;
    case "#":  return '#';break;
    case "$":  return '$';break;
    case "%":  return '%';break;
    case "^":  return '^';break;
    case "&":  return '&';break;
    case "*":  return '*';break;
    case "(":  return ')';break;
    case ")":  return '(';break;
    case "_":  return '_';break;
    case "+":  return '+';break;
    case "":  return '';break;
    

    

    default: " " ;

 
   }
  
 }

 from_ARB_to_ENG(char:string){

  switch(char){

    // case "ا":  return '';break;
    // case "ب":  return '';break;
    // case "ت":  return '';break;
    // case "ث":  return '';break;
    // case "ج":  return '';break;
    // case "ح":  return '';break;
    // case "خ":  return '';break;
    // case "د":  return '';break;
    // case "ذ":  return '';break;
    // case "ر":  return '';break;
    // case "ز":  return '';break;
    // case "س":  return '';break;
    // case "ش":  return '';break;
    // case "ص":  return '';break;
    // case "ض":  return '';break;
    // case "ط":  return '';break;
    // case "ظ":  return '';break;
    // case "ع":  return '';break;
    // case "غ":  return '';break;
    // case "ف":  return '';break;
    // case "ق":  return '';break;
    // case "ك":  return '';break;
    // case "ل":  return '';break;
    // case "م":  return '';break;
    // case "ن":  return '';break;
    // case "ه":  return '';break;
    // case "و":  return '';break;
    // case "ي":  return '';break;
    // case "لا":  return '';break;
    // case "ؤ":  return '';break;
    // case "ء":  return '';break;
    // case "ئ":  return '';break;
    // case "ى":  return '';break;

// THE KEYS FROM ARB TO ENG

      case "ذ":  return '`';break;
      case "ض":  return 'q';break;
      case "ص":  return 'w';break;
      case "ث":  return 'e';break;
      case "ق":  return 'r';break;
      case "ف":  return 't';break;
      case "غ":  return 'y';break;
      case "ع":  return 'u';break;
      case "ه":  return 'i';break;
      case "خ":  return 'o';break;
      case "ح":  return 'p';break;
      case "ج":  return '[';break;
      case "د":  return ']';break;

      case "ش":  return 'a';break;
      case "س":  return 's';break;
      case "ي":  return 'd';break;
      case "ب":  return 'f';break;    
      case "ل":  return 'g';break;
      case "ا":  return 'h';break;
      case "ت":  return 'j';break;
      case "ن":  return 'k';break;
      case "م":  return 'l';break;
      case "ك":  return ';';break;
      case "ط":  return "'";break;
      case "\ ":  return " \ ";break;
      
      case "\ ":  return ' \ '; break;
      case "ئ":  return 'z';break;
      case "ء":  return 'x';break;
      case "ؤ":  return 'c';break;
      case "ر":  return 'v';break; 
      case "لا":  return 'b';break;
      case "ى":  return 'n';break;
      case "ة":  return 'm';break;
      case "و":  return ',';break;
      case "ز":  return '.';break;
      case "ظ":  return '/';break;
    
// THE SHIFTKEYS FROM ARB TO ENG

    case " ّ":  return ' ~ '; break;
    case " َ":  return 'Q';break;
    case " ً":  return 'W';break;
    case " ُ":  return 'E';break;
    case " ٌ":  return 'R';break;
    case "لإ":  return 'T';break;
    case "إ":  return 'Y';break;
    case "‘":  return 'U';break;
    case "÷":  return 'I';break;
    case "×":  return 'O';break;
    case "؛":  return 'P';break;
    case "<":  return '{';break;
    case ">":  return '}';break;
    
    case " ِ":  return 'A';break;
    case " ٍ":  return 'S';break;
    case "]": return 'D';break;
    case "[": return 'F';break;
    case "لأ": return 'G';break;
    case "أ":  return 'H';break;
    case "ـ":  return 'J';break;
    case "،":  return 'K';break;
    case "/":  return 'L';break;
    case ":":  return ':';break;
    case '"':  return '"';break;
    case "|":  return '|';break;

    case "|":  return '|';break;
    case "~":  return 'Z';break;
    case " ْ":  return 'x';break;
    case "}":  return 'C';break;
    case "{":  return 'V';break;
    case "لآ":  return 'B';break;
    case "آ":  return 'N';break;
    case "’":  return 'M';break;
    case ",":  return '<';break;
    case ".":  return '>';break;
    case "؟":  return '?';break;

  
    case " ":  return ' ';
    
    //without shift

    case "1":  return '1';break;
    case "2":  return '2';break;
    case "3":  return '3';break;
    case "4":  return '4';break;
    case "5":  return '5';break;
    case "6":  return '6';break;
    case "7":  return '7';break;
    case "8":  return '8';break;
    case "9":  return '9';break;
    case "0":  return '0';break;
    case "-":  return '-';break;
    case "=":  return '=';break;
    case "/":  return '/';break;
    case "*":  return '*';break;
    case "-":  return '-';break;
    case "+":  return '+';break;
    case "":  return '';break;


//with shift
    case "!":  return '!';break;
    case "@":  return '@';break;
    case "#":  return '#';break;
    case "$":  return '$';break;
    case "%":  return '%';break;
    case "^":  return '^';break;
    case "&":  return '&';break;
    case "*":  return '*';break;
    case "(":  return ')';break;
    case ")":  return '(';break;
    case "_":  return '_';break;
    case "+":  return '+';break;
    case "":  return '';break;
    

    default: return "" ;

  }

 }





 

//  from_symbols_to_char_OR_num(symbol){

//   switch(symbol){
     
// //without shift

//     case "1":  return '1';break;
//     case "2":  return '2';break;
//     case "3":  return '3';break;
//     case "4":  return '4';break;
//     case "5":  return '5';break;
//     case "6":  return '6';break;
//     case "7":  return '7';break;
//     case "8":  return '8';break;
//     case "9":  return '9';break;
//     case "0":  return '0';break;
//     case "-":  return '-';break;
//     case "=":  return '=';break;
//     case "/":  return '/';break;
//     case "*":  return '*';break;
//     case "-":  return '-';break;
//     case "+":  return '+';break;
//     case "":  return '';break;


// //with shift
//     case "!":  return '!';break;
//     case "@":  return '@';break;
//     case "#":  return '#';break;
//     case "$":  return '$';break;
//     case "%":  return '%';break;
//     case "^":  return '^';break;
//     case "&":  return '&';break;
//     case "*":  return '*';break;
//     case "(":  return ')';break;
//     case ")":  return '(';break;
//     case "_":  return '_';break;
//     case "+":  return '+';break;
//     case "":  return '';break;
    

//     default :return " ";

//   }
//  }


 
ch(){
return " Hello Medo";  
}

}