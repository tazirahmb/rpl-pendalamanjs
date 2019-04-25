//var

var namaVariabel = 14; //integer
var variabelKalimat = "kelas RPL 1" //string
var jenisBoolean = false; //boolean

//array : hanya 1 jenis data

//urutan di array namanya index dimulai dari 0
var bilanganAsli = [2, 3, 5, 7, 11, 13, 17]
var namaMurid = ["Gustam",
    "Rendi",
    "Zidan",
    "Vanyah",
    "Najwa",
    "Yudi",
    "Wisman",
    "orang",
    "Bobby",
    ""]
var index, i, checked;

for(i = 0; i < namaMurid.length; i++) {
    document.getElementById("namaAnak").innerHTML += namaMurid[i] + "</br>";
}

function panggilAngka() {
    index = document.getElementById("index").value;
    checked = document.getElementById("mencari").checked;

    /**
     * 
     *  == sama dengan
     *  !== tidak sama dengan
     * 
     *   -- penggabungan syarat --
     *  || atau (baru jalan kalau salah satu syarat terpenuhi)
     *  && dan (baru jalan kalau kedua syarat terpenuhi)
     * 
     */
    
    if(checked && index !== null) {
        if(index < 0 || index >= bilanganAsli.length) {
            document.getElementById("result").innerHTML = "index tidak ada";
        } else {
            document.getElementById("result").innerHTML = bilanganAsli[index];
        }
    } else {
        alert("nggak lagi nyari");
    }
}

//object
//kalau array hanya bisa menampung satu jenis data, object bisa nampung banyak data.

var profil = {
    nama: "Tazirah Marwan",
    umur: 23,
    sudahKuliah: true,
}

var pendidikanTerakhir = "";

console.log(profil.umur);

if(profil.sudahKuliah) {
    pendidikanTerakhir = "seorang sarjana";
} else {
    pendidikanTerakhir = "sedang Kuliah";
}

document.getElementById("profil").innerHTML = "nama saya " + profil.nama + ". saya berumur " + profil.umur + " tahun dan saya " + pendidikanTerakhir;