//(OBJECT PATTERN)
// deklarasi dan inisialisasi atribut
var mengulang = true;
var idHewan = [];
var hewan = {};
var choice;
let idx = 0;

//(ENKAPSULASI)
//function untuk menampung data hewan
//(ABSTRACTION)
function Hewan(paramNamehewan,paramJenishewan,paramJkelamin, paramBirth, paramId, paramBerat, paramNilai) {
  var namehewan = paramNamehewan;
  var jenishewan = paramJenishewan;
  var jkelamin = paramJkelamin;
  var birth = paramBirth;
  var id = paramId;
  var berat = paramBerat;
  var nilai = paramNilai;
  
  //START Function untuk Output hasil
  this.getName = function() {
    return namehewan;
  }

  this.getSub = function(){
    return jenishewan;
  }

   this.getJKelamin = function() {
    return jkelamin;
  }
  
  this.getId = function() {
    return id;
  }

  this.getBirth = function() {
    return birth;
  }

  this.getAge = function() {
    let year = birth.slice(birth.length - 4);
    return 2021 - year;
  }
  
  this.getBadan = function() {
    return berat;
  }
  
  this.getNilai = function() {
    return nilai;
  }
  //END

  //Function untuk update nilai
  this.setNilai = function(newNilai) {
    nilai = newNilai;
  }
}

//Program mengulang 
while (mengulang == true) {
  console.log("#### Welcome to Animal Calculator ####")
  console.log("Menu Penilaian Kesehatan Hewan");
  console.log("Silahkan pilih Menu: ")
  console.log("1. Tambah Hewan yang didata");
  console.log("2. Penilaian Kesehatan Hewan");
  console.log("3. Lihat seluruh Data Hewan");
  console.log("4. Keluar");
  choice = prompt("Masukan pilihan\t: ");
  
 
  switch(choice) {
    case '1':
      console.log("<Tambah Hewan yang didata>");
      //START proses input
      let namehewan = prompt("Input Nama Hewan\t: ");

      let jenishewan = prompt("Input Jenis Hewan\t: ")

       console.log("<=== Jenis Kelamin Hewan");
      console.log("1. Laki - Laki");
      console.log("2. Perempuan ");
      let jkelaminh = prompt("Masukan Pilihan Jenis Kelamin Hewan\t: ");
      let jkelamin;
      if (jkelaminh == '1') {
        jkelamin = "Male";
      } else if (jkelaminh == '2') {
        jkelamin = "Female";
      }

      let birth = prompt("Input Tanggal Lahir\t: ");

      let id = prompt("Input id hewan\t: ");

      console.log("<=== Data Badan Hewan");
      console.log("1. Hewan Bertubuh Besar");
      console.log("2. Hewan Bertubuh Kecil");
      let berath = prompt("Masukan Pilihan Badan Hewan\t: ");
      let berat;
      if (berath == '1') {
        berat = "Big Body";
      } else if (berath == '2') {
        berat = "Small Body";
      }
      
      //END

      
      hewan = new Hewan(namehewan,jenishewan,jkelamin, birth, id, berat);
 
      idHewan.push(hewan);
  
      console.log("\n\n");
      break;

    case '2':
      console.log("###Penilaian Kesehatan###");

      //START proses input data
      let iid = prompt("ID hewan \t: ");
      let nilai = prompt("Masukan Nilai kesehatan \t: ");

      let nilaii;
      if (nilai <= 100 && nilai >= 85) {
        nilaii = "Sehat Banget";
      
      } else if (nilai <= 84 && nilai >= 75) {
        nilaii = "Baik baik saja";
      
      } else if (nilai <= 74 && nilai >= 65) {
        nilaii = "Lumayan baik";
      
      } else if (nilai <= 64 && nilai >= 55) {
        nilaii = "Cukup sehat";

      } else if (nilai <= 54 && nilai >= 45) {
        nilaii = "Kurang sehat";

      } else if (nilai <= 44 && nilai >= 0) {
        nilaii = "Terkena Penyakit";
      
      } else {
        nilaii = ">unknown<";
  
      }


      for (let a in idHewan) {
        if (idHewan[a].getId() == iid) {
          idHewan[a].setNilai(nilaii);
        }
      }
      console.log("\n\n");
      break;

    case "3":
      //START proses output data
      for (let x in idHewan) {
        console.log(`\nHewan\: ${ idx }`);
        idx++;
        console.log(`Nama Hewan\t\t\t\t: ${ idHewan[x].getName() }`);
        console.log(`Jenis Hewan\t\t\t\t: ${ idHewan[x].getSub() }`);
        console.log(`Jenis Kelamin Hewan\t\t: ${ idHewan[x].getJKelamin() }`);
        console.log(`Tanggal Lahir Hewan\t\t: ${ idHewan[x].getBirth() }`);
        console.log(`Umur Hewan\t\t\t\t: ${ idHewan[x].getAge() }  tahun`);
        console.log(`Id Hewan\t\t\t\t: ${ idHewan[x].getId() }`);
        console.log(`Jenis Badan Hewan\t\t: ${ idHewan[x].getBadan() }`);
        console.log(`Nilai Kesehatan Hewan\t: ${ idHewan[x].getNilai() }`);

      }
      //END

      console.log("\n\n");
      break;

    case '4':
      //proses mengakhiri program
      mengulang = false;
      console.log("TerimaKasih");
      break;        

    default :
      //berjalan jika input atribut 'choice' tidak sesuai yang sudah ditentukan
      console.log("Harap Masukan Pilihan Yang Sesuai");
      break;  
  }
}
