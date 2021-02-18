import React from 'react';
import { Form, FormGroup, Input, Button } from "reactstrap";
import "./logictest.css";

const luhn = () => {
    var value = document.getElementById("text").value;
    var totalEven = 0;                                                  //deklarasi total nilai pada baris genap
    var totalOdd = 0;                                                   //deklarasi total nilai pada baris ganjil
    var arr = value.slice(0, -1).split("");                             //menghapus karakter terakhir string yang berupa X dan memisahkan tiap karakter menjadi array
    for(var i = 0; i < arr.length; i++){
        if(i % 2 === 0){                                                //jika lokasi digit adalah baris ganjil 
            if(arr[i] * 2 >= 10){                                       //jika hasil perkalian pada baris ganjil lebih dari 9
                totalOdd += ((arr[i] * 2) - 9);                         //maka hasil perkalian tersebut harus dikurangi 9, kemudian melakukan penjumlahan total nilai pada baris ganjil
            } else {
                totalOdd += arr[i] * 2;                                 //kondisi jika hasil kali adalah 9 atau kurang, kemudian melakukan penjumlahan total nilai pada baris ganjil
            }
        } else {
            totalEven += parseInt(arr[i]);                              //mengambil nilai pada baris genap dan menjumlahkan totalnya
        }
    }
    var x = (10 - (totalOdd + totalEven) % 10) % 10;                    //pencarian nilai X melalui modulus 10

    if (value) {
        document.getElementById("output").innerHTML = x;
      } else {
        document.getElementById("output").innerHTML = "null value";
    }
}

const logictest = () => {
    return (
        <div className="logictest">
            <h1 className="logictest-title">Logic Test</h1>
            <br />
            <Form>
                <FormGroup>
                     <Input
                        id="text"
                        type="text"
                        name="text"
                        placeholder="input"
                        maxLength="16"
                    />
                </FormGroup>      
            </Form>
            <Button className="logictest-findX" onClick={() => luhn()}>Find X</Button>
            <h2 className="logictest-output">output:</h2>
            <h2 id="output"/>
        </div>
    )
}

export default logictest;

//original source code: https://stackoverflow.com/questions/14905766/implementing-luhn-algorithm-in-javascript