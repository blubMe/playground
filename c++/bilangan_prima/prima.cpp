#include <iostream>

using namespace std;

int main(){
    int begin,end; // inisialisasi variable int untuk angka limit awal dan akhir

    // tampilan awal
    cout << "Penghitungan bilangan prima"<< endl;
    cout << "Masukkan nilai awal : "; cin >> begin; // input data begin (data/angka awal)
    cout << "Masukkan nilai akhir : "; cin >> end; // input data end (data / angka akhir sebagai batas)


    // melakukan pengecekan untuk menghindari data awal lebih besar dari pada data akhir
    if(begin < end){
        // tampilan awal header
        cout << "Bilangan Prima dari " << begin << " sampai " << end << " adalah :" << endl;
        // kalkulasi menggunakan perulangan bercabang
        // awal , membuat int a untuk mempermudah pembacaan dari pembuat kode
        // nilai variable a adalah nilai dari variable begin / nilai awal td
        // digunakan limit a harus kurang dari sama dengan variable end / nilai akhir
        // jika belum terpenuhi maka akan jalankan kode didalam
        for(int a = begin; a <= end; a++){
            // inisialisasi variable factories adalah untuk menyimpan berapa kali pembagian yang lolos pd perulangan dibawahnya
            int factories = 0; // 0
            // insialisasi b sebagai pembagi , inisialisasi awal adalah 1
            // limit jika b kurang dari sama dengan a
            // jika blum memenuhi maka data b akan increment
            for(int b = 1; b <= a; b++ ){ // b =
                // pengecekan jika a di modulus oleh b apakah hasilnya 0 ?
                // jika iya maka data variable factories akan bertambah 1
                if(a % b == 0)
                    ++factories;
            }
            // setelah perulangan diatas lolos / selesai maka data factories td akan di cek dengan 2
            // karena prima sendiri hanya membutuhkan 2 syarat , yaitu bisa di bagi 1 dan bilangan itu sendiri
            // sedangkan jika lebih dari 2 maka tidak bisa disebut bilangan prima
            // jika benar maka cout bilangan tersebut di variable a , karena bil tsb adalah bilangan prima
            if(factories == 2)
                cout << a << " ";
            // setelah cout , program akan kembali membaca perulangan
            // apakah masih blum memenuhi syarat , jika blum maka akan diulang sampai syarat terpenuhi
        }
    } else // else jika nilai awal lebih besar dari pada nilai akhir
        cout << "maaf angka awal lebih besar daripada angka akhir";

    return 0;
}
