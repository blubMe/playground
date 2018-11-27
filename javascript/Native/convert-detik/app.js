function proses_konversi(){
    var inputDetik = parseInt(document.getElementById("input_detik").value);

    function kalkulasiJam(inputDetik){
        var Jam = Math.floor(inputDetik / 3600)
        var Menit = Math.floor((inputDetik - (Jam * 3600))/60)
        var Detik = Math.floor((inputDetik-(Jam*3600)-(Menit*60)));
        return [Jam,Menit,Detik]
    }

    var hasil = kalkulasiJam(inputDetik)
    var Jam = hasil[0]
    var Menit = hasil[1]
    var Detik = hasil[2]

    document.getElementById("outputDetik").value = Detik;
    document.getElementById("outputMenit").value = Menit;
    document.getElementById("outputJam").value = Jam;
}