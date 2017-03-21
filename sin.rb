#
# Adrian Statescu <mergesortv@gmail.com>
# Computes SIN using Taylor Series
# 
# sin(x) = x - x^3/3! + x^5/5! - x^7/7! + ...
#
#

def fact n

    if n == 0

       return 1

    else

       return n * fact( n  - 1)

    end
end

def pow(a,b)

    p = 1

    b.times do

        p *= a

    end

    p.to_f
end

def sin x

    anEPS = 0.0001

    term1 = x
 
    term2 = term1 - pow(x,3) / fact(3)

    i = 2

    loop do          

        term1 = term2

        term2 += pow(-1,i) * (pow(x, (2 * i + 1)) / fact(2 * i + 1)).to_f

        i = i + 1

        break if (term1 > term2 ? term1 - term2 : term2 - term1) <= anEPS
    end

    term2
end

p sin(2)
p Math.sin(2)
