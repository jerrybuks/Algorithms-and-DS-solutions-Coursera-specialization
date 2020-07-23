#include <algorithm>
#include <iostream>
#include <vector>

using std::vector;

int get_majority_element(vector<int> &a, int left, int right)
{
  //write your code here
  sort(a.begin(), a.end());
  int max = 0;
  int middle = right / 2;

  for (int i = 0; i <= right - 1; i++)
  {
    max++;
    if (a[i] != a[i + 1])
    {
      if (max > middle)
      {
        return 1;
      }

      max = 0;
    }
  }

  return -1;
}

// int getMajSLow(vector<int> &a, int left, int right)
// {
//   for (int i = 0; i < right; i++)
//   {
//     int count = 0;

//     for (int j = 0; j < right; j++)
//     {
//       if (a[j] == a[i])
//       {
//         count = count + 1;
//       }
//     }
//     if (count > right / 2)
//     {
//       return 1;
//     }
//   }

//   return -1;
// }

int main()
{
  // while (true)
  // {
  //   int n = rand() % 10 + 2;
  //   std::cout << n << "\n";
  //   vector<int> a;

  //   for (size_t i = 0; i < n; i++)
  //   {
  //     a.push_back(rand() % 1000);
  //   }
  //   for (size_t i = 0; i < n; i++)
  //   {
  //     std::cout << a[i] << "\n";
  //   }
  //   long long res1 = get_majority_element(a, 0, a.size());
  //   long long res2 = getMajSLow(a, 0, a.size());
  //   if (res1 != res2)
  //   {
  //     std::cout << "wrong" << res1 << ' ' << res2 << "\n";
  //     break;
  //   }
  //   else
  //   {
  //     std::cout << "OK\n";
  //   }
  // }

  int n;
  std::cin >> n;
  vector<int> a(n);
  for (size_t i = 0; i < a.size(); ++i)
  {
    std::cin >> a[i];
  }
  std::cout << (get_majority_element(a, 0, a.size()) != -1) << '\n';
}
