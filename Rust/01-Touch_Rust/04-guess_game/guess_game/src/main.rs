use std::io; // library untuk menggunakan i/o pada code
// standart library bisa disebut std , dan io merupakan salah satu standart library

fn main() { // fn main sebagai entry point
    // println! merupakan command / macro untuk print string ke layar
    println!("Ungkap perasaan"); // print out to console guess the number
    println!("Masukkan ungkapanmu :"); // printed also

    // let = variabel
    // mut digunakan untuk membolehkan variable ( untuk dimutasi datanya )
    // Contoh muttable dan immuttable variable
    // let girls = "I love u" <== ini immutable (sama dengan const ) , tidak bisa di mutasi datanya
    // let mut girls = "I love u" <== ini muttable , bisa di mutasi datanya
    /*
        Symbol/syntax :: di new() menunjukkan bahwa new() adalah fungsi terkait dari tipe String. (Chained)
        https://www.dictio.id/t/apa-yang-dimaksud-dengan-konsep-static-pada-pemrograman-java/12468/3
    */
    // String::new() merupakan fungsi untuk mereturn data string baru
    let mut guess = String::new();

    // method .read_line , handle data dari guess. dan juga passing argumen &mut guess
    // http://blog.ilkom.unsri.ac.id/anggunia/2015/11/16/perbedaan-function-dan-procedure/
    // symbol & merupakan symbol untuk mempresentasikan sebuah refrensi , yang kali ini [&mut guess] <==[refrensi]== [let mut guess]
    // bagaimana kalo ga mau muttable ? tinggal [&guess] <==[mutabble => immutable]=[refrensi]== [let mut guess]
    // how about that expect ? , method expect digunakan untuk handle error / fail
    io::stdin().read_line(&mut guess).expect("Failed to read line");

    // itu apa jd "Your story: {} sayang kamu" ? , tidak why ?
    // kurung kurawal di rust merupakan simbol yang unik , dia digunakan untuk menjadi placeholder
    // jd misal , ("Aku sayang: {}", keputusan) {[......]} <==[dimasukkan/diubah]== (isi data)[keputusan]
    // hasilnya "Aku sayang Kamu"
    // seperti di javascript , passing dynamic data ke string menggunakan ${}. sedangkan rust hanya menggunakan {}
    println!("Your story: {}", guess);
}
