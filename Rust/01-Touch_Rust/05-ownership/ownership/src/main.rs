fn main() {
    let x = String::from("Ar you mai owner ?");
    // ini merupakan contoh yang buruk , karena string "Ar you mai owner" berpindah owner
    // x =[ownernya] => [value] , sedangkan jika kita pakai x = a
    // x => [tidak bisa , kamu bukan lagi ownernya] (XXX) || [value] <=[owner baru]= a
    let a = x;

    // lebih baik kita gunakan .clone() , berguna untuk menduplikat data / object dari variable yang diinginkan
    // dengan ini kita bisa menghindari pemindahan ownership
    // tetapi kenapa kok ga kita clone dari x ? akan terjadi error karena x bukan lagi pemilik , pemilik barunya adalah a [HOHOOH SUKURIN :D]
    let a_clone = a.clone();

    println!("{}",a_clone);
}
