#include <iostream>

// long long lcm_naive(int a, int b) {
//   for (long l = 1; l <= (long long) a * b; ++l)
//     if (l % a == 0 && l % b == 0)
//       return l;

//   return (long long) a * b;
// }
long long gcd_fast(long long a, long long b) {
  long long temp;
  if(a < b){
    temp = a;
    a = b;
    b = temp;
  }
  if((a%b) == 0){
    return b;
  } 
  return gcd_fast(a%b,b);
}

int main() {
  long long a, b;
  std::cin >> a >> b;
  long long gcd = gcd_fast(a, b);
  long long res = (a/gcd) * b;
  std::cout << res << std::endl;
  return 0;
}
