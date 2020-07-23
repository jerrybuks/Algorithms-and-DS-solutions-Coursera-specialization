#include <iostream>

int get_change(int m) {
  //write your code here
  int n;
  int res;
  for(int i = 10; i >= 0;){
    if(i == 0){
       res = m/1;
         n+=res;
        m = m - (1 * res);
    } else {
        res = m/i;
        n+=res;
        m = m - (i * res);
    }
    i-= 5;
  }
  return n;
}

int main() {
  int m;
  std::cin >> m;
  std::cout << get_change(m) << '\n';
}
