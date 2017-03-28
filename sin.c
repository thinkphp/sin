/**
 *  Approximate the function sin with series Taylor.
 *
 *  Can be computed  as follows:
 * 
 *  sin(x) = x - x^3/3! + x^5/5! - x^7/7! + ....(-1)^n+1*x^(2n+1)/(2n+1)!;
 *  
 *
 */

#include <stdio.h>
#include <math.h>

double fact(int n) {

    if(n == 0) return 1;

       else return n * fact( n - 1);
}

double myPow(double a, double b) {

      int i;

      double p = 1;

      for(i = 1; i <= b; ++i) p *= a;

   return p;
}

double mySin(double x) {

    int i = 2;

    double EPS = 0.001;

    double term1 = x, 

           term2 = x - (float) myPow(x, 3) / fact(3.0);

          while( fabs(term1-term2) >= EPS ) {

                 term1 = term2;
    
                 term2 += (double) pow(-1, i) * (double) myPow(x, (2*i+1)) / fact(2*i+1);
              
                 i++;
          }        
         
       
    return term2;  
}

int main() {

    //declare a double var
    double x;

    //give me the number
    printf("x=");

    //scanf with the format %lf for double specifier
    scanf("%lf", &x);

    //printf with %lf for double as well
    printf("sin(%.3lf) = %.3lf\n", x , sin( x ));

    printf("sin(%.3lf) = %.3lf", x , sin( x )); 

 return 0;
}
