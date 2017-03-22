  DOMhelp = {

       addEvent: function(elem,evType,fn,useCapture){

                 if(elem.addEventListener) {

                         elem.addEventListener(evType,fn,useCapture);

                 } else if(elem.attachEvent) {

                         var r = elem.attachEvent('on'+evType,fn);

                         return r;                          

                 } else {

                        elem['on'+evType] = fn; 
                 }
       }

  };

    //x-x^3/3!+x^5/5!-x^7/7!+..-

    function factorial(n) {
             if(n==1 || n==0) return 1;
                else return n*factorial(n-1);
    }

    function pow(x,y) {
        var p = 1;
        for(var i=1;i<=y;i++) {
            p *= x 
        }  
      return p
    }

    function abs(x,y) {
         if(x>y) {
            return x-y
         } else {
            return y-x
         }
    } 

    function sin(x) {

         var eps = 0.0001;

         var n = 2, 
             v1 = x,
             v2 = v1 - pow(x,3)*1.0/factorial(3);

         while(abs(v1,v2) >= eps) {

               v1 = v2;
               v2 += pow(-1,n)*pow(x,2*n+1)*1.0/factorial(2*n+1)
               n++;  
         } 

       return v2;
    }

    var solve = function() {
       
        var input = parseFloat(document.getElementById('input').value);  
 
        if(!input) {document.getElementById('solution').innerHTML = "error!";return;}

        var output = "Math.sin(x) = " + Math.sin(input) + '<br\>' + "sin(x)=" + sin(input)

        document.getElementById('solution').innerHTML = output;
    }

    var init = function() {

        DOMhelp.addEvent(document.getElementById('solve'),'click',solve,false); 
    }; 

    DOMhelp.addEvent(window,'load',init,false);
