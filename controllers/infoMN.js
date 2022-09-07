import { exec, spawn } from "child_process";

export const startMN = async (req, res) => {
  /*
  exec("lyrad &", (err, stdout, stderr) => {
    if (err) {
      console.log(`exec error: ${err}`);
      res.send(`Err = ${err}`);
      return;
    } else if (stderr) {
      console.log(`stderr = ${stderr}`);
      res.send(`Wallet già avviato`);
      return;
    } else {
      console.log(`Exec execution= MN Avviato con successo ${stdout}`);
      res.send(`Stdout = MN Avviato con successo ${stdout}`);
      return;
    }
  });
*/
  const child = spawn('lyrad');

  child.on("exit", (code, signal) => {
    console.log(`child process EXITED with code ${code} and signal ${signal}`)
    res.send(`Wallet start Succesfull`);
  })

  child.on("error", (code, signal) => {
    console.log(`child process ERROR with code ${code} and signal ${signal}`)
    res.send(`Err`);
  })

  child.on("close", (code, signal) => {
    console.log(`child process CLOSE with code ${code} and signal ${signal}`)
    res.send(`Close`);
  })
};



export const stopMN = async (req, res) => {
  exec("lyra-cli stop", (err, stdout, stderr) => {
    if (err) {
      console.log(`exec error: ${err}`);
      res.send(`Err = ${err}`);
      return;
    }

    console.log(`Exec execution: ${stdout}`);
    res.send(`Stdout = ${stdout}`);
  });
};

export const getInfoMN = async (req, res) => {
  exec("lyra-cli getinfo", (err, stdout, stderr) => {
    if (err) {
      console.log(`exec error: ${err}`);
      res.send(`Err = ${err}`);
      return;
    }

    console.log(`Exec execution: ${stdout}`);
    res.send(`Stdout = ${stdout}`);
  });
};

export const getStatusMN = async (req, res) => {
  exec("lyra-cli getmasternodestaus", (err, stdout, stderr) => {
    if (err) {
      console.log(`exec error: ${err}`);
      res.send(`Err = ${err}`);
      return;
    }

    console.log(`Exec execution: ${stdout}`);
    res.send(`Stdout = ${stdout}`);
  });
};
