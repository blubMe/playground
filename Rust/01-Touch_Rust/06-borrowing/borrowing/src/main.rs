fn main() {
    // contoh borrowing pada rust , dengan memberikan pointer & sebelum nama variable
    let a = String::from("My owner is let A");
    // mutable
    let x =  &a[0..5];
    // print! merupakan command macro untuk menampilkan data output ke layar
    // sedangkan println! sama dengan print! tetapi dia memberikan new line println = print[line]
    print!("{}",x);
}
