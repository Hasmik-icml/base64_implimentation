const fs = require("fs");
const path = require("path");

function main() {
  console.log(path.join(__dirname, "golang_logo.png"));

  // const contents = fs.readFileSync('golang_logo.png');
  // console.log(contents);

  fs.readFile(path.join(__dirname, "golang_logo.png"), function (err, buffer) {
    let bit6 = [];
    let newData = "";
    // console.log(buffer);
    console.log([...buffer]);
    console.log(1111, buffer[0].toString(2));
    console.log(1111, buffer[1].toString(2));
    console.log(2222, (buffer[0] >> 2).toString(2)); // Get 6 bit, example 10001001 > 00100010
    let new_value = (buffer[0] >> 2) << 2
    // a[0] = (a[0] >> 2) | (1 << 6);
    console.log(3333, (new_value.toString(2)));
    console.log(4444, (((buffer[0] & 0x3) << 4  | (buffer[1] >> 4) ).toString(2)));
                      //  ((data[i] & 0x3) << 4) | (data[i+1] >> 4)
                      b3 = ((data[i+1] & 0xf) << 2) | (data[i+2] >> 6)

                      // Get the last 6 bits of the third byte
                      b4 = data[i+2] & 0x3f
                  
    // let t = 80 >> 2;
    // let bits6_2 = 137 >> 6
    // console.log(44444, bits6_2.toString(2));
    // console.log(22222222222, t.toString(2));
    // console.log(3333,Buffer.from([t]));

    for (let i = 0; i < buffer.length; i++) {

      // bit6.push(0b10 << 4 | buffer[i] >> 2);

      let bits6_1 = (buffer[i] >> 2) << 2; // 6bit + 2 empaty
      // let bits6_2 = buffer[i] << 6 | buffer[i+1] >> 4
      // let bits6_3
      // let bits6_4

    }
    // console.log("bits=", bit6[1].toString(2));

    const newBuffer = Buffer.from(bit6);

    // for (let bits of newData) {
    //   bit6.push(newData.slice(0, 6));
    //   newData = newData.slice(6);
    //   if (newData.length === 0) break;
    // }

    // console.log("newBuffer", Buffer.from(bit6));

    fs.writeFile("file.png", newBuffer, (err) => {
      if (err) {
        throw err;
      }

      console.log("Data has been written to file successfully.");
    });

    fs.writeFile("file.txt", JSON.stringify(bit6), (err) => {
      if (err) {
        throw err;
      }
      console.log("Data has been written to file successfully.");
    });

    // console.log(Number(newData));
    // console.log("arrByte=", binaryData);

    if (err) console.log(err);
    // console.log(buffer);
    // let arr = Array.from(buffer.toJSON().data)
    let arr1 = [...buffer];
    // console.log("arr1=",   arr1);
    let joind = arr1.join("");
    // console.log("joind=", joind);

    // console.log("buffer", Buffer.from(joind));

    // for (let i = 0; i < joind.length; i++) {
    // console.log(toBytesInt32(arr[i]));
    // console.log(joind[i]);
    // }
    console.log(1111, String(buffer));
  });
}

// console.log(toBytesInt32(137));
main();