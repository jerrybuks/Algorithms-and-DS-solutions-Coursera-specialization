#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::max;
using std::vector;

int compute_min_refills(int dist, int tank, vector<int> &stops)
{
    // write your code here
    int numOfRefills = 0;
    int fullTank = tank;
    int prevStop = 0;

    stops.push_back(dist);

    if (fullTank < stops[0])
    {
        return -1;
    }

    for (int i = 0; i < stops.size() - 1; i++)
    {
        if ((stops[i + 1] - stops[i]) > fullTank)
        {
            return -1;
        }

        tank = tank - (stops[i] - prevStop);
        if (tank < (stops[i + 1] - stops[i]))
        {
            tank = fullTank;
            numOfRefills++;
        }
        prevStop = stops[i];
    }

    return numOfRefills;
}

int main()
{
    int d = 0;
    cin >> d;
    int m = 0;
    cin >> m;
    int n = 0;
    cin >> n;

    vector<int> stops(n);
    for (size_t i = 0; i < n; ++i)
        cin >> stops.at(i);

    cout << compute_min_refills(d, m, stops) << "\n";

    return 0;
}
