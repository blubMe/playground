#include <iostream>
#include <iomanip> // Input Output manipulation , iomanip merupakan library yang berfungsi memanipulasi output input

using namespace std;

int main()
{

    const int harga = 15000; // penggunaan const pada harga untuk menghindari modifikasi pd value , untuk antisipasi aja
    int item,total,hargaAkhir; // insialisasi 3 variable yang tentunya int karena jumlahnya tidak pecah
    float diskon,totalWithDiskon; // insialisasi var diskon dan total akhir dengan tipe data float karena tentunya mengandung bilangan pecah

    // menu tampilan yang di outputkan pada terminal
    cout << " -- Jual bitcoin blackmart  --- "<< endl;
    cout << "|   Dapatkan diskon 5% - 10%   |"<< endl;
    cout << "|______________________________|"<< endl << endl;
    cout << "   Harga Rp. " << harga << "/btc" << endl<<endl; // memanggil isi dari variable harga untuk ditambilkan di terminal
    cout << "   Diskon 5% jika beli > 4 btc lebih" << endl;
    cout << "   Diskon 10% jika beli > 9 btc lebih"<<endl << endl;
    cout << "   Beli :     btc\b\b\b\b\b\b\b"; // untuk info , di xcode \b tidak dapat digunakan . untuk windows dan linux bisa , kegunaan \b ini adalah sama dengan backspace
    cin >> item; // input data item

    // Kalkulasi disini
    total = item * harga; // penghitungan banyaknya jumlah barang dikalikan dengan harga /per barang
    diskon = (item >= 10) ? 0.1 : (item >= 5) ? 0.05 : 0; // jikalau item lebih dari sama dengan 5 maka akan mendapatkan diskon sebesar 5% atau 0.05 , dan jika lebih dari sama dengan 10 maka akan mendapatkan diskon 10%
    totalWithDiskon =  total * diskon; // penghitungan harga total awal dikalikan dengan diskon yang hasilnya akan di store ke var totalWithDiskon
    hargaAkhir = total - totalWithDiskon; // penghitungan harga akhir dengan total awal dikurangi totaldiskon , total harga tidak ada koma jd pake int untuk storenya

    // setw([value])
    // setw salah satu fungsi dari library iomanip , berfungsi untuk menampilkan suatu karakter yang diberi spasi / jarak sesuai dengan isi value nya
    cout << endl
    << "   Total          : Rp. " << setw(10) << total << endl; // ouput total awal
    cout << "   Potongan harga : Rp. " << setw(10) << totalWithDiskon << endl; // output total diskon
    cout << "                   ___________________ _" << endl << endl;
    cout << "   Bayar:           Rp. " << setw(10) << hargaAkhir << endl; // output total akhir

    return 0;
}
