package main

import (
	"bytes"
	"encoding/base64"
	"encoding/binary"
	"fmt"
	"io/ioutil"
	// "strconv"
)

func main() {
	dataFromFile, err := ioutil.ReadFile("./img/golang_logo.png")
	// fmt.Println("file=", dataFromFile);

	st := fmt.Sprintf("%08b", []byte{137, 80})
	fmt.Println("AAAA==",st)

	// s := []byte{137,80,78,71}
	// fmt.Println("file=", string(s))

	// func stringToBin(s string) string {
	// 	res := ""
	// 	for _, c := range s {
	// 		res = fmt.Sprintf("%s%.8b", res, c)
	// 	}
	// 	return res
	// }

	// stringToBin(string(s))
	// buf, er := strconv.Atoi(string(dataFromFile))

	// if er != nil {
	// 	fmt.Println(er)
	// }

	var y int32
	err = binary.Read(bytes.NewReader(dataFromFile), binary.BigEndian, &y)
	if err != nil {
		panic(err)
	}
	// fmt.Println("res=", y)
	
	// fmt.Println("buf=", buf)

	if err != nil {
		fmt.Println(err)
	}

	var encoding string

	encoding += base64.StdEncoding.EncodeToString(dataFromFile)
	// fmt.Println("data=", encoding);

	data := []byte(encoding)
	
	e := ioutil.WriteFile("base64.txt", data, 0600)

	if e != nil {
		fmt.Println(e)
	}

	// showImage()
	// fmt.Println("data=", encoding);
}

func showImage() {
	dataFromFile, err := ioutil.ReadFile("base64.txt")

	if err != nil {
		fmt.Println(err)
	}

	decoding, e := base64.StdEncoding.DecodeString(string(dataFromFile))

	if e != nil {
		fmt.Println(e)
	}

	er := ioutil.WriteFile("base64.png", decoding, 0600)

	if er != nil {
		fmt.Println(e)
	}
	// fmt.Println(string(decoding))	
}