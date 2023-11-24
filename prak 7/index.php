<?php

class Orang {
    private $Nama;
    public function setNama($Nama) {
        $regex = "/^[a-zA-Z\s]+$/";
        if(!preg_match($regex, $Nama)) {
            throw new Exception("Inputan Hanya Boleh Huruf dan Spasi");
        }
        $this->Nama = $Nama;
    }
    public function getNama() {
        return $this->Nama;
    }
}

class identitas extends Orang {
    private $umur;
    private $alamat;
    private $pekerjaan;
    public function __construct($nama,$umur,$alamat,$pekerjaan) {
        parent::setNama($nama);
        $this->umur = $umur;
        $this->alamat = $alamat;
        $this->pekerjaan = $pekerjaan;
    }
    public function setUmur($umur) {
        $this->umur = $umur;
    }
    public function getUmur() {
        return $this->umur;
    }
    public function setAlamat($alamat) {
        $this->alamat = $alamat;
    }
    public function getAlamat() {
        return $this->alamat;
    }
    public function setPekerjaan($pekerjaan) {
        $this->pekerjaan = $pekerjaan;
    }
    public function getPekerjaan() {
        return $this->pekerjaan;
    }
    public function displayInfo() {
        echo "Nama: " . $this->getNama() . "<br>";
        echo "Umur: " . $this->getUmur() . "<br>";
        echo "Alamat: " . $this->getAlamat() . "<br>";
        echo "Pekerjaan: " . $this->getPekerjaan() . "<br>";
    }
    }


$Orang1 = new Identitas("Harun Abdulkarim Khafid", 20, "Belwis", "Mahasiswa");

echo "data lama:<br>";
$Orang1->displayInfo();

$Orang1->setPekerjaan("Programmer");
echo "<br>info terbaru:<br>";
$Orang1->displayInfo();
try{
    $Orang1->setNama("harun@gmail.com");
    $Orang1->displayInfo();
} catch (Exception $e) {
    echo $e->getMessage();
}
?>
