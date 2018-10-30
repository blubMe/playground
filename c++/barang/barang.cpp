/*
 *  Fahmi irsyad khairi
 */

#include <iostream> // merupakan header c++ yang digunakan unutk input output pada c++ , kepanjangan iostream adalah input output stream
#include <iomanip> // merupakan header c++ yang digunakan untuk memanipulasi output pada layar , input output manipulation
#include <string> // merupakan header c++ yang digunakan untuk menambahkan fitur var string

// using namespace std adalah perintah yang digunakan untuk mendeklarasikan atau memberitahukan kepada kompiler kalo kita bakal menggunakan semua fungsi/file yang terdapat dalam namespace std
// jika kita sudah memakai using namespace std maka kita tidak perlu lagi menggunakan std:: lagi.

using namespace std;

int main(){
	const int MAX_SIZE = 50; // inisialsasi variable untuk MAX_SIZE , digunakan untuk data max array nantinya
    int counter; // digunakan untuk counting data input pada looping

	string nama_barang[MAX_SIZE];	// digunakan untuk menyimpan nama barang dan juga diberikan maksimal data array sebanyak nilai MAX_SIZE
	int    harga_barang[MAX_SIZE];	// digunakan untuk menyimpan harga barang dan juga diberikan maksimal data array sebanyak nilai MAX_SIZE
    int jumlah_data_barang; // digunakan untuk menyimpan data hasil counting dari counter
    int pilihan_menu; // variable untuk menyimpang data input pada pemilihan menu

while(1){ // while disini hanya digunakan agar menu dapat dipanggil ulang , 1 pada while() digunakan untuk mengakal akali si perulangan agar bernilai true
    // menu
    cout << "MENU\n";
    cout << "[1] Tambah Data\n"; // pilihan pertama
    cout << "[2] Lihat Data\n"; // pilihan kedua
    cout << "[0] Exit\n"; // pilihan ketiga

    cout << "Masukkan Pilihan : "; // print pada layar
    cin >> pilihan_menu; // disini data dari input akan di masukkan ke var pilihan menu, dan selanjutkan akan berjalan ke bawah

    // jika data pilihan_menu adalah 1 maka run statement di bawah
    if(pilihan_menu == 1){
        // check pada counter apakah nilai nya lebih dari 0 , 0 disini dipakai untuk indexing
        counter > 0 ? jumlah_data_barang = counter : jumlah_data_barang = 0; // jika iya maka data dari counter di berikan ke var jumlah_data_barang , jika tidak maka jumlah_data di isi dengan 0

        // cin.get() digunakan untuk pausing , sama seperti system("pause") supaya tidak langsung keluar / end program
        cin.get();
        for(int i = jumlah_data_barang; i <= MAX_SIZE; ++i){ // perulangan untuk menghitung berapa data yang masuk dan apakah melibihi si MAX_SIZE / 50 data
            string nama_barang_temporary; // inisialisasi variable string untuk menampung nama barang sementara
            string harga_barang_temporary; // inisialisasi variable string untuk menampung harga barang sementara

            system("cls"); // system cls untuk menghapus tulisan ato data pada layar, untuk mac dan linux gunakan "cls" tetapi untuk windows gunakan "cls"
            // digunakan agar data diatasnya bisa dihapus
            cout << "Nama barang : "; // print out Nama barang : dilayar
            getline(cin,nama_barang_temporary); // fungsi untuk memasukkan data input yang berupa string , getline secara otomatis mengerti jika yang diinputkan berisi spasi
            // data dari input akan dimasukkan ke nama_barang_temporary
            if(nama_barang_temporary == ""){ // checking jika si user mau menyudahi input barang , dan nama dari barang kosong maka langsung break / keluar dari perulangan
                break;
            } // jika tidak maka lanjutkan
            nama_barang[i] = nama_barang_temporary; // data nama barang yang sudah di store ke nama_barang_temporary selanjutkan di pindahkan ke variable nama_barang agar tidak hilang nantinya dan tidak lupa untuk menambahkan [i] yang artinya , pada array ke berapa nama tersebut disimpan , i merupakan data count yang digunakan untuk menghitung sudah berapa banyak data yang sudah di buat

            cout << "Harga barang : ";
            getline(cin,harga_barang_temporary); // fungsi untuk memasukkan data input yang berupa string, data dari input akan dimasukkan ke harga_barang_temporary
            harga_barang[i] = stoi(harga_barang_temporary); // data harga barang yang sudah di store ke harga_barang_temporary selanjutkan di pindahkan ke variable harga_barang agar tidak hilang nantinya dan tidak lupa untuk menambahkan [i] yang artinya , pada array ke berapa nama tersebut disimpan , i merupakan data count yang digunakan untuk menghitung sudah berapa banyak data yang sudah di buat , tetapi sebelum di store kan ke harga barang. data tsb di convert menajadi int dulu karena getline awalanya hanya support string , diconvert menggunakan fungsi stoi
            counter++; // setelah proses diatas selesai, selanjutnya counter akan bertambah sebanyak 1
        }

    } else if(pilihan_menu == 2){ // jika data dari pilihan_menu adalah 2 maka jalankan statement dibawah
        if(counter > 0){ // checking jika counter lebih dari 0 , maka dapat dipastikan ada data
            system("cls"); // clear layar dulu
            cin.get();
            // tampilkan menu dibawah
            cout << "\n-------------------------\n";
            cout << setw(3) << "NO" << setw(15) << "NAMA" << setw(7) << "HARGA";
            cout << "\n-------------------------\n";
            for(int i = 0; i != counter; ++i){ // perulangan untuk menampilkan data ke output layar
            // check awalah inisialisasi adalah 0 , dan jika i tidak sama dengan isi si counter maka , i bertambah
            // dia akan selesai looping sama data i sama dengan data counter
                cout << setw(3)  << i + 1; // karena awal adalah 0 , maka ditambah 1 , biar nanti dimulai dari satu
                cout << setw(15) << nama_barang[i]; // output nama barang dengan index keberapa
                cout << setw(7)  << harga_barang[i]; // ouput harga barang dengan index keberapa
                cout << endl; // diberikan line / enter
            }
            cout << "-------------------------\n"; //  penutup garis 
            cin.get(); // kasih cin.get() supaya user bisa melihat data sebelumnya / list data
        } else { // checking jika if td false , maka jalankan else
            cin.get();
            cout << "Data masih kosong..."; // output data masih kosong
            cin.get();
        }
    } else if(pilihan_menu == 0){ // jika data pilihan_menu adalah 0 maka jalankan statment dibawah
        break; // break , artinya keluar dari perulangan , dan perulangan disini adlah while itu td
        // keluar dan meluncur ke return 0
    } else { // jika semua percabangan bernilai false maka jalankan sisanya yaitu else
        system("cls");
        cout << "[ pilihan yang ada inputkan tidak tersedia ]" << endl;
        cout << "" << endl;
    }
}
    cin.get();
    return 0;
}